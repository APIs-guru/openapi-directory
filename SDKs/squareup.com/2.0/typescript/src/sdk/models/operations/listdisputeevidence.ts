import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class ListDisputeEvidencePathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=dispute_id" })
  disputeId: string;
}


export class ListDisputeEvidenceQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=cursor" })
  cursor?: string;
}


export class ListDisputeEvidenceSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2: shared.SchemeOauth2;
}


export class ListDisputeEvidenceRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: ListDisputeEvidencePathParams;

  @Metadata()
  queryParams: ListDisputeEvidenceQueryParams;

  @Metadata()
  security: ListDisputeEvidenceSecurity;
}


export class ListDisputeEvidenceResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  listDisputeEvidenceResponse?: shared.ListDisputeEvidenceResponse;

  @Metadata()
  statusCode: number;
}
