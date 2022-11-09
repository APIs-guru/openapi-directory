import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum AddTextWatermarkV1RequestBodyColorEnum {
    Red = "Red"
,    Blue = "Blue"
,    Gray = "Gray"
,    Black = "Black"
}


export class AddTextWatermarkV1RequestBodyFile extends SpeakeasyBase {
  @Metadata({ data: "multipart_form, content=true" })
  content: Uint8Array;

  @Metadata({ data: "multipart_form, name=file" })
  file: string;
}


export class AddTextWatermarkV1RequestBody extends SpeakeasyBase {
  @Metadata({ data: "multipart_form, name=color" })
  color?: AddTextWatermarkV1RequestBodyColorEnum;

  @Metadata({ data: "multipart_form, file=true" })
  file: AddTextWatermarkV1RequestBodyFile;

  @Metadata({ data: "multipart_form, name=line_1" })
  line1: string;

  @Metadata({ data: "multipart_form, name=line_2" })
  line2?: string;

  @Metadata({ data: "multipart_form, name=line_3" })
  line3?: string;

  @Metadata({ data: "multipart_form, name=margin" })
  margin?: number;

  @Metadata({ data: "multipart_form, name=template" })
  template?: number;

  @Metadata({ data: "multipart_form, name=transparency" })
  transparency?: number;
}


export class AddTextWatermarkV1Request extends SpeakeasyBase {
  @Metadata({ data: "request, media_type=multipart/form-data" })
  request: AddTextWatermarkV1RequestBody;
}


export class AddTextWatermarkV14XxApplicationProblemPlusJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=errors" })
  errors?: Map<string, any>;

  @Metadata({ data: "json, name=status" })
  status?: number;

  @Metadata({ data: "json, name=title" })
  title?: string;

  @Metadata({ data: "json, name=type" })
  type?: string;
}


export class AddTextWatermarkV1Response extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  addTextWatermarkV1200ApplicationPdfBinaryString?: Uint8Array;

  @Metadata()
  addTextWatermarkV14XxApplicationProblemPlusJsonObject?: AddTextWatermarkV14XxApplicationProblemPlusJson;
}
