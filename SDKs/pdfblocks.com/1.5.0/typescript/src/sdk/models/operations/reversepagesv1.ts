import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class ReversePagesV1RequestBodyFile extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "multipart_form, content=true" })
  content: Uint8Array;

  @SpeakeasyMetadata({ data: "multipart_form, name=file" })
  file: string;
}


export class ReversePagesV1RequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "multipart_form, file=true" })
  file: ReversePagesV1RequestBodyFile;
}


export class ReversePagesV14XxApplicationProblemPlusJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=errors" })
  errors?: Map<string, any>;

  @SpeakeasyMetadata({ data: "json, name=status" })
  status?: number;

  @SpeakeasyMetadata({ data: "json, name=title" })
  title?: string;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type?: string;
}


export class ReversePagesV1Request extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "request, media_type=multipart/form-data" })
  request: ReversePagesV1RequestBody;
}


export class ReversePagesV1Response extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  reversePagesV1200ApplicationPdfBinaryString?: Uint8Array;

  @SpeakeasyMetadata()
  reversePagesV14XxApplicationProblemPlusJsonObject?: ReversePagesV14XxApplicationProblemPlusJson;
}
