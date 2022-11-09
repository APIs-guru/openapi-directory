import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { SupportedCountry } from "./supportedcountry";


export class SupportedCountriesResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=countries", elemType: shared.SupportedCountry })
  countries?: SupportedCountry[];
}
