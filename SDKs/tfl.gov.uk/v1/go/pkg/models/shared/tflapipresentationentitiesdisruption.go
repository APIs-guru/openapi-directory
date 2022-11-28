package shared

import (
	"time"
)

type TflAPIPresentationEntitiesDisruptionCategoryEnum string

const (
	TflAPIPresentationEntitiesDisruptionCategoryEnumUndefined   TflAPIPresentationEntitiesDisruptionCategoryEnum = "Undefined"
	TflAPIPresentationEntitiesDisruptionCategoryEnumRealTime    TflAPIPresentationEntitiesDisruptionCategoryEnum = "RealTime"
	TflAPIPresentationEntitiesDisruptionCategoryEnumPlannedWork TflAPIPresentationEntitiesDisruptionCategoryEnum = "PlannedWork"
	TflAPIPresentationEntitiesDisruptionCategoryEnumInformation TflAPIPresentationEntitiesDisruptionCategoryEnum = "Information"
	TflAPIPresentationEntitiesDisruptionCategoryEnumEvent       TflAPIPresentationEntitiesDisruptionCategoryEnum = "Event"
	TflAPIPresentationEntitiesDisruptionCategoryEnumCrowding    TflAPIPresentationEntitiesDisruptionCategoryEnum = "Crowding"
	TflAPIPresentationEntitiesDisruptionCategoryEnumStatusAlert TflAPIPresentationEntitiesDisruptionCategoryEnum = "StatusAlert"
)

// TflAPIPresentationEntitiesDisruption
// Represents a disruption to a route within the transport network.
type TflAPIPresentationEntitiesDisruption struct {
	AdditionalInfo      *string                                           `json:"additionalInfo,omitempty"`
	AffectedRoutes      []TflAPIPresentationEntitiesRouteSection          `json:"affectedRoutes,omitempty"`
	AffectedStops       []TflAPIPresentationEntitiesStopPoint             `json:"affectedStops,omitempty"`
	Category            *TflAPIPresentationEntitiesDisruptionCategoryEnum `json:"category,omitempty"`
	CategoryDescription *string                                           `json:"categoryDescription,omitempty"`
	ClosureText         *string                                           `json:"closureText,omitempty"`
	Created             *time.Time                                        `json:"created,omitempty"`
	Description         *string                                           `json:"description,omitempty"`
	LastUpdate          *time.Time                                        `json:"lastUpdate,omitempty"`
	Summary             *string                                           `json:"summary,omitempty"`
	Type                *string                                           `json:"type,omitempty"`
}
