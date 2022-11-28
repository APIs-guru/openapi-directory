import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class UnsubscribeFromChannelAlt1PathParams extends SpeakeasyBase {
    channelId: number;
}
export declare class UnsubscribeFromChannelAlt1Security extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
}
export declare class UnsubscribeFromChannelAlt1Request extends SpeakeasyBase {
    pathParams: UnsubscribeFromChannelAlt1PathParams;
    security: UnsubscribeFromChannelAlt1Security;
}
export declare class UnsubscribeFromChannelAlt1Response extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    legacyError?: shared.LegacyError;
}
