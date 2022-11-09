import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class ApiV2010AccountAvailablePhoneNumberCountry extends SpeakeasyBase {
  @Metadata({ data: "json, name=beta" })
  beta?: boolean;

  @Metadata({ data: "json, name=country" })
  country?: string;

  @Metadata({ data: "json, name=country_code" })
  countryCode?: string;

  @Metadata({ data: "json, name=subresource_uris" })
  subresourceUris?: Map<string, any>;

  @Metadata({ data: "json, name=uri" })
  uri?: string;
}
