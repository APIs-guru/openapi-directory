import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetMyPayoutsSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
}
export declare class GetMyPayoutsRequest extends SpeakeasyBase {
    security: GetMyPayoutsSecurity;
}
export declare class GetMyPayoutsResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
