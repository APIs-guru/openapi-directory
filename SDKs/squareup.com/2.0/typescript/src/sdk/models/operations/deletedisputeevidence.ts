import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class DeleteDisputeEvidencePathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=dispute_id" })
  disputeId: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=evidence_id" })
  evidenceId: string;
}


export class DeleteDisputeEvidenceSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2: shared.SchemeOauth2;
}


export class DeleteDisputeEvidenceRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: DeleteDisputeEvidencePathParams;

  @Metadata()
  security: DeleteDisputeEvidenceSecurity;
}


export class DeleteDisputeEvidenceResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  deleteDisputeEvidenceResponse?: shared.DeleteDisputeEvidenceResponse;

  @Metadata()
  statusCode: number;
}
