import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class JobListPreparationAndReleaseTaskStatusPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=jobId" })
  jobId: string;
}


export class JobListPreparationAndReleaseTaskStatusQueryParams extends SpeakeasyBase {
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


export class JobListPreparationAndReleaseTaskStatusHeaders extends SpeakeasyBase {
  @Metadata({ data: "header, style=simple;explode=false;name=client-request-id" })
  clientRequestId?: string;

  @Metadata({ data: "header, style=simple;explode=false;name=ocp-date" })
  ocpDate?: string;

  @Metadata({ data: "header, style=simple;explode=false;name=return-client-request-id" })
  returnClientRequestId?: boolean;
}


export class JobListPreparationAndReleaseTaskStatusRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: JobListPreparationAndReleaseTaskStatusPathParams;

  @Metadata()
  queryParams: JobListPreparationAndReleaseTaskStatusQueryParams;

  @Metadata()
  headers: JobListPreparationAndReleaseTaskStatusHeaders;
}


export class JobListPreparationAndReleaseTaskStatusResponse extends SpeakeasyBase {
  @Metadata()
  batchError?: any;

  @Metadata()
  cloudJobListPreparationAndReleaseTaskStatusResult?: any;

  @Metadata()
  contentType: string;

  @Metadata()
  headers: Map<string, string[]>;

  @Metadata()
  statusCode: number;
}
