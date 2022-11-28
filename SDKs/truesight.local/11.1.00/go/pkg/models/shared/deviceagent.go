package shared

// DeviceAgent
// Contains all information regarding a specific PATROL Agent.
type DeviceAgent struct {
	ConnectionStatus *string
	ID               *string
	Name             *string
	Os               *string
	Port             *string
	URL              *string
	Version          *string
}
