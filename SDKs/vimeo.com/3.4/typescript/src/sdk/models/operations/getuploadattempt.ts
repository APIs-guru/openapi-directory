import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetUploadAttemptPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=upload" })
  upload: number;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=user_id" })
  userId: number;
}


export class GetUploadAttemptSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2: shared.SchemeOauth2;
}


export class GetUploadAttemptRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetUploadAttemptPathParams;

  @Metadata()
  security: GetUploadAttemptSecurity;
}


export class GetUploadAttemptResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  uploadAttempt?: shared.UploadAttempt;
}
