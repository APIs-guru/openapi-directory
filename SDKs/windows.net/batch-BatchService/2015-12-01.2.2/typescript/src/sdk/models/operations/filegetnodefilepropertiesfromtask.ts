import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class FileGetNodeFilePropertiesFromTaskPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=fileName" })
  fileName: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=jobId" })
  jobId: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=taskId" })
  taskId: string;
}


export class FileGetNodeFilePropertiesFromTaskQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=api-version" })
  apiVersion: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=timeout" })
  timeout?: number;
}


export class FileGetNodeFilePropertiesFromTaskHeaders extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=If-Modified-Since" })
  ifModifiedSince?: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=If-Unmodified-Since" })
  ifUnmodifiedSince?: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=client-request-id" })
  clientRequestId?: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=ocp-date" })
  ocpDate?: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=return-client-request-id" })
  returnClientRequestId?: boolean;
}


export class FileGetNodeFilePropertiesFromTaskRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: FileGetNodeFilePropertiesFromTaskPathParams;

  @SpeakeasyMetadata()
  queryParams: FileGetNodeFilePropertiesFromTaskQueryParams;

  @SpeakeasyMetadata()
  headers: FileGetNodeFilePropertiesFromTaskHeaders;
}


export class FileGetNodeFilePropertiesFromTaskResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  batchError?: any;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  headers: Map<string, string[]>;

  @SpeakeasyMetadata()
  statusCode: number;
}
