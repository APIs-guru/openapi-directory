import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";


export enum GetUserVotesShowsEmbedEnum {
    Show = "show"
}


export class GetUserVotesShowsQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=embed" })
  embed?: GetUserVotesShowsEmbedEnum;
}


export class GetUserVotesShowsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: GetUserVotesShowsQueryParams;
}


export class GetUserVotesShowsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata({ elemType: shared.ShowVote })
  showVotes?: shared.ShowVote[];

  @SpeakeasyMetadata()
  statusCode: number;
}
