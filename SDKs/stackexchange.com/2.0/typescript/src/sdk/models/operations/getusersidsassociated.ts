import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class GetUsersIdsAssociatedPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=ids" })
  ids: string;
}


export class GetUsersIdsAssociatedQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" })
  callback?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=filter" })
  filter?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=page" })
  page?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=pagesize" })
  pagesize?: number;
}


export class GetUsersIdsAssociatedRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetUsersIdsAssociatedPathParams;

  @SpeakeasyMetadata()
  queryParams: GetUsersIdsAssociatedQueryParams;
}


export class GetUsersIdsAssociatedResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
