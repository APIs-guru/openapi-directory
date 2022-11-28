import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum GetUserVotesShowsEmbedEnum {
    Show = "show"
}
export declare class GetUserVotesShowsQueryParams extends SpeakeasyBase {
    embed?: GetUserVotesShowsEmbedEnum;
}
export declare class GetUserVotesShowsRequest extends SpeakeasyBase {
    queryParams: GetUserVotesShowsQueryParams;
}
export declare class GetUserVotesShowsResponse extends SpeakeasyBase {
    contentType: string;
    showVotes?: shared.ShowVote[];
    statusCode: number;
}
