import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class ExtractPagesV1RequestBodyFile extends SpeakeasyBase {
  @Metadata({ data: "multipart_form, content=true" })
  content: Uint8Array;

  @Metadata({ data: "multipart_form, name=file" })
  file: string;
}


export class ExtractPagesV1RequestBody extends SpeakeasyBase {
  @Metadata({ data: "multipart_form, file=true" })
  file: ExtractPagesV1RequestBodyFile;

  @Metadata({ data: "multipart_form, name=first_page" })
  firstPage?: number;

  @Metadata({ data: "multipart_form, name=last_page" })
  lastPage?: number;
}


export class ExtractPagesV1Request extends SpeakeasyBase {
  @Metadata({ data: "request, media_type=multipart/form-data" })
  request: ExtractPagesV1RequestBody;
}


export class ExtractPagesV14XxApplicationProblemPlusJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=errors" })
  errors?: Map<string, any>;

  @Metadata({ data: "json, name=status" })
  status?: number;

  @Metadata({ data: "json, name=title" })
  title?: string;

  @Metadata({ data: "json, name=type" })
  type?: string;
}


export class ExtractPagesV1Response extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  extractPagesV1200ApplicationPdfBinaryString?: Uint8Array;

  @Metadata()
  extractPagesV14XxApplicationProblemPlusJsonObject?: ExtractPagesV14XxApplicationProblemPlusJson;
}
