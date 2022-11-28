import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// Country
/** 
 * Country
**/
export class Country extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=countryCode" })
  countryCode?: string;

  @SpeakeasyMetadata({ data: "json, name=names" })
  names?: Map<string, string>;
}
