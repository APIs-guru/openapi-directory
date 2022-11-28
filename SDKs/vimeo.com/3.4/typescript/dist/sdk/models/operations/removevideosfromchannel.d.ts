import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class RemoveVideosFromChannelPathParams extends SpeakeasyBase {
    channelId: number;
}
export declare class RemoveVideosFromChannelRequestBody extends SpeakeasyBase {
    videoUri: string;
}
export declare class RemoveVideosFromChannelSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
}
export declare class RemoveVideosFromChannelRequest extends SpeakeasyBase {
    pathParams: RemoveVideosFromChannelPathParams;
    request: RemoveVideosFromChannelRequestBody;
    security: RemoveVideosFromChannelSecurity;
}
export declare class RemoveVideosFromChannelResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    legacyError?: shared.LegacyError;
    video?: shared.Video;
}
