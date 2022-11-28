import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetMyFeedSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
}
export declare class GetMyFeedRequest extends SpeakeasyBase {
    security: GetMyFeedSecurity;
}
export declare class GetMyFeedResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
