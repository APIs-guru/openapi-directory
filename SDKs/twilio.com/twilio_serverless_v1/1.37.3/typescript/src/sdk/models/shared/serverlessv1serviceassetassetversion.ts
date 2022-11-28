import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { AssetVersionEnumVisibilityEnum } from "./assetversionenumvisibilityenum";



export class ServerlessV1ServiceAssetAssetVersion extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=account_sid" })
  accountSid?: string;

  @SpeakeasyMetadata({ data: "json, name=asset_sid" })
  assetSid?: string;

  @SpeakeasyMetadata({ data: "json, name=date_created" })
  dateCreated?: Date;

  @SpeakeasyMetadata({ data: "json, name=path" })
  path?: string;

  @SpeakeasyMetadata({ data: "json, name=service_sid" })
  serviceSid?: string;

  @SpeakeasyMetadata({ data: "json, name=sid" })
  sid?: string;

  @SpeakeasyMetadata({ data: "json, name=url" })
  url?: string;

  @SpeakeasyMetadata({ data: "json, name=visibility" })
  visibility?: AssetVersionEnumVisibilityEnum;
}
