import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class Organization extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=asset_count" })
  assetCount?: number;

  @SpeakeasyMetadata({ data: "json, name=client_id" })
  clientId?: string;

  @SpeakeasyMetadata({ data: "json, name=created_at" })
  createdAt?: number;

  @SpeakeasyMetadata({ data: "json, name=deactivated_at" })
  deactivatedAt?: number;

  @SpeakeasyMetadata({ data: "json, name=description" })
  description?: string;

  @SpeakeasyMetadata({ data: "json, name=download_token" })
  downloadToken?: string;

  @SpeakeasyMetadata({ data: "json, name=download_token_created_at" })
  downloadTokenCreatedAt?: number;

  @SpeakeasyMetadata({ data: "json, name=expiration_assets_offline" })
  expirationAssetsOffline?: number;

  @SpeakeasyMetadata({ data: "json, name=expiration_assets_stale" })
  expirationAssetsStale?: number;

  @SpeakeasyMetadata({ data: "json, name=expiration_scans" })
  expirationScans?: number;

  @SpeakeasyMetadata({ data: "json, name=export_token" })
  exportToken?: string;

  @SpeakeasyMetadata({ data: "json, name=export_token_counter" })
  exportTokenCounter?: number;

  @SpeakeasyMetadata({ data: "json, name=export_token_created_at" })
  exportTokenCreatedAt?: number;

  @SpeakeasyMetadata({ data: "json, name=export_token_last_used_at" })
  exportTokenLastUsedAt?: number;

  @SpeakeasyMetadata({ data: "json, name=export_token_last_used_by" })
  exportTokenLastUsedBy?: string;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id: string;

  @SpeakeasyMetadata({ data: "json, name=inactive" })
  inactive?: boolean;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name: string;

  @SpeakeasyMetadata({ data: "json, name=parent_id" })
  parentId?: string;

  @SpeakeasyMetadata({ data: "json, name=permanent" })
  permanent?: boolean;

  @SpeakeasyMetadata({ data: "json, name=project" })
  project?: boolean;

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

  @SpeakeasyMetadata({ data: "json, name=updated_at" })
  updatedAt?: number;
}
