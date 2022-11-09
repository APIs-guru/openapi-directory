import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class Asset extends SpeakeasyBase {
  @Metadata({ data: "json, name=addresses" })
  addresses?: string[];

  @Metadata({ data: "json, name=addresses_extra" })
  addressesExtra?: string[];

  @Metadata({ data: "json, name=agent_name" })
  agentName?: string;

  @Metadata({ data: "json, name=alive" })
  alive?: boolean;

  @Metadata({ data: "json, name=attributes" })
  attributes?: Map<string, string>;

  @Metadata({ data: "json, name=comments" })
  comments?: string;

  @Metadata({ data: "json, name=created_at" })
  createdAt?: number;

  @Metadata({ data: "json, name=credentials" })
  credentials?: Map<string, string>;

  @Metadata({ data: "json, name=detected_by" })
  detectedBy?: string;

  @Metadata({ data: "json, name=domains" })
  domains?: string[];

  @Metadata({ data: "json, name=first_seen" })
  firstSeen?: number;

  @Metadata({ data: "json, name=hw" })
  hw?: string;

  @Metadata({ data: "json, name=id" })
  id: string;

  @Metadata({ data: "json, name=last_agent_id" })
  lastAgentId?: string;

  @Metadata({ data: "json, name=last_seen" })
  lastSeen?: number;

  @Metadata({ data: "json, name=last_task_id" })
  lastTaskId?: string;

  @Metadata({ data: "json, name=lowest_rtt" })
  lowestRtt?: number;

  @Metadata({ data: "json, name=lowest_ttl" })
  lowestTtl?: number;

  @Metadata({ data: "json, name=mac_vendors" })
  macVendors?: string[];

  @Metadata({ data: "json, name=macs" })
  macs?: string[];

  @Metadata({ data: "json, name=names" })
  names?: string[];

  @Metadata({ data: "json, name=newest_mac" })
  newestMac?: string;

  @Metadata({ data: "json, name=newest_mac_age" })
  newestMacAge?: number;

  @Metadata({ data: "json, name=newest_mac_vendor" })
  newestMacVendor?: string;

  @Metadata({ data: "json, name=org_name" })
  orgName?: string;

  @Metadata({ data: "json, name=organization_id" })
  organizationId?: string;

  @Metadata({ data: "json, name=os" })
  os?: string;

  @Metadata({ data: "json, name=os_version" })
  osVersion?: string;

  @Metadata({ data: "json, name=rtts" })
  rtts?: Map<string, any>;

  @Metadata({ data: "json, name=service_count" })
  serviceCount?: number;

  @Metadata({ data: "json, name=service_count_arp" })
  serviceCountArp?: number;

  @Metadata({ data: "json, name=service_count_icmp" })
  serviceCountIcmp?: number;

  @Metadata({ data: "json, name=service_count_tcp" })
  serviceCountTcp?: number;

  @Metadata({ data: "json, name=service_count_udp" })
  serviceCountUdp?: number;

  @Metadata({ data: "json, name=service_ports_products" })
  servicePortsProducts?: string[];

  @Metadata({ data: "json, name=service_ports_protocols" })
  servicePortsProtocols?: string[];

  @Metadata({ data: "json, name=service_ports_tcp" })
  servicePortsTcp?: string[];

  @Metadata({ data: "json, name=service_ports_udp" })
  servicePortsUdp?: string[];

  @Metadata({ data: "json, name=services" })
  services?: Map<string, Map<string, string>>;

  @Metadata({ data: "json, name=site_id" })
  siteId?: string;

  @Metadata({ data: "json, name=site_name" })
  siteName?: string;

  @Metadata({ data: "json, name=tags" })
  tags?: Map<string, string>;

  @Metadata({ data: "json, name=type" })
  type?: string;

  @Metadata({ data: "json, name=updated_at" })
  updatedAt?: number;
}
