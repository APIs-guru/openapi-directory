package operations

import (
"openapi/pkg/models/shared")

type EndpointGetRecommendationsQueryParams struct {
    Limit *int32 `queryParam:"style=form,explode=true,name=limit"`
    Market *string `queryParam:"style=form,explode=true,name=market"`
    MaxAcousticness *float64 `queryParam:"style=form,explode=true,name=max_acousticness"`
    MaxDanceability *float64 `queryParam:"style=form,explode=true,name=max_danceability"`
    MaxDurationMs *int32 `queryParam:"style=form,explode=true,name=max_duration_ms"`
    MaxEnergy *float64 `queryParam:"style=form,explode=true,name=max_energy"`
    MaxInstrumentalness *float64 `queryParam:"style=form,explode=true,name=max_instrumentalness"`
    MaxKey *int32 `queryParam:"style=form,explode=true,name=max_key"`
    MaxLiveness *float64 `queryParam:"style=form,explode=true,name=max_liveness"`
    MaxLoudness *float64 `queryParam:"style=form,explode=true,name=max_loudness"`
    MaxMode *int32 `queryParam:"style=form,explode=true,name=max_mode"`
    MaxPopularity *int32 `queryParam:"style=form,explode=true,name=max_popularity"`
    MaxSpeechiness *float64 `queryParam:"style=form,explode=true,name=max_speechiness"`
    MaxTempo *float64 `queryParam:"style=form,explode=true,name=max_tempo"`
    MaxTimeSignature *int32 `queryParam:"style=form,explode=true,name=max_time_signature"`
    MaxValence *float64 `queryParam:"style=form,explode=true,name=max_valence"`
    MinAcousticness *float64 `queryParam:"style=form,explode=true,name=min_acousticness"`
    MinDanceability *float64 `queryParam:"style=form,explode=true,name=min_danceability"`
    MinDurationMs *int32 `queryParam:"style=form,explode=true,name=min_duration_ms"`
    MinEnergy *float64 `queryParam:"style=form,explode=true,name=min_energy"`
    MinInstrumentalness *float64 `queryParam:"style=form,explode=true,name=min_instrumentalness"`
    MinKey *int32 `queryParam:"style=form,explode=true,name=min_key"`
    MinLiveness *float64 `queryParam:"style=form,explode=true,name=min_liveness"`
    MinLoudness *float64 `queryParam:"style=form,explode=true,name=min_loudness"`
    MinMode *int32 `queryParam:"style=form,explode=true,name=min_mode"`
    MinPopularity *int32 `queryParam:"style=form,explode=true,name=min_popularity"`
    MinSpeechiness *float64 `queryParam:"style=form,explode=true,name=min_speechiness"`
    MinTempo *float64 `queryParam:"style=form,explode=true,name=min_tempo"`
    MinTimeSignature *int32 `queryParam:"style=form,explode=true,name=min_time_signature"`
    MinValence *float64 `queryParam:"style=form,explode=true,name=min_valence"`
    SeedArtists string `queryParam:"style=form,explode=true,name=seed_artists"`
    SeedGenres string `queryParam:"style=form,explode=true,name=seed_genres"`
    SeedTracks string `queryParam:"style=form,explode=true,name=seed_tracks"`
    TargetAcousticness *float64 `queryParam:"style=form,explode=true,name=target_acousticness"`
    TargetDanceability *float64 `queryParam:"style=form,explode=true,name=target_danceability"`
    TargetDurationMs *int32 `queryParam:"style=form,explode=true,name=target_duration_ms"`
    TargetEnergy *float64 `queryParam:"style=form,explode=true,name=target_energy"`
    TargetInstrumentalness *float64 `queryParam:"style=form,explode=true,name=target_instrumentalness"`
    TargetKey *int32 `queryParam:"style=form,explode=true,name=target_key"`
    TargetLiveness *float64 `queryParam:"style=form,explode=true,name=target_liveness"`
    TargetLoudness *float64 `queryParam:"style=form,explode=true,name=target_loudness"`
    TargetMode *int32 `queryParam:"style=form,explode=true,name=target_mode"`
    TargetPopularity *int32 `queryParam:"style=form,explode=true,name=target_popularity"`
    TargetSpeechiness *float64 `queryParam:"style=form,explode=true,name=target_speechiness"`
    TargetTempo *float64 `queryParam:"style=form,explode=true,name=target_tempo"`
    TargetTimeSignature *int32 `queryParam:"style=form,explode=true,name=target_time_signature"`
    TargetValence *float64 `queryParam:"style=form,explode=true,name=target_valence"`
    
}

type EndpointGetRecommendationsHeaders struct {
    Authorization string `header:"style=simple,explode=false,name=Authorization"`
    
}

type EndpointGetRecommendationsSecurity struct {
    SpotifyAuth shared.SchemeSpotifyAuth `security:"scheme,type=oauth2"`
    
}

type EndpointGetRecommendationsRequest struct {
    QueryParams EndpointGetRecommendationsQueryParams 
    Headers EndpointGetRecommendationsHeaders 
    Security EndpointGetRecommendationsSecurity 
    
}

type EndpointGetRecommendationsResponse struct {
    ContentType string 
    ErrorResponseObject *shared.ErrorResponseObject 
    RecommendationsObject *shared.RecommendationsObject 
    StatusCode int64 
    
}

