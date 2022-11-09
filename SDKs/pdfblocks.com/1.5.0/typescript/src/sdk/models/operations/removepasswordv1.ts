import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class RemovePasswordV1RequestBodyFile extends SpeakeasyBase {
  @Metadata({ data: "multipart_form, content=true" })
  content: Uint8Array;

  @Metadata({ data: "multipart_form, name=file" })
  file: string;
}


export class RemovePasswordV1RequestBody extends SpeakeasyBase {
  @Metadata({ data: "multipart_form, file=true" })
  file: RemovePasswordV1RequestBodyFile;

  @Metadata({ data: "multipart_form, name=password" })
  password: string;
}


export class RemovePasswordV1Request extends SpeakeasyBase {
  @Metadata({ data: "request, media_type=multipart/form-data" })
  request: RemovePasswordV1RequestBody;
}


export class RemovePasswordV14XxApplicationProblemPlusJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=errors" })
  errors?: Map<string, any>;

  @Metadata({ data: "json, name=status" })
  status?: number;

  @Metadata({ data: "json, name=title" })
  title?: string;

  @Metadata({ data: "json, name=type" })
  type?: string;
}


export class RemovePasswordV1Response extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  removePasswordV1200ApplicationPdfBinaryString?: Uint8Array;

  @Metadata()
  removePasswordV14XxApplicationProblemPlusJsonObject?: RemovePasswordV14XxApplicationProblemPlusJson;
}
