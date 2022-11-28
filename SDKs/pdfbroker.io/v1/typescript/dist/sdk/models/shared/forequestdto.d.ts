import { SpeakeasyBase } from "../../../internal/utils";
import { PdfMetadataDto } from "./pdfmetadatadto";
/**
 * The basic request with the XSL-FO document as a Base64 encoded string with a set of resources provided with a name and the data of the resource as a Base64 encoded string.
**/
export declare class FoRequestDto extends SpeakeasyBase {
    foDocumentBase64String?: string;
    metadata?: PdfMetadataDto;
    resources?: Map<string, string>;
}
