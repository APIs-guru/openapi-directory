package shared

import (
"time")

type ShareFileResponseData struct {
    Expires *time.Time `json:"expires,omitempty"`
    Link *string `json:"link,omitempty"`
    
}

type ShareFileResponse struct {
    Data *ShareFileResponseData `json:"data,omitempty"`
    Success *bool `json:"success,omitempty"`
    
}

