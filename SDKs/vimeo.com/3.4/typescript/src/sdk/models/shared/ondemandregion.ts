import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class OnDemandRegion extends SpeakeasyBase {
  @Metadata({ data: "json, name=country_code" })
  countryCode: string;

  @Metadata({ data: "json, name=country_name" })
  countryName: string;

  @Metadata({ data: "json, name=uri" })
  uri: string;
}
