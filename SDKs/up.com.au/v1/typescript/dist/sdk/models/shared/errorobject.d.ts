import { SpeakeasyBase } from "../../../internal/utils";
/**
 * If applicable, location in the request that this error relates to. This
 * may be a parameter in the query string, or a an attribute in the
 * request body.
 *
**/
export declare class ErrorObjectSource extends SpeakeasyBase {
    parameter?: string;
    pointer?: string;
}
/**
 * Provides information about an error processing a request.
 *
**/
export declare class ErrorObject extends SpeakeasyBase {
    detail: string;
    source?: ErrorObjectSource;
    status: string;
    title: string;
}
