import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class AddVideoToChannelPathParams extends SpeakeasyBase {
    channelId: number;
    videoId: number;
}
export declare class AddVideoToChannelSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
}
export declare class AddVideoToChannelRequest extends SpeakeasyBase {
    pathParams: AddVideoToChannelPathParams;
    security: AddVideoToChannelSecurity;
}
export declare class AddVideoToChannelResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    legacyError?: shared.LegacyError;
}
