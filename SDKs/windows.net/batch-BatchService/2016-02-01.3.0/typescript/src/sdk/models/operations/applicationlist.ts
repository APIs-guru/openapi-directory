import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class ApplicationListQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=api-version" })
  apiVersion: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=maxresults" })
  maxresults?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=timeout" })
  timeout?: number;
}


export class ApplicationListHeaders extends SpeakeasyBase {
  @Metadata({ data: "header, style=simple;explode=false;name=client-request-id" })
  clientRequestId?: string;

  @Metadata({ data: "header, style=simple;explode=false;name=ocp-date" })
  ocpDate?: string;

  @Metadata({ data: "header, style=simple;explode=false;name=return-client-request-id" })
  returnClientRequestId?: boolean;
}


export class ApplicationListRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: ApplicationListQueryParams;

  @Metadata()
  headers: ApplicationListHeaders;
}


export class ApplicationListResponse extends SpeakeasyBase {
  @Metadata()
  applicationListResult?: any;

  @Metadata()
  batchError?: any;

  @Metadata()
  contentType: string;

  @Metadata()
  headers: Map<string, string[]>;

  @Metadata()
  statusCode: number;
}
