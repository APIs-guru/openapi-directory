package shared

import (
	"time"
)

type UnfilteredCloudEnvironmentResult struct {
	AccessToken              *string             `json:"accessToken"`
	Active                   *time.Time          `json:"active"`
	AutoShutdownDelayMinutes *int32              `json:"autoShutdownDelayMinutes"`
	Connection               *ConnectionInfoBody `json:"connection"`
	Container                *ContainerInfoBody  `json:"container"`
	ContainerImage           *string             `json:"containerImage"`
	Created                  *time.Time          `json:"created"`
	ExportedBlobURL          *string             `json:"exportedBlobUrl"`
	Features                 map[string]string   `json:"features"`
	FriendlyName             *string             `json:"friendlyName"`
	GitStatus                *GitStatus          `json:"gitStatus"`
	ID                       *string             `json:"id"`
	LastStateUpdateReason    *string             `json:"lastStateUpdateReason"`
	LastUsed                 *time.Time          `json:"lastUsed"`
	Location                 *string             `json:"location"`
	OwnerID                  *string             `json:"ownerId"`
	PlanID                   *string             `json:"planId"`
	Platform                 *string             `json:"platform"`
	PortForwardingConnection *ConnectionInfoBody `json:"portForwardingConnection"`
	RecentFolders            []string            `json:"recentFolders"`
	Seed                     *SeedInfoBody       `json:"seed"`
	SkuDisplayName           *string             `json:"skuDisplayName"`
	SkuName                  *string             `json:"skuName"`
	State                    *string             `json:"state"`
	SubscriptionData         *SubscriptionData   `json:"subscriptionData"`
	Type                     *string             `json:"type"`
	Updated                  *time.Time          `json:"updated"`
}
