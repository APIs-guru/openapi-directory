import { SpeakeasyBase } from "../../../internal/utils/utils";
import { EsimProfileEnumStatusEnum } from "./esimprofileenumstatusenum";
export declare class SupersimV1EsimProfile extends SpeakeasyBase {
    accountSid?: string;
    dateCreated?: Date;
    dateUpdated?: Date;
    eid?: string;
    errorCode?: string;
    errorMessage?: string;
    iccid?: string;
    sid?: string;
    simSid?: string;
    smdpPlusAddress?: string;
    status?: EsimProfileEnumStatusEnum;
    url?: string;
}
