import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetPayslipPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=PayslipID" })
  payslipId: string;
}


export class GetPayslipHeaders extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=Xero-Tenant-Id" })
  xeroTenantId: string;
}


export class GetPayslipSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oAuth2: shared.SchemeOAuth2;
}


export class GetPayslipRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetPayslipPathParams;

  @SpeakeasyMetadata()
  headers: GetPayslipHeaders;

  @SpeakeasyMetadata()
  security: GetPayslipSecurity;
}


export class GetPayslipResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  payslipObject?: shared.PayslipObject;

  @SpeakeasyMetadata()
  statusCode: number;
}
