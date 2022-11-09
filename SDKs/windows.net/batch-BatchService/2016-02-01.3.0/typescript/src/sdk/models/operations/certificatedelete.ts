import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class CertificateDeletePathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=thumbprint" })
  thumbprint: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=thumbprintAlgorithm" })
  thumbprintAlgorithm: string;
}


export class CertificateDeleteQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=api-version" })
  apiVersion: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=timeout" })
  timeout?: number;
}


export class CertificateDeleteHeaders extends SpeakeasyBase {
  @Metadata({ data: "header, style=simple;explode=false;name=client-request-id" })
  clientRequestId?: string;

  @Metadata({ data: "header, style=simple;explode=false;name=ocp-date" })
  ocpDate?: string;

  @Metadata({ data: "header, style=simple;explode=false;name=return-client-request-id" })
  returnClientRequestId?: boolean;
}


export class CertificateDeleteRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: CertificateDeletePathParams;

  @Metadata()
  queryParams: CertificateDeleteQueryParams;

  @Metadata()
  headers: CertificateDeleteHeaders;
}


export class CertificateDeleteResponse extends SpeakeasyBase {
  @Metadata()
  batchError?: any;

  @Metadata()
  contentType: string;

  @Metadata()
  headers: Map<string, string[]>;

  @Metadata()
  statusCode: number;
}
