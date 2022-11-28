package shared

import (
	"time"
)

// Application
// Metadata about the application
type Application struct {
	ApplicationID   string    `json:"application_id"`
	ApplicationURL  string    `json:"application_url"`
	CreatedAt       time.Time `json:"created_at"`
	LogoURL         string    `json:"logo_url"`
	Name            string    `json:"name"`
	ReasonForAccess string    `json:"reason_for_access"`
}
