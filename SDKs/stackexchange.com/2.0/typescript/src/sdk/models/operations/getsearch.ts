import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum GetSearchOrderEnum {
    Desc = "desc"
,    Asc = "asc"
}

export enum GetSearchSortEnum {
    Activity = "activity"
,    Creation = "creation"
,    Votes = "votes"
,    Relevance = "relevance"
}


export class GetSearchQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=callback" })
  callback?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=filter" })
  filter?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=fromdate" })
  fromdate?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=intitle" })
  intitle?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=max" })
  max?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=min" })
  min?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=nottagged" })
  nottagged?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=order" })
  order?: GetSearchOrderEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=page" })
  page?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=pagesize" })
  pagesize?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=site" })
  site: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=sort" })
  sort?: GetSearchSortEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=tagged" })
  tagged?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=todate" })
  todate?: number;
}


export class GetSearchRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: GetSearchQueryParams;
}


export class GetSearchResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
