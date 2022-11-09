import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class FileGetNodeFilePropertiesFromTaskPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=fileName" })
  fileName: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=jobId" })
  jobId: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=taskId" })
  taskId: string;
}


export class FileGetNodeFilePropertiesFromTaskQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=api-version" })
  apiVersion: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=timeout" })
  timeout?: number;
}


export class FileGetNodeFilePropertiesFromTaskHeaders extends SpeakeasyBase {
  @Metadata({ data: "header, style=simple;explode=false;name=If-Modified-Since" })
  ifModifiedSince?: string;

  @Metadata({ data: "header, style=simple;explode=false;name=If-Unmodified-Since" })
  ifUnmodifiedSince?: string;

  @Metadata({ data: "header, style=simple;explode=false;name=client-request-id" })
  clientRequestId?: string;

  @Metadata({ data: "header, style=simple;explode=false;name=ocp-date" })
  ocpDate?: string;

  @Metadata({ data: "header, style=simple;explode=false;name=return-client-request-id" })
  returnClientRequestId?: boolean;
}


export class FileGetNodeFilePropertiesFromTaskRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: FileGetNodeFilePropertiesFromTaskPathParams;

  @Metadata()
  queryParams: FileGetNodeFilePropertiesFromTaskQueryParams;

  @Metadata()
  headers: FileGetNodeFilePropertiesFromTaskHeaders;
}


export class FileGetNodeFilePropertiesFromTaskResponse extends SpeakeasyBase {
  @Metadata()
  batchError?: any;

  @Metadata()
  contentType: string;

  @Metadata()
  headers: Map<string, string[]>;

  @Metadata()
  statusCode: number;
}
