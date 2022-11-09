import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class DeleteUserFollowsShowsShowIdPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=show_id" })
  showId: number;
}


export class DeleteUserFollowsShowsShowIdRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: DeleteUserFollowsShowsShowIdPathParams;
}


export class DeleteUserFollowsShowsShowIdResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
