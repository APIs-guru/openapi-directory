import { SpeakeasyBase } from "../../../internal/utils";
import { PdfToImageOptions } from "./pdftoimageoptions";
export declare class PdfToImageRequestDto extends SpeakeasyBase {
    options?: PdfToImageOptions;
    pdfFileBase64String?: string;
}
