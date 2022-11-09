import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class ComputeNodeDisableSchedulingPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=nodeId" })
  nodeId: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=poolId" })
  poolId: string;
}


export class ComputeNodeDisableSchedulingQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=api-version" })
  apiVersion: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=timeout" })
  timeout?: number;
}


export class ComputeNodeDisableSchedulingHeaders extends SpeakeasyBase {
  @Metadata({ data: "header, style=simple;explode=false;name=client-request-id" })
  clientRequestId?: string;

  @Metadata({ data: "header, style=simple;explode=false;name=ocp-date" })
  ocpDate?: string;

  @Metadata({ data: "header, style=simple;explode=false;name=return-client-request-id" })
  returnClientRequestId?: boolean;
}


export class ComputeNodeDisableSchedulingRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: ComputeNodeDisableSchedulingPathParams;

  @Metadata()
  queryParams: ComputeNodeDisableSchedulingQueryParams;

  @Metadata()
  headers: ComputeNodeDisableSchedulingHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request?: any;
}


export class ComputeNodeDisableSchedulingResponse extends SpeakeasyBase {
  @Metadata()
  batchError?: any;

  @Metadata()
  contentType: string;

  @Metadata()
  headers: Map<string, string[]>;

  @Metadata()
  statusCode: number;
}
