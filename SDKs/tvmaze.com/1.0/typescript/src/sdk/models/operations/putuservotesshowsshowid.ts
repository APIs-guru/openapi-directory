import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class PutUserVotesShowsShowIdPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=show_id" })
  showId: number;
}


export class PutUserVotesShowsShowIdRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: PutUserVotesShowsShowIdPathParams;

  @Metadata({ data: "request, media_type=application/json" })
  request?: shared.ShowVote;
}


export class PutUserVotesShowsShowIdResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  showVote?: shared.ShowVote;

  @Metadata()
  statusCode: number;
}
