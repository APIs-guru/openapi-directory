package shared

type EventTypeEnum string

const (
	EventTypeEnumEvent      EventTypeEnum = "event"
	EventTypeEnumVenue      EventTypeEnum = "venue"
	EventTypeEnumAttraction EventTypeEnum = "attraction"
)

type Event struct {
	Active           *bool                    `json:"active"`
	AdditionalInfos  map[string]string        `json:"additionalInfos"`
	Attractions      []Attraction             `json:"attractions"`
	Classifications  []Classification         `json:"classifications"`
	Dates            *EventDates              `json:"dates"`
	Descriptions     map[string]string        `json:"descriptions"`
	Discoverable     *bool                    `json:"discoverable"`
	Distance         *float64                 `json:"distance"`
	Images           []Image                  `json:"images"`
	Infos            map[string]string        `json:"infos"`
	Location         *Location                `json:"location"`
	Names            map[string]string        `json:"names"`
	Place            *Place                   `json:"place"`
	PleaseNotes      map[string]string        `json:"pleaseNotes"`
	PriceRanges      []PriceRange             `json:"priceRanges"`
	Promoter         *Promoter                `json:"promoter"`
	PublicVisibility *PublicVisibility        `json:"publicVisibility"`
	References       map[string]string        `json:"references"`
	Relationships    []map[string]interface{} `json:"relationships"`
	Sales            *EventSalesDates         `json:"sales"`
	Source           *Source                  `json:"source"`
	Test             *bool                    `json:"test"`
	Type             EventTypeEnum            `json:"type"`
	Units            *string                  `json:"units"`
	URL              *string                  `json:"url"`
	Venue            *Venue                   `json:"venue"`
	Version          *int64                   `json:"version"`
}
