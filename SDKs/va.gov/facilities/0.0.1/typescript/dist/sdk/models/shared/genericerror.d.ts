import { SpeakeasyBase } from "../../../internal/utils";
/**
 * A general error json response for things like Authorization Errors or Bad Requests (ex. invalid parameter values).
**/
export declare class GenericError extends SpeakeasyBase {
    message: string;
}
