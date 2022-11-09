import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class Wireless extends SpeakeasyBase {
  @Metadata({ data: "json, name=agent_name" })
  agentName?: string;

  @Metadata({ data: "json, name=authentication" })
  authentication?: string;

  @Metadata({ data: "json, name=bssid" })
  bssid?: string;

  @Metadata({ data: "json, name=channels" })
  channels?: string;

  @Metadata({ data: "json, name=created_at" })
  createdAt?: number;

  @Metadata({ data: "json, name=data" })
  data?: Map<string, string>;

  @Metadata({ data: "json, name=encryption" })
  encryption?: string;

  @Metadata({ data: "json, name=essid" })
  essid?: string;

  @Metadata({ data: "json, name=family" })
  family?: string;

  @Metadata({ data: "json, name=id" })
  id: string;

  @Metadata({ data: "json, name=interface" })
  interface?: string;

  @Metadata({ data: "json, name=last_agent_id" })
  lastAgentId?: string;

  @Metadata({ data: "json, name=last_seen" })
  lastSeen?: number;

  @Metadata({ data: "json, name=last_task_id" })
  lastTaskId?: string;

  @Metadata({ data: "json, name=org_name" })
  orgName?: string;

  @Metadata({ data: "json, name=organization_id" })
  organizationId?: string;

  @Metadata({ data: "json, name=signal" })
  signal?: number;

  @Metadata({ data: "json, name=site_id" })
  siteId?: string;

  @Metadata({ data: "json, name=site_name" })
  siteName?: string;

  @Metadata({ data: "json, name=type" })
  type?: string;

  @Metadata({ data: "json, name=vendor" })
  vendor?: string;
}
