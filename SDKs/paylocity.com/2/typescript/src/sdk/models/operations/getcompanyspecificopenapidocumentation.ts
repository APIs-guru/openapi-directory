import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetCompanySpecificOpenApiDocumentationPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=companyId" })
  companyId: string;
}


export class GetCompanySpecificOpenApiDocumentationHeaders extends SpeakeasyBase {
  @Metadata({ data: "header, style=simple;explode=false;name=Authorization" })
  authorization: string;
}


export class GetCompanySpecificOpenApiDocumentationSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  paylocityAuth: shared.SchemePaylocityAuth;
}


export class GetCompanySpecificOpenApiDocumentationRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetCompanySpecificOpenApiDocumentationPathParams;

  @Metadata()
  headers: GetCompanySpecificOpenApiDocumentationHeaders;

  @Metadata()
  security: GetCompanySpecificOpenApiDocumentationSecurity;
}


export class GetCompanySpecificOpenApiDocumentationResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata({ elemType: shared.Error })
  errors?: shared.Error[];
}
