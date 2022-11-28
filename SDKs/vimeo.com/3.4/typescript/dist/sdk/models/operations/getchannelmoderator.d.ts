import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetChannelModeratorPathParams extends SpeakeasyBase {
    channelId: number;
    userId: number;
}
export declare class GetChannelModeratorRequest extends SpeakeasyBase {
    pathParams: GetChannelModeratorPathParams;
}
export declare class GetChannelModeratorResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    user?: shared.User;
}
