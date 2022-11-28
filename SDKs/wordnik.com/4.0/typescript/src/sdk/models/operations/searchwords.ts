import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class SearchWordsPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=query" })
  query: string;
}


export class SearchWordsQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=allowRegex" })
  allowRegex?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=caseSensitive" })
  caseSensitive?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=excludePartOfSpeech" })
  excludePartOfSpeech?: string;

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

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=skip" })
  skip?: number;
}


export class SearchWordsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: SearchWordsPathParams;

  @SpeakeasyMetadata()
  queryParams: SearchWordsQueryParams;
}


export class SearchWordsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
