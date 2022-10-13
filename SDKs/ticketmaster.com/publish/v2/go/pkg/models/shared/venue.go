package shared

type VenueTypeEnum string

const (
	VenueTypeEnumEvent      VenueTypeEnum = "event"
	VenueTypeEnumVenue      VenueTypeEnum = "venue"
	VenueTypeEnumAttraction VenueTypeEnum = "attraction"
)

type Venue struct {
	AccessibleSeatingDetails map[string]string        `json:"accessibleSeatingDetails"`
	Active                   *bool                    `json:"active"`
	AdditionalInfos          map[string]string        `json:"additionalInfos"`
	Address                  *Address                 `json:"address"`
	BoxOfficeInfo            *VenueBoxOfficeInfo      `json:"boxOfficeInfo"`
	City                     *City                    `json:"city"`
	Country                  *Country                 `json:"country"`
	Currency                 *string                  `json:"currency"`
	Descriptions             map[string]string        `json:"descriptions"`
	Discoverable             *bool                    `json:"discoverable"`
	Distance                 *float64                 `json:"distance"`
	Dma                      []Dma                    `json:"dma"`
	GeneralInfo              *VenueGeneralInfo        `json:"generalInfo"`
	Images                   []Image                  `json:"images"`
	Location                 *Location                `json:"location"`
	Markets                  []Market                 `json:"markets"`
	Names                    map[string]string        `json:"names"`
	ParkingDetails           map[string]string        `json:"parkingDetails"`
	PostalCode               *string                  `json:"postalCode"`
	References               map[string]string        `json:"references"`
	Relationships            []map[string]interface{} `json:"relationships"`
	Social                   *Social                  `json:"social"`
	Source                   *Source                  `json:"source"`
	State                    *State                   `json:"state"`
	Test                     *bool                    `json:"test"`
	Timezone                 *string                  `json:"timezone"`
	Type                     VenueTypeEnum            `json:"type"`
	Units                    *string                  `json:"units"`
	URL                      *string                  `json:"url"`
	Version                  *int64                   `json:"version"`
}
