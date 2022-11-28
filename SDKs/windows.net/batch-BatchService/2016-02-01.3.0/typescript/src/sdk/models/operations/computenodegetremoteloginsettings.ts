import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class ComputeNodeGetRemoteLoginSettingsPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=nodeId" })
  nodeId: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=poolId" })
  poolId: string;
}


export class ComputeNodeGetRemoteLoginSettingsQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=api-version" })
  apiVersion: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=timeout" })
  timeout?: number;
}


export class ComputeNodeGetRemoteLoginSettingsHeaders extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=client-request-id" })
  clientRequestId?: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=ocp-date" })
  ocpDate?: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=return-client-request-id" })
  returnClientRequestId?: boolean;
}


export class ComputeNodeGetRemoteLoginSettingsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: ComputeNodeGetRemoteLoginSettingsPathParams;

  @SpeakeasyMetadata()
  queryParams: ComputeNodeGetRemoteLoginSettingsQueryParams;

  @SpeakeasyMetadata()
  headers: ComputeNodeGetRemoteLoginSettingsHeaders;
}


export class ComputeNodeGetRemoteLoginSettingsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  batchError?: any;

  @SpeakeasyMetadata()
  computeNodeGetRemoteLoginSettingsResult?: any;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  headers: Map<string, string[]>;

  @SpeakeasyMetadata()
  statusCode: number;
}
