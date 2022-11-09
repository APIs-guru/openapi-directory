import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class SubmitEvidencePathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=dispute_id" })
  disputeId: string;
}


export class SubmitEvidenceSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2: shared.SchemeOauth2;
}


export class SubmitEvidenceRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: SubmitEvidencePathParams;

  @Metadata()
  security: SubmitEvidenceSecurity;
}


export class SubmitEvidenceResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  submitEvidenceResponse?: shared.SubmitEvidenceResponse;
}
