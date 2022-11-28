import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class PoolDisableAutoScalePathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=poolId" })
  poolId: string;
}


export class PoolDisableAutoScaleQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=api-version" })
  apiVersion: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=timeout" })
  timeout?: number;
}


export class PoolDisableAutoScaleHeaders extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=client-request-id" })
  clientRequestId?: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=ocp-date" })
  ocpDate?: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=return-client-request-id" })
  returnClientRequestId?: boolean;
}


export class PoolDisableAutoScaleRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: PoolDisableAutoScalePathParams;

  @SpeakeasyMetadata()
  queryParams: PoolDisableAutoScaleQueryParams;

  @SpeakeasyMetadata()
  headers: PoolDisableAutoScaleHeaders;
}


export class PoolDisableAutoScaleResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  batchError?: any;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  headers: Map<string, string[]>;

  @SpeakeasyMetadata()
  statusCode: number;
}
