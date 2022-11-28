import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class AddChannelCategoriesPathParams extends SpeakeasyBase {
    channelId: number;
}
export declare class AddChannelCategoriesRequestBody extends SpeakeasyBase {
    channels: string[];
}
export declare class AddChannelCategoriesRequest extends SpeakeasyBase {
    pathParams: AddChannelCategoriesPathParams;
    request: AddChannelCategoriesRequestBody;
}
export declare class AddChannelCategoriesResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    error?: shared.Error;
    legacyError?: shared.LegacyError;
}
