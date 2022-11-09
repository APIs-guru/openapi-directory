import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum GetRandomWordsSortByEnum {
    Alpha = "alpha"
,    Count = "count"
}

export enum GetRandomWordsSortOrderEnum {
    Asc = "asc"
,    Desc = "desc"
}


export class GetRandomWordsQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=excludePartOfSpeech" })
  excludePartOfSpeech?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=hasDictionaryDef" })
  hasDictionaryDef?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=includePartOfSpeech" })
  includePartOfSpeech?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=limit" })
  limit?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=maxCorpusCount" })
  maxCorpusCount?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=maxDictionaryCount" })
  maxDictionaryCount?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=maxLength" })
  maxLength?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=minCorpusCount" })
  minCorpusCount?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=minDictionaryCount" })
  minDictionaryCount?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=minLength" })
  minLength?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=sortBy" })
  sortBy?: GetRandomWordsSortByEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=sortOrder" })
  sortOrder?: GetRandomWordsSortOrderEnum;
}


export class GetRandomWordsRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: GetRandomWordsQueryParams;
}


export class GetRandomWordsResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
