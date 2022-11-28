import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum ReverseDictionaryExcludeSourceDictionariesEnum {
    Ahd = "ahd",
    Century = "century",
    Cmu = "cmu",
    Macmillan = "macmillan",
    Wiktionary = "wiktionary",
    Webster = "webster",
    Wordnet = "wordnet"
}

export enum ReverseDictionaryIncludeSourceDictionariesEnum {
    Ahd = "ahd",
    Century = "century",
    Cmu = "cmu",
    Macmillan = "macmillan",
    Wiktionary = "wiktionary",
    Webster = "webster",
    Wordnet = "wordnet"
}

export enum ReverseDictionaryIncludeTagsEnum {
    False = "false",
    True = "true"
}

export enum ReverseDictionarySortByEnum {
    Alpha = "alpha",
    Count = "count"
}

export enum ReverseDictionarySortOrderEnum {
    Asc = "asc",
    Desc = "desc"
}


export class ReverseDictionaryQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=excludePartOfSpeech" })
  excludePartOfSpeech?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=excludeSourceDictionaries" })
  excludeSourceDictionaries?: ReverseDictionaryExcludeSourceDictionariesEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=expandTerms" })
  expandTerms?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=findSenseForWord" })
  findSenseForWord?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=includePartOfSpeech" })
  includePartOfSpeech?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=includeSourceDictionaries" })
  includeSourceDictionaries?: ReverseDictionaryIncludeSourceDictionariesEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=includeTags" })
  includeTags?: ReverseDictionaryIncludeTagsEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=limit" })
  limit?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=maxCorpusCount" })
  maxCorpusCount?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=maxLength" })
  maxLength?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=minCorpusCount" })
  minCorpusCount?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=minLength" })
  minLength?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=query" })
  query: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=skip" })
  skip?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=sortBy" })
  sortBy?: ReverseDictionarySortByEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=sortOrder" })
  sortOrder?: ReverseDictionarySortOrderEnum;
}


export class ReverseDictionaryRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: ReverseDictionaryQueryParams;
}


export class ReverseDictionaryResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
