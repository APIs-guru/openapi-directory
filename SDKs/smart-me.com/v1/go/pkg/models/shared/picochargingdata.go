package shared

import (
	"time"
)

type PicoChargingDataStateEnum string

const (
	PicoChargingDataStateEnumBooting             PicoChargingDataStateEnum = "Booting"
	PicoChargingDataStateEnumReadyNoCarConnected PicoChargingDataStateEnum = "ReadyNoCarConnected"
	PicoChargingDataStateEnumReadyCarConnected   PicoChargingDataStateEnum = "ReadyCarConnected"
	PicoChargingDataStateEnumStartedWaitForCar   PicoChargingDataStateEnum = "StartedWaitForCar"
	PicoChargingDataStateEnumCharging            PicoChargingDataStateEnum = "Charging"
	PicoChargingDataStateEnumOffline             PicoChargingDataStateEnum = "Offline"
)

type PicoChargingData struct {
	ActiveChargingEnergy *float64                   `json:"ActiveChargingEnergy,omitempty"`
	ActiveChargingPower  *float64                   `json:"ActiveChargingPower,omitempty"`
	Duration             *int32                     `json:"Duration,omitempty"`
	State                *PicoChargingDataStateEnum `json:"State,omitempty"`
	ValueDate            *time.Time                 `json:"ValueDate,omitempty"`
}
