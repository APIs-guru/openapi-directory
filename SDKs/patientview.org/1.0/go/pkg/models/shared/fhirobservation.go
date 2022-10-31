package shared

import (
"time")

type FhirObservation struct {
    Applies *time.Time `json:"applies,omitempty"`
    BodySite *string `json:"bodySite,omitempty"`
    Comments *string `json:"comments,omitempty"`
    Comparator *string `json:"comparator,omitempty"`
    Diagram *string `json:"diagram,omitempty"`
    Group *Group `json:"group,omitempty"`
    ID *int64 `json:"id,omitempty"`
    Identifier *string `json:"identifier,omitempty"`
    Location *string `json:"location,omitempty"`
    Name *string `json:"name,omitempty"`
    TemporaryUUID *string `json:"temporaryUuid,omitempty"`
    Units *string `json:"units,omitempty"`
    Value *string `json:"value,omitempty"`
    
}

