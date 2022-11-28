import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetMyFollowsSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
}
export declare class GetMyFollowsRequest extends SpeakeasyBase {
    security: GetMyFollowsSecurity;
}
export declare class GetMyFollowsResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
