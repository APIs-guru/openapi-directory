import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class DeleteUserTagsTagIdShowsShowIdPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=show_id" })
  showId: number;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=tag_id" })
  tagId: number;
}


export class DeleteUserTagsTagIdShowsShowIdRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: DeleteUserTagsTagIdShowsShowIdPathParams;
}


export class DeleteUserTagsTagIdShowsShowIdResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
