import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class PoolEvaluateAutoScalePathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=poolId" })
  poolId: string;
}


export class PoolEvaluateAutoScaleQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=api-version" })
  apiVersion: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=timeout" })
  timeout?: number;
}


export class PoolEvaluateAutoScaleHeaders extends SpeakeasyBase {
  @Metadata({ data: "header, style=simple;explode=false;name=client-request-id" })
  clientRequestId?: string;

  @Metadata({ data: "header, style=simple;explode=false;name=ocp-date" })
  ocpDate?: string;

  @Metadata({ data: "header, style=simple;explode=false;name=return-client-request-id" })
  returnClientRequestId?: boolean;
}


export class PoolEvaluateAutoScaleRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: PoolEvaluateAutoScalePathParams;

  @Metadata()
  queryParams: PoolEvaluateAutoScaleQueryParams;

  @Metadata()
  headers: PoolEvaluateAutoScaleHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: any;
}


export class PoolEvaluateAutoScaleResponse extends SpeakeasyBase {
  @Metadata()
  autoScaleRun?: any;

  @Metadata()
  batchError?: any;

  @Metadata()
  contentType: string;

  @Metadata()
  headers: Map<string, string[]>;

  @Metadata()
  statusCode: number;
}
