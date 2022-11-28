import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class SubscribeToChannelAlt1PathParams extends SpeakeasyBase {
    channelId: number;
}
export declare class SubscribeToChannelAlt1Security extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
}
export declare class SubscribeToChannelAlt1Request extends SpeakeasyBase {
    pathParams: SubscribeToChannelAlt1PathParams;
    security: SubscribeToChannelAlt1Security;
}
export declare class SubscribeToChannelAlt1Response extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    legacyError?: shared.LegacyError;
}
