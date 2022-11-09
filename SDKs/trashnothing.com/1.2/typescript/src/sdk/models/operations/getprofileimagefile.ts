import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class GetProfileImageFilePathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=user_id" })
  userId: string;
}


export class GetProfileImageFileQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=default" })
  default?: string;
}


export class GetProfileImageFileRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetProfileImageFilePathParams;

  @Metadata()
  queryParams: GetProfileImageFileQueryParams;
}


export class GetProfileImageFileResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
