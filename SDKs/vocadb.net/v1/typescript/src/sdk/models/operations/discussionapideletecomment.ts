import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class DiscussionApiDeleteCommentPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=commentId" })
  commentId: number;
}


export class DiscussionApiDeleteCommentRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: DiscussionApiDeleteCommentPathParams;
}


export class DiscussionApiDeleteCommentResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
