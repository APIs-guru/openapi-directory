package operations



type GetHyphenationPathParams struct {
    Word string `pathParam:"style=simple,explode=false,name=word"`
    
}


type GetHyphenationSourceDictionaryEnum string

const (
    GetHyphenationSourceDictionaryEnumAhd GetHyphenationSourceDictionaryEnum = "ahd"
GetHyphenationSourceDictionaryEnumCentury GetHyphenationSourceDictionaryEnum = "century"
GetHyphenationSourceDictionaryEnumWiktionary GetHyphenationSourceDictionaryEnum = "wiktionary"
GetHyphenationSourceDictionaryEnumWebster GetHyphenationSourceDictionaryEnum = "webster"
GetHyphenationSourceDictionaryEnumWordnet GetHyphenationSourceDictionaryEnum = "wordnet"
)



type GetHyphenationUseCanonicalEnum string

const (
    GetHyphenationUseCanonicalEnumFalse GetHyphenationUseCanonicalEnum = "false"
GetHyphenationUseCanonicalEnumTrue GetHyphenationUseCanonicalEnum = "true"
)


type GetHyphenationQueryParams struct {
    Limit *int32 `queryParam:"style=form,explode=true,name=limit"`
    SourceDictionary *GetHyphenationSourceDictionaryEnum `queryParam:"style=form,explode=true,name=sourceDictionary"`
    UseCanonical *GetHyphenationUseCanonicalEnum `queryParam:"style=form,explode=true,name=useCanonical"`
    
}

type GetHyphenationRequest struct {
    PathParams GetHyphenationPathParams 
    QueryParams GetHyphenationQueryParams 
    
}

type GetHyphenationResponse struct {
    Body []byte 
    ContentType string 
    StatusCode int64 
    
}

