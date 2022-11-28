package shared

import (
	"time"
)

// VehicleSummary
// Represents the summary of a vehicle background check
type VehicleSummary struct {
	Capacity                          *int64     `json:"capacity,omitempty"`
	Color                             *string    `json:"color,omitempty"`
	LicensePlate                      *string    `json:"license_plate,omitempty"`
	Manufacturer                      *string    `json:"manufacturer,omitempty"`
	Model                             *string    `json:"model,omitempty"`
	NumberOfDoors                     *int64     `json:"number_of_doors,omitempty"`
	ObligatoryInsuranceExpirationDate *time.Time `json:"obligatory_insurance_expiration_date,omitempty"`
	ObligatoryInsuranceStatus         *string    `json:"obligatory_insurance_status,omitempty"`
	ServiceType                       *string    `json:"service_type,omitempty"`
	VehicleCategory                   *string    `json:"vehicle_category,omitempty"`
	VehicleID                         *string    `json:"vehicle_id,omitempty"`
	VehicleType                       *string    `json:"vehicle_type,omitempty"`
	Year                              *int64     `json:"year,omitempty"`
}
