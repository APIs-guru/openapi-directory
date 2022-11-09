import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum GetUsersModeratorsElectedOrderEnum {
    Desc = "desc"
,    Asc = "asc"
}

export enum GetUsersModeratorsElectedSortEnum {
    Reputation = "reputation"
,    Creation = "creation"
,    Name = "name"
,    Modified = "modified"
}


export class GetUsersModeratorsElectedQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=callback" })
  callback?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=filter" })
  filter?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=fromdate" })
  fromdate?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=max" })
  max?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=min" })
  min?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=order" })
  order?: GetUsersModeratorsElectedOrderEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=page" })
  page?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=pagesize" })
  pagesize?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=site" })
  site: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=sort" })
  sort?: GetUsersModeratorsElectedSortEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=todate" })
  todate?: number;
}


export class GetUsersModeratorsElectedRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: GetUsersModeratorsElectedQueryParams;
}


export class GetUsersModeratorsElectedResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
