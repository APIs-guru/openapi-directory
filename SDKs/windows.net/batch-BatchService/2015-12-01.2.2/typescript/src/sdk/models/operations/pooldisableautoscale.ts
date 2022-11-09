import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class PoolDisableAutoScalePathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=poolId" })
  poolId: string;
}


export class PoolDisableAutoScaleQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=api-version" })
  apiVersion: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=timeout" })
  timeout?: number;
}


export class PoolDisableAutoScaleHeaders extends SpeakeasyBase {
  @Metadata({ data: "header, style=simple;explode=false;name=client-request-id" })
  clientRequestId?: string;

  @Metadata({ data: "header, style=simple;explode=false;name=ocp-date" })
  ocpDate?: string;

  @Metadata({ data: "header, style=simple;explode=false;name=return-client-request-id" })
  returnClientRequestId?: boolean;
}


export class PoolDisableAutoScaleRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: PoolDisableAutoScalePathParams;

  @Metadata()
  queryParams: PoolDisableAutoScaleQueryParams;

  @Metadata()
  headers: PoolDisableAutoScaleHeaders;
}


export class PoolDisableAutoScaleResponse extends SpeakeasyBase {
  @Metadata()
  batchError?: any;

  @Metadata()
  contentType: string;

  @Metadata()
  headers: Map<string, string[]>;

  @Metadata()
  statusCode: number;
}
