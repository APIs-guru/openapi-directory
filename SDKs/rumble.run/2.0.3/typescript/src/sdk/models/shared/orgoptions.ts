import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class OrgOptions extends SpeakeasyBase {
  @Metadata({ data: "json, name=description" })
  description?: string;

  @Metadata({ data: "json, name=expiration_assets_offline" })
  expirationAssetsOffline?: string;

  @Metadata({ data: "json, name=expiration_assets_stale" })
  expirationAssetsStale?: string;

  @Metadata({ data: "json, name=expiration_scans" })
  expirationScans?: string;

  @Metadata({ data: "json, name=export_token" })
  exportToken?: string;

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=parent_id" })
  parentId?: string;

  @Metadata({ data: "json, name=project" })
  project?: string;
}
