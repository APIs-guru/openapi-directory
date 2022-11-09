import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class GetSuggestedEditsIdsPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=ids" })
  ids: string;
}

export enum GetSuggestedEditsIdsOrderEnum {
    Desc = "desc"
,    Asc = "asc"
}

export enum GetSuggestedEditsIdsSortEnum {
    Creation = "creation"
,    Approval = "approval"
,    Rejection = "rejection"
}


export class GetSuggestedEditsIdsQueryParams extends SpeakeasyBase {
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
  order?: GetSuggestedEditsIdsOrderEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=page" })
  page?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=pagesize" })
  pagesize?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=site" })
  site: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=sort" })
  sort?: GetSuggestedEditsIdsSortEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=todate" })
  todate?: number;
}


export class GetSuggestedEditsIdsRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetSuggestedEditsIdsPathParams;

  @Metadata()
  queryParams: GetSuggestedEditsIdsQueryParams;
}


export class GetSuggestedEditsIdsResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
