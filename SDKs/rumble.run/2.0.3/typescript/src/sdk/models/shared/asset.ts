import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class Asset extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=addresses" })
  addresses?: string[];

  @SpeakeasyMetadata({ data: "json, name=addresses_extra" })
  addressesExtra?: string[];

  @SpeakeasyMetadata({ data: "json, name=agent_name" })
  agentName?: string;

  @SpeakeasyMetadata({ data: "json, name=alive" })
  alive?: boolean;

  @SpeakeasyMetadata({ data: "json, name=attributes" })
  attributes?: Map<string, string>;

  @SpeakeasyMetadata({ data: "json, name=comments" })
  comments?: string;

  @SpeakeasyMetadata({ data: "json, name=created_at" })
  createdAt?: number;

  @SpeakeasyMetadata({ data: "json, name=credentials" })
  credentials?: Map<string, string>;

  @SpeakeasyMetadata({ data: "json, name=detected_by" })
  detectedBy?: string;

  @SpeakeasyMetadata({ data: "json, name=domains" })
  domains?: string[];

  @SpeakeasyMetadata({ data: "json, name=first_seen" })
  firstSeen?: number;

  @SpeakeasyMetadata({ data: "json, name=hw" })
  hw?: string;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id: string;

  @SpeakeasyMetadata({ data: "json, name=last_agent_id" })
  lastAgentId?: string;

  @SpeakeasyMetadata({ data: "json, name=last_seen" })
  lastSeen?: number;

  @SpeakeasyMetadata({ data: "json, name=last_task_id" })
  lastTaskId?: string;

  @SpeakeasyMetadata({ data: "json, name=lowest_rtt" })
  lowestRtt?: number;

  @SpeakeasyMetadata({ data: "json, name=lowest_ttl" })
  lowestTtl?: number;

  @SpeakeasyMetadata({ data: "json, name=mac_vendors" })
  macVendors?: string[];

  @SpeakeasyMetadata({ data: "json, name=macs" })
  macs?: string[];

  @SpeakeasyMetadata({ data: "json, name=names" })
  names?: string[];

  @SpeakeasyMetadata({ data: "json, name=newest_mac" })
  newestMac?: string;

  @SpeakeasyMetadata({ data: "json, name=newest_mac_age" })
  newestMacAge?: number;

  @SpeakeasyMetadata({ data: "json, name=newest_mac_vendor" })
  newestMacVendor?: string;

  @SpeakeasyMetadata({ data: "json, name=org_name" })
  orgName?: string;

  @SpeakeasyMetadata({ data: "json, name=organization_id" })
  organizationId?: string;

  @SpeakeasyMetadata({ data: "json, name=os" })
  os?: string;

  @SpeakeasyMetadata({ data: "json, name=os_version" })
  osVersion?: string;

  @SpeakeasyMetadata({ data: "json, name=rtts" })
  rtts?: Map<string, any>;

  @SpeakeasyMetadata({ data: "json, name=service_count" })
  serviceCount?: number;

  @SpeakeasyMetadata({ data: "json, name=service_count_arp" })
  serviceCountArp?: number;

  @SpeakeasyMetadata({ data: "json, name=service_count_icmp" })
  serviceCountIcmp?: number;

  @SpeakeasyMetadata({ data: "json, name=service_count_tcp" })
  serviceCountTcp?: number;

  @SpeakeasyMetadata({ data: "json, name=service_count_udp" })
  serviceCountUdp?: number;

  @SpeakeasyMetadata({ data: "json, name=service_ports_products" })
  servicePortsProducts?: string[];

  @SpeakeasyMetadata({ data: "json, name=service_ports_protocols" })
  servicePortsProtocols?: string[];

  @SpeakeasyMetadata({ data: "json, name=service_ports_tcp" })
  servicePortsTcp?: string[];

  @SpeakeasyMetadata({ data: "json, name=service_ports_udp" })
  servicePortsUdp?: string[];

  @SpeakeasyMetadata({ data: "json, name=services" })
  services?: Map<string, Map<string, string>>;

  @SpeakeasyMetadata({ data: "json, name=site_id" })
  siteId?: string;

  @SpeakeasyMetadata({ data: "json, name=site_name" })
  siteName?: string;

  @SpeakeasyMetadata({ data: "json, name=tags" })
  tags?: Map<string, string>;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type?: string;

  @SpeakeasyMetadata({ data: "json, name=updated_at" })
  updatedAt?: number;
}
