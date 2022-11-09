import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class PoolGetAllPoolsLifetimeStatisticsQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=api-version" })
  apiVersion: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=timeout" })
  timeout?: number;
}


export class PoolGetAllPoolsLifetimeStatisticsHeaders extends SpeakeasyBase {
  @Metadata({ data: "header, style=simple;explode=false;name=client-request-id" })
  clientRequestId?: string;

  @Metadata({ data: "header, style=simple;explode=false;name=ocp-date" })
  ocpDate?: string;

  @Metadata({ data: "header, style=simple;explode=false;name=return-client-request-id" })
  returnClientRequestId?: boolean;
}


export class PoolGetAllPoolsLifetimeStatisticsRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: PoolGetAllPoolsLifetimeStatisticsQueryParams;

  @Metadata()
  headers: PoolGetAllPoolsLifetimeStatisticsHeaders;
}


export class PoolGetAllPoolsLifetimeStatisticsResponse extends SpeakeasyBase {
  @Metadata()
  batchError?: any;

  @Metadata()
  contentType: string;

  @Metadata()
  headers: Map<string, string[]>;

  @Metadata()
  poolStatistics?: any;

  @Metadata()
  statusCode: number;
}
