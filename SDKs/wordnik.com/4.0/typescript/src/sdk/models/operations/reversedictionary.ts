import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum ReverseDictionaryExcludeSourceDictionariesEnum {
    Ahd = "ahd"
,    Century = "century"
,    Cmu = "cmu"
,    Macmillan = "macmillan"
,    Wiktionary = "wiktionary"
,    Webster = "webster"
,    Wordnet = "wordnet"
}

export enum ReverseDictionaryIncludeSourceDictionariesEnum {
    Ahd = "ahd"
,    Century = "century"
,    Cmu = "cmu"
,    Macmillan = "macmillan"
,    Wiktionary = "wiktionary"
,    Webster = "webster"
,    Wordnet = "wordnet"
}

export enum ReverseDictionaryIncludeTagsEnum {
    False = "false"
,    True = "true"
}

export enum ReverseDictionarySortByEnum {
    Alpha = "alpha"
,    Count = "count"
}

export enum ReverseDictionarySortOrderEnum {
    Asc = "asc"
,    Desc = "desc"
}


export class ReverseDictionaryQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=excludePartOfSpeech" })
  excludePartOfSpeech?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=excludeSourceDictionaries" })
  excludeSourceDictionaries?: ReverseDictionaryExcludeSourceDictionariesEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=expandTerms" })
  expandTerms?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=findSenseForWord" })
  findSenseForWord?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=includePartOfSpeech" })
  includePartOfSpeech?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=includeSourceDictionaries" })
  includeSourceDictionaries?: ReverseDictionaryIncludeSourceDictionariesEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=includeTags" })
  includeTags?: ReverseDictionaryIncludeTagsEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=limit" })
  limit?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=maxCorpusCount" })
  maxCorpusCount?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=maxLength" })
  maxLength?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=minCorpusCount" })
  minCorpusCount?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=minLength" })
  minLength?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=query" })
  query: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=skip" })
  skip?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=sortBy" })
  sortBy?: ReverseDictionarySortByEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=sortOrder" })
  sortOrder?: ReverseDictionarySortOrderEnum;
}


export class ReverseDictionaryRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: ReverseDictionaryQueryParams;
}


export class ReverseDictionaryResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
