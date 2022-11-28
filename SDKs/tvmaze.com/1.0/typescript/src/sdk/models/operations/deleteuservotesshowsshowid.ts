import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class DeleteUserVotesShowsShowIdPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=show_id" })
  showId: number;
}


export class DeleteUserVotesShowsShowIdRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: DeleteUserVotesShowsShowIdPathParams;
}


export class DeleteUserVotesShowsShowIdResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
