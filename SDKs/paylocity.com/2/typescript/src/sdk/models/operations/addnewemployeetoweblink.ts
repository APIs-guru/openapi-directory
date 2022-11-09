import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class AddNewEmployeeToWebLinkPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=companyId" })
  companyId: string;
}


export class AddNewEmployeeToWebLinkSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  paylocityAuth: shared.SchemePaylocityAuth;
}


export class AddNewEmployeeToWebLinkRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: AddNewEmployeeToWebLinkPathParams;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.StagedEmployee;

  @Metadata()
  security: AddNewEmployeeToWebLinkSecurity;
}


export class AddNewEmployeeToWebLinkResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata({ elemType: shared.Error })
  errors?: shared.Error[];

  @Metadata({ elemType: shared.TrackingNumberResponse })
  trackingNumberResponses?: shared.TrackingNumberResponse[];
}
