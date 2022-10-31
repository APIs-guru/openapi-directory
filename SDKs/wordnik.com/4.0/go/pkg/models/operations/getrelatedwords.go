package operations

type GetRelatedWordsPathParams struct {
	Word string `pathParam:"style=simple,explode=false,name=word"`
}

type GetRelatedWordsRelationshipTypesEnum string

const (
	GetRelatedWordsRelationshipTypesEnumSynonym                   GetRelatedWordsRelationshipTypesEnum = "synonym"
	GetRelatedWordsRelationshipTypesEnumAntonym                   GetRelatedWordsRelationshipTypesEnum = "antonym"
	GetRelatedWordsRelationshipTypesEnumVariant                   GetRelatedWordsRelationshipTypesEnum = "variant"
	GetRelatedWordsRelationshipTypesEnumEquivalent                GetRelatedWordsRelationshipTypesEnum = "equivalent"
	GetRelatedWordsRelationshipTypesEnumCrossReference            GetRelatedWordsRelationshipTypesEnum = "cross-reference"
	GetRelatedWordsRelationshipTypesEnumRelatedWord               GetRelatedWordsRelationshipTypesEnum = "related-word"
	GetRelatedWordsRelationshipTypesEnumRhyme                     GetRelatedWordsRelationshipTypesEnum = "rhyme"
	GetRelatedWordsRelationshipTypesEnumForm                      GetRelatedWordsRelationshipTypesEnum = "form"
	GetRelatedWordsRelationshipTypesEnumEtymologicallyRelatedTerm GetRelatedWordsRelationshipTypesEnum = "etymologically-related-term"
	GetRelatedWordsRelationshipTypesEnumHypernym                  GetRelatedWordsRelationshipTypesEnum = "hypernym"
	GetRelatedWordsRelationshipTypesEnumHyponym                   GetRelatedWordsRelationshipTypesEnum = "hyponym"
	GetRelatedWordsRelationshipTypesEnumInflectedForm             GetRelatedWordsRelationshipTypesEnum = "inflected-form"
	GetRelatedWordsRelationshipTypesEnumPrimary                   GetRelatedWordsRelationshipTypesEnum = "primary"
	GetRelatedWordsRelationshipTypesEnumSameContext               GetRelatedWordsRelationshipTypesEnum = "same-context"
	GetRelatedWordsRelationshipTypesEnumVerbForm                  GetRelatedWordsRelationshipTypesEnum = "verb-form"
	GetRelatedWordsRelationshipTypesEnumVerbStem                  GetRelatedWordsRelationshipTypesEnum = "verb-stem"
	GetRelatedWordsRelationshipTypesEnumHasTopic                  GetRelatedWordsRelationshipTypesEnum = "has_topic"
)

type GetRelatedWordsUseCanonicalEnum string

const (
	GetRelatedWordsUseCanonicalEnumFalse GetRelatedWordsUseCanonicalEnum = "false"
	GetRelatedWordsUseCanonicalEnumTrue  GetRelatedWordsUseCanonicalEnum = "true"
)

type GetRelatedWordsQueryParams struct {
	LimitPerRelationshipType *int32                                `queryParam:"style=form,explode=true,name=limitPerRelationshipType"`
	RelationshipTypes        *GetRelatedWordsRelationshipTypesEnum `queryParam:"style=form,explode=true,name=relationshipTypes"`
	UseCanonical             *GetRelatedWordsUseCanonicalEnum      `queryParam:"style=form,explode=true,name=useCanonical"`
}

type GetRelatedWordsRequest struct {
	PathParams  GetRelatedWordsPathParams
	QueryParams GetRelatedWordsQueryParams
}

type GetRelatedWordsResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
