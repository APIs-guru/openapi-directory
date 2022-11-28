import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class PutUserVotesShowsShowIdPathParams extends SpeakeasyBase {
    showId: number;
}
export declare class PutUserVotesShowsShowIdRequest extends SpeakeasyBase {
    pathParams: PutUserVotesShowsShowIdPathParams;
    request?: shared.ShowVoteInput;
}
export declare class PutUserVotesShowsShowIdResponse extends SpeakeasyBase {
    contentType: string;
    showVote?: shared.ShowVote;
    statusCode: number;
}
