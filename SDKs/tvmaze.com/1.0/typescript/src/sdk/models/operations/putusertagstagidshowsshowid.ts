import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class PutUserTagsTagIdShowsShowIdPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=show_id" })
  showId: number;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=tag_id" })
  tagId: number;
}


export class PutUserTagsTagIdShowsShowIdRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: PutUserTagsTagIdShowsShowIdPathParams;
}


export class PutUserTagsTagIdShowsShowIdResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  tagInstance?: shared.TagInstance;
}
