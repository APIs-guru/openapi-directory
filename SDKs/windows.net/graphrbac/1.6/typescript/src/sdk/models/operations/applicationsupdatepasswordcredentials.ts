import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class ApplicationsUpdatePasswordCredentialsPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=applicationObjectId" })
  applicationObjectId: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=tenantID" })
  tenantId: string;
}


export class ApplicationsUpdatePasswordCredentialsQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=api-version" })
  apiVersion: string;
}


export class ApplicationsUpdatePasswordCredentialsRequests extends SpeakeasyBase {
  @Metadata({ data: "request, media_type=application/json" })
  passwordCredentialsUpdateParameters?: shared.PasswordCredentialsUpdateParameters;

  @Metadata({ data: "request, media_type=text/json" })
  passwordCredentialsUpdateParameters1?: shared.PasswordCredentialsUpdateParameters;
}


export class ApplicationsUpdatePasswordCredentialsRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: ApplicationsUpdatePasswordCredentialsPathParams;

  @Metadata()
  queryParams: ApplicationsUpdatePasswordCredentialsQueryParams;

  @Metadata()
  request: ApplicationsUpdatePasswordCredentialsRequests;
}


export class ApplicationsUpdatePasswordCredentialsResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  graphError?: shared.GraphError;

  @Metadata()
  statusCode: number;
}
