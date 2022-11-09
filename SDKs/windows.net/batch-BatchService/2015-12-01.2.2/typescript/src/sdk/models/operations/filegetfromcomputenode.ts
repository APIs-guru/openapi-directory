import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class FileGetFromComputeNodePathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=fileName" })
  fileName: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=nodeId" })
  nodeId: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=poolId" })
  poolId: string;
}


export class FileGetFromComputeNodeQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=api-version" })
  apiVersion: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=timeout" })
  timeout?: number;
}


export class FileGetFromComputeNodeHeaders extends SpeakeasyBase {
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


export class FileGetFromComputeNodeRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: FileGetFromComputeNodePathParams;

  @Metadata()
  queryParams: FileGetFromComputeNodeQueryParams;

  @Metadata()
  headers: FileGetFromComputeNodeHeaders;
}


export class FileGetFromComputeNodeResponse extends SpeakeasyBase {
  @Metadata()
  batchError?: any;

  @Metadata()
  contentType: string;

  @Metadata()
  fileGetFromComputeNode200ApplicationJsonBinaryString?: Uint8Array;

  @Metadata()
  headers: Map<string, string[]>;

  @Metadata()
  statusCode: number;
}
