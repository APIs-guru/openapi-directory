import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class CreateContinuousCheckSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  apiKey: shared.SchemeApiKey;
}


export class CreateContinuousCheckRequest extends SpeakeasyBase {
  @Metadata({ data: "request, media_type=application/x-www-form-urlencoded" })
  request: shared.CreateContinuousCheckInput;

  @Metadata()
  security: CreateContinuousCheckSecurity;
}


export class CreateContinuousCheckResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  continuousCheck?: shared.ContinuousCheck;

  @Metadata()
  error?: any;

  @Metadata()
  statusCode: number;
}
