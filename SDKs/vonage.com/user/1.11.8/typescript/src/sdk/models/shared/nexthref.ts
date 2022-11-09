import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// NextHref
/** 
 * URL to the next page of records
**/
export class NextHref extends SpeakeasyBase {
  @Metadata({ data: "json, name=href" })
  href?: string;
}
