import { SpeakeasyBase } from "../../../internal/utils";
import { SupportingDocumentEnumStatusEnum } from "./supportingdocumentenumstatusenum";
export declare class TrusthubV1SupportingDocument extends SpeakeasyBase {
    accountSid?: string;
    attributes?: any;
    dateCreated?: Date;
    dateUpdated?: Date;
    friendlyName?: string;
    mimeType?: string;
    sid?: string;
    status?: SupportingDocumentEnumStatusEnum;
    type?: string;
    url?: string;
}
