import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class Agent extends SpeakeasyBase {
  @Metadata({ data: "json, name=arch" })
  arch?: string;

  @Metadata({ data: "json, name=client_id" })
  clientId?: string;

  @Metadata({ data: "json, name=connected" })
  connected?: boolean;

  @Metadata({ data: "json, name=created_at" })
  createdAt?: number;

  @Metadata({ data: "json, name=deactivated_at" })
  deactivatedAt?: number;

  @Metadata({ data: "json, name=external_ip" })
  externalIp?: string;

  @Metadata({ data: "json, name=host_id" })
  hostId?: string;

  @Metadata({ data: "json, name=hub_id" })
  hubId?: string;

  @Metadata({ data: "json, name=id" })
  id: string;

  @Metadata({ data: "json, name=inactive" })
  inactive?: boolean;

  @Metadata({ data: "json, name=internal_ip" })
  internalIp?: string;

  @Metadata({ data: "json, name=last_checkin" })
  lastCheckin?: number;

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=organization_id" })
  organizationId?: string;

  @Metadata({ data: "json, name=os" })
  os?: string;

  @Metadata({ data: "json, name=site_id" })
  siteId?: string;

  @Metadata({ data: "json, name=system_info" })
  systemInfo?: Map<string, any>;

  @Metadata({ data: "json, name=updated_at" })
  updatedAt?: number;

  @Metadata({ data: "json, name=version" })
  version?: string;
}
