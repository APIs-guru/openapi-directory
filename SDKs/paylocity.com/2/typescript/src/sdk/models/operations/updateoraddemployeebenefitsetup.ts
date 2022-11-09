import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class UpdateOrAddEmployeeBenefitSetupPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=companyId" })
  companyId: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=employeeId" })
  employeeId: string;
}


export class UpdateOrAddEmployeeBenefitSetupSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  paylocityAuth: shared.SchemePaylocityAuth;
}


export class UpdateOrAddEmployeeBenefitSetupRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: UpdateOrAddEmployeeBenefitSetupPathParams;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.BenefitSetup;

  @Metadata()
  security: UpdateOrAddEmployeeBenefitSetupSecurity;
}


export class UpdateOrAddEmployeeBenefitSetupResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata({ elemType: shared.Error })
  errors?: shared.Error[];
}
