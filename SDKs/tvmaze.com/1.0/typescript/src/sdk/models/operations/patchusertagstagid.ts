import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class PatchUserTagsTagIdPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=tag_id" })
  tagId: number;
}


export class PatchUserTagsTagIdRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: PatchUserTagsTagIdPathParams;

  @Metadata({ data: "request, media_type=application/json" })
  request?: shared.Tag;
}


export class PatchUserTagsTagIdResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  tag?: shared.Tag;
}
