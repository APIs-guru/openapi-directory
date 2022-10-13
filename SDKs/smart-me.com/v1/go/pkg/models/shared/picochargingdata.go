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
	ActiveChargingEnergy *float64                   `json:"ActiveChargingEnergy"`
	ActiveChargingPower  *float64                   `json:"ActiveChargingPower"`
	Duration             *int32                     `json:"Duration"`
	State                *PicoChargingDataStateEnum `json:"State"`
	ValueDate            *time.Time                 `json:"ValueDate"`
}
