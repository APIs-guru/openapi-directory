import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetUploadAttemptPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=upload" })
  upload: number;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=user_id" })
  userId: number;
}


export class GetUploadAttemptSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oauth2: shared.SchemeOauth2;
}


export class GetUploadAttemptRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetUploadAttemptPathParams;

  @SpeakeasyMetadata()
  security: GetUploadAttemptSecurity;
}


export class GetUploadAttemptResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  uploadAttempt?: shared.UploadAttempt;
}
