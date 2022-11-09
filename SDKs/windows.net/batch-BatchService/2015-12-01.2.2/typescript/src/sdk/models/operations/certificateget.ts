import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class CertificateGetPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=thumbprint" })
  thumbprint: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=thumbprintAlgorithm" })
  thumbprintAlgorithm: string;
}


export class CertificateGetQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=$select" })
  dollarSelect?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=api-version" })
  apiVersion: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=timeout" })
  timeout?: number;
}


export class CertificateGetHeaders extends SpeakeasyBase {
  @Metadata({ data: "header, style=simple;explode=false;name=client-request-id" })
  clientRequestId?: string;

  @Metadata({ data: "header, style=simple;explode=false;name=ocp-date" })
  ocpDate?: string;

  @Metadata({ data: "header, style=simple;explode=false;name=return-client-request-id" })
  returnClientRequestId?: boolean;
}


export class CertificateGetRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: CertificateGetPathParams;

  @Metadata()
  queryParams: CertificateGetQueryParams;

  @Metadata()
  headers: CertificateGetHeaders;
}


export class CertificateGetResponse extends SpeakeasyBase {
  @Metadata()
  batchError?: any;

  @Metadata()
  certificate?: any;

  @Metadata()
  contentType: string;

  @Metadata()
  headers: Map<string, string[]>;

  @Metadata()
  statusCode: number;
}
