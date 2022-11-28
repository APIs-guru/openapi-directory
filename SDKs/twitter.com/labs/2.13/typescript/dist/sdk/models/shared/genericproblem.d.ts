import { SpeakeasyBase } from "../../../internal/utils";
/**
 * A generic problem with no additional information beyond that provided by the HTTP status code.
**/
export declare class GenericProblem extends SpeakeasyBase {
    detail: string;
    status: number;
    title: string;
    type: string;
}
