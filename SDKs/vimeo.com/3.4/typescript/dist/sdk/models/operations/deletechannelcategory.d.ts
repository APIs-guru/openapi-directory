import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DeleteChannelCategoryPathParams extends SpeakeasyBase {
    category: string;
    channelId: number;
}
export declare class DeleteChannelCategorySecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
}
export declare class DeleteChannelCategoryRequest extends SpeakeasyBase {
    pathParams: DeleteChannelCategoryPathParams;
    security: DeleteChannelCategorySecurity;
}
export declare class DeleteChannelCategoryResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    error?: shared.Error;
    legacyError?: shared.LegacyError;
}
