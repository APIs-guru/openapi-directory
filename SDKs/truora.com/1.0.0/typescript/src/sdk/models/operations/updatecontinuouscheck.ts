import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class UpdateContinuousCheckPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=continuous_check_id" })
  continuousCheckId: number;
}


export class UpdateContinuousCheckSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  apiKey: shared.SchemeApiKey;
}


export class UpdateContinuousCheckRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: UpdateContinuousCheckPathParams;

  @Metadata({ data: "request, media_type=application/x-www-form-urlencoded" })
  request: shared.UpdateContinuousCheckInput;

  @Metadata()
  security: UpdateContinuousCheckSecurity;
}


export class UpdateContinuousCheckResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  continuousCheck?: shared.ContinuousCheck;

  @Metadata()
  statusCode: number;
}
