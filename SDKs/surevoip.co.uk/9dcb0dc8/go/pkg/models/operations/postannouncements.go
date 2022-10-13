package operations

import (
	"openapi/pkg/models/shared"
)

type PostAnnouncementsRequestBody struct {
	Description *string `multipartForm:"name=description"`
	File        *string `multipartForm:"name=file"`
}

type PostAnnouncementsRequest struct {
	Request PostAnnouncementsRequestBody `request:"mediaType=multipart/form-data"`
}

type PostAnnouncements201ApplicationJSONAnnouncementURL struct {
	Download *string `json:"download"`
	Href     *string `json:"href"`
	Title    *string `json:"title"`
}

type PostAnnouncements201ApplicationJSONAnnouncement struct {
	CreationDate *string                                             `json:"creation_date"`
	Description  *string                                             `json:"description"`
	FileInternal *string                                             `json:"file_internal"`
	Filename     *string                                             `json:"filename"`
	ID           *string                                             `json:"id"`
	Size         *int64                                              `json:"size"`
	SrcIPAddress *string                                             `json:"src_ip_address"`
	URL          *PostAnnouncements201ApplicationJSONAnnouncementURL `json:"url"`
}

type PostAnnouncements201ApplicationJSON struct {
	Announcement *PostAnnouncements201ApplicationJSONAnnouncement `json:"announcement"`
}

type PostAnnouncements400ApplicationJSONErrors struct {
	Field   string   `json:"field"`
	Message []string `json:"message"`
}

type PostAnnouncements400ApplicationJSON struct {
	Errors []PostAnnouncements400ApplicationJSONErrors `json:"errors"`
}

type PostAnnouncements403ApplicationJSON struct {
	Message *string `json:"message"`
}

type PostAnnouncementsResponse struct {
	ContentType                                                   string
	PostAnnouncements201ApplicationJSONObject                     *PostAnnouncements201ApplicationJSON
	PostAnnouncements400ApplicationJSONObject                     *PostAnnouncements400ApplicationJSON
	PostAnnouncements403ApplicationJSONObject                     *PostAnnouncements403ApplicationJSON
	StatusCode                                                    int64
	OneannouncementsPostResponses403ContentApplication1jsonSchema *shared.OneannouncementsPostResponses403ContentApplication1jsonSchema
}
