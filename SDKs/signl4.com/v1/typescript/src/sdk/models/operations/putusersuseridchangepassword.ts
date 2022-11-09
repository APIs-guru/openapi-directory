import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class PutUsersUserIdChangePasswordPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=userId" })
  userId: string;
}


export class PutUsersUserIdChangePasswordRequests extends SpeakeasyBase {
  @Metadata({ data: "request, media_type=application/*+json" })
  updatePasswordInfo?: shared.UpdatePasswordInfo;

  @Metadata({ data: "request, media_type=application/json" })
  updatePasswordInfo1?: shared.UpdatePasswordInfo;

  @Metadata({ data: "request, media_type=application/json-patch+json" })
  updatePasswordInfo2?: shared.UpdatePasswordInfo;

  @Metadata({ data: "request, media_type=text/json" })
  updatePasswordInfo3?: shared.UpdatePasswordInfo;
}


export class PutUsersUserIdChangePasswordRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: PutUsersUserIdChangePasswordPathParams;

  @Metadata()
  request?: PutUsersUserIdChangePasswordRequests;
}


export class PutUsersUserIdChangePasswordResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  errorResponseContent?: shared.ErrorResponseContent;

  @Metadata()
  statusCode: number;
}
