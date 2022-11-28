import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DeleteChannelPathParams extends SpeakeasyBase {
    channelId: number;
}
export declare class DeleteChannelSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
}
export declare class DeleteChannelRequest extends SpeakeasyBase {
    pathParams: DeleteChannelPathParams;
    security: DeleteChannelSecurity;
}
export declare class DeleteChannelResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    legacyError?: shared.LegacyError;
}
