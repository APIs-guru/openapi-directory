import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class FileDeleteFromTaskPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=fileName" })
  fileName: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=jobId" })
  jobId: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=taskId" })
  taskId: string;
}


export class FileDeleteFromTaskQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=api-version" })
  apiVersion: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=recursive" })
  recursive?: boolean;

  @Metadata({ data: "queryParam, style=form;explode=true;name=timeout" })
  timeout?: number;
}


export class FileDeleteFromTaskHeaders extends SpeakeasyBase {
  @Metadata({ data: "header, style=simple;explode=false;name=client-request-id" })
  clientRequestId?: string;

  @Metadata({ data: "header, style=simple;explode=false;name=ocp-date" })
  ocpDate?: string;

  @Metadata({ data: "header, style=simple;explode=false;name=return-client-request-id" })
  returnClientRequestId?: boolean;
}


export class FileDeleteFromTaskRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: FileDeleteFromTaskPathParams;

  @Metadata()
  queryParams: FileDeleteFromTaskQueryParams;

  @Metadata()
  headers: FileDeleteFromTaskHeaders;
}


export class FileDeleteFromTaskResponse extends SpeakeasyBase {
  @Metadata()
  batchError?: any;

  @Metadata()
  contentType: string;

  @Metadata()
  headers: Map<string, string[]>;

  @Metadata()
  statusCode: number;
}
