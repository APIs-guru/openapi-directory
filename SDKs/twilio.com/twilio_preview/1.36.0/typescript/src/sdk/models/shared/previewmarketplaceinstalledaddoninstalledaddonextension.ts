import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class PreviewMarketplaceInstalledAddOnInstalledAddOnExtension extends SpeakeasyBase {
  @Metadata({ data: "json, name=enabled" })
  enabled?: boolean;

  @Metadata({ data: "json, name=friendly_name" })
  friendlyName?: string;

  @Metadata({ data: "json, name=installed_add_on_sid" })
  installedAddOnSid?: string;

  @Metadata({ data: "json, name=product_name" })
  productName?: string;

  @Metadata({ data: "json, name=sid" })
  sid?: string;

  @Metadata({ data: "json, name=unique_name" })
  uniqueName?: string;

  @Metadata({ data: "json, name=url" })
  url?: string;
}
