package shared



type TflAPIPresentationEntitiesTimetableResponse struct {
    Direction *string `json:"direction,omitempty"`
    Disambiguation *TflAPIPresentationEntitiesTimetablesDisambiguation `json:"disambiguation,omitempty"`
    LineID *string `json:"lineId,omitempty"`
    LineName *string `json:"lineName,omitempty"`
    PdfURL *string `json:"pdfUrl,omitempty"`
    Stations []TflAPIPresentationEntitiesMatchedStop `json:"stations,omitempty"`
    StatusErrorMessage *string `json:"statusErrorMessage,omitempty"`
    Stops []TflAPIPresentationEntitiesMatchedStop `json:"stops,omitempty"`
    Timetable *TflAPIPresentationEntitiesTimetable `json:"timetable,omitempty"`
    
}

