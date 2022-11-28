import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Server response for Get tenant groups API call
**/
export declare class GroupListResult extends SpeakeasyBase {
    odataNextLink?: string;
    value?: Map<string, Map<string, any>>[];
}
