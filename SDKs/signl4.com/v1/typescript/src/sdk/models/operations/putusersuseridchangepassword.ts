import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class PutUsersUserIdChangePasswordPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=userId" })
  userId: string;
}


export class PutUsersUserIdChangePasswordRequests extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "request, media_type=application/*+json" })
  updatePasswordInfo?: shared.UpdatePasswordInfo;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  updatePasswordInfo1?: shared.UpdatePasswordInfo;

  @SpeakeasyMetadata({ data: "request, media_type=application/json-patch+json" })
  updatePasswordInfo2?: shared.UpdatePasswordInfo;

  @SpeakeasyMetadata({ data: "request, media_type=text/json" })
  updatePasswordInfo3?: shared.UpdatePasswordInfo;
}


export class PutUsersUserIdChangePasswordRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: PutUsersUserIdChangePasswordPathParams;

  @SpeakeasyMetadata()
  request?: PutUsersUserIdChangePasswordRequests;
}


export class PutUsersUserIdChangePasswordResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  errorResponseContent?: shared.ErrorResponseContent;

  @SpeakeasyMetadata()
  statusCode: number;
}
