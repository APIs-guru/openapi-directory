import { SpeakeasyBase } from "../../../internal/utils";
/**
 * The object returned for a bad request
**/
export declare class ApiException extends SpeakeasyBase {
    errorNumber?: number;
    message?: string;
    type?: string;
}
