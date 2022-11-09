import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class DeleteUserVotesShowsShowIdPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=show_id" })
  showId: number;
}


export class DeleteUserVotesShowsShowIdRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: DeleteUserVotesShowsShowIdPathParams;
}


export class DeleteUserVotesShowsShowIdResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
