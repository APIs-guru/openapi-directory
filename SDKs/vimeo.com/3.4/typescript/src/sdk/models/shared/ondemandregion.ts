import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class OnDemandRegion extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=country_code" })
  countryCode: string;

  @SpeakeasyMetadata({ data: "json, name=country_name" })
  countryName: string;

  @SpeakeasyMetadata({ data: "json, name=uri" })
  uri: string;
}
