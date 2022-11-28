import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class AddNewEmployeeToWebLinkPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=companyId" })
  companyId: string;
}


export class AddNewEmployeeToWebLinkSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  paylocityAuth: shared.SchemePaylocityAuth;
}


export class AddNewEmployeeToWebLinkRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: AddNewEmployeeToWebLinkPathParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: shared.StagedEmployee;

  @SpeakeasyMetadata()
  security: AddNewEmployeeToWebLinkSecurity;
}


export class AddNewEmployeeToWebLinkResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata({ elemType: shared.Error })
  errors?: shared.Error[];

  @SpeakeasyMetadata({ elemType: shared.TrackingNumberResponse })
  trackingNumberResponses?: shared.TrackingNumberResponse[];
}
