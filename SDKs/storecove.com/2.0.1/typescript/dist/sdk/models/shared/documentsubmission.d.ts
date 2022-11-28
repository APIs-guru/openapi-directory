import { SpeakeasyBase } from "../../../internal/utils";
import { Attachment } from "./attachment";
import { SendableDocument } from "./sendabledocument";
import { Routing } from "./routing";
/**
 * The document you want Storecove to send, with some meta-data.
**/
export declare class DocumentSubmission extends SpeakeasyBase {
    attachments?: Attachment[];
    createPrimaryImage?: boolean;
    document?: SendableDocument;
    idempotencyGuid?: string;
    legalEntityId?: number;
    receiveGuid?: string;
    routing?: Routing;
}
