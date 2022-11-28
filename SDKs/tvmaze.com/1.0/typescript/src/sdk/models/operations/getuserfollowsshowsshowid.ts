import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetUserFollowsShowsShowIdPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=show_id" })
  showId: number;
}


export class GetUserFollowsShowsShowIdRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetUserFollowsShowsShowIdPathParams;
}


export class GetUserFollowsShowsShowIdResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  showFollow?: shared.ShowFollow;

  @SpeakeasyMetadata()
  statusCode: number;
}
