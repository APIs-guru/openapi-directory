import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class DeleteLocalTaxByTaxCodePathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=companyId" })
  companyId: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=employeeId" })
  employeeId: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=taxCode" })
  taxCode: string;
}


export class DeleteLocalTaxByTaxCodeSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  paylocityAuth: shared.SchemePaylocityAuth;
}


export class DeleteLocalTaxByTaxCodeRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: DeleteLocalTaxByTaxCodePathParams;

  @Metadata()
  security: DeleteLocalTaxByTaxCodeSecurity;
}


export class DeleteLocalTaxByTaxCodeResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata({ elemType: shared.Error })
  errors?: shared.Error[];
}
