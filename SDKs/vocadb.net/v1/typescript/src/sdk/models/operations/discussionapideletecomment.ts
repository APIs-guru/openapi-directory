import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class DiscussionApiDeleteCommentPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=commentId" })
  commentId: number;
}


export class DiscussionApiDeleteCommentRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: DiscussionApiDeleteCommentPathParams;
}


export class DiscussionApiDeleteCommentResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
