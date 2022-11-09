import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class GetObservationsByCodesPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=userId" })
  userId: number;
}


export class GetObservationsByCodesQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=code" })
  code: string[];

  @Metadata({ data: "queryParam, style=form;explode=true;name=limit" })
  limit: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=offset" })
  offset: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=orderDirection" })
  orderDirection: string;
}


export class GetObservationsByCodesRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetObservationsByCodesPathParams;

  @Metadata()
  queryParams: GetObservationsByCodesQueryParams;
}


export class GetObservationsByCodesResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
