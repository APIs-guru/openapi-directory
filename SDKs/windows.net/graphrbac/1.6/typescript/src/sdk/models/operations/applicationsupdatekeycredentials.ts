import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class ApplicationsUpdateKeyCredentialsPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=applicationObjectId" })
  applicationObjectId: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=tenantID" })
  tenantId: string;
}


export class ApplicationsUpdateKeyCredentialsQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=api-version" })
  apiVersion: string;
}


export class ApplicationsUpdateKeyCredentialsRequests extends SpeakeasyBase {
  @Metadata({ data: "request, media_type=application/json" })
  keyCredentialsUpdateParameters?: shared.KeyCredentialsUpdateParameters;

  @Metadata({ data: "request, media_type=text/json" })
  keyCredentialsUpdateParameters1?: shared.KeyCredentialsUpdateParameters;
}


export class ApplicationsUpdateKeyCredentialsRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: ApplicationsUpdateKeyCredentialsPathParams;

  @Metadata()
  queryParams: ApplicationsUpdateKeyCredentialsQueryParams;

  @Metadata()
  request: ApplicationsUpdateKeyCredentialsRequests;
}


export class ApplicationsUpdateKeyCredentialsResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  graphError?: shared.GraphError;

  @Metadata()
  statusCode: number;
}
