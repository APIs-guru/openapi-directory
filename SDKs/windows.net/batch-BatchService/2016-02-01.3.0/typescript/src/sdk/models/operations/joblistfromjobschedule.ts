import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class JobListFromJobSchedulePathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=jobScheduleId" })
  jobScheduleId: string;
}


export class JobListFromJobScheduleQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=$expand" })
  dollarExpand?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=$filter" })
  dollarFilter?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=$select" })
  dollarSelect?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=api-version" })
  apiVersion: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=maxresults" })
  maxresults?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=timeout" })
  timeout?: number;
}


export class JobListFromJobScheduleHeaders extends SpeakeasyBase {
  @Metadata({ data: "header, style=simple;explode=false;name=client-request-id" })
  clientRequestId?: string;

  @Metadata({ data: "header, style=simple;explode=false;name=ocp-date" })
  ocpDate?: string;

  @Metadata({ data: "header, style=simple;explode=false;name=return-client-request-id" })
  returnClientRequestId?: boolean;
}


export class JobListFromJobScheduleRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: JobListFromJobSchedulePathParams;

  @Metadata()
  queryParams: JobListFromJobScheduleQueryParams;

  @Metadata()
  headers: JobListFromJobScheduleHeaders;
}


export class JobListFromJobScheduleResponse extends SpeakeasyBase {
  @Metadata()
  batchError?: any;

  @Metadata()
  cloudJobListResult?: any;

  @Metadata()
  contentType: string;

  @Metadata()
  headers: Map<string, string[]>;

  @Metadata()
  statusCode: number;
}
