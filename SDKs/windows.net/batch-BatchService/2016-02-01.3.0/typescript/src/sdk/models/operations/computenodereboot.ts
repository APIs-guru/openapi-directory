import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class ComputeNodeRebootPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=nodeId" })
  nodeId: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=poolId" })
  poolId: string;
}


export class ComputeNodeRebootQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=api-version" })
  apiVersion: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=timeout" })
  timeout?: number;
}


export class ComputeNodeRebootHeaders extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=client-request-id" })
  clientRequestId?: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=ocp-date" })
  ocpDate?: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=return-client-request-id" })
  returnClientRequestId?: boolean;
}


export class ComputeNodeRebootRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: ComputeNodeRebootPathParams;

  @SpeakeasyMetadata()
  queryParams: ComputeNodeRebootQueryParams;

  @SpeakeasyMetadata()
  headers: ComputeNodeRebootHeaders;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request?: any;
}


export class ComputeNodeRebootResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  batchError?: any;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  headers: Map<string, string[]>;

  @SpeakeasyMetadata()
  statusCode: number;
}
