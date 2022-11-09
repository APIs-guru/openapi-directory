import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class Organization extends SpeakeasyBase {
  @Metadata({ data: "json, name=asset_count" })
  assetCount?: number;

  @Metadata({ data: "json, name=client_id" })
  clientId?: string;

  @Metadata({ data: "json, name=created_at" })
  createdAt?: number;

  @Metadata({ data: "json, name=deactivated_at" })
  deactivatedAt?: number;

  @Metadata({ data: "json, name=description" })
  description?: string;

  @Metadata({ data: "json, name=download_token" })
  downloadToken?: string;

  @Metadata({ data: "json, name=download_token_created_at" })
  downloadTokenCreatedAt?: number;

  @Metadata({ data: "json, name=expiration_assets_offline" })
  expirationAssetsOffline?: number;

  @Metadata({ data: "json, name=expiration_assets_stale" })
  expirationAssetsStale?: number;

  @Metadata({ data: "json, name=expiration_scans" })
  expirationScans?: number;

  @Metadata({ data: "json, name=export_token" })
  exportToken?: string;

  @Metadata({ data: "json, name=export_token_counter" })
  exportTokenCounter?: number;

  @Metadata({ data: "json, name=export_token_created_at" })
  exportTokenCreatedAt?: number;

  @Metadata({ data: "json, name=export_token_last_used_at" })
  exportTokenLastUsedAt?: number;

  @Metadata({ data: "json, name=export_token_last_used_by" })
  exportTokenLastUsedBy?: string;

  @Metadata({ data: "json, name=id" })
  id: string;

  @Metadata({ data: "json, name=inactive" })
  inactive?: boolean;

  @Metadata({ data: "json, name=name" })
  name: string;

  @Metadata({ data: "json, name=parent_id" })
  parentId?: string;

  @Metadata({ data: "json, name=permanent" })
  permanent?: boolean;

  @Metadata({ data: "json, name=project" })
  project?: boolean;

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

  @Metadata({ data: "json, name=updated_at" })
  updatedAt?: number;
}
