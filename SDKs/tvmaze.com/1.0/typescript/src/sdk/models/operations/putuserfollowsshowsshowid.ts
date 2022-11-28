import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class PutUserFollowsShowsShowIdPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=show_id" })
  showId: number;
}


export class PutUserFollowsShowsShowIdRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: PutUserFollowsShowsShowIdPathParams;
}


export class PutUserFollowsShowsShowIdResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  showFollow?: shared.ShowFollow;

  @SpeakeasyMetadata()
  statusCode: number;
}
