import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class Agent extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=arch" })
  arch?: string;

  @SpeakeasyMetadata({ data: "json, name=client_id" })
  clientId?: string;

  @SpeakeasyMetadata({ data: "json, name=connected" })
  connected?: boolean;

  @SpeakeasyMetadata({ data: "json, name=created_at" })
  createdAt?: number;

  @SpeakeasyMetadata({ data: "json, name=deactivated_at" })
  deactivatedAt?: number;

  @SpeakeasyMetadata({ data: "json, name=external_ip" })
  externalIp?: string;

  @SpeakeasyMetadata({ data: "json, name=host_id" })
  hostId?: string;

  @SpeakeasyMetadata({ data: "json, name=hub_id" })
  hubId?: string;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id: string;

  @SpeakeasyMetadata({ data: "json, name=inactive" })
  inactive?: boolean;

  @SpeakeasyMetadata({ data: "json, name=internal_ip" })
  internalIp?: string;

  @SpeakeasyMetadata({ data: "json, name=last_checkin" })
  lastCheckin?: number;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=organization_id" })
  organizationId?: string;

  @SpeakeasyMetadata({ data: "json, name=os" })
  os?: string;

  @SpeakeasyMetadata({ data: "json, name=site_id" })
  siteId?: string;

  @SpeakeasyMetadata({ data: "json, name=system_info" })
  systemInfo?: Map<string, any>;

  @SpeakeasyMetadata({ data: "json, name=updated_at" })
  updatedAt?: number;

  @SpeakeasyMetadata({ data: "json, name=version" })
  version?: string;
}
