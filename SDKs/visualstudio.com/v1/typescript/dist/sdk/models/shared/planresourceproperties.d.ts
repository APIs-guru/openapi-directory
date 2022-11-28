import { SpeakeasyBase } from "../../../internal/utils";
import { PlanResourceEncryptionProperties } from "./planresourceencryptionproperties";
import { VnetProperties } from "./vnetproperties";
export declare class PlanResourceProperties extends SpeakeasyBase {
    defaultAutoSuspendDelayMinutes?: number;
    defaultCodespaceSku?: string;
    defaultEnvironmentSku?: string;
    encryption?: PlanResourceEncryptionProperties;
    userId?: string;
    vnetProperties?: VnetProperties;
}
