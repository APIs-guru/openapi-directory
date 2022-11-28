package shared

type FhirObservationPage struct {
	Data          []EntryLongMapStringListFhirObservation
	TotalElements *int64
	TotalPages    *int64
}
