import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class GetUsersIdInboxUnreadPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: number;
}


export class GetUsersIdInboxUnreadQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=callback" })
  callback?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=filter" })
  filter?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=page" })
  page?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=pagesize" })
  pagesize?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=since" })
  since?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=site" })
  site: string;
}


export class GetUsersIdInboxUnreadRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetUsersIdInboxUnreadPathParams;

  @Metadata()
  queryParams: GetUsersIdInboxUnreadQueryParams;
}


export class GetUsersIdInboxUnreadResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
