import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetLocalTaxByTaxCodePathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=companyId" })
  companyId: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=employeeId" })
  employeeId: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=taxCode" })
  taxCode: string;
}


export class GetLocalTaxByTaxCodeSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  paylocityAuth: shared.SchemePaylocityAuth;
}


export class GetLocalTaxByTaxCodeRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetLocalTaxByTaxCodePathParams;

  @SpeakeasyMetadata()
  security: GetLocalTaxByTaxCodeSecurity;
}


export class GetLocalTaxByTaxCodeResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata({ elemType: shared.Error })
  errors?: shared.Error[];

  @SpeakeasyMetadata({ elemType: shared.LocalTax })
  localTaxes?: shared.LocalTax[];
}
