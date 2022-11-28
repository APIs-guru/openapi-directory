import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { PdfWriteStringOptionsInput } from "./pdfwritestringoptions";



// PdfWriteStringRequestDtoInput
/** 
 * The request dto object to write a string on pdf page
**/
export class PdfWriteStringRequestDtoInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=FontFileBase64String" })
  fontFileBase64String?: string;

  @SpeakeasyMetadata({ data: "json, name=Options" })
  options?: PdfWriteStringOptionsInput;

  @SpeakeasyMetadata({ data: "json, name=PdfFileBase64String" })
  pdfFileBase64String?: string;
}
