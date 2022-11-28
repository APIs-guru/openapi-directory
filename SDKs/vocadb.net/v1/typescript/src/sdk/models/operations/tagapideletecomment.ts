import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class TagApiDeleteCommentPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=commentId" })
  commentId: number;
}


export class TagApiDeleteCommentRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: TagApiDeleteCommentPathParams;
}


export class TagApiDeleteCommentResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
