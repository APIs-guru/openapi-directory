import { SpeakeasyBase } from "../../../internal/utils";
import { NewFactorEnumFactorTypesEnum } from "./newfactorenumfactortypesenum";
import { NewFactorEnumFactorStatusesEnum } from "./newfactorenumfactorstatusesenum";
export declare class VerifyV2ServiceEntityNewFactor extends SpeakeasyBase {
    accountSid?: string;
    binding?: any;
    config?: any;
    dateCreated?: Date;
    dateUpdated?: Date;
    entitySid?: string;
    factorType?: NewFactorEnumFactorTypesEnum;
    friendlyName?: string;
    identity?: string;
    metadata?: any;
    serviceSid?: string;
    sid?: string;
    status?: NewFactorEnumFactorStatusesEnum;
    url?: string;
}
