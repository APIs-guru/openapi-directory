import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// SelfHref
/** 
 * URL to the current page of records
**/
export class SelfHref extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=href" })
  href?: string;
}
