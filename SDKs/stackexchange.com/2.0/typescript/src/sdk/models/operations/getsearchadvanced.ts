import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum GetSearchAdvancedAcceptedEnum {
    True = "true",
    False = "false"
}

export enum GetSearchAdvancedClosedEnum {
    True = "true",
    False = "false"
}

export enum GetSearchAdvancedMigratedEnum {
    True = "true",
    False = "false"
}

export enum GetSearchAdvancedNoticeEnum {
    True = "true",
    False = "false"
}

export enum GetSearchAdvancedOrderEnum {
    Desc = "desc",
    Asc = "asc"
}

export enum GetSearchAdvancedSortEnum {
    Activity = "activity",
    Creation = "creation",
    Votes = "votes",
    Relevance = "relevance"
}

export enum GetSearchAdvancedWikiEnum {
    True = "true",
    False = "false"
}


export class GetSearchAdvancedQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=accepted" })
  accepted?: GetSearchAdvancedAcceptedEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=answers" })
  answers?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=body" })
  body?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" })
  callback?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=closed" })
  closed?: GetSearchAdvancedClosedEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=filter" })
  filter?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fromdate" })
  fromdate?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=max" })
  max?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=migrated" })
  migrated?: GetSearchAdvancedMigratedEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=min" })
  min?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=notice" })
  notice?: GetSearchAdvancedNoticeEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=nottagged" })
  nottagged?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=order" })
  order?: GetSearchAdvancedOrderEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=page" })
  page?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=pagesize" })
  pagesize?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=q" })
  q?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=site" })
  site: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=sort" })
  sort?: GetSearchAdvancedSortEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=tagged" })
  tagged?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=title" })
  title?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=todate" })
  todate?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=url" })
  url?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=user" })
  user?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=views" })
  views?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=wiki" })
  wiki?: GetSearchAdvancedWikiEnum;
}


export class GetSearchAdvancedRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: GetSearchAdvancedQueryParams;
}


export class GetSearchAdvancedResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
