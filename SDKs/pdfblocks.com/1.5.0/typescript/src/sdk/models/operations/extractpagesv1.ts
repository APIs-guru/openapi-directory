import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class ExtractPagesV1RequestBodyFile extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "multipart_form, content=true" })
  content: Uint8Array;

  @SpeakeasyMetadata({ data: "multipart_form, name=file" })
  file: string;
}


export class ExtractPagesV1RequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "multipart_form, file=true" })
  file: ExtractPagesV1RequestBodyFile;

  @SpeakeasyMetadata({ data: "multipart_form, name=first_page" })
  firstPage?: number;

  @SpeakeasyMetadata({ data: "multipart_form, name=last_page" })
  lastPage?: number;
}


export class ExtractPagesV14XxApplicationProblemPlusJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=errors" })
  errors?: Map<string, any>;

  @SpeakeasyMetadata({ data: "json, name=status" })
  status?: number;

  @SpeakeasyMetadata({ data: "json, name=title" })
  title?: string;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type?: string;
}


export class ExtractPagesV1Request extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "request, media_type=multipart/form-data" })
  request: ExtractPagesV1RequestBody;
}


export class ExtractPagesV1Response extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  extractPagesV1200ApplicationPdfBinaryString?: Uint8Array;

  @SpeakeasyMetadata()
  extractPagesV14XxApplicationProblemPlusJsonObject?: ExtractPagesV14XxApplicationProblemPlusJson;
}
