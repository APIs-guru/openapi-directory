import { SpeakeasyBase } from "../../../internal/utils";
/**
 * EmployersSearchRequest defines the request schema for `/employers/search`.
**/
export declare class EmployersSearchRequest extends SpeakeasyBase {
    clientId?: string;
    products: string[];
    query: string;
    secret?: string;
}
