import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class RemoveSignaturesV1RequestBodyFile extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "multipart_form, content=true" })
  content: Uint8Array;

  @SpeakeasyMetadata({ data: "multipart_form, name=file" })
  file: string;
}


export class RemoveSignaturesV1RequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "multipart_form, file=true" })
  file: RemoveSignaturesV1RequestBodyFile;
}


export class RemoveSignaturesV14XxApplicationProblemPlusJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=errors" })
  errors?: Map<string, any>;

  @SpeakeasyMetadata({ data: "json, name=status" })
  status?: number;

  @SpeakeasyMetadata({ data: "json, name=title" })
  title?: string;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type?: string;
}


export class RemoveSignaturesV1Request extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "request, media_type=multipart/form-data" })
  request: RemoveSignaturesV1RequestBody;
}


export class RemoveSignaturesV1Response extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  removeSignaturesV1200ApplicationPdfBinaryString?: Uint8Array;

  @SpeakeasyMetadata()
  removeSignaturesV14XxApplicationProblemPlusJsonObject?: RemoveSignaturesV14XxApplicationProblemPlusJson;
}
