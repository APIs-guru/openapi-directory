import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class GetRelatedWordsPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=word" })
  word: string;
}

export enum GetRelatedWordsRelationshipTypesEnum {
    Synonym = "synonym"
,    Antonym = "antonym"
,    Variant = "variant"
,    Equivalent = "equivalent"
,    CrossReference = "cross-reference"
,    RelatedWord = "related-word"
,    Rhyme = "rhyme"
,    Form = "form"
,    EtymologicallyRelatedTerm = "etymologically-related-term"
,    Hypernym = "hypernym"
,    Hyponym = "hyponym"
,    InflectedForm = "inflected-form"
,    Primary = "primary"
,    SameContext = "same-context"
,    VerbForm = "verb-form"
,    VerbStem = "verb-stem"
,    HasTopic = "has_topic"
}

export enum GetRelatedWordsUseCanonicalEnum {
    False = "false"
,    True = "true"
}


export class GetRelatedWordsQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=limitPerRelationshipType" })
  limitPerRelationshipType?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=relationshipTypes" })
  relationshipTypes?: GetRelatedWordsRelationshipTypesEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=useCanonical" })
  useCanonical?: GetRelatedWordsUseCanonicalEnum;
}


export class GetRelatedWordsRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetRelatedWordsPathParams;

  @Metadata()
  queryParams: GetRelatedWordsQueryParams;
}


export class GetRelatedWordsResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
