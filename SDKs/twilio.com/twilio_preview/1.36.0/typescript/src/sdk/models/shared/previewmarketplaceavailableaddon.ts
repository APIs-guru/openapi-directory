import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class PreviewMarketplaceAvailableAddOn extends SpeakeasyBase {
  @Metadata({ data: "json, name=configuration_schema" })
  configurationSchema?: any;

  @Metadata({ data: "json, name=description" })
  description?: string;

  @Metadata({ data: "json, name=friendly_name" })
  friendlyName?: string;

  @Metadata({ data: "json, name=links" })
  links?: Map<string, any>;

  @Metadata({ data: "json, name=pricing_type" })
  pricingType?: string;

  @Metadata({ data: "json, name=sid" })
  sid?: string;

  @Metadata({ data: "json, name=url" })
  url?: string;
}
