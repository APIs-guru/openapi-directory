import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class DeleteUserTagsTagIdShowsShowIdPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=show_id" })
  showId: number;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=tag_id" })
  tagId: number;
}


export class DeleteUserTagsTagIdShowsShowIdRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: DeleteUserTagsTagIdShowsShowIdPathParams;
}


export class DeleteUserTagsTagIdShowsShowIdResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
