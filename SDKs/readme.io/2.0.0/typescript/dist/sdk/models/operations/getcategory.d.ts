import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetCategoryPathParams extends SpeakeasyBase {
    slug: string;
}
export declare class GetCategoryHeaders extends SpeakeasyBase {
    xReadmeVersion: string;
}
export declare class GetCategorySecurity extends SpeakeasyBase {
    apiKey: shared.SchemeApiKey;
}
export declare class GetCategoryRequest extends SpeakeasyBase {
    pathParams: GetCategoryPathParams;
    headers: GetCategoryHeaders;
    security: GetCategorySecurity;
}
export declare class GetCategoryResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
