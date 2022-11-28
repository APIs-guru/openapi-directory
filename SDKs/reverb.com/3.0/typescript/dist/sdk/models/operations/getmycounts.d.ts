import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetMyCountsSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
}
export declare class GetMyCountsRequest extends SpeakeasyBase {
    security: GetMyCountsSecurity;
}
export declare class GetMyCountsResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
