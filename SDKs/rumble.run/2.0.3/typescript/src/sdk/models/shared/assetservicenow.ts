import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class AssetServiceNow extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=addresses_extra" })
  addressesExtra?: string;

  @SpeakeasyMetadata({ data: "json, name=addresses_scope" })
  addressesScope?: string;

  @SpeakeasyMetadata({ data: "json, name=alive" })
  alive?: boolean;

  @SpeakeasyMetadata({ data: "json, name=asset_id" })
  assetId: string;

  @SpeakeasyMetadata({ data: "json, name=comments" })
  comments?: string;

  @SpeakeasyMetadata({ data: "json, name=detected_by" })
  detectedBy?: string;

  @SpeakeasyMetadata({ data: "json, name=domains" })
  domains?: string;

  @SpeakeasyMetadata({ data: "json, name=first_discovered" })
  firstDiscovered?: string;

  @SpeakeasyMetadata({ data: "json, name=hw_product" })
  hwProduct?: string;

  @SpeakeasyMetadata({ data: "json, name=hw_vendor" })
  hwVendor?: string;

  @SpeakeasyMetadata({ data: "json, name=hw_version" })
  hwVersion?: string;

  @SpeakeasyMetadata({ data: "json, name=ip_address" })
  ipAddress?: string;

  @SpeakeasyMetadata({ data: "json, name=last_discovered" })
  lastDiscovered?: string;

  @SpeakeasyMetadata({ data: "json, name=last_updated" })
  lastUpdated?: string;

  @SpeakeasyMetadata({ data: "json, name=lowest_rtt" })
  lowestRtt?: number;

  @SpeakeasyMetadata({ data: "json, name=lowest_ttl" })
  lowestTtl?: number;

  @SpeakeasyMetadata({ data: "json, name=mac_address" })
  macAddress?: string;

  @SpeakeasyMetadata({ data: "json, name=mac_manufacturer" })
  macManufacturer?: string;

  @SpeakeasyMetadata({ data: "json, name=mac_vendors" })
  macVendors?: string;

  @SpeakeasyMetadata({ data: "json, name=macs" })
  macs?: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=newest_mac_age" })
  newestMacAge?: string;

  @SpeakeasyMetadata({ data: "json, name=organization" })
  organization?: string;

  @SpeakeasyMetadata({ data: "json, name=os_product" })
  osProduct?: string;

  @SpeakeasyMetadata({ data: "json, name=os_vendor" })
  osVendor?: string;

  @SpeakeasyMetadata({ data: "json, name=os_version" })
  osVersion?: string;

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

  @SpeakeasyMetadata({ data: "json, name=site" })
  site?: string;

  @SpeakeasyMetadata({ data: "json, name=sys_class_name" })
  sysClassName?: string;

  @SpeakeasyMetadata({ data: "json, name=tags" })
  tags?: string;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type?: string;
}
