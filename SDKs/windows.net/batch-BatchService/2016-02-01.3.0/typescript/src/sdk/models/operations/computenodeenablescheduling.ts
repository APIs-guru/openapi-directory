import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class ComputeNodeEnableSchedulingPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=nodeId" })
  nodeId: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=poolId" })
  poolId: string;
}


export class ComputeNodeEnableSchedulingQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=api-version" })
  apiVersion: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=timeout" })
  timeout?: number;
}


export class ComputeNodeEnableSchedulingHeaders extends SpeakeasyBase {
  @Metadata({ data: "header, style=simple;explode=false;name=client-request-id" })
  clientRequestId?: string;

  @Metadata({ data: "header, style=simple;explode=false;name=ocp-date" })
  ocpDate?: string;

  @Metadata({ data: "header, style=simple;explode=false;name=return-client-request-id" })
  returnClientRequestId?: boolean;
}


export class ComputeNodeEnableSchedulingRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: ComputeNodeEnableSchedulingPathParams;

  @Metadata()
  queryParams: ComputeNodeEnableSchedulingQueryParams;

  @Metadata()
  headers: ComputeNodeEnableSchedulingHeaders;
}


export class ComputeNodeEnableSchedulingResponse extends SpeakeasyBase {
  @Metadata()
  batchError?: any;

  @Metadata()
  contentType: string;

  @Metadata()
  headers: Map<string, string[]>;

  @Metadata()
  statusCode: number;
}
