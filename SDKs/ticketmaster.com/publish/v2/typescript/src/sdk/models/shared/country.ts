import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// Country
/** 
 * Country
**/
export class Country extends SpeakeasyBase {
  @Metadata({ data: "json, name=countryCode" })
  countryCode?: string;

  @Metadata({ data: "json, name=names" })
  names?: Map<string, string>;
}
