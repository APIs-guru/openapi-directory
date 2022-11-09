import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetAllCompanyCodesAndDescriptionsByResourcePathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=codeResource" })
  codeResource: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=companyId" })
  companyId: string;
}


export class GetAllCompanyCodesAndDescriptionsByResourceSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  paylocityAuth: shared.SchemePaylocityAuth;
}


export class GetAllCompanyCodesAndDescriptionsByResourceRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetAllCompanyCodesAndDescriptionsByResourcePathParams;

  @Metadata()
  security: GetAllCompanyCodesAndDescriptionsByResourceSecurity;
}


export class GetAllCompanyCodesAndDescriptionsByResourceResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata({ elemType: shared.CompanyCodes })
  companyCodes?: shared.CompanyCodes[];

  @Metadata({ elemType: shared.Error })
  errors?: shared.Error[];
}
