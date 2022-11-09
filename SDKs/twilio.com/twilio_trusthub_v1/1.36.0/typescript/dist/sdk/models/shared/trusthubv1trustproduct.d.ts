import { SpeakeasyBase } from "../../../internal/utils/utils";
import { TrustProductEnumStatusEnum } from "./trustproductenumstatusenum";
export declare class TrusthubV1TrustProduct extends SpeakeasyBase {
    accountSid?: string;
    dateCreated?: Date;
    dateUpdated?: Date;
    email?: string;
    friendlyName?: string;
    links?: Map<string, any>;
    policySid?: string;
    sid?: string;
    status?: TrustProductEnumStatusEnum;
    statusCallback?: string;
    url?: string;
    validUntil?: Date;
}
