import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class CreateDisputeEvidenceTextPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=dispute_id" })
  disputeId: string;
}


export class CreateDisputeEvidenceTextSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2: shared.SchemeOauth2;
}


export class CreateDisputeEvidenceTextRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: CreateDisputeEvidenceTextPathParams;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.CreateDisputeEvidenceTextRequest;

  @Metadata()
  security: CreateDisputeEvidenceTextSecurity;
}


export class CreateDisputeEvidenceTextResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  createDisputeEvidenceTextResponse?: shared.CreateDisputeEvidenceTextResponse;

  @Metadata()
  statusCode: number;
}
