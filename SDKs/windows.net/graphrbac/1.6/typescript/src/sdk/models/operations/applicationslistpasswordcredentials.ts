import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class ApplicationsListPasswordCredentialsPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=applicationObjectId" })
  applicationObjectId: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=tenantID" })
  tenantId: string;
}


export class ApplicationsListPasswordCredentialsQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=api-version" })
  apiVersion: string;
}


export class ApplicationsListPasswordCredentialsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: ApplicationsListPasswordCredentialsPathParams;

  @SpeakeasyMetadata()
  queryParams: ApplicationsListPasswordCredentialsQueryParams;
}


export class ApplicationsListPasswordCredentialsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  graphError?: shared.GraphError;

  @SpeakeasyMetadata()
  passwordCredentialListResult?: shared.PasswordCredentialListResult;

  @SpeakeasyMetadata()
  statusCode: number;
}
