package shared

import (
"time")

type Reddit struct {
    Created *time.Time `json:"created,omitempty"`
    ID *int64 `json:"id,omitempty"`
    Image *string `json:"image,omitempty"`
    Name *string `json:"name,omitempty"`
    Text *string `json:"text,omitempty"`
    URL *string `json:"url,omitempty"`
    Username *string `json:"username,omitempty"`
    UsernameURL *string `json:"username_url,omitempty"`
    
}

