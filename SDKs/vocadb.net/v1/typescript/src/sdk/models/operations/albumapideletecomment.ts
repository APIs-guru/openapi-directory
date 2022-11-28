import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class AlbumApiDeleteCommentPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=commentId" })
  commentId: number;
}


export class AlbumApiDeleteCommentRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: AlbumApiDeleteCommentPathParams;
}


export class AlbumApiDeleteCommentResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
