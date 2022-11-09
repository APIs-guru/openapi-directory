import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class RemoveRestrictionsV1RequestBodyFile extends SpeakeasyBase {
  @Metadata({ data: "multipart_form, content=true" })
  content: Uint8Array;

  @Metadata({ data: "multipart_form, name=file" })
  file: string;
}


export class RemoveRestrictionsV1RequestBody extends SpeakeasyBase {
  @Metadata({ data: "multipart_form, file=true" })
  file: RemoveRestrictionsV1RequestBodyFile;
}


export class RemoveRestrictionsV1Request extends SpeakeasyBase {
  @Metadata({ data: "request, media_type=multipart/form-data" })
  request: RemoveRestrictionsV1RequestBody;
}


export class RemoveRestrictionsV14XxApplicationProblemPlusJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=errors" })
  errors?: Map<string, any>;

  @Metadata({ data: "json, name=status" })
  status?: number;

  @Metadata({ data: "json, name=title" })
  title?: string;

  @Metadata({ data: "json, name=type" })
  type?: string;
}


export class RemoveRestrictionsV1Response extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  removeRestrictionsV1200ApplicationPdfBinaryString?: Uint8Array;

  @Metadata()
  removeRestrictionsV14XxApplicationProblemPlusJsonObject?: RemoveRestrictionsV14XxApplicationProblemPlusJson;
}
