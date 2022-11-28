import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetUsersUserIdImagePathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=userId" })
  userId: string;
}


export class GetUsersUserIdImageQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=height" })
  height?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=width" })
  width?: number;
}


export class GetUsersUserIdImageRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetUsersUserIdImagePathParams;

  @SpeakeasyMetadata()
  queryParams: GetUsersUserIdImageQueryParams;
}


export class GetUsersUserIdImageResponse extends SpeakeasyBase {
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
