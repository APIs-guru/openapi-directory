import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class PostUsersUserIdCheckPermissionsPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=userId" })
  userId: string;
}


export class PostUsersUserIdCheckPermissionsQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=teamId" })
  teamId?: string;
}


export class PostUsersUserIdCheckPermissionsRequests extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "request, media_type=application/*+json" })
  stringItemsWrapper?: shared.StringItemsWrapper;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  stringItemsWrapper1?: shared.StringItemsWrapper;

  @SpeakeasyMetadata({ data: "request, media_type=application/json-patch+json" })
  stringItemsWrapper2?: shared.StringItemsWrapper;

  @SpeakeasyMetadata({ data: "request, media_type=text/json" })
  stringItemsWrapper3?: shared.StringItemsWrapper;
}


export class PostUsersUserIdCheckPermissionsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: PostUsersUserIdCheckPermissionsPathParams;

  @SpeakeasyMetadata()
  queryParams: PostUsersUserIdCheckPermissionsQueryParams;

  @SpeakeasyMetadata()
  request?: PostUsersUserIdCheckPermissionsRequests;
}


export class PostUsersUserIdCheckPermissionsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  errorResponseContent?: shared.ErrorResponseContent;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  userImage?: shared.UserImage;
}
