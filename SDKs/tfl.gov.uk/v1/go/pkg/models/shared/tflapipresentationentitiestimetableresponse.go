package shared

type TflAPIPresentationEntitiesTimetableResponse struct {
	Direction          *string                                             `json:"direction"`
	Disambiguation     *TflAPIPresentationEntitiesTimetablesDisambiguation `json:"disambiguation"`
	LineID             *string                                             `json:"lineId"`
	LineName           *string                                             `json:"lineName"`
	PdfURL             *string                                             `json:"pdfUrl"`
	Stations           []TflAPIPresentationEntitiesMatchedStop             `json:"stations"`
	StatusErrorMessage *string                                             `json:"statusErrorMessage"`
	Stops              []TflAPIPresentationEntitiesMatchedStop             `json:"stops"`
	Timetable          *TflAPIPresentationEntitiesTimetable                `json:"timetable"`
}
