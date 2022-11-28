import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class ServicePrincipalsUpdateKeyCredentialsPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=objectId" })
  objectId: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=tenantID" })
  tenantId: string;
}


export class ServicePrincipalsUpdateKeyCredentialsQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=api-version" })
  apiVersion: string;
}


export class ServicePrincipalsUpdateKeyCredentialsRequests extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  keyCredentialsUpdateParameters?: shared.KeyCredentialsUpdateParameters;

  @SpeakeasyMetadata({ data: "request, media_type=text/json" })
  keyCredentialsUpdateParameters1?: shared.KeyCredentialsUpdateParameters;
}


export class ServicePrincipalsUpdateKeyCredentialsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: ServicePrincipalsUpdateKeyCredentialsPathParams;

  @SpeakeasyMetadata()
  queryParams: ServicePrincipalsUpdateKeyCredentialsQueryParams;

  @SpeakeasyMetadata()
  request: ServicePrincipalsUpdateKeyCredentialsRequests;
}


export class ServicePrincipalsUpdateKeyCredentialsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  graphError?: shared.GraphError;

  @SpeakeasyMetadata()
  statusCode: number;
}
