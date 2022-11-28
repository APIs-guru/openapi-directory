import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class FileDeleteFromComputeNodePathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=fileName" })
  fileName: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=nodeId" })
  nodeId: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=poolId" })
  poolId: string;
}


export class FileDeleteFromComputeNodeQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=api-version" })
  apiVersion: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=recursive" })
  recursive?: boolean;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=timeout" })
  timeout?: number;
}


export class FileDeleteFromComputeNodeHeaders extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=client-request-id" })
  clientRequestId?: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=ocp-date" })
  ocpDate?: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=return-client-request-id" })
  returnClientRequestId?: boolean;
}


export class FileDeleteFromComputeNodeRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: FileDeleteFromComputeNodePathParams;

  @SpeakeasyMetadata()
  queryParams: FileDeleteFromComputeNodeQueryParams;

  @SpeakeasyMetadata()
  headers: FileDeleteFromComputeNodeHeaders;
}


export class FileDeleteFromComputeNodeResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  batchError?: any;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  headers: Map<string, string[]>;

  @SpeakeasyMetadata()
  statusCode: number;
}
