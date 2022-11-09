import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class ServicePrincipalsListPasswordCredentialsPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=objectId" })
  objectId: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=tenantID" })
  tenantId: string;
}


export class ServicePrincipalsListPasswordCredentialsQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=api-version" })
  apiVersion: string;
}


export class ServicePrincipalsListPasswordCredentialsRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: ServicePrincipalsListPasswordCredentialsPathParams;

  @Metadata()
  queryParams: ServicePrincipalsListPasswordCredentialsQueryParams;
}


export class ServicePrincipalsListPasswordCredentialsResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  graphError?: shared.GraphError;

  @Metadata()
  passwordCredentialListResult?: shared.PasswordCredentialListResult;

  @Metadata()
  statusCode: number;
}
