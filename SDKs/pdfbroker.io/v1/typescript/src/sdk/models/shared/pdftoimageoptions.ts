import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class PdfToImageOptions extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Height" })
  height?: number;

  @SpeakeasyMetadata({ data: "json, name=HorizontalResolution" })
  horizontalResolution?: number;

  @SpeakeasyMetadata({ data: "json, name=ImageFormat" })
  imageFormat?: string;

  @SpeakeasyMetadata({ data: "json, name=JpegQuality" })
  jpegQuality?: number;

  @SpeakeasyMetadata({ data: "json, name=PageNumber" })
  pageNumber?: number;

  @SpeakeasyMetadata({ data: "json, name=PngCompressionLevel" })
  pngCompressionLevel?: number;

  @SpeakeasyMetadata({ data: "json, name=Transparent" })
  transparent?: boolean;

  @SpeakeasyMetadata({ data: "json, name=VerticalResolution" })
  verticalResolution?: number;

  @SpeakeasyMetadata({ data: "json, name=Width" })
  width?: number;
}
