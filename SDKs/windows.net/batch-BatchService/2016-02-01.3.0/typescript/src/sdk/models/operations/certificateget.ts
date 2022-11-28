import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class CertificateGetPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=thumbprint" })
  thumbprint: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=thumbprintAlgorithm" })
  thumbprintAlgorithm: string;
}


export class CertificateGetQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$select" })
  dollarSelect?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=api-version" })
  apiVersion: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=timeout" })
  timeout?: number;
}


export class CertificateGetHeaders extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=client-request-id" })
  clientRequestId?: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=ocp-date" })
  ocpDate?: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=return-client-request-id" })
  returnClientRequestId?: boolean;
}


export class CertificateGetRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: CertificateGetPathParams;

  @SpeakeasyMetadata()
  queryParams: CertificateGetQueryParams;

  @SpeakeasyMetadata()
  headers: CertificateGetHeaders;
}


export class CertificateGetResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  batchError?: any;

  @SpeakeasyMetadata()
  certificate?: any;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  headers: Map<string, string[]>;

  @SpeakeasyMetadata()
  statusCode: number;
}
