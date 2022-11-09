import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum GetSearchAdvancedAcceptedEnum {
    True = "true"
,    False = "false"
}

export enum GetSearchAdvancedClosedEnum {
    True = "true"
,    False = "false"
}

export enum GetSearchAdvancedMigratedEnum {
    True = "true"
,    False = "false"
}

export enum GetSearchAdvancedNoticeEnum {
    True = "true"
,    False = "false"
}

export enum GetSearchAdvancedOrderEnum {
    Desc = "desc"
,    Asc = "asc"
}

export enum GetSearchAdvancedSortEnum {
    Activity = "activity"
,    Creation = "creation"
,    Votes = "votes"
,    Relevance = "relevance"
}

export enum GetSearchAdvancedWikiEnum {
    True = "true"
,    False = "false"
}


export class GetSearchAdvancedQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=accepted" })
  accepted?: GetSearchAdvancedAcceptedEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=answers" })
  answers?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=body" })
  body?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=callback" })
  callback?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=closed" })
  closed?: GetSearchAdvancedClosedEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=filter" })
  filter?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=fromdate" })
  fromdate?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=max" })
  max?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=migrated" })
  migrated?: GetSearchAdvancedMigratedEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=min" })
  min?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=notice" })
  notice?: GetSearchAdvancedNoticeEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=nottagged" })
  nottagged?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=order" })
  order?: GetSearchAdvancedOrderEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=page" })
  page?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=pagesize" })
  pagesize?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=q" })
  q?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=site" })
  site: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=sort" })
  sort?: GetSearchAdvancedSortEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=tagged" })
  tagged?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=title" })
  title?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=todate" })
  todate?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=url" })
  url?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=user" })
  user?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=views" })
  views?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=wiki" })
  wiki?: GetSearchAdvancedWikiEnum;
}


export class GetSearchAdvancedRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: GetSearchAdvancedQueryParams;
}


export class GetSearchAdvancedResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
