import { SpeakeasyBase } from "../../../internal/utils";
import { DomainUserCredentials } from "./domainusercredentials";
import { HotPoolSettings } from "./hotpoolsettings";
import { VmSpecs } from "./vmspecs";
export declare class CreateOrUpdatePoolBody extends SpeakeasyBase {
    domainUserCredentials?: DomainUserCredentials;
    hotPoolSettings?: HotPoolSettings;
    poolGroupName: string;
    tags?: Map<string, string>;
    userGroupName?: string;
    vmSpecs: VmSpecs;
}
