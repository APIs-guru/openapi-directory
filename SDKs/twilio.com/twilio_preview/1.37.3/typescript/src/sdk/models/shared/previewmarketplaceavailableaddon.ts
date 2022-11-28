import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class PreviewMarketplaceAvailableAddOn extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=configuration_schema" })
  configurationSchema?: any;

  @SpeakeasyMetadata({ data: "json, name=description" })
  description?: string;

  @SpeakeasyMetadata({ data: "json, name=friendly_name" })
  friendlyName?: string;

  @SpeakeasyMetadata({ data: "json, name=links" })
  links?: Map<string, any>;

  @SpeakeasyMetadata({ data: "json, name=pricing_type" })
  pricingType?: string;

  @SpeakeasyMetadata({ data: "json, name=sid" })
  sid?: string;

  @SpeakeasyMetadata({ data: "json, name=url" })
  url?: string;
}
