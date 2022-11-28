import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// NextHref
/** 
 * URL to the next page of records
**/
export class NextHref extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=href" })
  href?: string;
}
