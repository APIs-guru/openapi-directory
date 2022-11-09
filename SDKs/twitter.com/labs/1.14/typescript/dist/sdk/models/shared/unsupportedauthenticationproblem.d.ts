import { SpeakeasyBase } from "../../../internal/utils/utils";
/**
 * A problem that indicates that the authentication used is not supported.
**/
export declare class UnsupportedAuthenticationProblem extends SpeakeasyBase {
    detail: string;
    title: string;
    type: string;
}
