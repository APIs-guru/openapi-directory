import { SpeakeasyBase } from "../../../internal/utils";
import { GetPayeeListResponse } from "./getpayeelistresponse";
/**
 * List Payees Response Object
**/
export declare class PagedPayeeResponse extends SpeakeasyBase {
    content?: GetPayeeListResponse[];
    links?: any[];
    page?: any;
    summary?: any;
}
