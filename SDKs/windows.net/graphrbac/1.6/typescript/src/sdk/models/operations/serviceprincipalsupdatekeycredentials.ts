import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class ServicePrincipalsUpdateKeyCredentialsPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=objectId" })
  objectId: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=tenantID" })
  tenantId: string;
}


export class ServicePrincipalsUpdateKeyCredentialsQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=api-version" })
  apiVersion: string;
}


export class ServicePrincipalsUpdateKeyCredentialsRequests extends SpeakeasyBase {
  @Metadata({ data: "request, media_type=application/json" })
  keyCredentialsUpdateParameters?: shared.KeyCredentialsUpdateParameters;

  @Metadata({ data: "request, media_type=text/json" })
  keyCredentialsUpdateParameters1?: shared.KeyCredentialsUpdateParameters;
}


export class ServicePrincipalsUpdateKeyCredentialsRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: ServicePrincipalsUpdateKeyCredentialsPathParams;

  @Metadata()
  queryParams: ServicePrincipalsUpdateKeyCredentialsQueryParams;

  @Metadata()
  request: ServicePrincipalsUpdateKeyCredentialsRequests;
}


export class ServicePrincipalsUpdateKeyCredentialsResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  graphError?: shared.GraphError;

  @Metadata()
  statusCode: number;
}
