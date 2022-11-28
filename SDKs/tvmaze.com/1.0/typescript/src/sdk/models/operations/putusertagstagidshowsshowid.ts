import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class PutUserTagsTagIdShowsShowIdPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=show_id" })
  showId: number;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=tag_id" })
  tagId: number;
}


export class PutUserTagsTagIdShowsShowIdRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: PutUserTagsTagIdShowsShowIdPathParams;
}


export class PutUserTagsTagIdShowsShowIdResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  tagInstance?: shared.TagInstance;
}
