import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class Wireless extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=agent_name" })
  agentName?: string;

  @SpeakeasyMetadata({ data: "json, name=authentication" })
  authentication?: string;

  @SpeakeasyMetadata({ data: "json, name=bssid" })
  bssid?: string;

  @SpeakeasyMetadata({ data: "json, name=channels" })
  channels?: string;

  @SpeakeasyMetadata({ data: "json, name=created_at" })
  createdAt?: number;

  @SpeakeasyMetadata({ data: "json, name=data" })
  data?: Map<string, string>;

  @SpeakeasyMetadata({ data: "json, name=encryption" })
  encryption?: string;

  @SpeakeasyMetadata({ data: "json, name=essid" })
  essid?: string;

  @SpeakeasyMetadata({ data: "json, name=family" })
  family?: string;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id: string;

  @SpeakeasyMetadata({ data: "json, name=interface" })
  interface?: string;

  @SpeakeasyMetadata({ data: "json, name=last_agent_id" })
  lastAgentId?: string;

  @SpeakeasyMetadata({ data: "json, name=last_seen" })
  lastSeen?: number;

  @SpeakeasyMetadata({ data: "json, name=last_task_id" })
  lastTaskId?: string;

  @SpeakeasyMetadata({ data: "json, name=org_name" })
  orgName?: string;

  @SpeakeasyMetadata({ data: "json, name=organization_id" })
  organizationId?: string;

  @SpeakeasyMetadata({ data: "json, name=signal" })
  signal?: number;

  @SpeakeasyMetadata({ data: "json, name=site_id" })
  siteId?: string;

  @SpeakeasyMetadata({ data: "json, name=site_name" })
  siteName?: string;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type?: string;

  @SpeakeasyMetadata({ data: "json, name=vendor" })
  vendor?: string;
}
