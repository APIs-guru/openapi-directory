import { SpeakeasyBase } from "../../../internal/utils";
import { Error } from "./error";
export declare class ErrorResponse extends SpeakeasyBase {
    errorCode?: string;
    errorMessage?: string;
    errors?: Error[];
}
