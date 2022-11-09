import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetUserVotesShowsShowIdPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=show_id" })
  showId: number;
}


export class GetUserVotesShowsShowIdRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetUserVotesShowsShowIdPathParams;
}


export class GetUserVotesShowsShowIdResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  showVote?: shared.ShowVote;

  @Metadata()
  statusCode: number;
}
