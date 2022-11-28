import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class TaskDeletePathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=jobId" })
  jobId: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=taskId" })
  taskId: string;
}


export class TaskDeleteQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=api-version" })
  apiVersion: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=timeout" })
  timeout?: number;
}


export class TaskDeleteHeaders extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=If-Match" })
  ifMatch?: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=If-Modified-Since" })
  ifModifiedSince?: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=If-None-Match" })
  ifNoneMatch?: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=If-Unmodified-Since" })
  ifUnmodifiedSince?: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=client-request-id" })
  clientRequestId?: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=ocp-date" })
  ocpDate?: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=return-client-request-id" })
  returnClientRequestId?: boolean;
}


export class TaskDeleteRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: TaskDeletePathParams;

  @SpeakeasyMetadata()
  queryParams: TaskDeleteQueryParams;

  @SpeakeasyMetadata()
  headers: TaskDeleteHeaders;
}


export class TaskDeleteResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  batchError?: any;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  headers: Map<string, string[]>;

  @SpeakeasyMetadata()
  statusCode: number;
}
