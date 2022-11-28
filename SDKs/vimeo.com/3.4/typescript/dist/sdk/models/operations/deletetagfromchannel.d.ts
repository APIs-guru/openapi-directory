import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DeleteTagFromChannelPathParams extends SpeakeasyBase {
    channelId: number;
    word: string;
}
export declare class DeleteTagFromChannelSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
}
export declare class DeleteTagFromChannelRequest extends SpeakeasyBase {
    pathParams: DeleteTagFromChannelPathParams;
    security: DeleteTagFromChannelSecurity;
}
export declare class DeleteTagFromChannelResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    error?: shared.Error;
    legacyError?: shared.LegacyError;
}
