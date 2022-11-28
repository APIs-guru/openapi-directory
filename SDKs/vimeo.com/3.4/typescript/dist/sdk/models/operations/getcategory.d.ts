import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetCategoryPathParams extends SpeakeasyBase {
    category: string;
}
export declare class GetCategoryRequest extends SpeakeasyBase {
    pathParams: GetCategoryPathParams;
}
export declare class GetCategoryResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    category?: shared.Category;
    legacyError?: shared.LegacyError;
}
