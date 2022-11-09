import { SpeakeasyBase } from "../../../internal/utils/utils";
import { FleetEnumDataMeteringEnum } from "./fleetenumdatameteringenum";
export declare enum SupersimV1FleetIpCommandsMethodEnum {
    Head = "HEAD",
    Get = "GET",
    Post = "POST",
    Patch = "PATCH",
    Put = "PUT",
    Delete = "DELETE"
}
export declare enum SupersimV1FleetSmsCommandsMethodEnum {
    Head = "HEAD",
    Get = "GET",
    Post = "POST",
    Patch = "PATCH",
    Put = "PUT",
    Delete = "DELETE"
}
export declare class SupersimV1Fleet extends SpeakeasyBase {
    accountSid?: string;
    dataEnabled?: boolean;
    dataLimit?: number;
    dataMetering?: FleetEnumDataMeteringEnum;
    dateCreated?: Date;
    dateUpdated?: Date;
    ipCommandsMethod?: SupersimV1FleetIpCommandsMethodEnum;
    ipCommandsUrl?: string;
    networkAccessProfileSid?: string;
    sid?: string;
    smsCommandsEnabled?: boolean;
    smsCommandsMethod?: SupersimV1FleetSmsCommandsMethodEnum;
    smsCommandsUrl?: string;
    uniqueName?: string;
    url?: string;
}
