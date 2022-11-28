import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class ServicePrincipalsListKeyCredentialsPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=objectId" })
  objectId: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=tenantID" })
  tenantId: string;
}


export class ServicePrincipalsListKeyCredentialsQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=api-version" })
  apiVersion: string;
}


export class ServicePrincipalsListKeyCredentialsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: ServicePrincipalsListKeyCredentialsPathParams;

  @SpeakeasyMetadata()
  queryParams: ServicePrincipalsListKeyCredentialsQueryParams;
}


export class ServicePrincipalsListKeyCredentialsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  graphError?: shared.GraphError;

  @SpeakeasyMetadata()
  keyCredentialListResult?: shared.KeyCredentialListResult;

  @SpeakeasyMetadata()
  statusCode: number;
}
