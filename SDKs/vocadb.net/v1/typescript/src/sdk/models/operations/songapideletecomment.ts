import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class SongApiDeleteCommentPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=commentId" })
  commentId: number;
}


export class SongApiDeleteCommentRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: SongApiDeleteCommentPathParams;
}


export class SongApiDeleteCommentResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
