import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class UpdateContinuousCheckPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=continuous_check_id" })
  continuousCheckId: number;
}


export class UpdateContinuousCheckSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  apiKey: shared.SchemeApiKey;
}


export class UpdateContinuousCheckRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: UpdateContinuousCheckPathParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/x-www-form-urlencoded" })
  request: shared.UpdateContinuousCheckInput;

  @SpeakeasyMetadata()
  security: UpdateContinuousCheckSecurity;
}


export class UpdateContinuousCheckResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  continuousCheck?: shared.ContinuousCheck;

  @SpeakeasyMetadata()
  statusCode: number;
}
