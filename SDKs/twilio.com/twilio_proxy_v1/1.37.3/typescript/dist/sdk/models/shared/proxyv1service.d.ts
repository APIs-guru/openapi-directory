import { SpeakeasyBase } from "../../../internal/utils";
import { ServiceEnumGeoMatchLevelEnum } from "./serviceenumgeomatchlevelenum";
import { ServiceEnumNumberSelectionBehaviorEnum } from "./serviceenumnumberselectionbehaviorenum";
export declare class ProxyV1Service extends SpeakeasyBase {
    accountSid?: string;
    callbackUrl?: string;
    chatInstanceSid?: string;
    dateCreated?: Date;
    dateUpdated?: Date;
    defaultTtl?: number;
    geoMatchLevel?: ServiceEnumGeoMatchLevelEnum;
    interceptCallbackUrl?: string;
    links?: Map<string, any>;
    numberSelectionBehavior?: ServiceEnumNumberSelectionBehaviorEnum;
    outOfSessionCallbackUrl?: string;
    sid?: string;
    uniqueName?: string;
    url?: string;
}
