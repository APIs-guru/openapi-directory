import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { PdfToImageOptions } from "./pdftoimageoptions";



export class PdfToImageRequestDto extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Options" })
  options?: PdfToImageOptions;

  @SpeakeasyMetadata({ data: "json, name=PdfFileBase64String" })
  pdfFileBase64String?: string;
}
