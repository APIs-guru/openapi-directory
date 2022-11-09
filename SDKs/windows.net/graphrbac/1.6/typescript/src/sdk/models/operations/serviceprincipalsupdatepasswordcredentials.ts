import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class ServicePrincipalsUpdatePasswordCredentialsPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=objectId" })
  objectId: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=tenantID" })
  tenantId: string;
}


export class ServicePrincipalsUpdatePasswordCredentialsQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=api-version" })
  apiVersion: string;
}


export class ServicePrincipalsUpdatePasswordCredentialsRequests extends SpeakeasyBase {
  @Metadata({ data: "request, media_type=application/json" })
  passwordCredentialsUpdateParameters?: shared.PasswordCredentialsUpdateParameters;

  @Metadata({ data: "request, media_type=text/json" })
  passwordCredentialsUpdateParameters1?: shared.PasswordCredentialsUpdateParameters;
}


export class ServicePrincipalsUpdatePasswordCredentialsRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: ServicePrincipalsUpdatePasswordCredentialsPathParams;

  @Metadata()
  queryParams: ServicePrincipalsUpdatePasswordCredentialsQueryParams;

  @Metadata()
  request: ServicePrincipalsUpdatePasswordCredentialsRequests;
}


export class ServicePrincipalsUpdatePasswordCredentialsResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  graphError?: shared.GraphError;

  @Metadata()
  statusCode: number;
}
