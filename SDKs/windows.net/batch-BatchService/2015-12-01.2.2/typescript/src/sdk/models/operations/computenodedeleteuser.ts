import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class ComputeNodeDeleteUserPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=nodeId" })
  nodeId: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=poolId" })
  poolId: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=userName" })
  userName: string;
}


export class ComputeNodeDeleteUserQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=api-version" })
  apiVersion: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=timeout" })
  timeout?: number;
}


export class ComputeNodeDeleteUserHeaders extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=client-request-id" })
  clientRequestId?: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=ocp-date" })
  ocpDate?: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=return-client-request-id" })
  returnClientRequestId?: boolean;
}


export class ComputeNodeDeleteUserRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: ComputeNodeDeleteUserPathParams;

  @SpeakeasyMetadata()
  queryParams: ComputeNodeDeleteUserQueryParams;

  @SpeakeasyMetadata()
  headers: ComputeNodeDeleteUserHeaders;
}


export class ComputeNodeDeleteUserResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  batchError?: any;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  headers: Map<string, string[]>;

  @SpeakeasyMetadata()
  statusCode: number;
}
