import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetLocalTaxByTaxCodePathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=companyId" })
  companyId: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=employeeId" })
  employeeId: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=taxCode" })
  taxCode: string;
}


export class GetLocalTaxByTaxCodeSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  paylocityAuth: shared.SchemePaylocityAuth;
}


export class GetLocalTaxByTaxCodeRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetLocalTaxByTaxCodePathParams;

  @Metadata()
  security: GetLocalTaxByTaxCodeSecurity;
}


export class GetLocalTaxByTaxCodeResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata({ elemType: shared.Error })
  errors?: shared.Error[];

  @Metadata({ elemType: shared.LocalTax })
  localTaxes?: shared.LocalTax[];
}
