import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class PutCategoriesTeamIdCategoryIdPathParams extends SpeakeasyBase {
    categoryId: string;
    teamId: string;
}
export declare class PutCategoriesTeamIdCategoryIdRequestsInput extends SpeakeasyBase {
    categoryInfo?: shared.CategoryInfoInput;
    categoryInfo1?: shared.CategoryInfoInput;
    categoryInfo2?: shared.CategoryInfoInput;
    categoryInfo3?: shared.CategoryInfoInput;
}
export declare class PutCategoriesTeamIdCategoryIdRequest extends SpeakeasyBase {
    pathParams: PutCategoriesTeamIdCategoryIdPathParams;
    request?: PutCategoriesTeamIdCategoryIdRequestsInput;
}
export declare class PutCategoriesTeamIdCategoryIdResponse extends SpeakeasyBase {
    body?: Uint8Array;
    categoryInfo?: shared.CategoryInfo;
    contentType: string;
    errorResponseContent?: shared.ErrorResponseContent;
    statusCode: number;
}
