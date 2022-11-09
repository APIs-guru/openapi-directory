import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class SupportedCountry extends SpeakeasyBase {
  @Metadata({ data: "json, name=currencies" })
  currencies?: string[];

  @Metadata({ data: "json, name=isoCountryCode" })
  isoCountryCode?: string;
}
