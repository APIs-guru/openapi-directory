import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class GetDefinitionsPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=word" })
  word: string;
}

export enum GetDefinitionsIncludeTagsEnum {
    False = "false",
    True = "true"
}

export enum GetDefinitionsPartOfSpeechEnum {
    Noun = "noun",
    Adjective = "adjective",
    Verb = "verb",
    Adverb = "adverb",
    Interjection = "interjection",
    Pronoun = "pronoun",
    Preposition = "preposition",
    Abbreviation = "abbreviation",
    Affix = "affix",
    Article = "article",
    AuxiliaryVerb = "auxiliary-verb",
    Conjunction = "conjunction",
    DefiniteArticle = "definite-article",
    FamilyName = "family-name",
    GivenName = "given-name",
    Idiom = "idiom",
    Imperative = "imperative",
    NounPlural = "noun-plural",
    NounPosessive = "noun-posessive",
    PastParticiple = "past-participle",
    PhrasalPrefix = "phrasal-prefix",
    ProperNoun = "proper-noun",
    ProperNounPlural = "proper-noun-plural",
    ProperNounPosessive = "proper-noun-posessive",
    Suffix = "suffix",
    VerbIntransitive = "verb-intransitive",
    VerbTransitive = "verb-transitive"
}

export enum GetDefinitionsUseCanonicalEnum {
    False = "false",
    True = "true"
}


export class GetDefinitionsQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=includeRelated" })
  includeRelated?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=includeTags" })
  includeTags?: GetDefinitionsIncludeTagsEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=limit" })
  limit?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=partOfSpeech" })
  partOfSpeech?: GetDefinitionsPartOfSpeechEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=false;name=sourceDictionaries" })
  sourceDictionaries?: string[];

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=useCanonical" })
  useCanonical?: GetDefinitionsUseCanonicalEnum;
}


export class GetDefinitionsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetDefinitionsPathParams;

  @SpeakeasyMetadata()
  queryParams: GetDefinitionsQueryParams;
}


export class GetDefinitionsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
