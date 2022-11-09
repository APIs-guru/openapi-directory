import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";

export enum GetUserVotesShowsEmbedEnum {
    Show = "show"
}


export class GetUserVotesShowsQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=embed" })
  embed?: GetUserVotesShowsEmbedEnum;
}


export class GetUserVotesShowsRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: GetUserVotesShowsQueryParams;
}


export class GetUserVotesShowsResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata({ elemType: shared.ShowVote })
  showVotes?: shared.ShowVote[];

  @Metadata()
  statusCode: number;
}
