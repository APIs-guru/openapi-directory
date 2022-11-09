import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// Address
/** 
 * Address
**/
export class Address extends SpeakeasyBase {
  @Metadata({ data: "json, name=line1s" })
  line1s?: Map<string, string>;

  @Metadata({ data: "json, name=line2s" })
  line2s?: Map<string, string>;

  @Metadata({ data: "json, name=line3s" })
  line3s?: Map<string, string>;
}
