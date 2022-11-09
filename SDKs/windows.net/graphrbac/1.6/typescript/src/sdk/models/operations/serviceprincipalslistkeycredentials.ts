import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class ServicePrincipalsListKeyCredentialsPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=objectId" })
  objectId: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=tenantID" })
  tenantId: string;
}


export class ServicePrincipalsListKeyCredentialsQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=api-version" })
  apiVersion: string;
}


export class ServicePrincipalsListKeyCredentialsRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: ServicePrincipalsListKeyCredentialsPathParams;

  @Metadata()
  queryParams: ServicePrincipalsListKeyCredentialsQueryParams;
}


export class ServicePrincipalsListKeyCredentialsResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  graphError?: shared.GraphError;

  @Metadata()
  keyCredentialListResult?: shared.KeyCredentialListResult;

  @Metadata()
  statusCode: number;
}
