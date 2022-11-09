import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { DomainUserCredentials } from "./domainusercredentials";
import { HotPoolSettings } from "./hotpoolsettings";
import { VmSpecs } from "./vmspecs";


export class CreateOrUpdatePoolBody extends SpeakeasyBase {
  @Metadata({ data: "json, name=domainUserCredentials" })
  domainUserCredentials?: DomainUserCredentials;

  @Metadata({ data: "json, name=hotPoolSettings" })
  hotPoolSettings?: HotPoolSettings;

  @Metadata({ data: "json, name=poolGroupName" })
  poolGroupName: string;

  @Metadata({ data: "json, name=tags" })
  tags?: Map<string, string>;

  @Metadata({ data: "json, name=userGroupName" })
  userGroupName?: string;

  @Metadata({ data: "json, name=vmSpecs" })
  vmSpecs: VmSpecs;
}
