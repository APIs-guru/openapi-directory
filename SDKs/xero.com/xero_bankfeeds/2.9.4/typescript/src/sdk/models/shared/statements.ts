import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { Statement } from "./statement";
import { Pagination } from "./pagination";


// Statements
/** 
 * https://developer.xero.com/documentation/bank-feeds-api/statements
**/
export class Statements extends SpeakeasyBase {
  @Metadata({ data: "json, name=items", elemType: shared.Statement })
  items?: Statement[];

  @Metadata({ data: "json, name=pagination" })
  pagination?: Pagination;
}
