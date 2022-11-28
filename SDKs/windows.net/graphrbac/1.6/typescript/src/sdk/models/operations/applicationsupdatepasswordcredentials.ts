import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class ApplicationsUpdatePasswordCredentialsPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=applicationObjectId" })
  applicationObjectId: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=tenantID" })
  tenantId: string;
}


export class ApplicationsUpdatePasswordCredentialsQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=api-version" })
  apiVersion: string;
}


export class ApplicationsUpdatePasswordCredentialsRequests extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  passwordCredentialsUpdateParameters?: shared.PasswordCredentialsUpdateParameters;

  @SpeakeasyMetadata({ data: "request, media_type=text/json" })
  passwordCredentialsUpdateParameters1?: shared.PasswordCredentialsUpdateParameters;
}


export class ApplicationsUpdatePasswordCredentialsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: ApplicationsUpdatePasswordCredentialsPathParams;

  @SpeakeasyMetadata()
  queryParams: ApplicationsUpdatePasswordCredentialsQueryParams;

  @SpeakeasyMetadata()
  request: ApplicationsUpdatePasswordCredentialsRequests;
}


export class ApplicationsUpdatePasswordCredentialsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  graphError?: shared.GraphError;

  @SpeakeasyMetadata()
  statusCode: number;
}
