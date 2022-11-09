import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class ArtistApiDeleteCommentPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=commentId" })
  commentId: number;
}


export class ArtistApiDeleteCommentRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: ArtistApiDeleteCommentPathParams;
}


export class ArtistApiDeleteCommentResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
