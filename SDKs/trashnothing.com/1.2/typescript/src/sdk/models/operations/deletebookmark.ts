import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class DeleteBookmarkPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=post_id" })
  postId: string;
}


export class DeleteBookmarkRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: DeleteBookmarkPathParams;
}


export class DeleteBookmarkResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
