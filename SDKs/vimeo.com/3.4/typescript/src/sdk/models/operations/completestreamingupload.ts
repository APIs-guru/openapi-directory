import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class CompleteStreamingUploadPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=upload" })
  upload: number;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=user_id" })
  userId: number;
}


export class CompleteStreamingUploadQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=signature" })
  signature: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=video_file_id" })
  videoFileId: number;
}


export class CompleteStreamingUploadSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oauth2: shared.SchemeOauth2;
}


export class CompleteStreamingUploadRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: CompleteStreamingUploadPathParams;

  @SpeakeasyMetadata()
  queryParams: CompleteStreamingUploadQueryParams;

  @SpeakeasyMetadata()
  security: CompleteStreamingUploadSecurity;
}


export class CompleteStreamingUploadResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  error?: shared.Error;
}
