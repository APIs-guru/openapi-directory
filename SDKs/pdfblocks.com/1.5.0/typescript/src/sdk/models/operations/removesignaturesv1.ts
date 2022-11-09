import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class RemoveSignaturesV1RequestBodyFile extends SpeakeasyBase {
  @Metadata({ data: "multipart_form, content=true" })
  content: Uint8Array;

  @Metadata({ data: "multipart_form, name=file" })
  file: string;
}


export class RemoveSignaturesV1RequestBody extends SpeakeasyBase {
  @Metadata({ data: "multipart_form, file=true" })
  file: RemoveSignaturesV1RequestBodyFile;
}


export class RemoveSignaturesV1Request extends SpeakeasyBase {
  @Metadata({ data: "request, media_type=multipart/form-data" })
  request: RemoveSignaturesV1RequestBody;
}


export class RemoveSignaturesV14XxApplicationProblemPlusJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=errors" })
  errors?: Map<string, any>;

  @Metadata({ data: "json, name=status" })
  status?: number;

  @Metadata({ data: "json, name=title" })
  title?: string;

  @Metadata({ data: "json, name=type" })
  type?: string;
}


export class RemoveSignaturesV1Response extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  removeSignaturesV1200ApplicationPdfBinaryString?: Uint8Array;

  @Metadata()
  removeSignaturesV14XxApplicationProblemPlusJsonObject?: RemoveSignaturesV14XxApplicationProblemPlusJson;
}
