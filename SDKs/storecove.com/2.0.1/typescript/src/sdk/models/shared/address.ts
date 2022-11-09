import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { CountryEnum } from "./countryenum";


// Address
/** 
 * The address
**/
export class Address extends SpeakeasyBase {
  @Metadata({ data: "json, name=city" })
  city?: string;

  @Metadata({ data: "json, name=country" })
  country: CountryEnum;

  @Metadata({ data: "json, name=county" })
  county?: string;

  @Metadata({ data: "json, name=street1" })
  street1?: string;

  @Metadata({ data: "json, name=street2" })
  street2?: string;

  @Metadata({ data: "json, name=zip" })
  zip?: string;
}
