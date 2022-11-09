import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// PrevHref
/** 
 * URL to the previous page of records
**/
export class PrevHref extends SpeakeasyBase {
  @Metadata({ data: "json, name=href" })
  href?: string;
}
