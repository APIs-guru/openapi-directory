import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class SongListApiDeleteCommentPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=commentId" })
  commentId: number;
}


export class SongListApiDeleteCommentRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: SongListApiDeleteCommentPathParams;
}


export class SongListApiDeleteCommentResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
