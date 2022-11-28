import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { SupportedCountry } from "./supportedcountry";



export class SupportedCountriesResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=countries", elemType: SupportedCountry })
  countries?: SupportedCountry[];
}
