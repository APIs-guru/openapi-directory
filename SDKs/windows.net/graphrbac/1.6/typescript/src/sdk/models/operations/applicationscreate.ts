import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class ApplicationsCreatePathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=tenantID" })
  tenantId: string;
}


export class ApplicationsCreateQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=api-version" })
  apiVersion: string;
}


export class ApplicationsCreateRequests extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  applicationCreateParameters?: shared.ApplicationCreateParameters;

  @SpeakeasyMetadata({ data: "request, media_type=text/json" })
  applicationCreateParameters1?: shared.ApplicationCreateParameters;
}


export class ApplicationsCreateRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: ApplicationsCreatePathParams;

  @SpeakeasyMetadata()
  queryParams: ApplicationsCreateQueryParams;

  @SpeakeasyMetadata()
  request: ApplicationsCreateRequests;
}


export class ApplicationsCreateResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  application?: Map<string, Map<string, any>>;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  graphError?: shared.GraphError;

  @SpeakeasyMetadata()
  statusCode: number;
}
