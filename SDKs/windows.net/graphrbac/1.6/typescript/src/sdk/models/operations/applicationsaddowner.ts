import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class ApplicationsAddOwnerPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=applicationObjectId" })
  applicationObjectId: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=tenantID" })
  tenantId: string;
}


export class ApplicationsAddOwnerQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=api-version" })
  apiVersion: string;
}


export class ApplicationsAddOwnerRequests extends SpeakeasyBase {
  @Metadata({ data: "request, media_type=application/json" })
  addOwnerParameters?: Map<string, Map<string, any>>;

  @Metadata({ data: "request, media_type=text/json" })
  addOwnerParameters1?: Map<string, Map<string, any>>;
}


export class ApplicationsAddOwnerRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: ApplicationsAddOwnerPathParams;

  @Metadata()
  queryParams: ApplicationsAddOwnerQueryParams;

  @Metadata()
  request: ApplicationsAddOwnerRequests;
}


export class ApplicationsAddOwnerResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  graphError?: shared.GraphError;

  @Metadata()
  statusCode: number;
}
