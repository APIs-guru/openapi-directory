import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare class GetRelatedWordsPathParams extends SpeakeasyBase {
    word: string;
}
export declare enum GetRelatedWordsRelationshipTypesEnum {
    Synonym = "synonym",
    Antonym = "antonym",
    Variant = "variant",
    Equivalent = "equivalent",
    CrossReference = "cross-reference",
    RelatedWord = "related-word",
    Rhyme = "rhyme",
    Form = "form",
    EtymologicallyRelatedTerm = "etymologically-related-term",
    Hypernym = "hypernym",
    Hyponym = "hyponym",
    InflectedForm = "inflected-form",
    Primary = "primary",
    SameContext = "same-context",
    VerbForm = "verb-form",
    VerbStem = "verb-stem",
    HasTopic = "has_topic"
}
export declare enum GetRelatedWordsUseCanonicalEnum {
    False = "false",
    True = "true"
}
export declare class GetRelatedWordsQueryParams extends SpeakeasyBase {
    limitPerRelationshipType?: number;
    relationshipTypes?: GetRelatedWordsRelationshipTypesEnum;
    useCanonical?: GetRelatedWordsUseCanonicalEnum;
}
export declare class GetRelatedWordsRequest extends SpeakeasyBase {
    pathParams: GetRelatedWordsPathParams;
    queryParams: GetRelatedWordsQueryParams;
}
export declare class GetRelatedWordsResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
