import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetMyOrdersAwaitingFeedbackSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oauth2: shared.SchemeOauth2;
}


export class GetMyOrdersAwaitingFeedbackRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  security: GetMyOrdersAwaitingFeedbackSecurity;
}


export class GetMyOrdersAwaitingFeedbackResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
