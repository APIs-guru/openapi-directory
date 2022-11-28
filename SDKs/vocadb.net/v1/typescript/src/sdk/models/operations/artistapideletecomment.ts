import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class ArtistApiDeleteCommentPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=commentId" })
  commentId: number;
}


export class ArtistApiDeleteCommentRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: ArtistApiDeleteCommentPathParams;
}


export class ArtistApiDeleteCommentResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
