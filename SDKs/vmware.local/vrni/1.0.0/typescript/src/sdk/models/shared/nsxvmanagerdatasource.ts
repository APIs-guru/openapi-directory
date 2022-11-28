import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { PasswordCredentials } from "./passwordcredentials";
import { DataSourceTypeEnum } from "./datasourcetypeenum";



export class NsxvManagerDataSource extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=central_cli_enabled" })
  centralCliEnabled?: boolean;

  @SpeakeasyMetadata({ data: "json, name=credentials" })
  credentials?: PasswordCredentials;

  @SpeakeasyMetadata({ data: "json, name=enabled" })
  enabled?: boolean;

  @SpeakeasyMetadata({ data: "json, name=entity_id" })
  entityId?: string;

  @SpeakeasyMetadata({ data: "json, name=entity_type" })
  entityType?: DataSourceTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=fqdn" })
  fqdn?: string;

  @SpeakeasyMetadata({ data: "json, name=ip" })
  ip?: string;

  @SpeakeasyMetadata({ data: "json, name=ipfix_enabled" })
  ipfixEnabled?: boolean;

  @SpeakeasyMetadata({ data: "json, name=nickname" })
  nickname?: string;

  @SpeakeasyMetadata({ data: "json, name=notes" })
  notes?: string;

  @SpeakeasyMetadata({ data: "json, name=proxy_id" })
  proxyId?: string;

  @SpeakeasyMetadata({ data: "json, name=vcenter_id" })
  vcenterId?: string;
}
