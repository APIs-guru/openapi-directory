import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class ApplicationsListKeyCredentialsPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=applicationObjectId" })
  applicationObjectId: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=tenantID" })
  tenantId: string;
}


export class ApplicationsListKeyCredentialsQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=api-version" })
  apiVersion: string;
}


export class ApplicationsListKeyCredentialsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: ApplicationsListKeyCredentialsPathParams;

  @SpeakeasyMetadata()
  queryParams: ApplicationsListKeyCredentialsQueryParams;
}


export class ApplicationsListKeyCredentialsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  graphError?: shared.GraphError;

  @SpeakeasyMetadata()
  keyCredentialListResult?: shared.KeyCredentialListResult;

  @SpeakeasyMetadata()
  statusCode: number;
}
