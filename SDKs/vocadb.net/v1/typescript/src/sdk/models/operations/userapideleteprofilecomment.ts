import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class UserApiDeleteProfileCommentPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=commentId" })
  commentId: number;
}


export class UserApiDeleteProfileCommentRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: UserApiDeleteProfileCommentPathParams;
}


export class UserApiDeleteProfileCommentResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
