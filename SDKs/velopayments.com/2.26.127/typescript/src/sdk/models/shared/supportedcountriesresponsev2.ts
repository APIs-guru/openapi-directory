import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { SupportedCountryV2 } from "./supportedcountryv2";


export class SupportedCountriesResponseV2 extends SpeakeasyBase {
  @Metadata({ data: "json, name=countries", elemType: shared.SupportedCountryV2 })
  countries?: SupportedCountryV2[];
}
