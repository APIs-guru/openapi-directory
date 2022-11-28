import { SpeakeasyBase } from "../../../internal/utils";
import { FactorEnumFactorTypesEnum } from "./factorenumfactortypesenum";
import { FactorEnumFactorStatusesEnum } from "./factorenumfactorstatusesenum";
export declare class VerifyV2ServiceEntityFactor extends SpeakeasyBase {
    accountSid?: string;
    config?: any;
    dateCreated?: Date;
    dateUpdated?: Date;
    entitySid?: string;
    factorType?: FactorEnumFactorTypesEnum;
    friendlyName?: string;
    identity?: string;
    metadata?: any;
    serviceSid?: string;
    sid?: string;
    status?: FactorEnumFactorStatusesEnum;
    url?: string;
}
