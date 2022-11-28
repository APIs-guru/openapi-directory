import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum GetRandomWordsSortByEnum {
    Alpha = "alpha",
    Count = "count"
}

export enum GetRandomWordsSortOrderEnum {
    Asc = "asc",
    Desc = "desc"
}


export class GetRandomWordsQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=excludePartOfSpeech" })
  excludePartOfSpeech?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=hasDictionaryDef" })
  hasDictionaryDef?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=includePartOfSpeech" })
  includePartOfSpeech?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=limit" })
  limit?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=maxCorpusCount" })
  maxCorpusCount?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=maxDictionaryCount" })
  maxDictionaryCount?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=maxLength" })
  maxLength?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=minCorpusCount" })
  minCorpusCount?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=minDictionaryCount" })
  minDictionaryCount?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=minLength" })
  minLength?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=sortBy" })
  sortBy?: GetRandomWordsSortByEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=sortOrder" })
  sortOrder?: GetRandomWordsSortOrderEnum;
}


export class GetRandomWordsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: GetRandomWordsQueryParams;
}


export class GetRandomWordsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
