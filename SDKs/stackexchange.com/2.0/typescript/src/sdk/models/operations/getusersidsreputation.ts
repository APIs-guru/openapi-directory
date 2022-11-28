import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class GetUsersIdsReputationPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=ids" })
  ids: string;
}


export class GetUsersIdsReputationQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" })
  callback?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=filter" })
  filter?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fromdate" })
  fromdate?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=page" })
  page?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=pagesize" })
  pagesize?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=site" })
  site: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=todate" })
  todate?: number;
}


export class GetUsersIdsReputationRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetUsersIdsReputationPathParams;

  @SpeakeasyMetadata()
  queryParams: GetUsersIdsReputationQueryParams;
}


export class GetUsersIdsReputationResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
