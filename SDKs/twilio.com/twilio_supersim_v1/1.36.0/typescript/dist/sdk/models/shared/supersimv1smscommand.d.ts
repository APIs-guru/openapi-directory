import { SpeakeasyBase } from "../../../internal/utils/utils";
import { SmsCommandEnumDirectionEnum } from "./smscommandenumdirectionenum";
import { SmsCommandEnumStatusEnum } from "./smscommandenumstatusenum";
export declare class SupersimV1SmsCommand extends SpeakeasyBase {
    accountSid?: string;
    dateCreated?: Date;
    dateUpdated?: Date;
    direction?: SmsCommandEnumDirectionEnum;
    payload?: string;
    sid?: string;
    simSid?: string;
    status?: SmsCommandEnumStatusEnum;
    url?: string;
}
