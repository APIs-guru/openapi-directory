import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class AcceptDisputePathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=dispute_id" })
  disputeId: string;
}


export class AcceptDisputeSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2: shared.SchemeOauth2;
}


export class AcceptDisputeRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: AcceptDisputePathParams;

  @Metadata()
  security: AcceptDisputeSecurity;
}


export class AcceptDisputeResponse extends SpeakeasyBase {
  @Metadata()
  acceptDisputeResponse?: shared.AcceptDisputeResponse;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
