import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetContinuousCheckPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=continuous_check_id" })
  continuousCheckId: number;
}


export class GetContinuousCheckSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  apiKey: shared.SchemeApiKey;
}


export class GetContinuousCheckRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetContinuousCheckPathParams;

  @Metadata()
  security: GetContinuousCheckSecurity;
}


export class GetContinuousCheckResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  continuousCheck?: shared.ContinuousCheck;

  @Metadata()
  statusCode: number;
}
