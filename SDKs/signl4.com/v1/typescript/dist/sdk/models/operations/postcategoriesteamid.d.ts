import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class PostCategoriesTeamIdPathParams extends SpeakeasyBase {
    teamId: string;
}
export declare class PostCategoriesTeamIdRequestsInput extends SpeakeasyBase {
    categoryInfo?: shared.CategoryInfoInput;
    categoryInfo1?: shared.CategoryInfoInput;
    categoryInfo2?: shared.CategoryInfoInput;
    categoryInfo3?: shared.CategoryInfoInput;
}
export declare class PostCategoriesTeamIdRequest extends SpeakeasyBase {
    pathParams: PostCategoriesTeamIdPathParams;
    request?: PostCategoriesTeamIdRequestsInput;
}
export declare class PostCategoriesTeamIdResponse extends SpeakeasyBase {
    body?: Uint8Array;
    categoryInfo?: shared.CategoryInfo;
    contentType: string;
    errorResponseContent?: shared.ErrorResponseContent;
    statusCode: number;
}
