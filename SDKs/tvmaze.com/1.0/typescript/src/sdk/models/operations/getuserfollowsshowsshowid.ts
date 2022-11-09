import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetUserFollowsShowsShowIdPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=show_id" })
  showId: number;
}


export class GetUserFollowsShowsShowIdRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetUserFollowsShowsShowIdPathParams;
}


export class GetUserFollowsShowsShowIdResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  showFollow?: shared.ShowFollow;

  @Metadata()
  statusCode: number;
}
