import FormData from "form-data";
import { createReadStream, writeFileSync } from "fs";
import { join } from "path";
import qs from "qs";

const requestMetadataKey = "request";
const mpFormMetadataKey = "multipart_form";

export function SerializeRequestBody(request: any): [object, any] {
  const fieldNames: string[] = Object.getOwnPropertyNames(request);
  let [requestHeaders, requestBody]: [object, any] = [{}, {}];
  fieldNames.forEach((fname) => {
    const requestAnn: string = Reflect.getMetadata(
      requestMetadataKey,
      request,
      fname
    );
    if (requestAnn == null) return;
    const requestDecorator: RequestDecorator =
      ParseRequestDecorator(requestAnn);
    switch (requestDecorator.MediaType) {
      case "multipart/form-data":
      case "multipart/mixed":
        requestBody = EncodeMultipartFormData(request[fname]);
        requestHeaders = (requestBody as FormData).getHeaders();
        break;
      case "application/x-www-form-urlencoded":
        [requestHeaders, requestBody] = [
          { "Content-Type": `${requestDecorator.MediaType}` },
          qs.stringify({ ...request[fname] }),
        ];
        break;
      case "application/json":
      case "text/json":
      default:
        [requestHeaders, requestBody] = [
          { "Content-Type": `${requestDecorator.MediaType}` },
          { ...request[fname] },
        ];
    }
  });
  return [requestHeaders, requestBody];
}

function EncodeMultipartFormData(form: any): FormData {
  const formData: FormData = new FormData();
  const fieldNames: string[] = Object.getOwnPropertyNames(form);
  fieldNames.forEach((fname) => {
    const mpFormAnn: string = Reflect.getMetadata(
      mpFormMetadataKey,
      form,
      fname
    );
    if (mpFormAnn == null) return;
    const mpFormDecorator: MultipartFormDecorator =
      ParseMultipartFormDecorator(mpFormAnn);
    if (mpFormDecorator.File)
      return EncodeMultipartFormDataFile(formData, form[fname]);
    else if (mpFormDecorator.JSON) {
      formData.append(mpFormDecorator.Name, { ...form[fname] });
    } else {
      if (Array.isArray(form[fname])) {
        form[fname].forEach((val: any) => {
          formData.append(mpFormDecorator.Name + "[]", JSON.stringify(val));
        });
      } else {
        formData.append(mpFormDecorator.Name, JSON.stringify(form[fname]));
      }
    }
  });
  return formData;
}

function EncodeMultipartFormDataFile(formData: FormData, file: any): FormData {
  if (typeof file !== "object" || Array.isArray(file) || file == null) {
    throw new Error("invalid type for multipart/form-data file");
  }
  const fieldNames: string[] = Object.getOwnPropertyNames(file);
  let content: any = null;
  let fileName = "";
  let mpFormDecoratorName = "";

  fieldNames.forEach((fname) => {
    const mpFormAnn: string = Reflect.getMetadata(
      mpFormMetadataKey,
      file,
      fname
    );
    if (mpFormAnn == null) return;
    const mpFormDecorator: MultipartFormDecorator =
      ParseMultipartFormDecorator(mpFormAnn);
    if (!mpFormDecorator.Content && mpFormDecorator.Name == "") return;
    if (mpFormDecorator.Content) content = file[fname];
    else {
      mpFormDecoratorName = mpFormDecorator.Name;
      fileName = file[fname];
    }
  });

  if (mpFormDecoratorName === "" || fileName === "" || content == null)
    throw new Error("invalid multipart/form-data file");
  writeFileSync(join(__dirname, fileName), content, {
    flag: "w",
  });
  formData.append(
    mpFormDecoratorName,
    createReadStream(join(__dirname, fileName))
  );
  return formData;
}

function ParseMultipartFormDecorator(
  mpFormAnn: string
): MultipartFormDecorator {
  // example "name=file"
  const mpFormDecorator: MultipartFormDecorator = new MultipartFormDecorator(
    false,
    false,
    false,
    ""
  );
  mpFormAnn.split(";").forEach((mpFormAnnPart) => {
    const [mpFormKey, mpFormVal]: string[] = mpFormAnnPart.split("=");
    switch (mpFormKey) {
      case "file":
        mpFormDecorator.File = mpFormVal == "true";
        break;
      case "content":
        mpFormDecorator.Content = mpFormVal == "true";
        break;
      case "name":
        mpFormDecorator.Name = mpFormVal;
        break;
      case "json":
        mpFormDecorator.JSON = mpFormVal == "true";
    }
  });

  return mpFormDecorator;
}

class MultipartFormDecorator {
  File: boolean;
  Content: boolean;
  JSON: boolean;
  Name: string;
  constructor(File: boolean, Content: boolean, JSON: boolean, Name: string) {
    this.File = File;
    this.Content = Content;
    this.JSON = JSON;
    this.Name = Name;
  }
}

function ParseRequestDecorator(requestAnn: string): RequestDecorator {
  // example "media_type=multipart/form-data"
  const requestDecorator: RequestDecorator = new RequestDecorator(
    "application/octet-stream"
  );
  const [mediaTypeKey, mediaTypeVal]: string[] = requestAnn.split("=");
  if (mediaTypeKey === "media_type") requestDecorator.MediaType = mediaTypeVal;
  return requestDecorator;
}

class RequestDecorator {
  MediaType: string;
  constructor(MediaType: string) {
    this.MediaType = MediaType;
  }
}
