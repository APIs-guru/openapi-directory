package shared

type OneannouncementsPostResponses201ContentApplication1jsonSchemaAnnouncementURL struct {
	Download *string `json:"download"`
	Href     *string `json:"href"`
	Title    *string `json:"title"`
}

type OneannouncementsPostResponses201ContentApplication1jsonSchemaAnnouncement struct {
	CreationDate *string                                                                       `json:"creation_date"`
	Description  *string                                                                       `json:"description"`
	FileInternal *string                                                                       `json:"file_internal"`
	Filename     *string                                                                       `json:"filename"`
	ID           *string                                                                       `json:"id"`
	Size         *int64                                                                        `json:"size"`
	SrcIPAddress *string                                                                       `json:"src_ip_address"`
	URL          *OneannouncementsPostResponses201ContentApplication1jsonSchemaAnnouncementURL `json:"url"`
}

type OneannouncementsPostResponses201ContentApplication1jsonSchema struct {
	Announcement *OneannouncementsPostResponses201ContentApplication1jsonSchemaAnnouncement `json:"announcement"`
}
