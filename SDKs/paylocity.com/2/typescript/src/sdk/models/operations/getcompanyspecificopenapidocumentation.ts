import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetCompanySpecificOpenApiDocumentationPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=companyId" })
  companyId: string;
}


export class GetCompanySpecificOpenApiDocumentationHeaders extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=Authorization" })
  authorization: string;
}


export class GetCompanySpecificOpenApiDocumentationSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  paylocityAuth: shared.SchemePaylocityAuth;
}


export class GetCompanySpecificOpenApiDocumentationRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetCompanySpecificOpenApiDocumentationPathParams;

  @SpeakeasyMetadata()
  headers: GetCompanySpecificOpenApiDocumentationHeaders;

  @SpeakeasyMetadata()
  security: GetCompanySpecificOpenApiDocumentationSecurity;
}


export class GetCompanySpecificOpenApiDocumentationResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata({ elemType: shared.Error })
  errors?: shared.Error[];
}
