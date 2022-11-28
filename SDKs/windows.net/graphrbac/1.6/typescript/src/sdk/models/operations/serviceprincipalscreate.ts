import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class ServicePrincipalsCreatePathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=tenantID" })
  tenantId: string;
}


export class ServicePrincipalsCreateQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=api-version" })
  apiVersion: string;
}


export class ServicePrincipalsCreateRequests extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  servicePrincipalCreateParameters?: shared.ServicePrincipalCreateParameters;

  @SpeakeasyMetadata({ data: "request, media_type=text/json" })
  servicePrincipalCreateParameters1?: shared.ServicePrincipalCreateParameters;
}


export class ServicePrincipalsCreateRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: ServicePrincipalsCreatePathParams;

  @SpeakeasyMetadata()
  queryParams: ServicePrincipalsCreateQueryParams;

  @SpeakeasyMetadata()
  request: ServicePrincipalsCreateRequests;
}


export class ServicePrincipalsCreateResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  graphError?: shared.GraphError;

  @SpeakeasyMetadata()
  servicePrincipal?: Map<string, Map<string, any>>;

  @SpeakeasyMetadata()
  statusCode: number;
}
