import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class ApplicationGetPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=applicationId" })
  applicationId: string;
}


export class ApplicationGetQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=api-version" })
  apiVersion: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=timeout" })
  timeout?: number;
}


export class ApplicationGetHeaders extends SpeakeasyBase {
  @Metadata({ data: "header, style=simple;explode=false;name=client-request-id" })
  clientRequestId?: string;

  @Metadata({ data: "header, style=simple;explode=false;name=ocp-date" })
  ocpDate?: string;

  @Metadata({ data: "header, style=simple;explode=false;name=return-client-request-id" })
  returnClientRequestId?: boolean;
}


export class ApplicationGetRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: ApplicationGetPathParams;

  @Metadata()
  queryParams: ApplicationGetQueryParams;

  @Metadata()
  headers: ApplicationGetHeaders;
}


export class ApplicationGetResponse extends SpeakeasyBase {
  @Metadata()
  applicationSummary?: any;

  @Metadata()
  batchError?: any;

  @Metadata()
  contentType: string;

  @Metadata()
  headers: Map<string, string[]>;

  @Metadata()
  statusCode: number;
}
