import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class ServicePrincipalsUpdatePathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=objectId" })
  objectId: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=tenantID" })
  tenantId: string;
}


export class ServicePrincipalsUpdateQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=api-version" })
  apiVersion: string;
}


export class ServicePrincipalsUpdateRequests extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  servicePrincipalUpdateParameters?: shared.ServicePrincipalUpdateParameters;

  @SpeakeasyMetadata({ data: "request, media_type=text/json" })
  servicePrincipalUpdateParameters1?: shared.ServicePrincipalUpdateParameters;
}


export class ServicePrincipalsUpdateRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: ServicePrincipalsUpdatePathParams;

  @SpeakeasyMetadata()
  queryParams: ServicePrincipalsUpdateQueryParams;

  @SpeakeasyMetadata()
  request: ServicePrincipalsUpdateRequests;
}


export class ServicePrincipalsUpdateResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  graphError?: shared.GraphError;

  @SpeakeasyMetadata()
  statusCode: number;
}
