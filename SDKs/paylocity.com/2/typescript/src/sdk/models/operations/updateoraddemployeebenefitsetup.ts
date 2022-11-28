import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class UpdateOrAddEmployeeBenefitSetupPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=companyId" })
  companyId: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=employeeId" })
  employeeId: string;
}


export class UpdateOrAddEmployeeBenefitSetupSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  paylocityAuth: shared.SchemePaylocityAuth;
}


export class UpdateOrAddEmployeeBenefitSetupRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: UpdateOrAddEmployeeBenefitSetupPathParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: shared.BenefitSetup;

  @SpeakeasyMetadata()
  security: UpdateOrAddEmployeeBenefitSetupSecurity;
}


export class UpdateOrAddEmployeeBenefitSetupResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata({ elemType: shared.Error })
  errors?: shared.Error[];
}
