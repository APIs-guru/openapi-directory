package operations

import (
"openapi/pkg/models/shared")


type SearchVideosDirectionEnum string

const (
    SearchVideosDirectionEnumAsc SearchVideosDirectionEnum = "asc"
SearchVideosDirectionEnumDesc SearchVideosDirectionEnum = "desc"
)



type SearchVideosFilterEnum string

const (
    SearchVideosFilterEnumCc SearchVideosFilterEnum = "CC"
SearchVideosFilterEnumCcBy SearchVideosFilterEnum = "CC-BY"
SearchVideosFilterEnumCcByNc SearchVideosFilterEnum = "CC-BY-NC"
SearchVideosFilterEnumCcByNcNd SearchVideosFilterEnum = "CC-BY-NC-ND"
SearchVideosFilterEnumCcByNcSa SearchVideosFilterEnum = "CC-BY-NC-SA"
SearchVideosFilterEnumCcByNd SearchVideosFilterEnum = "CC-BY-ND"
SearchVideosFilterEnumCcBySa SearchVideosFilterEnum = "CC-BY-SA"
SearchVideosFilterEnumCc0 SearchVideosFilterEnum = "CC0"
SearchVideosFilterEnumCategories SearchVideosFilterEnum = "categories"
SearchVideosFilterEnumDuration SearchVideosFilterEnum = "duration"
SearchVideosFilterEnumInProgress SearchVideosFilterEnum = "in-progress"
SearchVideosFilterEnumMinimumLikes SearchVideosFilterEnum = "minimum_likes"
SearchVideosFilterEnumTrending SearchVideosFilterEnum = "trending"
SearchVideosFilterEnumUploadDate SearchVideosFilterEnum = "upload_date"
)



type SearchVideosSortEnum string

const (
    SearchVideosSortEnumAlphabetical SearchVideosSortEnum = "alphabetical"
SearchVideosSortEnumComments SearchVideosSortEnum = "comments"
SearchVideosSortEnumDate SearchVideosSortEnum = "date"
SearchVideosSortEnumDuration SearchVideosSortEnum = "duration"
SearchVideosSortEnumLikes SearchVideosSortEnum = "likes"
SearchVideosSortEnumPlays SearchVideosSortEnum = "plays"
SearchVideosSortEnumRelevant SearchVideosSortEnum = "relevant"
)


type SearchVideosQueryParams struct {
    Direction *SearchVideosDirectionEnum `queryParam:"style=form,explode=true,name=direction"`
    Filter *SearchVideosFilterEnum `queryParam:"style=form,explode=true,name=filter"`
    Links *string `queryParam:"style=form,explode=true,name=links"`
    Page *float64 `queryParam:"style=form,explode=true,name=page"`
    PerPage *float64 `queryParam:"style=form,explode=true,name=per_page"`
    Query string `queryParam:"style=form,explode=true,name=query"`
    Sort *SearchVideosSortEnum `queryParam:"style=form,explode=true,name=sort"`
    Uris *string `queryParam:"style=form,explode=true,name=uris"`
    
}

type SearchVideosRequest struct {
    QueryParams SearchVideosQueryParams 
    
}

type SearchVideosResponse struct {
    ContentType string 
    StatusCode int64 
    Error *shared.Error 
    LegacyError *shared.LegacyError 
    Videos []shared.Video 
    
}

