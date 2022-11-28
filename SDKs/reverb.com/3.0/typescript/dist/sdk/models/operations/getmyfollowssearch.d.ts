import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetMyFollowsSearchSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
}
export declare class GetMyFollowsSearchRequest extends SpeakeasyBase {
    security: GetMyFollowsSearchSecurity;
}
export declare class GetMyFollowsSearchResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
