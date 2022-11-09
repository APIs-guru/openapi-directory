import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class GetWordListWordsPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=permalink" })
  permalink: string;
}

export enum GetWordListWordsSortByEnum {
    CreateDate = "createDate"
,    Alpha = "alpha"
}


export class GetWordListWordsQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=limit" })
  limit?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=skip" })
  skip?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=sortBy" })
  sortBy?: GetWordListWordsSortByEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=sortOrder" })
  sortOrder?: string;
}


export class GetWordListWordsHeaders extends SpeakeasyBase {
  @Metadata({ data: "header, style=simple;explode=false;name=auth_token" })
  authToken: string;
}


export class GetWordListWordsRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetWordListWordsPathParams;

  @Metadata()
  queryParams: GetWordListWordsQueryParams;

  @Metadata()
  headers: GetWordListWordsHeaders;
}


export class GetWordListWordsResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
