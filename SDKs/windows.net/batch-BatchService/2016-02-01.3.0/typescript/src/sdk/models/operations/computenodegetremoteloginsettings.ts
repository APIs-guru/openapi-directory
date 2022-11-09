import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class ComputeNodeGetRemoteLoginSettingsPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=nodeId" })
  nodeId: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=poolId" })
  poolId: string;
}


export class ComputeNodeGetRemoteLoginSettingsQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=api-version" })
  apiVersion: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=timeout" })
  timeout?: number;
}


export class ComputeNodeGetRemoteLoginSettingsHeaders extends SpeakeasyBase {
  @Metadata({ data: "header, style=simple;explode=false;name=client-request-id" })
  clientRequestId?: string;

  @Metadata({ data: "header, style=simple;explode=false;name=ocp-date" })
  ocpDate?: string;

  @Metadata({ data: "header, style=simple;explode=false;name=return-client-request-id" })
  returnClientRequestId?: boolean;
}


export class ComputeNodeGetRemoteLoginSettingsRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: ComputeNodeGetRemoteLoginSettingsPathParams;

  @Metadata()
  queryParams: ComputeNodeGetRemoteLoginSettingsQueryParams;

  @Metadata()
  headers: ComputeNodeGetRemoteLoginSettingsHeaders;
}


export class ComputeNodeGetRemoteLoginSettingsResponse extends SpeakeasyBase {
  @Metadata()
  batchError?: any;

  @Metadata()
  computeNodeGetRemoteLoginSettingsResult?: any;

  @Metadata()
  contentType: string;

  @Metadata()
  headers: Map<string, string[]>;

  @Metadata()
  statusCode: number;
}
