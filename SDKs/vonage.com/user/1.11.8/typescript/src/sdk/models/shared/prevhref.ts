import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// PrevHref
/** 
 * URL to the previous page of records
**/
export class PrevHref extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=href" })
  href?: string;
}
