import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// FirstHref
/** 
 * URL to the first page of records
**/
export class FirstHref extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=href" })
  href?: string;
}
