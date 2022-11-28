import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class ApplicationsUpdateKeyCredentialsPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=applicationObjectId" })
  applicationObjectId: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=tenantID" })
  tenantId: string;
}


export class ApplicationsUpdateKeyCredentialsQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=api-version" })
  apiVersion: string;
}


export class ApplicationsUpdateKeyCredentialsRequests extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  keyCredentialsUpdateParameters?: shared.KeyCredentialsUpdateParameters;

  @SpeakeasyMetadata({ data: "request, media_type=text/json" })
  keyCredentialsUpdateParameters1?: shared.KeyCredentialsUpdateParameters;
}


export class ApplicationsUpdateKeyCredentialsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: ApplicationsUpdateKeyCredentialsPathParams;

  @SpeakeasyMetadata()
  queryParams: ApplicationsUpdateKeyCredentialsQueryParams;

  @SpeakeasyMetadata()
  request: ApplicationsUpdateKeyCredentialsRequests;
}


export class ApplicationsUpdateKeyCredentialsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  graphError?: shared.GraphError;

  @SpeakeasyMetadata()
  statusCode: number;
}
