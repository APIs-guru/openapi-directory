import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class GetObservationsByCodesPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=userId" })
  userId: number;
}


export class GetObservationsByCodesQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=code" })
  code: string[];

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=limit" })
  limit: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=offset" })
  offset: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=orderDirection" })
  orderDirection: string;
}


export class GetObservationsByCodesRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetObservationsByCodesPathParams;

  @SpeakeasyMetadata()
  queryParams: GetObservationsByCodesQueryParams;
}


export class GetObservationsByCodesResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
