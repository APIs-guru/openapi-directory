import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class CheckIfUserSubscribedToChannelAlt1PathParams extends SpeakeasyBase {
    channelId: number;
}
export declare class CheckIfUserSubscribedToChannelAlt1Request extends SpeakeasyBase {
    pathParams: CheckIfUserSubscribedToChannelAlt1PathParams;
}
export declare class CheckIfUserSubscribedToChannelAlt1Response extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    legacyError?: shared.LegacyError;
}
