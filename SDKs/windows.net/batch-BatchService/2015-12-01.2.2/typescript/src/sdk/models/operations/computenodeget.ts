import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class ComputeNodeGetPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=nodeId" })
  nodeId: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=poolId" })
  poolId: string;
}


export class ComputeNodeGetQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$select" })
  dollarSelect?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=api-version" })
  apiVersion: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=timeout" })
  timeout?: number;
}


export class ComputeNodeGetHeaders extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=client-request-id" })
  clientRequestId?: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=ocp-date" })
  ocpDate?: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=return-client-request-id" })
  returnClientRequestId?: boolean;
}


export class ComputeNodeGetRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: ComputeNodeGetPathParams;

  @SpeakeasyMetadata()
  queryParams: ComputeNodeGetQueryParams;

  @SpeakeasyMetadata()
  headers: ComputeNodeGetHeaders;
}


export class ComputeNodeGetResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  batchError?: any;

  @SpeakeasyMetadata()
  computeNode?: any;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  headers: Map<string, string[]>;

  @SpeakeasyMetadata()
  statusCode: number;
}
