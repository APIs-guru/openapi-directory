import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class ApplicationsCreatePathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=tenantID" })
  tenantId: string;
}


export class ApplicationsCreateQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=api-version" })
  apiVersion: string;
}


export class ApplicationsCreateRequests extends SpeakeasyBase {
  @Metadata({ data: "request, media_type=application/json" })
  applicationCreateParameters?: shared.ApplicationCreateParameters;

  @Metadata({ data: "request, media_type=text/json" })
  applicationCreateParameters1?: shared.ApplicationCreateParameters;
}


export class ApplicationsCreateRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: ApplicationsCreatePathParams;

  @Metadata()
  queryParams: ApplicationsCreateQueryParams;

  @Metadata()
  request: ApplicationsCreateRequests;
}


export class ApplicationsCreateResponse extends SpeakeasyBase {
  @Metadata()
  application?: Map<string, Map<string, any>>;

  @Metadata()
  contentType: string;

  @Metadata()
  graphError?: shared.GraphError;

  @Metadata()
  statusCode: number;
}
