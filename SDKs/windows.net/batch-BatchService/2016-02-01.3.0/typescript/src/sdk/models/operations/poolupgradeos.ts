import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class PoolUpgradeOsPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=poolId" })
  poolId: string;
}


export class PoolUpgradeOsQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=api-version" })
  apiVersion: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=timeout" })
  timeout?: number;
}


export class PoolUpgradeOsHeaders extends SpeakeasyBase {
  @Metadata({ data: "header, style=simple;explode=false;name=If-Match" })
  ifMatch?: string;

  @Metadata({ data: "header, style=simple;explode=false;name=If-Modified-Since" })
  ifModifiedSince?: string;

  @Metadata({ data: "header, style=simple;explode=false;name=If-None-Match" })
  ifNoneMatch?: string;

  @Metadata({ data: "header, style=simple;explode=false;name=If-Unmodified-Since" })
  ifUnmodifiedSince?: string;

  @Metadata({ data: "header, style=simple;explode=false;name=client-request-id" })
  clientRequestId?: string;

  @Metadata({ data: "header, style=simple;explode=false;name=ocp-date" })
  ocpDate?: string;

  @Metadata({ data: "header, style=simple;explode=false;name=return-client-request-id" })
  returnClientRequestId?: boolean;
}


export class PoolUpgradeOsRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: PoolUpgradeOsPathParams;

  @Metadata()
  queryParams: PoolUpgradeOsQueryParams;

  @Metadata()
  headers: PoolUpgradeOsHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: any;
}


export class PoolUpgradeOsResponse extends SpeakeasyBase {
  @Metadata()
  batchError?: any;

  @Metadata()
  contentType: string;

  @Metadata()
  headers: Map<string, string[]>;

  @Metadata()
  statusCode: number;
}
