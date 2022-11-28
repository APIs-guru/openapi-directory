import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class JobListQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$expand" })
  dollarExpand?: string;

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


export class JobListHeaders extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=client-request-id" })
  clientRequestId?: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=ocp-date" })
  ocpDate?: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=return-client-request-id" })
  returnClientRequestId?: boolean;
}


export class JobListRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: JobListQueryParams;

  @SpeakeasyMetadata()
  headers: JobListHeaders;
}


export class JobListResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  batchError?: any;

  @SpeakeasyMetadata()
  cloudJobListResult?: any;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  headers: Map<string, string[]>;

  @SpeakeasyMetadata()
  statusCode: number;
}
