import { SpeakeasyBase } from "../../../internal/utils";
import { Statement } from "./statement";
import { Pagination } from "./pagination";
/**
 * https://developer.xero.com/documentation/bank-feeds-api/statements
**/
export declare class Statements extends SpeakeasyBase {
    items?: Statement[];
    pagination?: Pagination;
}
