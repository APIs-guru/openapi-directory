import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { DomainUserCredentials } from "./domainusercredentials";
import { HotPoolSettings } from "./hotpoolsettings";
import { ProvisioningStatusResult } from "./provisioningstatusresult";
import { VmSpecs } from "./vmspecs";



export class PoolResult extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=domainUserCredentials" })
  domainUserCredentials?: DomainUserCredentials;

  @SpeakeasyMetadata({ data: "json, name=hotPoolSettings" })
  hotPoolSettings?: HotPoolSettings;

  @SpeakeasyMetadata({ data: "json, name=poolGroupName" })
  poolGroupName: string;

  @SpeakeasyMetadata({ data: "json, name=provisioningStatus" })
  provisioningStatus?: ProvisioningStatusResult;

  @SpeakeasyMetadata({ data: "json, name=tags" })
  tags?: Map<string, string>;

  @SpeakeasyMetadata({ data: "json, name=userGroupName" })
  userGroupName?: string;

  @SpeakeasyMetadata({ data: "json, name=vmSpecs" })
  vmSpecs: VmSpecs;
}
