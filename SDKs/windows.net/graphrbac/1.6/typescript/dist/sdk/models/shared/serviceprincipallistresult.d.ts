import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Server response for get tenant service principals API call.
**/
export declare class ServicePrincipalListResult extends SpeakeasyBase {
    odataNextLink?: string;
    value?: Map<string, Map<string, any>>[];
}
