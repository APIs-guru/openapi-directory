import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class ApiV2010AccountAvailablePhoneNumberCountry extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=beta" })
  beta?: boolean;

  @SpeakeasyMetadata({ data: "json, name=country" })
  country?: string;

  @SpeakeasyMetadata({ data: "json, name=country_code" })
  countryCode?: string;

  @SpeakeasyMetadata({ data: "json, name=subresource_uris" })
  subresourceUris?: Map<string, any>;

  @SpeakeasyMetadata({ data: "json, name=uri" })
  uri?: string;
}
