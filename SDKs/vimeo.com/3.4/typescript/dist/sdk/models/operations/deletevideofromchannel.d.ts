import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DeleteVideoFromChannelPathParams extends SpeakeasyBase {
    channelId: number;
    videoId: number;
}
export declare class DeleteVideoFromChannelSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
}
export declare class DeleteVideoFromChannelRequest extends SpeakeasyBase {
    pathParams: DeleteVideoFromChannelPathParams;
    security: DeleteVideoFromChannelSecurity;
}
export declare class DeleteVideoFromChannelResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    legacyError?: shared.LegacyError;
}
