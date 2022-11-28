import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetUsersIdCategoryRulesPathParams extends SpeakeasyBase {
    id: number;
}
export declare class GetUsersIdCategoryRulesRequest extends SpeakeasyBase {
    pathParams: GetUsersIdCategoryRulesPathParams;
}
export declare class GetUsersIdCategoryRulesResponse extends SpeakeasyBase {
    categoryRules?: shared.CategoryRule[];
    contentType: string;
    error?: shared.Error;
    statusCode: number;
}
