import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class AssetServiceNow extends SpeakeasyBase {
  @Metadata({ data: "json, name=addresses_extra" })
  addressesExtra?: string;

  @Metadata({ data: "json, name=addresses_scope" })
  addressesScope?: string;

  @Metadata({ data: "json, name=alive" })
  alive?: boolean;

  @Metadata({ data: "json, name=asset_id" })
  assetId: string;

  @Metadata({ data: "json, name=comments" })
  comments?: string;

  @Metadata({ data: "json, name=detected_by" })
  detectedBy?: string;

  @Metadata({ data: "json, name=domains" })
  domains?: string;

  @Metadata({ data: "json, name=first_discovered" })
  firstDiscovered?: string;

  @Metadata({ data: "json, name=hw_product" })
  hwProduct?: string;

  @Metadata({ data: "json, name=hw_vendor" })
  hwVendor?: string;

  @Metadata({ data: "json, name=hw_version" })
  hwVersion?: string;

  @Metadata({ data: "json, name=ip_address" })
  ipAddress?: string;

  @Metadata({ data: "json, name=last_discovered" })
  lastDiscovered?: string;

  @Metadata({ data: "json, name=last_updated" })
  lastUpdated?: string;

  @Metadata({ data: "json, name=lowest_rtt" })
  lowestRtt?: number;

  @Metadata({ data: "json, name=lowest_ttl" })
  lowestTtl?: number;

  @Metadata({ data: "json, name=mac_address" })
  macAddress?: string;

  @Metadata({ data: "json, name=mac_manufacturer" })
  macManufacturer?: string;

  @Metadata({ data: "json, name=mac_vendors" })
  macVendors?: string;

  @Metadata({ data: "json, name=macs" })
  macs?: string;

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=newest_mac_age" })
  newestMacAge?: string;

  @Metadata({ data: "json, name=organization" })
  organization?: string;

  @Metadata({ data: "json, name=os_product" })
  osProduct?: string;

  @Metadata({ data: "json, name=os_vendor" })
  osVendor?: string;

  @Metadata({ data: "json, name=os_version" })
  osVersion?: string;

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

  @Metadata({ data: "json, name=site" })
  site?: string;

  @Metadata({ data: "json, name=sys_class_name" })
  sysClassName?: string;

  @Metadata({ data: "json, name=tags" })
  tags?: string;

  @Metadata({ data: "json, name=type" })
  type?: string;
}
