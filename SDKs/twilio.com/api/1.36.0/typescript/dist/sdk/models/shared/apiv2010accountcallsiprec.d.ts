import { SpeakeasyBase } from "../../../internal/utils/utils";
import { SiprecEnumStatusEnum } from "./siprecenumstatusenum";
export declare class ApiV2010AccountCallSiprec extends SpeakeasyBase {
    accountSid?: string;
    callSid?: string;
    dateUpdated?: string;
    name?: string;
    sid?: string;
    status?: SiprecEnumStatusEnum;
    uri?: string;
}
