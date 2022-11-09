import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class TagApiDeleteCommentPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=commentId" })
  commentId: number;
}


export class TagApiDeleteCommentRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: TagApiDeleteCommentPathParams;
}


export class TagApiDeleteCommentResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
