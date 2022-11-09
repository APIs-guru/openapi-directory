import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class FileGetFromTaskPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=fileName" })
  fileName: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=jobId" })
  jobId: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=taskId" })
  taskId: string;
}


export class FileGetFromTaskQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=api-version" })
  apiVersion: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=timeout" })
  timeout?: number;
}


export class FileGetFromTaskHeaders extends SpeakeasyBase {
  @Metadata({ data: "header, style=simple;explode=false;name=If-Modified-Since" })
  ifModifiedSince?: string;

  @Metadata({ data: "header, style=simple;explode=false;name=If-Unmodified-Since" })
  ifUnmodifiedSince?: string;

  @Metadata({ data: "header, style=simple;explode=false;name=client-request-id" })
  clientRequestId?: string;

  @Metadata({ data: "header, style=simple;explode=false;name=ocp-date" })
  ocpDate?: string;

  @Metadata({ data: "header, style=simple;explode=false;name=ocp-range" })
  ocpRange?: string;

  @Metadata({ data: "header, style=simple;explode=false;name=return-client-request-id" })
  returnClientRequestId?: boolean;
}


export class FileGetFromTaskRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: FileGetFromTaskPathParams;

  @Metadata()
  queryParams: FileGetFromTaskQueryParams;

  @Metadata()
  headers: FileGetFromTaskHeaders;
}


export class FileGetFromTaskResponse extends SpeakeasyBase {
  @Metadata()
  batchError?: any;

  @Metadata()
  contentType: string;

  @Metadata()
  fileGetFromTask200ApplicationJsonBinaryString?: Uint8Array;

  @Metadata()
  headers: Map<string, string[]>;

  @Metadata()
  statusCode: number;
}
