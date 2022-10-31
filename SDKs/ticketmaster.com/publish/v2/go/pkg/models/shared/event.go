package shared

type EventTypeEnum string

const (
	EventTypeEnumEvent      EventTypeEnum = "event"
	EventTypeEnumVenue      EventTypeEnum = "venue"
	EventTypeEnumAttraction EventTypeEnum = "attraction"
)

type Event struct {
	Active           *bool                    `json:"active,omitempty"`
	AdditionalInfos  map[string]string        `json:"additionalInfos,omitempty"`
	Attractions      []Attraction             `json:"attractions,omitempty"`
	Classifications  []Classification         `json:"classifications,omitempty"`
	Dates            *EventDates              `json:"dates,omitempty"`
	Descriptions     map[string]string        `json:"descriptions,omitempty"`
	Discoverable     *bool                    `json:"discoverable,omitempty"`
	Distance         *float64                 `json:"distance,omitempty"`
	Images           []Image                  `json:"images,omitempty"`
	Infos            map[string]string        `json:"infos,omitempty"`
	Location         *Location                `json:"location,omitempty"`
	Names            map[string]string        `json:"names,omitempty"`
	Place            *Place                   `json:"place,omitempty"`
	PleaseNotes      map[string]string        `json:"pleaseNotes,omitempty"`
	PriceRanges      []PriceRange             `json:"priceRanges,omitempty"`
	Promoter         *Promoter                `json:"promoter,omitempty"`
	PublicVisibility *PublicVisibility        `json:"publicVisibility,omitempty"`
	References       map[string]string        `json:"references,omitempty"`
	Relationships    []map[string]interface{} `json:"relationships,omitempty"`
	Sales            *EventSalesDates         `json:"sales,omitempty"`
	Source           *Source                  `json:"source,omitempty"`
	Test             *bool                    `json:"test,omitempty"`
	Type             EventTypeEnum            `json:"type"`
	Units            *string                  `json:"units,omitempty"`
	URL              *string                  `json:"url,omitempty"`
	Venue            *Venue                   `json:"venue,omitempty"`
	Version          *int64                   `json:"version,omitempty"`
}
