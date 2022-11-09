import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class CertificateCancelDeletionPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=thumbprint" })
  thumbprint: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=thumbprintAlgorithm" })
  thumbprintAlgorithm: string;
}


export class CertificateCancelDeletionQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=api-version" })
  apiVersion: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=timeout" })
  timeout?: number;
}


export class CertificateCancelDeletionHeaders extends SpeakeasyBase {
  @Metadata({ data: "header, style=simple;explode=false;name=client-request-id" })
  clientRequestId?: string;

  @Metadata({ data: "header, style=simple;explode=false;name=ocp-date" })
  ocpDate?: string;

  @Metadata({ data: "header, style=simple;explode=false;name=return-client-request-id" })
  returnClientRequestId?: boolean;
}


export class CertificateCancelDeletionRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: CertificateCancelDeletionPathParams;

  @Metadata()
  queryParams: CertificateCancelDeletionQueryParams;

  @Metadata()
  headers: CertificateCancelDeletionHeaders;
}


export class CertificateCancelDeletionResponse extends SpeakeasyBase {
  @Metadata()
  batchError?: any;

  @Metadata()
  contentType: string;

  @Metadata()
  headers: Map<string, string[]>;

  @Metadata()
  statusCode: number;
}
