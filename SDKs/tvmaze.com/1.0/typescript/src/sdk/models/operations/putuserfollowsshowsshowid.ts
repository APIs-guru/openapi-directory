import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class PutUserFollowsShowsShowIdPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=show_id" })
  showId: number;
}


export class PutUserFollowsShowsShowIdRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: PutUserFollowsShowsShowIdPathParams;
}


export class PutUserFollowsShowsShowIdResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  showFollow?: shared.ShowFollow;

  @Metadata()
  statusCode: number;
}
