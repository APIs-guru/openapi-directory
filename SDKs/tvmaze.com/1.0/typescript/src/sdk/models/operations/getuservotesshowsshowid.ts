import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetUserVotesShowsShowIdPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=show_id" })
  showId: number;
}


export class GetUserVotesShowsShowIdRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetUserVotesShowsShowIdPathParams;
}


export class GetUserVotesShowsShowIdResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  showVote?: shared.ShowVote;

  @SpeakeasyMetadata()
  statusCode: number;
}
