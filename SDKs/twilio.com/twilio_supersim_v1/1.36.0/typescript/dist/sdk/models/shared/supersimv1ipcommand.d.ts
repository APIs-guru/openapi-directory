import { SpeakeasyBase } from "../../../internal/utils/utils";
import { IpCommandEnumDirectionEnum } from "./ipcommandenumdirectionenum";
import { IpCommandEnumPayloadTypeEnum } from "./ipcommandenumpayloadtypeenum";
import { IpCommandEnumStatusEnum } from "./ipcommandenumstatusenum";
export declare class SupersimV1IpCommand extends SpeakeasyBase {
    accountSid?: string;
    dateCreated?: Date;
    dateUpdated?: Date;
    deviceIp?: string;
    devicePort?: number;
    direction?: IpCommandEnumDirectionEnum;
    payload?: string;
    payloadType?: IpCommandEnumPayloadTypeEnum;
    sid?: string;
    simIccid?: string;
    simSid?: string;
    status?: IpCommandEnumStatusEnum;
    url?: string;
}
