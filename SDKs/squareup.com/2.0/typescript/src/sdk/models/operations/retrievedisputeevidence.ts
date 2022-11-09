import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class RetrieveDisputeEvidencePathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=dispute_id" })
  disputeId: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=evidence_id" })
  evidenceId: string;
}


export class RetrieveDisputeEvidenceSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2: shared.SchemeOauth2;
}


export class RetrieveDisputeEvidenceRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: RetrieveDisputeEvidencePathParams;

  @Metadata()
  security: RetrieveDisputeEvidenceSecurity;
}


export class RetrieveDisputeEvidenceResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  retrieveDisputeEvidenceResponse?: shared.RetrieveDisputeEvidenceResponse;

  @Metadata()
  statusCode: number;
}
