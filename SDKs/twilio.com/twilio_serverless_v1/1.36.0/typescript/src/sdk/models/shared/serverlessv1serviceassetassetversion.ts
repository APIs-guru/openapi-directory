import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { AssetVersionEnumVisibilityEnum } from "./assetversionenumvisibilityenum";


export class ServerlessV1ServiceAssetAssetVersion extends SpeakeasyBase {
  @Metadata({ data: "json, name=account_sid" })
  accountSid?: string;

  @Metadata({ data: "json, name=asset_sid" })
  assetSid?: string;

  @Metadata({ data: "json, name=date_created" })
  dateCreated?: Date;

  @Metadata({ data: "json, name=path" })
  path?: string;

  @Metadata({ data: "json, name=service_sid" })
  serviceSid?: string;

  @Metadata({ data: "json, name=sid" })
  sid?: string;

  @Metadata({ data: "json, name=url" })
  url?: string;

  @Metadata({ data: "json, name=visibility" })
  visibility?: AssetVersionEnumVisibilityEnum;
}
