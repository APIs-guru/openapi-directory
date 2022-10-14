package shared

type OneannouncementsPostResponses201ContentApplication1jsonSchemaAnnouncementURL struct {
	Download *string `json:"download,omitempty"`
	Href     *string `json:"href,omitempty"`
	Title    *string `json:"title,omitempty"`
}

type OneannouncementsPostResponses201ContentApplication1jsonSchemaAnnouncement struct {
	CreationDate *string                                                                       `json:"creation_date,omitempty"`
	Description  *string                                                                       `json:"description,omitempty"`
	FileInternal *string                                                                       `json:"file_internal,omitempty"`
	Filename     *string                                                                       `json:"filename,omitempty"`
	ID           *string                                                                       `json:"id,omitempty"`
	Size         *int64                                                                        `json:"size,omitempty"`
	SrcIPAddress *string                                                                       `json:"src_ip_address,omitempty"`
	URL          *OneannouncementsPostResponses201ContentApplication1jsonSchemaAnnouncementURL `json:"url,omitempty"`
}

type OneannouncementsPostResponses201ContentApplication1jsonSchema struct {
	Announcement *OneannouncementsPostResponses201ContentApplication1jsonSchemaAnnouncement `json:"announcement,omitempty"`
}
