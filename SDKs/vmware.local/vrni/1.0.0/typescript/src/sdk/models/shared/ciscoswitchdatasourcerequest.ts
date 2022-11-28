import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { PasswordCredentials } from "./passwordcredentials";
import { CiscoSwitchTypeEnum } from "./ciscoswitchtypeenum";



export class CiscoSwitchDataSourceRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=credentials" })
  credentials?: PasswordCredentials;

  @SpeakeasyMetadata({ data: "json, name=enabled" })
  enabled?: boolean;

  @SpeakeasyMetadata({ data: "json, name=fqdn" })
  fqdn?: string;

  @SpeakeasyMetadata({ data: "json, name=ip" })
  ip?: string;

  @SpeakeasyMetadata({ data: "json, name=nickname" })
  nickname: string;

  @SpeakeasyMetadata({ data: "json, name=notes" })
  notes?: string;

  @SpeakeasyMetadata({ data: "json, name=proxy_id" })
  proxyId: string;

  @SpeakeasyMetadata({ data: "json, name=switch_type" })
  switchType?: CiscoSwitchTypeEnum;
}
