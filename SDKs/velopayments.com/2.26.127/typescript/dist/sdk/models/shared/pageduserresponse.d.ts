import { SpeakeasyBase } from "../../../internal/utils";
import { UserResponse } from "./userresponse";
/**
 * List Users Response Object
**/
export declare class PagedUserResponse extends SpeakeasyBase {
    content?: UserResponse[];
    links?: any[];
    page?: any;
}
