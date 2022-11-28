import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetUserVotesShowsShowIdPathParams extends SpeakeasyBase {
    showId: number;
}
export declare class GetUserVotesShowsShowIdRequest extends SpeakeasyBase {
    pathParams: GetUserVotesShowsShowIdPathParams;
}
export declare class GetUserVotesShowsShowIdResponse extends SpeakeasyBase {
    contentType: string;
    showVote?: shared.ShowVote;
    statusCode: number;
}
