import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class JobScheduleGetPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=jobScheduleId" })
  jobScheduleId: string;
}


export class JobScheduleGetQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=$expand" })
  dollarExpand?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=$select" })
  dollarSelect?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=api-version" })
  apiVersion: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=timeout" })
  timeout?: number;
}


export class JobScheduleGetHeaders extends SpeakeasyBase {
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


export class JobScheduleGetRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: JobScheduleGetPathParams;

  @Metadata()
  queryParams: JobScheduleGetQueryParams;

  @Metadata()
  headers: JobScheduleGetHeaders;
}


export class JobScheduleGetResponse extends SpeakeasyBase {
  @Metadata()
  batchError?: any;

  @Metadata()
  cloudJobSchedule?: any;

  @Metadata()
  contentType: string;

  @Metadata()
  headers: Map<string, string[]>;

  @Metadata()
  statusCode: number;
}
