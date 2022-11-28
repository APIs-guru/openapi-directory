import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class PreviewMarketplaceAvailableAddOnAvailableAddOnExtension extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=available_add_on_sid" })
  availableAddOnSid?: string;

  @SpeakeasyMetadata({ data: "json, name=friendly_name" })
  friendlyName?: string;

  @SpeakeasyMetadata({ data: "json, name=product_name" })
  productName?: string;

  @SpeakeasyMetadata({ data: "json, name=sid" })
  sid?: string;

  @SpeakeasyMetadata({ data: "json, name=unique_name" })
  uniqueName?: string;

  @SpeakeasyMetadata({ data: "json, name=url" })
  url?: string;
}
