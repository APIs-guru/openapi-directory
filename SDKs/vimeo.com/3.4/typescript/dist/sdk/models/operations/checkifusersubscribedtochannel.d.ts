import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class CheckIfUserSubscribedToChannelPathParams extends SpeakeasyBase {
    channelId: number;
    userId: number;
}
export declare class CheckIfUserSubscribedToChannelRequest extends SpeakeasyBase {
    pathParams: CheckIfUserSubscribedToChannelPathParams;
}
export declare class CheckIfUserSubscribedToChannelResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    legacyError?: shared.LegacyError;
}
