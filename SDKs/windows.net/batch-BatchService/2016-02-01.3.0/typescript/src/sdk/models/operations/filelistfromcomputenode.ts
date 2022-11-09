import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class FileListFromComputeNodePathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=nodeId" })
  nodeId: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=poolId" })
  poolId: string;
}


export class FileListFromComputeNodeQueryParams extends SpeakeasyBase {
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


export class FileListFromComputeNodeHeaders extends SpeakeasyBase {
  @Metadata({ data: "header, style=simple;explode=false;name=client-request-id" })
  clientRequestId?: string;

  @Metadata({ data: "header, style=simple;explode=false;name=ocp-date" })
  ocpDate?: string;

  @Metadata({ data: "header, style=simple;explode=false;name=return-client-request-id" })
  returnClientRequestId?: boolean;
}


export class FileListFromComputeNodeRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: FileListFromComputeNodePathParams;

  @Metadata()
  queryParams: FileListFromComputeNodeQueryParams;

  @Metadata()
  headers: FileListFromComputeNodeHeaders;
}


export class FileListFromComputeNodeResponse extends SpeakeasyBase {
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
