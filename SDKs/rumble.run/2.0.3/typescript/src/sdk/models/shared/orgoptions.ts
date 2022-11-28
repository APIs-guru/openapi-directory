import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class OrgOptions extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=description" })
  description?: string;

  @SpeakeasyMetadata({ data: "json, name=expiration_assets_offline" })
  expirationAssetsOffline?: string;

  @SpeakeasyMetadata({ data: "json, name=expiration_assets_stale" })
  expirationAssetsStale?: string;

  @SpeakeasyMetadata({ data: "json, name=expiration_scans" })
  expirationScans?: string;

  @SpeakeasyMetadata({ data: "json, name=export_token" })
  exportToken?: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=parent_id" })
  parentId?: string;

  @SpeakeasyMetadata({ data: "json, name=project" })
  project?: string;
}
