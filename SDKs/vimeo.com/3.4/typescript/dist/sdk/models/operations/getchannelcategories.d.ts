import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetChannelCategoriesPathParams extends SpeakeasyBase {
    channelId: number;
}
export declare class GetChannelCategoriesRequest extends SpeakeasyBase {
    pathParams: GetChannelCategoriesPathParams;
}
export declare class GetChannelCategoriesResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    categories?: shared.Category[];
    legacyError?: shared.LegacyError;
}
