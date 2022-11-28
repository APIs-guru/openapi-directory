import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetMyFeedGridSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
}
export declare class GetMyFeedGridRequest extends SpeakeasyBase {
    security: GetMyFeedGridSecurity;
}
export declare class GetMyFeedGridResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
