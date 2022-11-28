import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DeleteCategoriesTeamIdCategoryIdPathParams extends SpeakeasyBase {
    categoryId: string;
    teamId: string;
}
export declare class DeleteCategoriesTeamIdCategoryIdRequest extends SpeakeasyBase {
    pathParams: DeleteCategoriesTeamIdCategoryIdPathParams;
}
export declare class DeleteCategoriesTeamIdCategoryIdResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    errorResponseContent?: shared.ErrorResponseContent;
    statusCode: number;
}
