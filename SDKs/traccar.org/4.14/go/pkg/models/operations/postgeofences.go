package operations

import (
"openapi/pkg/models/shared")

type PostGeofencesRequest struct {
    Request shared.Geofence `request:"mediaType=application/json"`
    
}

type PostGeofencesResponse struct {
    ContentType string 
    Geofence *shared.Geofence 
    StatusCode int64 
    
}

