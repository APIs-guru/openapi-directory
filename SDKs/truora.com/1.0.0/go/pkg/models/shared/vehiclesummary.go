package shared

import (
	"time"
)

type VehicleSummary struct {
	Capacity                          *int64     `json:"capacity"`
	Color                             *string    `json:"color"`
	LicensePlate                      *string    `json:"license_plate"`
	Manufacturer                      *string    `json:"manufacturer"`
	Model                             *string    `json:"model"`
	NumberOfDoors                     *int64     `json:"number_of_doors"`
	ObligatoryInsuranceExpirationDate *time.Time `json:"obligatory_insurance_expiration_date"`
	ObligatoryInsuranceStatus         *string    `json:"obligatory_insurance_status"`
	ServiceType                       *string    `json:"service_type"`
	VehicleCategory                   *string    `json:"vehicle_category"`
	VehicleID                         *string    `json:"vehicle_id"`
	VehicleType                       *string    `json:"vehicle_type"`
	Year                              *int64     `json:"year"`
}
