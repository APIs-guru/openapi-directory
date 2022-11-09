import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class ApplicationsListKeyCredentialsPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=applicationObjectId" })
  applicationObjectId: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=tenantID" })
  tenantId: string;
}


export class ApplicationsListKeyCredentialsQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=api-version" })
  apiVersion: string;
}


export class ApplicationsListKeyCredentialsRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: ApplicationsListKeyCredentialsPathParams;

  @Metadata()
  queryParams: ApplicationsListKeyCredentialsQueryParams;
}


export class ApplicationsListKeyCredentialsResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  graphError?: shared.GraphError;

  @Metadata()
  keyCredentialListResult?: shared.KeyCredentialListResult;

  @Metadata()
  statusCode: number;
}
