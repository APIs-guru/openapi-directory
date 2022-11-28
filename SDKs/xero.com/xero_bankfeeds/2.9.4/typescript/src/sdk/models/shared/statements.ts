import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Statement } from "./statement";
import { Pagination } from "./pagination";



// Statements
/** 
 * https://developer.xero.com/documentation/bank-feeds-api/statements
**/
export class Statements extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=items", elemType: Statement })
  items?: Statement[];

  @SpeakeasyMetadata({ data: "json, name=pagination" })
  pagination?: Pagination;
}
