import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class AddChannelTagPathParams extends SpeakeasyBase {
    channelId: number;
    word: string;
}
export declare class AddChannelTagSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
}
export declare class AddChannelTagRequest extends SpeakeasyBase {
    pathParams: AddChannelTagPathParams;
    security: AddChannelTagSecurity;
}
export declare class AddChannelTagResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    error?: shared.Error;
    legacyError?: shared.LegacyError;
}
