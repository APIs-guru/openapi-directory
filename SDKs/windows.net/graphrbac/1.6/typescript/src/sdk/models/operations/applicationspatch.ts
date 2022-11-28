import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class ApplicationsPatchPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=applicationObjectId" })
  applicationObjectId: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=tenantID" })
  tenantId: string;
}


export class ApplicationsPatchQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=api-version" })
  apiVersion: string;
}


export class ApplicationsPatchRequests extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  applicationUpdateParameters?: shared.ApplicationUpdateParameters;

  @SpeakeasyMetadata({ data: "request, media_type=text/json" })
  applicationUpdateParameters1?: shared.ApplicationUpdateParameters;
}


export class ApplicationsPatchRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: ApplicationsPatchPathParams;

  @SpeakeasyMetadata()
  queryParams: ApplicationsPatchQueryParams;

  @SpeakeasyMetadata()
  request: ApplicationsPatchRequests;
}


export class ApplicationsPatchResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  graphError?: shared.GraphError;

  @SpeakeasyMetadata()
  statusCode: number;
}
