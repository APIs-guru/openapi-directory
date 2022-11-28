import { SpeakeasyBase } from "../../../internal/utils";
export declare class AttachmentContentTypeMeta extends SpeakeasyBase {
    description?: string;
    extension?: string;
    title?: string;
}
export declare class AttachmentVariants extends SpeakeasyBase {
    largeUrl?: string;
    thumbUrl?: string;
}
export declare class Attachment extends SpeakeasyBase {
    contentType?: string;
    contentTypeMeta?: AttachmentContentTypeMeta;
    createdAt?: string;
    fileName?: string;
    id?: number;
    originalUrl?: string;
    title?: string;
    type?: string;
    updatedAt?: string;
    variants?: AttachmentVariants;
}
