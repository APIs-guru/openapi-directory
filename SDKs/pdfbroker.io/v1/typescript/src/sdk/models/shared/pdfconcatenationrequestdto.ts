import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// PdfConcatenationRequestDto
/** 
 * Request to concatenate a list of Pdf documents to a single Pdf document.
**/
export class PdfConcatenationRequestDto extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=PdfDocumentsAsBase64String" })
  pdfDocumentsAsBase64String?: string[];
}
