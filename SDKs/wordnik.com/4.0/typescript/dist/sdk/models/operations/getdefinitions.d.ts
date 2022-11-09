import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare class GetDefinitionsPathParams extends SpeakeasyBase {
    word: string;
}
export declare enum GetDefinitionsIncludeTagsEnum {
    False = "false",
    True = "true"
}
export declare enum GetDefinitionsPartOfSpeechEnum {
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
export declare enum GetDefinitionsUseCanonicalEnum {
    False = "false",
    True = "true"
}
export declare class GetDefinitionsQueryParams extends SpeakeasyBase {
    includeRelated?: string;
    includeTags?: GetDefinitionsIncludeTagsEnum;
    limit?: number;
    partOfSpeech?: GetDefinitionsPartOfSpeechEnum;
    sourceDictionaries?: string[];
    useCanonical?: GetDefinitionsUseCanonicalEnum;
}
export declare class GetDefinitionsRequest extends SpeakeasyBase {
    pathParams: GetDefinitionsPathParams;
    queryParams: GetDefinitionsQueryParams;
}
export declare class GetDefinitionsResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
