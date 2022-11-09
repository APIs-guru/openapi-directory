import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class RetrieveDisputePathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=dispute_id" })
  disputeId: string;
}


export class RetrieveDisputeSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2: shared.SchemeOauth2;
}


export class RetrieveDisputeRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: RetrieveDisputePathParams;

  @Metadata()
  security: RetrieveDisputeSecurity;
}


export class RetrieveDisputeResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  retrieveDisputeResponse?: shared.RetrieveDisputeResponse;

  @Metadata()
  statusCode: number;
}
