import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetCategoriesIdPathParams extends SpeakeasyBase {
    id: string;
}
export declare class GetCategoriesIdRequest extends SpeakeasyBase {
    pathParams: GetCategoriesIdPathParams;
}
export declare class GetCategoriesIdResponse extends SpeakeasyBase {
    contentType: string;
    getCategoryResponse?: shared.GetCategoryResponse;
    statusCode: number;
}
