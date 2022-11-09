import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class FileListFromTaskPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=jobId" })
  jobId: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=taskId" })
  taskId: string;
}


export class FileListFromTaskQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=$filter" })
  dollarFilter?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=api-version" })
  apiVersion: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=maxresults" })
  maxresults?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=recursive" })
  recursive?: boolean;

  @Metadata({ data: "queryParam, style=form;explode=true;name=timeout" })
  timeout?: number;
}


export class FileListFromTaskHeaders extends SpeakeasyBase {
  @Metadata({ data: "header, style=simple;explode=false;name=client-request-id" })
  clientRequestId?: string;

  @Metadata({ data: "header, style=simple;explode=false;name=ocp-date" })
  ocpDate?: string;

  @Metadata({ data: "header, style=simple;explode=false;name=return-client-request-id" })
  returnClientRequestId?: boolean;
}


export class FileListFromTaskRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: FileListFromTaskPathParams;

  @Metadata()
  queryParams: FileListFromTaskQueryParams;

  @Metadata()
  headers: FileListFromTaskHeaders;
}


export class FileListFromTaskResponse extends SpeakeasyBase {
  @Metadata()
  batchError?: any;

  @Metadata()
  contentType: string;

  @Metadata()
  headers: Map<string, string[]>;

  @Metadata()
  nodeFileListResult?: any;

  @Metadata()
  statusCode: number;
}
