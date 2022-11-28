import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class AddImageWatermarkV1RequestBodyFile extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "multipart_form, content=true" })
  content: Uint8Array;

  @SpeakeasyMetadata({ data: "multipart_form, name=file" })
  file: string;
}


export class AddImageWatermarkV1RequestBodyImage extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "multipart_form, content=true" })
  content: Uint8Array;

  @SpeakeasyMetadata({ data: "multipart_form, name=image" })
  image: string;
}


export class AddImageWatermarkV1RequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "multipart_form, file=true" })
  file: AddImageWatermarkV1RequestBodyFile;

  @SpeakeasyMetadata({ data: "multipart_form, file=true" })
  image: AddImageWatermarkV1RequestBodyImage;

  @SpeakeasyMetadata({ data: "multipart_form, name=margin" })
  margin?: number;

  @SpeakeasyMetadata({ data: "multipart_form, name=transparency" })
  transparency?: number;
}


export class AddImageWatermarkV14XxApplicationProblemPlusJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=errors" })
  errors?: Map<string, any>;

  @SpeakeasyMetadata({ data: "json, name=status" })
  status?: number;

  @SpeakeasyMetadata({ data: "json, name=title" })
  title?: string;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type?: string;
}


export class AddImageWatermarkV1Request extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "request, media_type=multipart/form-data" })
  request: AddImageWatermarkV1RequestBody;
}


export class AddImageWatermarkV1Response extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  addImageWatermarkV1200ApplicationPdfBinaryString?: Uint8Array;

  @SpeakeasyMetadata()
  addImageWatermarkV14XxApplicationProblemPlusJsonObject?: AddImageWatermarkV14XxApplicationProblemPlusJson;
}
