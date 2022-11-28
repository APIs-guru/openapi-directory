import { SpeakeasyBase } from "../../../internal/utils";
import { SimEnumStatusEnum } from "./simenumstatusenum";
export declare class SupersimV1Sim extends SpeakeasyBase {
    accountSid?: string;
    dateCreated?: Date;
    dateUpdated?: Date;
    fleetSid?: string;
    iccid?: string;
    links?: Map<string, any>;
    sid?: string;
    status?: SimEnumStatusEnum;
    uniqueName?: string;
    url?: string;
}
