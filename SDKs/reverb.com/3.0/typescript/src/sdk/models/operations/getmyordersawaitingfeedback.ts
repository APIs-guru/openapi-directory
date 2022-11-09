import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetMyOrdersAwaitingFeedbackSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2: shared.SchemeOauth2;
}


export class GetMyOrdersAwaitingFeedbackRequest extends SpeakeasyBase {
  @Metadata()
  security: GetMyOrdersAwaitingFeedbackSecurity;
}


export class GetMyOrdersAwaitingFeedbackResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
