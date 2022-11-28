import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class CategorizeChannelPathParams extends SpeakeasyBase {
    category: string;
    channelId: number;
}
export declare class CategorizeChannelSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
}
export declare class CategorizeChannelRequest extends SpeakeasyBase {
    pathParams: CategorizeChannelPathParams;
    security: CategorizeChannelSecurity;
}
export declare class CategorizeChannelResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    error?: shared.Error;
    legacyError?: shared.LegacyError;
}
