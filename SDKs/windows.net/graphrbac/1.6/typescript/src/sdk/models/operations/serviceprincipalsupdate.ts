import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class ServicePrincipalsUpdatePathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=objectId" })
  objectId: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=tenantID" })
  tenantId: string;
}


export class ServicePrincipalsUpdateQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=api-version" })
  apiVersion: string;
}


export class ServicePrincipalsUpdateRequests extends SpeakeasyBase {
  @Metadata({ data: "request, media_type=application/json" })
  servicePrincipalUpdateParameters?: shared.ServicePrincipalUpdateParameters;

  @Metadata({ data: "request, media_type=text/json" })
  servicePrincipalUpdateParameters1?: shared.ServicePrincipalUpdateParameters;
}


export class ServicePrincipalsUpdateRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: ServicePrincipalsUpdatePathParams;

  @Metadata()
  queryParams: ServicePrincipalsUpdateQueryParams;

  @Metadata()
  request: ServicePrincipalsUpdateRequests;
}


export class ServicePrincipalsUpdateResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  graphError?: shared.GraphError;

  @Metadata()
  statusCode: number;
}
