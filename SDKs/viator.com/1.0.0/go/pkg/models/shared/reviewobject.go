package shared

type ReviewObject struct {
	OwnerAvatarURL *string `json:"ownerAvatarURL"`
	OwnerCountry   *string `json:"ownerCountry"`
	OwnerID        *int64  `json:"ownerId"`
	OwnerName      *string `json:"ownerName"`
	ProductCode    *string `json:"productCode"`
	ProductTitle   *string `json:"productTitle"`
	ProductURLName *string `json:"productUrlName"`
	PublishedDate  *string `json:"publishedDate"`
	Rating         *int64  `json:"rating"`
	Review         *string `json:"review"`
	ReviewID       *int64  `json:"reviewId"`
	SortOrder      *int64  `json:"sortOrder"`
	SslSupported   *bool   `json:"sslSupported"`
	SubmissionDate *string `json:"submissionDate"`
	ViatorFeedback *string `json:"viatorFeedback"`
	ViatorNotes    *string `json:"viatorNotes"`
}
