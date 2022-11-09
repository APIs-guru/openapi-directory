import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class AddOrUpdatePrimaryStateTaxPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=companyId" })
  companyId: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=employeeId" })
  employeeId: string;
}


export class AddOrUpdatePrimaryStateTaxSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  paylocityAuth: shared.SchemePaylocityAuth;
}


export class AddOrUpdatePrimaryStateTaxRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: AddOrUpdatePrimaryStateTaxPathParams;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.StateTax;

  @Metadata()
  security: AddOrUpdatePrimaryStateTaxSecurity;
}


export class AddOrUpdatePrimaryStateTaxResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata({ elemType: shared.Error })
  errors?: shared.Error[];
}
