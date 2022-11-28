import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class ServicePrincipalsUpdatePasswordCredentialsPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=objectId" })
  objectId: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=tenantID" })
  tenantId: string;
}


export class ServicePrincipalsUpdatePasswordCredentialsQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=api-version" })
  apiVersion: string;
}


export class ServicePrincipalsUpdatePasswordCredentialsRequests extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  passwordCredentialsUpdateParameters?: shared.PasswordCredentialsUpdateParameters;

  @SpeakeasyMetadata({ data: "request, media_type=text/json" })
  passwordCredentialsUpdateParameters1?: shared.PasswordCredentialsUpdateParameters;
}


export class ServicePrincipalsUpdatePasswordCredentialsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: ServicePrincipalsUpdatePasswordCredentialsPathParams;

  @SpeakeasyMetadata()
  queryParams: ServicePrincipalsUpdatePasswordCredentialsQueryParams;

  @SpeakeasyMetadata()
  request: ServicePrincipalsUpdatePasswordCredentialsRequests;
}


export class ServicePrincipalsUpdatePasswordCredentialsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  graphError?: shared.GraphError;

  @SpeakeasyMetadata()
  statusCode: number;
}
