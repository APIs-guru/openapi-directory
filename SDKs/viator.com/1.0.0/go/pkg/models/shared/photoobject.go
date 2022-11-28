package shared

// PhotoObject
// **object** detailing a single photo from a user
type PhotoObject struct {
	Caption           *string `json:"caption,omitempty"`
	EditorsPick       *bool   `json:"editorsPick,omitempty"`
	OwnerAvatarURL    *string `json:"ownerAvatarURL,omitempty"`
	OwnerCountry      *string `json:"ownerCountry,omitempty"`
	OwnerID           *int64  `json:"ownerId,omitempty"`
	OwnerName         *string `json:"ownerName,omitempty"`
	PhotoHiResURL     *string `json:"photoHiResURL,omitempty"`
	PhotoID           *int64  `json:"photoId,omitempty"`
	PhotoMediumResURL *string `json:"photoMediumResURL,omitempty"`
	PhotoURL          *string `json:"photoURL,omitempty"`
	ProductCode       *string `json:"productCode,omitempty"`
	ProductTitle      *string `json:"productTitle,omitempty"`
	ProductURLName    *string `json:"productUrlName,omitempty"`
	SortOrder         *int64  `json:"sortOrder,omitempty"`
	SslSupported      *bool   `json:"sslSupported,omitempty"`
	ThumbnailURL      *string `json:"thumbnailURL,omitempty"`
	TimeUploaded      *string `json:"timeUploaded,omitempty"`
	Title             *string `json:"title,omitempty"`
}
