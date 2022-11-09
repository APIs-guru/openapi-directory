import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// SelfHref
/** 
 * URL to the current page of records
**/
export class SelfHref extends SpeakeasyBase {
  @Metadata({ data: "json, name=href" })
  href?: string;
}
