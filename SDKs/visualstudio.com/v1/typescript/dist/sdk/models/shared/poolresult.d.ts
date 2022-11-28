import { SpeakeasyBase } from "../../../internal/utils";
import { DomainUserCredentials } from "./domainusercredentials";
import { HotPoolSettings } from "./hotpoolsettings";
import { ProvisioningStatusResult } from "./provisioningstatusresult";
import { VmSpecs } from "./vmspecs";
export declare class PoolResult extends SpeakeasyBase {
    domainUserCredentials?: DomainUserCredentials;
    hotPoolSettings?: HotPoolSettings;
    poolGroupName: string;
    provisioningStatus?: ProvisioningStatusResult;
    tags?: Map<string, string>;
    userGroupName?: string;
    vmSpecs: VmSpecs;
}
