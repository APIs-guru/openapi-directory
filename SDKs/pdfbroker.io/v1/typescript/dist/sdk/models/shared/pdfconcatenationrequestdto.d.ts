import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Request to concatenate a list of Pdf documents to a single Pdf document.
**/
export declare class PdfConcatenationRequestDto extends SpeakeasyBase {
    pdfDocumentsAsBase64String?: string[];
}
