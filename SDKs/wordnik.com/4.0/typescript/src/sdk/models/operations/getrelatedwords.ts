import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class GetRelatedWordsPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=word" })
  word: string;
}

export enum GetRelatedWordsRelationshipTypesEnum {
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

export enum GetRelatedWordsUseCanonicalEnum {
    False = "false",
    True = "true"
}


export class GetRelatedWordsQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=limitPerRelationshipType" })
  limitPerRelationshipType?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=relationshipTypes" })
  relationshipTypes?: GetRelatedWordsRelationshipTypesEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=useCanonical" })
  useCanonical?: GetRelatedWordsUseCanonicalEnum;
}


export class GetRelatedWordsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetRelatedWordsPathParams;

  @SpeakeasyMetadata()
  queryParams: GetRelatedWordsQueryParams;
}


export class GetRelatedWordsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
