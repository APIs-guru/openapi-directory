package shared

type PhotoObject struct {
	Caption           *string `json:"caption"`
	EditorsPick       *bool   `json:"editorsPick"`
	OwnerAvatarURL    *string `json:"ownerAvatarURL"`
	OwnerCountry      *string `json:"ownerCountry"`
	OwnerID           *int64  `json:"ownerId"`
	OwnerName         *string `json:"ownerName"`
	PhotoHiResURL     *string `json:"photoHiResURL"`
	PhotoID           *int64  `json:"photoId"`
	PhotoMediumResURL *string `json:"photoMediumResURL"`
	PhotoURL          *string `json:"photoURL"`
	ProductCode       *string `json:"productCode"`
	ProductTitle      *string `json:"productTitle"`
	ProductURLName    *string `json:"productUrlName"`
	SortOrder         *int64  `json:"sortOrder"`
	SslSupported      *bool   `json:"sslSupported"`
	ThumbnailURL      *string `json:"thumbnailURL"`
	TimeUploaded      *string `json:"timeUploaded"`
	Title             *string `json:"title"`
}
