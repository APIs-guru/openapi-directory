import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class GetWordListWordsPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=permalink" })
  permalink: string;
}

export enum GetWordListWordsSortByEnum {
    CreateDate = "createDate",
    Alpha = "alpha"
}


export class GetWordListWordsQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=limit" })
  limit?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=skip" })
  skip?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=sortBy" })
  sortBy?: GetWordListWordsSortByEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=sortOrder" })
  sortOrder?: string;
}


export class GetWordListWordsHeaders extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=auth_token" })
  authToken: string;
}


export class GetWordListWordsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetWordListWordsPathParams;

  @SpeakeasyMetadata()
  queryParams: GetWordListWordsQueryParams;

  @SpeakeasyMetadata()
  headers: GetWordListWordsHeaders;
}


export class GetWordListWordsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
