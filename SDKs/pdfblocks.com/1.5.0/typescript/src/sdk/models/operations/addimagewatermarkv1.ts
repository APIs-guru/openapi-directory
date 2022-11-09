import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class AddImageWatermarkV1RequestBodyFile extends SpeakeasyBase {
  @Metadata({ data: "multipart_form, content=true" })
  content: Uint8Array;

  @Metadata({ data: "multipart_form, name=file" })
  file: string;
}


export class AddImageWatermarkV1RequestBodyImage extends SpeakeasyBase {
  @Metadata({ data: "multipart_form, content=true" })
  content: Uint8Array;

  @Metadata({ data: "multipart_form, name=image" })
  image: string;
}


export class AddImageWatermarkV1RequestBody extends SpeakeasyBase {
  @Metadata({ data: "multipart_form, file=true" })
  file: AddImageWatermarkV1RequestBodyFile;

  @Metadata({ data: "multipart_form, file=true" })
  image: AddImageWatermarkV1RequestBodyImage;

  @Metadata({ data: "multipart_form, name=margin" })
  margin?: number;

  @Metadata({ data: "multipart_form, name=transparency" })
  transparency?: number;
}


export class AddImageWatermarkV1Request extends SpeakeasyBase {
  @Metadata({ data: "request, media_type=multipart/form-data" })
  request: AddImageWatermarkV1RequestBody;
}


export class AddImageWatermarkV14XxApplicationProblemPlusJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=errors" })
  errors?: Map<string, any>;

  @Metadata({ data: "json, name=status" })
  status?: number;

  @Metadata({ data: "json, name=title" })
  title?: string;

  @Metadata({ data: "json, name=type" })
  type?: string;
}


export class AddImageWatermarkV1Response extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  addImageWatermarkV1200ApplicationPdfBinaryString?: Uint8Array;

  @Metadata()
  addImageWatermarkV14XxApplicationProblemPlusJsonObject?: AddImageWatermarkV14XxApplicationProblemPlusJson;
}
