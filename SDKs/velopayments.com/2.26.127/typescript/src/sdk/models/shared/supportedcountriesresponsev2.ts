import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { SupportedCountryV2 } from "./supportedcountryv2";



export class SupportedCountriesResponseV2 extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=countries", elemType: SupportedCountryV2 })
  countries?: SupportedCountryV2[];
}
