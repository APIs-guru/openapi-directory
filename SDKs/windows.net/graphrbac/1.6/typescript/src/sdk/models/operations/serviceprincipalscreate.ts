import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class ServicePrincipalsCreatePathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=tenantID" })
  tenantId: string;
}


export class ServicePrincipalsCreateQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=api-version" })
  apiVersion: string;
}


export class ServicePrincipalsCreateRequests extends SpeakeasyBase {
  @Metadata({ data: "request, media_type=application/json" })
  servicePrincipalCreateParameters?: shared.ServicePrincipalCreateParameters;

  @Metadata({ data: "request, media_type=text/json" })
  servicePrincipalCreateParameters1?: shared.ServicePrincipalCreateParameters;
}


export class ServicePrincipalsCreateRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: ServicePrincipalsCreatePathParams;

  @Metadata()
  queryParams: ServicePrincipalsCreateQueryParams;

  @Metadata()
  request: ServicePrincipalsCreateRequests;
}


export class ServicePrincipalsCreateResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  graphError?: shared.GraphError;

  @Metadata()
  servicePrincipal?: Map<string, Map<string, any>>;

  @Metadata()
  statusCode: number;
}
