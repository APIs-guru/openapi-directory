import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Enter meta data for pdf document
**/
export declare class PdfMetadataDto extends SpeakeasyBase {
    author?: string;
    enableAdd?: boolean;
    enableCopy?: boolean;
    enableModify?: boolean;
    enablePrinting?: boolean;
    keywords?: string[];
    ownerPassword?: string;
    subject?: string;
    title?: string;
    userPassword?: string;
}
