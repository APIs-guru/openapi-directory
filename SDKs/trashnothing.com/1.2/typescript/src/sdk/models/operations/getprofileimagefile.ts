import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class GetProfileImageFilePathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=user_id" })
  userId: string;
}


export class GetProfileImageFileQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=default" })
  default?: string;
}


export class GetProfileImageFileRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetProfileImageFilePathParams;

  @SpeakeasyMetadata()
  queryParams: GetProfileImageFileQueryParams;
}


export class GetProfileImageFileResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
