import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class DeleteLocalTaxByTaxCodePathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=companyId" })
  companyId: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=employeeId" })
  employeeId: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=taxCode" })
  taxCode: string;
}


export class DeleteLocalTaxByTaxCodeSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  paylocityAuth: shared.SchemePaylocityAuth;
}


export class DeleteLocalTaxByTaxCodeRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: DeleteLocalTaxByTaxCodePathParams;

  @SpeakeasyMetadata()
  security: DeleteLocalTaxByTaxCodeSecurity;
}


export class DeleteLocalTaxByTaxCodeResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata({ elemType: shared.Error })
  errors?: shared.Error[];
}
