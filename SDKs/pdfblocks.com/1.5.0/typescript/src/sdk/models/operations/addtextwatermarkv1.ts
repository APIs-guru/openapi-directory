import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum AddTextWatermarkV1RequestBodyColorEnum {
    Red = "Red",
    Blue = "Blue",
    Gray = "Gray",
    Black = "Black"
}


export class AddTextWatermarkV1RequestBodyFile extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "multipart_form, content=true" })
  content: Uint8Array;

  @SpeakeasyMetadata({ data: "multipart_form, name=file" })
  file: string;
}


export class AddTextWatermarkV1RequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "multipart_form, name=color" })
  color?: AddTextWatermarkV1RequestBodyColorEnum;

  @SpeakeasyMetadata({ data: "multipart_form, file=true" })
  file: AddTextWatermarkV1RequestBodyFile;

  @SpeakeasyMetadata({ data: "multipart_form, name=line_1" })
  line1: string;

  @SpeakeasyMetadata({ data: "multipart_form, name=line_2" })
  line2?: string;

  @SpeakeasyMetadata({ data: "multipart_form, name=line_3" })
  line3?: string;

  @SpeakeasyMetadata({ data: "multipart_form, name=margin" })
  margin?: number;

  @SpeakeasyMetadata({ data: "multipart_form, name=template" })
  template?: number;

  @SpeakeasyMetadata({ data: "multipart_form, name=transparency" })
  transparency?: number;
}


export class AddTextWatermarkV14XxApplicationProblemPlusJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=errors" })
  errors?: Map<string, any>;

  @SpeakeasyMetadata({ data: "json, name=status" })
  status?: number;

  @SpeakeasyMetadata({ data: "json, name=title" })
  title?: string;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type?: string;
}


export class AddTextWatermarkV1Request extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "request, media_type=multipart/form-data" })
  request: AddTextWatermarkV1RequestBody;
}


export class AddTextWatermarkV1Response extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  addTextWatermarkV1200ApplicationPdfBinaryString?: Uint8Array;

  @SpeakeasyMetadata()
  addTextWatermarkV14XxApplicationProblemPlusJsonObject?: AddTextWatermarkV14XxApplicationProblemPlusJson;
}
