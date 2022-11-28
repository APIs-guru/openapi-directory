import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class AddVideosToChannelPathParams extends SpeakeasyBase {
    channelId: number;
}
export declare class AddVideosToChannelRequestBody extends SpeakeasyBase {
    videoUri: string;
}
export declare class AddVideosToChannelSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
}
export declare class AddVideosToChannelRequest extends SpeakeasyBase {
    pathParams: AddVideosToChannelPathParams;
    request: AddVideosToChannelRequestBody;
    security: AddVideosToChannelSecurity;
}
export declare class AddVideosToChannelResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    legacyError?: shared.LegacyError;
}
