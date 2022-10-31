package shared

import (
"time")

type CloudEnvironmentResult struct {
    AccessToken *string `json:"accessToken,omitempty"`
    Active *time.Time `json:"active,omitempty"`
    AutoShutdownDelayMinutes *int32 `json:"autoShutdownDelayMinutes,omitempty"`
    Connection *ConnectionInfoBody `json:"connection,omitempty"`
    Container *ContainerInfoBody `json:"container,omitempty"`
    ContainerImage *string `json:"containerImage,omitempty"`
    Created *time.Time `json:"created,omitempty"`
    ExportedBlobURL *string `json:"exportedBlobUrl,omitempty"`
    Features map[string]string `json:"features,omitempty"`
    FriendlyName *string `json:"friendlyName,omitempty"`
    GitStatus *GitStatus `json:"gitStatus,omitempty"`
    ID *string `json:"id,omitempty"`
    LastStateUpdateReason *string `json:"lastStateUpdateReason,omitempty"`
    LastUsed *time.Time `json:"lastUsed,omitempty"`
    Location *string `json:"location,omitempty"`
    OwnerID *string `json:"ownerId,omitempty"`
    PlanID *string `json:"planId,omitempty"`
    Platform *string `json:"platform,omitempty"`
    PortForwardingConnection *ConnectionInfoBody `json:"portForwardingConnection,omitempty"`
    RecentFolders []string `json:"recentFolders,omitempty"`
    Seed *SeedInfoBody `json:"seed,omitempty"`
    SkuDisplayName *string `json:"skuDisplayName,omitempty"`
    SkuName *string `json:"skuName,omitempty"`
    State *string `json:"state,omitempty"`
    SubscriptionData *SubscriptionData `json:"subscriptionData,omitempty"`
    Type *string `json:"type,omitempty"`
    Updated *time.Time `json:"updated,omitempty"`
    
}

