import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class JobGetAllJobsLifetimeStatisticsQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=api-version" })
  apiVersion: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=timeout" })
  timeout?: number;
}


export class JobGetAllJobsLifetimeStatisticsHeaders extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=client-request-id" })
  clientRequestId?: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=ocp-date" })
  ocpDate?: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=return-client-request-id" })
  returnClientRequestId?: boolean;
}


export class JobGetAllJobsLifetimeStatisticsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: JobGetAllJobsLifetimeStatisticsQueryParams;

  @SpeakeasyMetadata()
  headers: JobGetAllJobsLifetimeStatisticsHeaders;
}


export class JobGetAllJobsLifetimeStatisticsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  batchError?: any;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  headers: Map<string, string[]>;

  @SpeakeasyMetadata()
  jobStatistics?: any;

  @SpeakeasyMetadata()
  statusCode: number;
}
