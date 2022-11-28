import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { CountryEnum } from "./countryenum";



// Address
/** 
 * The address
**/
export class Address extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=city" })
  city?: string;

  @SpeakeasyMetadata({ data: "json, name=country" })
  country: CountryEnum;

  @SpeakeasyMetadata({ data: "json, name=county" })
  county?: string;

  @SpeakeasyMetadata({ data: "json, name=street1" })
  street1?: string;

  @SpeakeasyMetadata({ data: "json, name=street2" })
  street2?: string;

  @SpeakeasyMetadata({ data: "json, name=zip" })
  zip?: string;
}
