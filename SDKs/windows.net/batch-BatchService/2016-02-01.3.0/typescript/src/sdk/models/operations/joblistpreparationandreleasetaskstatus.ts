import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class JobListPreparationAndReleaseTaskStatusPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=jobId" })
  jobId: string;
}


export class JobListPreparationAndReleaseTaskStatusQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$filter" })
  dollarFilter?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$select" })
  dollarSelect?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=api-version" })
  apiVersion: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=maxresults" })
  maxresults?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=timeout" })
  timeout?: number;
}


export class JobListPreparationAndReleaseTaskStatusHeaders extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=client-request-id" })
  clientRequestId?: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=ocp-date" })
  ocpDate?: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=return-client-request-id" })
  returnClientRequestId?: boolean;
}


export class JobListPreparationAndReleaseTaskStatusRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: JobListPreparationAndReleaseTaskStatusPathParams;

  @SpeakeasyMetadata()
  queryParams: JobListPreparationAndReleaseTaskStatusQueryParams;

  @SpeakeasyMetadata()
  headers: JobListPreparationAndReleaseTaskStatusHeaders;
}


export class JobListPreparationAndReleaseTaskStatusResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  batchError?: any;

  @SpeakeasyMetadata()
  cloudJobListPreparationAndReleaseTaskStatusResult?: any;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  headers: Map<string, string[]>;

  @SpeakeasyMetadata()
  statusCode: number;
}
