import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class JobGetAllJobsLifetimeStatisticsQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=api-version" })
  apiVersion: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=timeout" })
  timeout?: number;
}


export class JobGetAllJobsLifetimeStatisticsHeaders extends SpeakeasyBase {
  @Metadata({ data: "header, style=simple;explode=false;name=client-request-id" })
  clientRequestId?: string;

  @Metadata({ data: "header, style=simple;explode=false;name=ocp-date" })
  ocpDate?: string;

  @Metadata({ data: "header, style=simple;explode=false;name=return-client-request-id" })
  returnClientRequestId?: boolean;
}


export class JobGetAllJobsLifetimeStatisticsRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: JobGetAllJobsLifetimeStatisticsQueryParams;

  @Metadata()
  headers: JobGetAllJobsLifetimeStatisticsHeaders;
}


export class JobGetAllJobsLifetimeStatisticsResponse extends SpeakeasyBase {
  @Metadata()
  batchError?: any;

  @Metadata()
  contentType: string;

  @Metadata()
  headers: Map<string, string[]>;

  @Metadata()
  jobStatistics?: any;

  @Metadata()
  statusCode: number;
}
