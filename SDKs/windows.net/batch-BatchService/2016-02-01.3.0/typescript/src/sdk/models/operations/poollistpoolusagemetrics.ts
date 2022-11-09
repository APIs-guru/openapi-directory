import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class PoolListPoolUsageMetricsQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=$filter" })
  dollarFilter?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=api-version" })
  apiVersion: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=endtime" })
  endtime?: Date;

  @Metadata({ data: "queryParam, style=form;explode=true;name=maxresults" })
  maxresults?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=starttime" })
  starttime?: Date;

  @Metadata({ data: "queryParam, style=form;explode=true;name=timeout" })
  timeout?: number;
}


export class PoolListPoolUsageMetricsHeaders extends SpeakeasyBase {
  @Metadata({ data: "header, style=simple;explode=false;name=client-request-id" })
  clientRequestId?: string;

  @Metadata({ data: "header, style=simple;explode=false;name=ocp-date" })
  ocpDate?: string;

  @Metadata({ data: "header, style=simple;explode=false;name=return-client-request-id" })
  returnClientRequestId?: boolean;
}


export class PoolListPoolUsageMetricsRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: PoolListPoolUsageMetricsQueryParams;

  @Metadata()
  headers: PoolListPoolUsageMetricsHeaders;
}


export class PoolListPoolUsageMetricsResponse extends SpeakeasyBase {
  @Metadata()
  batchError?: any;

  @Metadata()
  contentType: string;

  @Metadata()
  headers: Map<string, string[]>;

  @Metadata()
  poolListPoolUsageMetricsResult?: any;

  @Metadata()
  statusCode: number;
}
