import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class SongListApiDeleteCommentPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=commentId" })
  commentId: number;
}


export class SongListApiDeleteCommentRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: SongListApiDeleteCommentPathParams;
}


export class SongListApiDeleteCommentResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
