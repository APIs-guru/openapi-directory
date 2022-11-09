import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare class InvalidRequestProblemErrors extends SpeakeasyBase {
    message?: string;
    parameters?: Map<string, string[]>;
}
/**
 * A problem that indicates this request is invalid.
**/
export declare class InvalidRequestProblem extends SpeakeasyBase {
    detail: string;
    errors?: InvalidRequestProblemErrors[];
    title: string;
    type: string;
}
