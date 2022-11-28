import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class PreviewMarketplaceInstalledAddOnInstalledAddOnExtension extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=enabled" })
  enabled?: boolean;

  @SpeakeasyMetadata({ data: "json, name=friendly_name" })
  friendlyName?: string;

  @SpeakeasyMetadata({ data: "json, name=installed_add_on_sid" })
  installedAddOnSid?: string;

  @SpeakeasyMetadata({ data: "json, name=product_name" })
  productName?: string;

  @SpeakeasyMetadata({ data: "json, name=sid" })
  sid?: string;

  @SpeakeasyMetadata({ data: "json, name=unique_name" })
  uniqueName?: string;

  @SpeakeasyMetadata({ data: "json, name=url" })
  url?: string;
}
