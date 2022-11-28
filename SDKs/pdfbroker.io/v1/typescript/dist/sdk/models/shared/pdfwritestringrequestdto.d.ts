import { SpeakeasyBase } from "../../../internal/utils";
import { PdfWriteStringOptionsInput } from "./pdfwritestringoptions";
/**
 * The request dto object to write a string on pdf page
**/
export declare class PdfWriteStringRequestDtoInput extends SpeakeasyBase {
    fontFileBase64String?: string;
    options?: PdfWriteStringOptionsInput;
    pdfFileBase64String?: string;
}
