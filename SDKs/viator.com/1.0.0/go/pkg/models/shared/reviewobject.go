package shared

type ReviewObject struct {
	OwnerAvatarURL *string `json:"ownerAvatarURL,omitempty"`
	OwnerCountry   *string `json:"ownerCountry,omitempty"`
	OwnerID        *int64  `json:"ownerId,omitempty"`
	OwnerName      *string `json:"ownerName,omitempty"`
	ProductCode    *string `json:"productCode,omitempty"`
	ProductTitle   *string `json:"productTitle,omitempty"`
	ProductURLName *string `json:"productUrlName,omitempty"`
	PublishedDate  *string `json:"publishedDate,omitempty"`
	Rating         *int64  `json:"rating,omitempty"`
	Review         *string `json:"review,omitempty"`
	ReviewID       *int64  `json:"reviewId,omitempty"`
	SortOrder      *int64  `json:"sortOrder,omitempty"`
	SslSupported   *bool   `json:"sslSupported,omitempty"`
	SubmissionDate *string `json:"submissionDate,omitempty"`
	ViatorFeedback *string `json:"viatorFeedback,omitempty"`
	ViatorNotes    *string `json:"viatorNotes,omitempty"`
}
