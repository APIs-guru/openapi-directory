import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetChannelPathParams extends SpeakeasyBase {
    channelId: number;
}
export declare class GetChannelRequest extends SpeakeasyBase {
    pathParams: GetChannelPathParams;
}
export declare class GetChannelResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    channel?: shared.Channel;
}
