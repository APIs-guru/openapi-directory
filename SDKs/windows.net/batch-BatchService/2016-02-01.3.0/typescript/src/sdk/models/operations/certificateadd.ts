import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class CertificateAddQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=api-version" })
  apiVersion: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=timeout" })
  timeout?: number;
}


export class CertificateAddHeaders extends SpeakeasyBase {
  @Metadata({ data: "header, style=simple;explode=false;name=client-request-id" })
  clientRequestId?: string;

  @Metadata({ data: "header, style=simple;explode=false;name=ocp-date" })
  ocpDate?: string;

  @Metadata({ data: "header, style=simple;explode=false;name=return-client-request-id" })
  returnClientRequestId?: boolean;
}


export class CertificateAddRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: CertificateAddQueryParams;

  @Metadata()
  headers: CertificateAddHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: any;
}


export class CertificateAddResponse extends SpeakeasyBase {
  @Metadata()
  batchError?: any;

  @Metadata()
  contentType: string;

  @Metadata()
  headers: Map<string, string[]>;

  @Metadata()
  statusCode: number;
}
