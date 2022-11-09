import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class DeleteUserTagsTagIdPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=tag_id" })
  tagId: number;
}


export class DeleteUserTagsTagIdRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: DeleteUserTagsTagIdPathParams;
}


export class DeleteUserTagsTagIdResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
