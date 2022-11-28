import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetCategoriesTeamIdCategoryIdPathParams extends SpeakeasyBase {
    categoryId: string;
    teamId: string;
}
export declare class GetCategoriesTeamIdCategoryIdRequest extends SpeakeasyBase {
    pathParams: GetCategoriesTeamIdCategoryIdPathParams;
}
export declare class GetCategoriesTeamIdCategoryIdResponse extends SpeakeasyBase {
    body?: Uint8Array;
    categoryInfo?: shared.CategoryInfo;
    contentType: string;
    errorResponseContent?: shared.ErrorResponseContent;
    statusCode: number;
}
