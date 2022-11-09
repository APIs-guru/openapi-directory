import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class UpdatePayslipPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=PayslipID" })
  payslipId: string;
}


export class UpdatePayslipHeaders extends SpeakeasyBase {
  @Metadata({ data: "header, style=simple;explode=false;name=Xero-Tenant-Id" })
  xeroTenantId: string;
}


export class UpdatePayslipSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oAuth2: shared.SchemeOAuth2;
}


export class UpdatePayslipRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: UpdatePayslipPathParams;

  @Metadata()
  headers: UpdatePayslipHeaders;

  @Metadata({ data: "request, media_type=application/json", elemType: shared.PayslipLines })
  request?: shared.PayslipLines[];

  @Metadata()
  security: UpdatePayslipSecurity;
}


export class UpdatePayslipResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  payslips?: shared.Payslips;

  @Metadata()
  statusCode: number;
}
