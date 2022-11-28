import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Server response for Get tenant users API call.
**/
export declare class UserListResult extends SpeakeasyBase {
    odataNextLink?: string;
    value?: Map<string, Map<string, any>>[];
}
