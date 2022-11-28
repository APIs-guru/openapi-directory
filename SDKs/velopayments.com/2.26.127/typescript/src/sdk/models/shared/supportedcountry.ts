import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class SupportedCountry extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=currencies" })
  currencies?: string[];

  @SpeakeasyMetadata({ data: "json, name=isoCountryCode" })
  isoCountryCode?: string;
}
