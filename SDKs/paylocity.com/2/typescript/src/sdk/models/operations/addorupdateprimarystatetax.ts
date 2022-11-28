import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class AddOrUpdatePrimaryStateTaxPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=companyId" })
  companyId: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=employeeId" })
  employeeId: string;
}


export class AddOrUpdatePrimaryStateTaxSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  paylocityAuth: shared.SchemePaylocityAuth;
}


export class AddOrUpdatePrimaryStateTaxRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: AddOrUpdatePrimaryStateTaxPathParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: shared.StateTax;

  @SpeakeasyMetadata()
  security: AddOrUpdatePrimaryStateTaxSecurity;
}


export class AddOrUpdatePrimaryStateTaxResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata({ elemType: shared.Error })
  errors?: shared.Error[];
}
