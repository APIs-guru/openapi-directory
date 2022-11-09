import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class PostUsersUserIdCheckPermissionsPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=userId" })
  userId: string;
}


export class PostUsersUserIdCheckPermissionsQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=teamId" })
  teamId?: string;
}


export class PostUsersUserIdCheckPermissionsRequests extends SpeakeasyBase {
  @Metadata({ data: "request, media_type=application/*+json" })
  stringItemsWrapper?: shared.StringItemsWrapper;

  @Metadata({ data: "request, media_type=application/json" })
  stringItemsWrapper1?: shared.StringItemsWrapper;

  @Metadata({ data: "request, media_type=application/json-patch+json" })
  stringItemsWrapper2?: shared.StringItemsWrapper;

  @Metadata({ data: "request, media_type=text/json" })
  stringItemsWrapper3?: shared.StringItemsWrapper;
}


export class PostUsersUserIdCheckPermissionsRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: PostUsersUserIdCheckPermissionsPathParams;

  @Metadata()
  queryParams: PostUsersUserIdCheckPermissionsQueryParams;

  @Metadata()
  request?: PostUsersUserIdCheckPermissionsRequests;
}


export class PostUsersUserIdCheckPermissionsResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  errorResponseContent?: shared.ErrorResponseContent;

  @Metadata()
  statusCode: number;

  @Metadata()
  userImage?: shared.UserImage;
}
