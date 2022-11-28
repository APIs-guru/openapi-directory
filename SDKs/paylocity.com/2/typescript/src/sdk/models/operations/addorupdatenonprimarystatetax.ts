import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class AddOrUpdateNonPrimaryStateTaxPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=companyId" })
  companyId: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=employeeId" })
  employeeId: string;
}


export class AddOrUpdateNonPrimaryStateTaxSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  paylocityAuth: shared.SchemePaylocityAuth;
}


export class AddOrUpdateNonPrimaryStateTaxRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: AddOrUpdateNonPrimaryStateTaxPathParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: shared.NonPrimaryStateTax;

  @SpeakeasyMetadata()
  security: AddOrUpdateNonPrimaryStateTaxSecurity;
}


export class AddOrUpdateNonPrimaryStateTaxResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata({ elemType: shared.Error })
  errors?: shared.Error[];
}
