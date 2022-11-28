import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class UpdatePayslipPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=PayslipID" })
  payslipId: string;
}


export class UpdatePayslipHeaders extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=Xero-Tenant-Id" })
  xeroTenantId: string;
}


export class UpdatePayslipSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oAuth2: shared.SchemeOAuth2;
}


export class UpdatePayslipRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: UpdatePayslipPathParams;

  @SpeakeasyMetadata()
  headers: UpdatePayslipHeaders;

  @SpeakeasyMetadata({ data: "request, media_type=application/json", elemType: shared.PayslipLines })
  request?: shared.PayslipLines[];

  @SpeakeasyMetadata()
  security: UpdatePayslipSecurity;
}


export class UpdatePayslipResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  payslips?: shared.Payslips;

  @SpeakeasyMetadata()
  statusCode: number;
}
