package shared

type VenueTypeEnum string

const (
	VenueTypeEnumEvent      VenueTypeEnum = "event"
	VenueTypeEnumVenue      VenueTypeEnum = "venue"
	VenueTypeEnumAttraction VenueTypeEnum = "attraction"
)

type Venue struct {
	AccessibleSeatingDetails map[string]string        `json:"accessibleSeatingDetails,omitempty"`
	Active                   *bool                    `json:"active,omitempty"`
	AdditionalInfos          map[string]string        `json:"additionalInfos,omitempty"`
	Address                  *Address                 `json:"address,omitempty"`
	BoxOfficeInfo            *VenueBoxOfficeInfo      `json:"boxOfficeInfo,omitempty"`
	City                     *City                    `json:"city,omitempty"`
	Country                  *Country                 `json:"country,omitempty"`
	Currency                 *string                  `json:"currency,omitempty"`
	Descriptions             map[string]string        `json:"descriptions,omitempty"`
	Discoverable             *bool                    `json:"discoverable,omitempty"`
	Distance                 *float64                 `json:"distance,omitempty"`
	Dma                      []Dma                    `json:"dma,omitempty"`
	GeneralInfo              *VenueGeneralInfo        `json:"generalInfo,omitempty"`
	Images                   []Image                  `json:"images,omitempty"`
	Location                 *Location                `json:"location,omitempty"`
	Markets                  []Market                 `json:"markets,omitempty"`
	Names                    map[string]string        `json:"names,omitempty"`
	ParkingDetails           map[string]string        `json:"parkingDetails,omitempty"`
	PostalCode               *string                  `json:"postalCode,omitempty"`
	References               map[string]string        `json:"references,omitempty"`
	Relationships            []map[string]interface{} `json:"relationships,omitempty"`
	Social                   *Social                  `json:"social,omitempty"`
	Source                   *Source                  `json:"source,omitempty"`
	State                    *State                   `json:"state,omitempty"`
	Test                     *bool                    `json:"test,omitempty"`
	Timezone                 *string                  `json:"timezone,omitempty"`
	Type                     VenueTypeEnum            `json:"type"`
	Units                    *string                  `json:"units,omitempty"`
	URL                      *string                  `json:"url,omitempty"`
	Version                  *int64                   `json:"version,omitempty"`
}
