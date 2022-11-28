import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetMyFeedCustomizeSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
}
export declare class GetMyFeedCustomizeRequest extends SpeakeasyBase {
    security: GetMyFeedCustomizeSecurity;
}
export declare class GetMyFeedCustomizeResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
