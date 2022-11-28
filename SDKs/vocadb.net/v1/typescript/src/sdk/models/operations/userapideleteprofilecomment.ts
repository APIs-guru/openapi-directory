import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class UserApiDeleteProfileCommentPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=commentId" })
  commentId: number;
}


export class UserApiDeleteProfileCommentRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: UserApiDeleteProfileCommentPathParams;
}


export class UserApiDeleteProfileCommentResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
