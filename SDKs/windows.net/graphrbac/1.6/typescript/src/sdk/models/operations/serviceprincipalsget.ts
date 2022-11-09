import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class ServicePrincipalsGetPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=objectId" })
  objectId: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=tenantID" })
  tenantId: string;
}


export class ServicePrincipalsGetQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=api-version" })
  apiVersion: string;
}


export class ServicePrincipalsGetRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: ServicePrincipalsGetPathParams;

  @Metadata()
  queryParams: ServicePrincipalsGetQueryParams;
}


export class ServicePrincipalsGetResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  graphError?: shared.GraphError;

  @Metadata()
  servicePrincipal?: Map<string, Map<string, any>>;

  @Metadata()
  statusCode: number;
}
