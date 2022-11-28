import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class ServicePrincipalsGetPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=objectId" })
  objectId: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=tenantID" })
  tenantId: string;
}


export class ServicePrincipalsGetQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=api-version" })
  apiVersion: string;
}


export class ServicePrincipalsGetRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: ServicePrincipalsGetPathParams;

  @SpeakeasyMetadata()
  queryParams: ServicePrincipalsGetQueryParams;
}


export class ServicePrincipalsGetResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  graphError?: shared.GraphError;

  @SpeakeasyMetadata()
  servicePrincipal?: Map<string, Map<string, any>>;

  @SpeakeasyMetadata()
  statusCode: number;
}
