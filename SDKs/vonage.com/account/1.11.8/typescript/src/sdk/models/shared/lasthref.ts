import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// LastHref
/** 
 * URL to the last page of records
**/
export class LastHref extends SpeakeasyBase {
  @Metadata({ data: "json, name=href" })
  href?: string;
}
