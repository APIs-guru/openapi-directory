import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetAvailableVideoChannelsPathParams extends SpeakeasyBase {
    videoId: number;
}
export declare class GetAvailableVideoChannelsRequest extends SpeakeasyBase {
    pathParams: GetAvailableVideoChannelsPathParams;
}
export declare class GetAvailableVideoChannelsResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    channels?: shared.Channel[];
    legacyError?: shared.LegacyError;
}
