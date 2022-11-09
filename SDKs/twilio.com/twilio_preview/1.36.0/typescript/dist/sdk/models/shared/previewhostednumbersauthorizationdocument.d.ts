import { SpeakeasyBase } from "../../../internal/utils/utils";
import { AuthorizationDocumentEnumStatusEnum } from "./authorizationdocumentenumstatusenum";
export declare class PreviewHostedNumbersAuthorizationDocument extends SpeakeasyBase {
    addressSid?: string;
    ccEmails?: string[];
    dateCreated?: Date;
    dateUpdated?: Date;
    email?: string;
    links?: Map<string, any>;
    sid?: string;
    status?: AuthorizationDocumentEnumStatusEnum;
    url?: string;
}
