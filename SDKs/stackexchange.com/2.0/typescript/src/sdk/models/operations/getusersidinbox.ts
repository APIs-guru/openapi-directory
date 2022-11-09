import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class GetUsersIdInboxPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: number;
}


export class GetUsersIdInboxQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=callback" })
  callback?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=filter" })
  filter?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=page" })
  page?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=pagesize" })
  pagesize?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=site" })
  site: string;
}


export class GetUsersIdInboxRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetUsersIdInboxPathParams;

  @Metadata()
  queryParams: GetUsersIdInboxQueryParams;
}


export class GetUsersIdInboxResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
