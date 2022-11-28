import { SpeakeasyBase } from "../../../internal/utils";
export declare enum AttachmentMimeTypeEnum {
    ApplicationPdf = "application/pdf"
}
/**
 * A document attachment to the invoice.
**/
export declare class Attachment extends SpeakeasyBase {
    document: string;
    filename?: string;
    mimeType: AttachmentMimeTypeEnum;
    primaryImage?: boolean;
}
