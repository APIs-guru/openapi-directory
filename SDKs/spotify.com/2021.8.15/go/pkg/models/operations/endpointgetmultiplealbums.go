package operations

import (
"openapi/pkg/models/shared")

type EndpointGetMultipleAlbumsQueryParams struct {
    Ids string `queryParam:"style=form,explode=true,name=ids"`
    Market *string `queryParam:"style=form,explode=true,name=market"`
    
}

type EndpointGetMultipleAlbumsHeaders struct {
    Authorization string `header:"style=simple,explode=false,name=Authorization"`
    
}

type EndpointGetMultipleAlbumsSecurity struct {
    SpotifyAuth shared.SchemeSpotifyAuth `security:"scheme,type=oauth2"`
    
}

type EndpointGetMultipleAlbumsRequest struct {
    QueryParams EndpointGetMultipleAlbumsQueryParams 
    Headers EndpointGetMultipleAlbumsHeaders 
    Security EndpointGetMultipleAlbumsSecurity 
    
}

type EndpointGetMultipleAlbumsResponse struct {
    AlbumsObject *shared.AlbumsObject 
    ContentType string 
    ErrorResponseObject *shared.ErrorResponseObject 
    StatusCode int64 
    
}

