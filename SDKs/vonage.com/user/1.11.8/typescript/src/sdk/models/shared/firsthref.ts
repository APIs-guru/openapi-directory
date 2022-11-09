import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// FirstHref
/** 
 * URL to the first page of records
**/
export class FirstHref extends SpeakeasyBase {
  @Metadata({ data: "json, name=href" })
  href?: string;
}
