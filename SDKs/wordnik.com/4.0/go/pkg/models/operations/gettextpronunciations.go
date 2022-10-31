package operations

type GetTextPronunciationsPathParams struct {
	Word string `pathParam:"style=simple,explode=false,name=word"`
}

type GetTextPronunciationsSourceDictionaryEnum string

const (
	GetTextPronunciationsSourceDictionaryEnumAhd        GetTextPronunciationsSourceDictionaryEnum = "ahd"
	GetTextPronunciationsSourceDictionaryEnumCentury    GetTextPronunciationsSourceDictionaryEnum = "century"
	GetTextPronunciationsSourceDictionaryEnumCmu        GetTextPronunciationsSourceDictionaryEnum = "cmu"
	GetTextPronunciationsSourceDictionaryEnumMacmillan  GetTextPronunciationsSourceDictionaryEnum = "macmillan"
	GetTextPronunciationsSourceDictionaryEnumWiktionary GetTextPronunciationsSourceDictionaryEnum = "wiktionary"
	GetTextPronunciationsSourceDictionaryEnumWebster    GetTextPronunciationsSourceDictionaryEnum = "webster"
	GetTextPronunciationsSourceDictionaryEnumWordnet    GetTextPronunciationsSourceDictionaryEnum = "wordnet"
)

type GetTextPronunciationsTypeFormatEnum string

const (
	GetTextPronunciationsTypeFormatEnumAhd              GetTextPronunciationsTypeFormatEnum = "ahd"
	GetTextPronunciationsTypeFormatEnumArpabet          GetTextPronunciationsTypeFormatEnum = "arpabet"
	GetTextPronunciationsTypeFormatEnumGcideDiacritical GetTextPronunciationsTypeFormatEnum = "gcide-diacritical"
	GetTextPronunciationsTypeFormatEnumIpa              GetTextPronunciationsTypeFormatEnum = "IPA"
)

type GetTextPronunciationsUseCanonicalEnum string

const (
	GetTextPronunciationsUseCanonicalEnumFalse GetTextPronunciationsUseCanonicalEnum = "false"
	GetTextPronunciationsUseCanonicalEnumTrue  GetTextPronunciationsUseCanonicalEnum = "true"
)

type GetTextPronunciationsQueryParams struct {
	Limit            *int32                                     `queryParam:"style=form,explode=true,name=limit"`
	SourceDictionary *GetTextPronunciationsSourceDictionaryEnum `queryParam:"style=form,explode=true,name=sourceDictionary"`
	TypeFormat       *GetTextPronunciationsTypeFormatEnum       `queryParam:"style=form,explode=true,name=typeFormat"`
	UseCanonical     *GetTextPronunciationsUseCanonicalEnum     `queryParam:"style=form,explode=true,name=useCanonical"`
}

type GetTextPronunciationsRequest struct {
	PathParams  GetTextPronunciationsPathParams
	QueryParams GetTextPronunciationsQueryParams
}

type GetTextPronunciationsResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
