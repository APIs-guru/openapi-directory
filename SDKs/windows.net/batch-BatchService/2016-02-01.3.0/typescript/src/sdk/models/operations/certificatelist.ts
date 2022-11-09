import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class CertificateListQueryParams extends SpeakeasyBase {
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


export class CertificateListHeaders extends SpeakeasyBase {
  @Metadata({ data: "header, style=simple;explode=false;name=client-request-id" })
  clientRequestId?: string;

  @Metadata({ data: "header, style=simple;explode=false;name=ocp-date" })
  ocpDate?: string;

  @Metadata({ data: "header, style=simple;explode=false;name=return-client-request-id" })
  returnClientRequestId?: boolean;
}


export class CertificateListRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: CertificateListQueryParams;

  @Metadata()
  headers: CertificateListHeaders;
}


export class CertificateListResponse extends SpeakeasyBase {
  @Metadata()
  batchError?: any;

  @Metadata()
  certificateListResult?: any;

  @Metadata()
  contentType: string;

  @Metadata()
  headers: Map<string, string[]>;

  @Metadata()
  statusCode: number;
}
