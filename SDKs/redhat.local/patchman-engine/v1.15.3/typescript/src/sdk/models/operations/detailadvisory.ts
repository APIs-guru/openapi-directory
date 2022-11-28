import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class DetailAdvisoryPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=advisory_id" })
  advisoryId: string;
}


export class DetailAdvisorySecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  rhIdentity: shared.SchemeRhIdentity;
}


export class DetailAdvisoryRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: DetailAdvisoryPathParams;

  @SpeakeasyMetadata()
  security: DetailAdvisorySecurity;
}


export class DetailAdvisoryResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  controllersAdvisoryDetailResponse?: shared.ControllersAdvisoryDetailResponse;
}
