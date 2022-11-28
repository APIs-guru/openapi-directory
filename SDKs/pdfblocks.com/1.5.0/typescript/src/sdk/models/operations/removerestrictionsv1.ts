import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class RemoveRestrictionsV1RequestBodyFile extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "multipart_form, content=true" })
  content: Uint8Array;

  @SpeakeasyMetadata({ data: "multipart_form, name=file" })
  file: string;
}


export class RemoveRestrictionsV1RequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "multipart_form, file=true" })
  file: RemoveRestrictionsV1RequestBodyFile;
}


export class RemoveRestrictionsV14XxApplicationProblemPlusJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=errors" })
  errors?: Map<string, any>;

  @SpeakeasyMetadata({ data: "json, name=status" })
  status?: number;

  @SpeakeasyMetadata({ data: "json, name=title" })
  title?: string;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type?: string;
}


export class RemoveRestrictionsV1Request extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "request, media_type=multipart/form-data" })
  request: RemoveRestrictionsV1RequestBody;
}


export class RemoveRestrictionsV1Response extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  removeRestrictionsV1200ApplicationPdfBinaryString?: Uint8Array;

  @SpeakeasyMetadata()
  removeRestrictionsV14XxApplicationProblemPlusJsonObject?: RemoveRestrictionsV14XxApplicationProblemPlusJson;
}
