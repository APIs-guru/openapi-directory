import { SpeakeasyBase } from "../../../internal/utils";
import { PdfMetadataDto } from "./pdfmetadatadto";
/**
 * The XSL-FO transform document and xml data document as a Base64 encoded string with a set of resources provided with a name and the data of the resource as a Base64 encoded string.
**/
export declare class FoTransformRequestDto extends SpeakeasyBase {
    foDocumentBase64String?: string;
    metadata?: PdfMetadataDto;
    resources?: Map<string, string>;
    xmlDataDocumentBase64String?: string;
}
