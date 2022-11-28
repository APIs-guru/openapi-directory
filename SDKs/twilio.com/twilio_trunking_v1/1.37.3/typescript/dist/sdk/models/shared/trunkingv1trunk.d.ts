import { SpeakeasyBase } from "../../../internal/utils";
import { TrunkEnumTransferCallerIdEnum } from "./trunkenumtransfercalleridenum";
import { TrunkEnumTransferSettingEnum } from "./trunkenumtransfersettingenum";
export declare enum TrunkingV1TrunkDisasterRecoveryMethodEnum {
    Head = "HEAD",
    Get = "GET",
    Post = "POST",
    Patch = "PATCH",
    Put = "PUT",
    Delete = "DELETE"
}
export declare class TrunkingV1Trunk extends SpeakeasyBase {
    accountSid?: string;
    authType?: string;
    authTypeSet?: string[];
    cnamLookupEnabled?: boolean;
    dateCreated?: Date;
    dateUpdated?: Date;
    disasterRecoveryMethod?: TrunkingV1TrunkDisasterRecoveryMethodEnum;
    disasterRecoveryUrl?: string;
    domainName?: string;
    friendlyName?: string;
    links?: Map<string, any>;
    recording?: any;
    secure?: boolean;
    sid?: string;
    transferCallerId?: TrunkEnumTransferCallerIdEnum;
    transferMode?: TrunkEnumTransferSettingEnum;
    url?: string;
}
