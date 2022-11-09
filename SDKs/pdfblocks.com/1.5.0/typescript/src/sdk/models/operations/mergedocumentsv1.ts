import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class MergeDocumentsV1RequestBodyFile extends SpeakeasyBase {
  @Metadata({ data: "multipart_form, content=true" })
  content: Uint8Array;

  @Metadata({ data: "multipart_form, name=file" })
  file: string;
}


export class MergeDocumentsV1RequestBody extends SpeakeasyBase {
  @Metadata({ data: "multipart_form, name=file", elemType: operations.MergeDocumentsV1RequestBodyFile })
  file?: MergeDocumentsV1RequestBodyFile[];
}


export class MergeDocumentsV1Request extends SpeakeasyBase {
  @Metadata({ data: "request, media_type=multipart/form-data" })
  request: MergeDocumentsV1RequestBody;
}


export class MergeDocumentsV14XxApplicationProblemPlusJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=errors" })
  errors?: Map<string, any>;

  @Metadata({ data: "json, name=status" })
  status?: number;

  @Metadata({ data: "json, name=title" })
  title?: string;

  @Metadata({ data: "json, name=type" })
  type?: string;
}


export class MergeDocumentsV1Response extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  mergeDocumentsV1200ApplicationPdfBinaryString?: Uint8Array;

  @Metadata()
  mergeDocumentsV14XxApplicationProblemPlusJsonObject?: MergeDocumentsV14XxApplicationProblemPlusJson;
}
