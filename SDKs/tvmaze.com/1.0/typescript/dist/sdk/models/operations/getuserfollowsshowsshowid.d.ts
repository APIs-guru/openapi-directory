import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetUserFollowsShowsShowIdPathParams extends SpeakeasyBase {
    showId: number;
}
export declare class GetUserFollowsShowsShowIdRequest extends SpeakeasyBase {
    pathParams: GetUserFollowsShowsShowIdPathParams;
}
export declare class GetUserFollowsShowsShowIdResponse extends SpeakeasyBase {
    contentType: string;
    showFollow?: shared.ShowFollow;
    statusCode: number;
}
