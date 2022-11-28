import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class PutUserVotesShowsShowIdPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=show_id" })
  showId: number;
}


export class PutUserVotesShowsShowIdRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: PutUserVotesShowsShowIdPathParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request?: shared.ShowVoteInput;
}


export class PutUserVotesShowsShowIdResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  showVote?: shared.ShowVote;

  @SpeakeasyMetadata()
  statusCode: number;
}
