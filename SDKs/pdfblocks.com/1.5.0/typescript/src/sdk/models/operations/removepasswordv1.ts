import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class RemovePasswordV1RequestBodyFile extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "multipart_form, content=true" })
  content: Uint8Array;

  @SpeakeasyMetadata({ data: "multipart_form, name=file" })
  file: string;
}


export class RemovePasswordV1RequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "multipart_form, file=true" })
  file: RemovePasswordV1RequestBodyFile;

  @SpeakeasyMetadata({ data: "multipart_form, name=password" })
  password: string;
}


export class RemovePasswordV14XxApplicationProblemPlusJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=errors" })
  errors?: Map<string, any>;

  @SpeakeasyMetadata({ data: "json, name=status" })
  status?: number;

  @SpeakeasyMetadata({ data: "json, name=title" })
  title?: string;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type?: string;
}


export class RemovePasswordV1Request extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "request, media_type=multipart/form-data" })
  request: RemovePasswordV1RequestBody;
}


export class RemovePasswordV1Response extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  removePasswordV1200ApplicationPdfBinaryString?: Uint8Array;

  @SpeakeasyMetadata()
  removePasswordV14XxApplicationProblemPlusJsonObject?: RemovePasswordV14XxApplicationProblemPlusJson;
}
