import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class CompleteStreamingUploadPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=upload" })
  upload: number;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=user_id" })
  userId: number;
}


export class CompleteStreamingUploadQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=signature" })
  signature: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=video_file_id" })
  videoFileId: number;
}


export class CompleteStreamingUploadSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2: shared.SchemeOauth2;
}


export class CompleteStreamingUploadRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: CompleteStreamingUploadPathParams;

  @Metadata()
  queryParams: CompleteStreamingUploadQueryParams;

  @Metadata()
  security: CompleteStreamingUploadSecurity;
}


export class CompleteStreamingUploadResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  error?: shared.Error;
}
