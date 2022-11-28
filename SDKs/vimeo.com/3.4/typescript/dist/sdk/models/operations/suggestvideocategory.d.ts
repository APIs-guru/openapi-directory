import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class SuggestVideoCategoryPathParams extends SpeakeasyBase {
    videoId: number;
}
export declare class SuggestVideoCategoryRequestBody extends SpeakeasyBase {
    category: string[];
}
export declare class SuggestVideoCategorySecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
}
export declare class SuggestVideoCategoryRequest extends SpeakeasyBase {
    pathParams: SuggestVideoCategoryPathParams;
    request: SuggestVideoCategoryRequestBody;
    security: SuggestVideoCategorySecurity;
}
export declare class SuggestVideoCategoryResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    category?: shared.Category;
    legacyError?: shared.LegacyError;
}
