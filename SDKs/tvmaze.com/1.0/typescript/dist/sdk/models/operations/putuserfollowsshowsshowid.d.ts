import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class PutUserFollowsShowsShowIdPathParams extends SpeakeasyBase {
    showId: number;
}
export declare class PutUserFollowsShowsShowIdRequest extends SpeakeasyBase {
    pathParams: PutUserFollowsShowsShowIdPathParams;
}
export declare class PutUserFollowsShowsShowIdResponse extends SpeakeasyBase {
    contentType: string;
    showFollow?: shared.ShowFollow;
    statusCode: number;
}
