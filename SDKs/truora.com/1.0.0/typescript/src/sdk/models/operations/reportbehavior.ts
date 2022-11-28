import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class ReportBehaviorSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  apiKey: shared.SchemeApiKey;
}


export class ReportBehaviorRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "request, media_type=application/x-www-form-urlencoded" })
  request: shared.CreateBehaviorInput;

  @SpeakeasyMetadata()
  security: ReportBehaviorSecurity;
}


export class ReportBehaviorResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  behaviourOutput?: shared.BehaviourOutput;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  errors?: any[];

  @SpeakeasyMetadata()
  statusCode: number;
}
