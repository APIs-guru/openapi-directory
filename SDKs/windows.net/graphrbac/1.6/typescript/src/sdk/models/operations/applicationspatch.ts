import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class ApplicationsPatchPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=applicationObjectId" })
  applicationObjectId: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=tenantID" })
  tenantId: string;
}


export class ApplicationsPatchQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=api-version" })
  apiVersion: string;
}


export class ApplicationsPatchRequests extends SpeakeasyBase {
  @Metadata({ data: "request, media_type=application/json" })
  applicationUpdateParameters?: shared.ApplicationUpdateParameters;

  @Metadata({ data: "request, media_type=text/json" })
  applicationUpdateParameters1?: shared.ApplicationUpdateParameters;
}


export class ApplicationsPatchRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: ApplicationsPatchPathParams;

  @Metadata()
  queryParams: ApplicationsPatchQueryParams;

  @Metadata()
  request: ApplicationsPatchRequests;
}


export class ApplicationsPatchResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  graphError?: shared.GraphError;

  @Metadata()
  statusCode: number;
}
