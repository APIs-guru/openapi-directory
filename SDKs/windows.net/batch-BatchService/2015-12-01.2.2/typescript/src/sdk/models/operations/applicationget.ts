import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class ApplicationGetPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=applicationId" })
  applicationId: string;
}


export class ApplicationGetQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=api-version" })
  apiVersion: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=timeout" })
  timeout?: number;
}


export class ApplicationGetHeaders extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=client-request-id" })
  clientRequestId?: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=ocp-date" })
  ocpDate?: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=return-client-request-id" })
  returnClientRequestId?: boolean;
}


export class ApplicationGetRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: ApplicationGetPathParams;

  @SpeakeasyMetadata()
  queryParams: ApplicationGetQueryParams;

  @SpeakeasyMetadata()
  headers: ApplicationGetHeaders;
}


export class ApplicationGetResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  applicationSummary?: any;

  @SpeakeasyMetadata()
  batchError?: any;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  headers: Map<string, string[]>;

  @SpeakeasyMetadata()
  statusCode: number;
}
