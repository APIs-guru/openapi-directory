import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum GetSimilarOrderEnum {
    Desc = "desc",
    Asc = "asc"
}

export enum GetSimilarSortEnum {
    Activity = "activity",
    Creation = "creation",
    Votes = "votes",
    Relevance = "relevance"
}


export class GetSimilarQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" })
  callback?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=filter" })
  filter?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fromdate" })
  fromdate?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=max" })
  max?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=min" })
  min?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=nottagged" })
  nottagged?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=order" })
  order?: GetSimilarOrderEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=page" })
  page?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=pagesize" })
  pagesize?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=site" })
  site: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=sort" })
  sort?: GetSimilarSortEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=tagged" })
  tagged?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=title" })
  title?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=todate" })
  todate?: number;
}


export class GetSimilarRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: GetSimilarQueryParams;
}


export class GetSimilarResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
