import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// LastHref
/** 
 * URL to the last page of records
**/
export class LastHref extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=href" })
  href?: string;
}
