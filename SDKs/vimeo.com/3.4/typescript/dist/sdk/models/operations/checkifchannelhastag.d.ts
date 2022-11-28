import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class CheckIfChannelHasTagPathParams extends SpeakeasyBase {
    channelId: number;
    word: string;
}
export declare class CheckIfChannelHasTagRequest extends SpeakeasyBase {
    pathParams: CheckIfChannelHasTagPathParams;
}
export declare class CheckIfChannelHasTagResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    error?: shared.Error;
    legacyError?: shared.LegacyError;
}
