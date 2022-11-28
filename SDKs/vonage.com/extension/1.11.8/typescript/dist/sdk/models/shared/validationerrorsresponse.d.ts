import { SpeakeasyBase } from "../../../internal/utils";
import { DetailedInvalidParam } from "./detailedinvalidparam";
export declare class ValidationErrorsResponse extends SpeakeasyBase {
    instance?: string;
    invalidParameters?: DetailedInvalidParam[];
    status?: number;
    title?: string;
}
