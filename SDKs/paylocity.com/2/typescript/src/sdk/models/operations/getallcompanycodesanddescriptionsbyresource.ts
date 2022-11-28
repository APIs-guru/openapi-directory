import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetAllCompanyCodesAndDescriptionsByResourcePathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=codeResource" })
  codeResource: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=companyId" })
  companyId: string;
}


export class GetAllCompanyCodesAndDescriptionsByResourceSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  paylocityAuth: shared.SchemePaylocityAuth;
}


export class GetAllCompanyCodesAndDescriptionsByResourceRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetAllCompanyCodesAndDescriptionsByResourcePathParams;

  @SpeakeasyMetadata()
  security: GetAllCompanyCodesAndDescriptionsByResourceSecurity;
}


export class GetAllCompanyCodesAndDescriptionsByResourceResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata({ elemType: shared.CompanyCodes })
  companyCodes?: shared.CompanyCodes[];

  @SpeakeasyMetadata({ elemType: shared.Error })
  errors?: shared.Error[];
}
