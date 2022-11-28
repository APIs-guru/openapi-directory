import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class MergeDocumentsV1RequestBodyFile extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "multipart_form, content=true" })
  content: Uint8Array;

  @SpeakeasyMetadata({ data: "multipart_form, name=file" })
  file: string;
}


export class MergeDocumentsV1RequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "multipart_form, name=file", elemType: MergeDocumentsV1RequestBodyFile })
  file?: MergeDocumentsV1RequestBodyFile[];
}


export class MergeDocumentsV14XxApplicationProblemPlusJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=errors" })
  errors?: Map<string, any>;

  @SpeakeasyMetadata({ data: "json, name=status" })
  status?: number;

  @SpeakeasyMetadata({ data: "json, name=title" })
  title?: string;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type?: string;
}


export class MergeDocumentsV1Request extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "request, media_type=multipart/form-data" })
  request: MergeDocumentsV1RequestBody;
}


export class MergeDocumentsV1Response extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  mergeDocumentsV1200ApplicationPdfBinaryString?: Uint8Array;

  @SpeakeasyMetadata()
  mergeDocumentsV14XxApplicationProblemPlusJsonObject?: MergeDocumentsV14XxApplicationProblemPlusJson;
}
