import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class TaskAddCollectionPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=jobId" })
  jobId: string;
}


export class TaskAddCollectionQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=api-version" })
  apiVersion: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=timeout" })
  timeout?: number;
}


export class TaskAddCollectionHeaders extends SpeakeasyBase {
  @Metadata({ data: "header, style=simple;explode=false;name=client-request-id" })
  clientRequestId?: string;

  @Metadata({ data: "header, style=simple;explode=false;name=ocp-date" })
  ocpDate?: string;

  @Metadata({ data: "header, style=simple;explode=false;name=return-client-request-id" })
  returnClientRequestId?: boolean;
}


export class TaskAddCollectionRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: TaskAddCollectionPathParams;

  @Metadata()
  queryParams: TaskAddCollectionQueryParams;

  @Metadata()
  headers: TaskAddCollectionHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: any;
}


export class TaskAddCollectionResponse extends SpeakeasyBase {
  @Metadata()
  batchError?: any;

  @Metadata()
  contentType: string;

  @Metadata()
  headers: Map<string, string[]>;

  @Metadata()
  statusCode: number;

  @Metadata()
  taskAddCollectionResult?: any;
}
