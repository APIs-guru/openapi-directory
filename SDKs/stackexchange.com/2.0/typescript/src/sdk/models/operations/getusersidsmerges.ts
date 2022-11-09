import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class GetUsersIdsMergesPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=ids" })
  ids: string;
}


export class GetUsersIdsMergesQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=callback" })
  callback?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=filter" })
  filter?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=page" })
  page?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=pagesize" })
  pagesize?: number;
}


export class GetUsersIdsMergesRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetUsersIdsMergesPathParams;

  @Metadata()
  queryParams: GetUsersIdsMergesQueryParams;
}


export class GetUsersIdsMergesResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
