import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class SearchWordsPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=query" })
  query: string;
}


export class SearchWordsQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=allowRegex" })
  allowRegex?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=caseSensitive" })
  caseSensitive?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=excludePartOfSpeech" })
  excludePartOfSpeech?: string;

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

  @Metadata({ data: "queryParam, style=form;explode=true;name=skip" })
  skip?: number;
}


export class SearchWordsRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: SearchWordsPathParams;

  @Metadata()
  queryParams: SearchWordsQueryParams;
}


export class SearchWordsResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
