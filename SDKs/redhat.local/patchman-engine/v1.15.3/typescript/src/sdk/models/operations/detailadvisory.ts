import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class DetailAdvisoryPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=advisory_id" })
  advisoryId: string;
}


export class DetailAdvisorySecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  rhIdentity: shared.SchemeRhIdentity;
}


export class DetailAdvisoryRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: DetailAdvisoryPathParams;

  @Metadata()
  security: DetailAdvisorySecurity;
}


export class DetailAdvisoryResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  controllersAdvisoryDetailResponse?: shared.ControllersAdvisoryDetailResponse;
}
