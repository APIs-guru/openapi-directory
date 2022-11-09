import { SpeakeasyBase } from "../../../internal/utils/utils";
import { AccessTokenEnumFactorTypesEnum } from "./accesstokenenumfactortypesenum";
export declare class VerifyV2ServiceAccessToken extends SpeakeasyBase {
    accountSid?: string;
    dateCreated?: Date;
    entityIdentity?: string;
    factorFriendlyName?: string;
    factorType?: AccessTokenEnumFactorTypesEnum;
    serviceSid?: string;
    sid?: string;
    token?: string;
    ttl?: number;
    url?: string;
}
