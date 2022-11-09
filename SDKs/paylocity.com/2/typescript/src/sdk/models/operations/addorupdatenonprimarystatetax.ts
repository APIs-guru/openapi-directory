import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class AddOrUpdateNonPrimaryStateTaxPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=companyId" })
  companyId: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=employeeId" })
  employeeId: string;
}


export class AddOrUpdateNonPrimaryStateTaxSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  paylocityAuth: shared.SchemePaylocityAuth;
}


export class AddOrUpdateNonPrimaryStateTaxRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: AddOrUpdateNonPrimaryStateTaxPathParams;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.NonPrimaryStateTax;

  @Metadata()
  security: AddOrUpdateNonPrimaryStateTaxSecurity;
}


export class AddOrUpdateNonPrimaryStateTaxResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata({ elemType: shared.Error })
  errors?: shared.Error[];
}
