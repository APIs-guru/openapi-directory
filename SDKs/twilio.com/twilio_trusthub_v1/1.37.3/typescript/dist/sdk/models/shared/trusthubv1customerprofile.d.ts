import { SpeakeasyBase } from "../../../internal/utils";
import { CustomerProfileEnumStatusEnum } from "./customerprofileenumstatusenum";
export declare class TrusthubV1CustomerProfile extends SpeakeasyBase {
    accountSid?: string;
    dateCreated?: Date;
    dateUpdated?: Date;
    email?: string;
    friendlyName?: string;
    links?: Map<string, any>;
    policySid?: string;
    sid?: string;
    status?: CustomerProfileEnumStatusEnum;
    statusCallback?: string;
    url?: string;
    validUntil?: Date;
}
