import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class GetUsersIdInboxUnreadPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: number;
}


export class GetUsersIdInboxUnreadQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" })
  callback?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=filter" })
  filter?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=page" })
  page?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=pagesize" })
  pagesize?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=since" })
  since?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=site" })
  site: string;
}


export class GetUsersIdInboxUnreadRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetUsersIdInboxUnreadPathParams;

  @SpeakeasyMetadata()
  queryParams: GetUsersIdInboxUnreadQueryParams;
}


export class GetUsersIdInboxUnreadResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
