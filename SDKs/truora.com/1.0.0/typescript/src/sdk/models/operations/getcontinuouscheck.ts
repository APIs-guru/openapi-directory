import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetContinuousCheckPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=continuous_check_id" })
  continuousCheckId: number;
}


export class GetContinuousCheckSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  apiKey: shared.SchemeApiKey;
}


export class GetContinuousCheckRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetContinuousCheckPathParams;

  @SpeakeasyMetadata()
  security: GetContinuousCheckSecurity;
}


export class GetContinuousCheckResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  continuousCheck?: shared.ContinuousCheck;

  @SpeakeasyMetadata()
  statusCode: number;
}
