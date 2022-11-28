import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class CertificateDeletePathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=thumbprint" })
  thumbprint: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=thumbprintAlgorithm" })
  thumbprintAlgorithm: string;
}


export class CertificateDeleteQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=api-version" })
  apiVersion: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=timeout" })
  timeout?: number;
}


export class CertificateDeleteHeaders extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=client-request-id" })
  clientRequestId?: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=ocp-date" })
  ocpDate?: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=return-client-request-id" })
  returnClientRequestId?: boolean;
}


export class CertificateDeleteRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: CertificateDeletePathParams;

  @SpeakeasyMetadata()
  queryParams: CertificateDeleteQueryParams;

  @SpeakeasyMetadata()
  headers: CertificateDeleteHeaders;
}


export class CertificateDeleteResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  batchError?: any;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  headers: Map<string, string[]>;

  @SpeakeasyMetadata()
  statusCode: number;
}
