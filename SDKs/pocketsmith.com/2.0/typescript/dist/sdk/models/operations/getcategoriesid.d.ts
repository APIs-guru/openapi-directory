import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetCategoriesIdPathParams extends SpeakeasyBase {
    id: number;
}
export declare class GetCategoriesIdRequest extends SpeakeasyBase {
    pathParams: GetCategoriesIdPathParams;
}
export declare class GetCategoriesIdResponse extends SpeakeasyBase {
    category?: shared.Category;
    contentType: string;
    error?: shared.Error;
    statusCode: number;
}
