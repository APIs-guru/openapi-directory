import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class AlbumApiDeleteCommentPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=commentId" })
  commentId: number;
}


export class AlbumApiDeleteCommentRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: AlbumApiDeleteCommentPathParams;
}


export class AlbumApiDeleteCommentResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
