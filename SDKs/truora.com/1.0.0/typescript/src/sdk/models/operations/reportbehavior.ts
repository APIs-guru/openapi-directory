import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class ReportBehaviorSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  apiKey: shared.SchemeApiKey;
}


export class ReportBehaviorRequest extends SpeakeasyBase {
  @Metadata({ data: "request, media_type=application/x-www-form-urlencoded" })
  request: shared.CreateBehaviorInput;

  @Metadata()
  security: ReportBehaviorSecurity;
}


export class ReportBehaviorResponse extends SpeakeasyBase {
  @Metadata()
  behaviourOutput?: shared.BehaviourOutput;

  @Metadata()
  contentType: string;

  @Metadata()
  errors?: any[];

  @Metadata()
  statusCode: number;
}
