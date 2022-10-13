package operations

type GetDefinitionsPathParams struct {
	Word string `pathParam:"style=simple,explode=false,name=word"`
}

type GetDefinitionsIncludeTagsEnum string

const (
	GetDefinitionsIncludeTagsEnumFalse GetDefinitionsIncludeTagsEnum = "false"
	GetDefinitionsIncludeTagsEnumTrue  GetDefinitionsIncludeTagsEnum = "true"
)

type GetDefinitionsPartOfSpeechEnum string

const (
	GetDefinitionsPartOfSpeechEnumNoun                GetDefinitionsPartOfSpeechEnum = "noun"
	GetDefinitionsPartOfSpeechEnumAdjective           GetDefinitionsPartOfSpeechEnum = "adjective"
	GetDefinitionsPartOfSpeechEnumVerb                GetDefinitionsPartOfSpeechEnum = "verb"
	GetDefinitionsPartOfSpeechEnumAdverb              GetDefinitionsPartOfSpeechEnum = "adverb"
	GetDefinitionsPartOfSpeechEnumInterjection        GetDefinitionsPartOfSpeechEnum = "interjection"
	GetDefinitionsPartOfSpeechEnumPronoun             GetDefinitionsPartOfSpeechEnum = "pronoun"
	GetDefinitionsPartOfSpeechEnumPreposition         GetDefinitionsPartOfSpeechEnum = "preposition"
	GetDefinitionsPartOfSpeechEnumAbbreviation        GetDefinitionsPartOfSpeechEnum = "abbreviation"
	GetDefinitionsPartOfSpeechEnumAffix               GetDefinitionsPartOfSpeechEnum = "affix"
	GetDefinitionsPartOfSpeechEnumArticle             GetDefinitionsPartOfSpeechEnum = "article"
	GetDefinitionsPartOfSpeechEnumAuxiliaryVerb       GetDefinitionsPartOfSpeechEnum = "auxiliary-verb"
	GetDefinitionsPartOfSpeechEnumConjunction         GetDefinitionsPartOfSpeechEnum = "conjunction"
	GetDefinitionsPartOfSpeechEnumDefiniteArticle     GetDefinitionsPartOfSpeechEnum = "definite-article"
	GetDefinitionsPartOfSpeechEnumFamilyName          GetDefinitionsPartOfSpeechEnum = "family-name"
	GetDefinitionsPartOfSpeechEnumGivenName           GetDefinitionsPartOfSpeechEnum = "given-name"
	GetDefinitionsPartOfSpeechEnumIdiom               GetDefinitionsPartOfSpeechEnum = "idiom"
	GetDefinitionsPartOfSpeechEnumImperative          GetDefinitionsPartOfSpeechEnum = "imperative"
	GetDefinitionsPartOfSpeechEnumNounPlural          GetDefinitionsPartOfSpeechEnum = "noun-plural"
	GetDefinitionsPartOfSpeechEnumNounPosessive       GetDefinitionsPartOfSpeechEnum = "noun-posessive"
	GetDefinitionsPartOfSpeechEnumPastParticiple      GetDefinitionsPartOfSpeechEnum = "past-participle"
	GetDefinitionsPartOfSpeechEnumPhrasalPrefix       GetDefinitionsPartOfSpeechEnum = "phrasal-prefix"
	GetDefinitionsPartOfSpeechEnumProperNoun          GetDefinitionsPartOfSpeechEnum = "proper-noun"
	GetDefinitionsPartOfSpeechEnumProperNounPlural    GetDefinitionsPartOfSpeechEnum = "proper-noun-plural"
	GetDefinitionsPartOfSpeechEnumProperNounPosessive GetDefinitionsPartOfSpeechEnum = "proper-noun-posessive"
	GetDefinitionsPartOfSpeechEnumSuffix              GetDefinitionsPartOfSpeechEnum = "suffix"
	GetDefinitionsPartOfSpeechEnumVerbIntransitive    GetDefinitionsPartOfSpeechEnum = "verb-intransitive"
	GetDefinitionsPartOfSpeechEnumVerbTransitive      GetDefinitionsPartOfSpeechEnum = "verb-transitive"
)

type GetDefinitionsUseCanonicalEnum string

const (
	GetDefinitionsUseCanonicalEnumFalse GetDefinitionsUseCanonicalEnum = "false"
	GetDefinitionsUseCanonicalEnumTrue  GetDefinitionsUseCanonicalEnum = "true"
)

type GetDefinitionsQueryParams struct {
	IncludeRelated     *string                         `queryParam:"style=form,explode=true,name=includeRelated"`
	IncludeTags        *GetDefinitionsIncludeTagsEnum  `queryParam:"style=form,explode=true,name=includeTags"`
	Limit              *int32                          `queryParam:"style=form,explode=true,name=limit"`
	PartOfSpeech       *GetDefinitionsPartOfSpeechEnum `queryParam:"style=form,explode=true,name=partOfSpeech"`
	SourceDictionaries []string                        `queryParam:"style=form,explode=false,name=sourceDictionaries"`
	UseCanonical       *GetDefinitionsUseCanonicalEnum `queryParam:"style=form,explode=true,name=useCanonical"`
}

type GetDefinitionsRequest struct {
	PathParams  GetDefinitionsPathParams
	QueryParams GetDefinitionsQueryParams
}

type GetDefinitionsResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
