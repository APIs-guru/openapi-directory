import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class UploadApiSpecificationHeaders extends SpeakeasyBase {
  @Metadata({ data: "header, style=simple;explode=false;name=x-readme-version" })
  xReadmeVersion: string;
}


export class UploadApiSpecificationRequestBodySpec extends SpeakeasyBase {
  @Metadata({ data: "multipart_form, content=true" })
  content: Uint8Array;

  @Metadata({ data: "multipart_form, name=spec" })
  spec: string;
}


export class UploadApiSpecificationRequestBody extends SpeakeasyBase {
  @Metadata({ data: "multipart_form, file=true" })
  spec?: UploadApiSpecificationRequestBodySpec;
}


export class UploadApiSpecificationSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=http;subtype=basic" })
  apiKey: shared.SchemeApiKey;
}


export class UploadApiSpecificationRequest extends SpeakeasyBase {
  @Metadata()
  headers: UploadApiSpecificationHeaders;

  @Metadata({ data: "request, media_type=multipart/form-data" })
  request: UploadApiSpecificationRequestBody;

  @Metadata()
  security: UploadApiSpecificationSecurity;
}


export class UploadApiSpecificationResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
