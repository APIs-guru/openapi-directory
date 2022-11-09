import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetPayslipPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=PayslipID" })
  payslipId: string;
}


export class GetPayslipHeaders extends SpeakeasyBase {
  @Metadata({ data: "header, style=simple;explode=false;name=Xero-Tenant-Id" })
  xeroTenantId: string;
}


export class GetPayslipSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oAuth2: shared.SchemeOAuth2;
}


export class GetPayslipRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetPayslipPathParams;

  @Metadata()
  headers: GetPayslipHeaders;

  @Metadata()
  security: GetPayslipSecurity;
}


export class GetPayslipResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  payslipObject?: shared.PayslipObject;

  @Metadata()
  statusCode: number;
}
