import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class PoolUpdatePropertiesPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=poolId" })
  poolId: string;
}


export class PoolUpdatePropertiesQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=api-version" })
  apiVersion: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=timeout" })
  timeout?: number;
}


export class PoolUpdatePropertiesHeaders extends SpeakeasyBase {
  @Metadata({ data: "header, style=simple;explode=false;name=client-request-id" })
  clientRequestId?: string;

  @Metadata({ data: "header, style=simple;explode=false;name=ocp-date" })
  ocpDate?: string;

  @Metadata({ data: "header, style=simple;explode=false;name=return-client-request-id" })
  returnClientRequestId?: boolean;
}


export class PoolUpdatePropertiesRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: PoolUpdatePropertiesPathParams;

  @Metadata()
  queryParams: PoolUpdatePropertiesQueryParams;

  @Metadata()
  headers: PoolUpdatePropertiesHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: any;
}


export class PoolUpdatePropertiesResponse extends SpeakeasyBase {
  @Metadata()
  batchError?: any;

  @Metadata()
  contentType: string;

  @Metadata()
  headers: Map<string, string[]>;

  @Metadata()
  statusCode: number;
}
