import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class ApplicationsListPasswordCredentialsPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=applicationObjectId" })
  applicationObjectId: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=tenantID" })
  tenantId: string;
}


export class ApplicationsListPasswordCredentialsQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=api-version" })
  apiVersion: string;
}


export class ApplicationsListPasswordCredentialsRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: ApplicationsListPasswordCredentialsPathParams;

  @Metadata()
  queryParams: ApplicationsListPasswordCredentialsQueryParams;
}


export class ApplicationsListPasswordCredentialsResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  graphError?: shared.GraphError;

  @Metadata()
  passwordCredentialListResult?: shared.PasswordCredentialListResult;

  @Metadata()
  statusCode: number;
}
