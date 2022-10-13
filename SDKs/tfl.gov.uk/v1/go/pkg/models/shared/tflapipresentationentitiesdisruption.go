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

type TflAPIPresentationEntitiesDisruption struct {
	AdditionalInfo      *string                                           `json:"additionalInfo"`
	AffectedRoutes      []TflAPIPresentationEntitiesRouteSection          `json:"affectedRoutes"`
	AffectedStops       []TflAPIPresentationEntitiesStopPoint             `json:"affectedStops"`
	Category            *TflAPIPresentationEntitiesDisruptionCategoryEnum `json:"category"`
	CategoryDescription *string                                           `json:"categoryDescription"`
	ClosureText         *string                                           `json:"closureText"`
	Created             *time.Time                                        `json:"created"`
	Description         *string                                           `json:"description"`
	LastUpdate          *time.Time                                        `json:"lastUpdate"`
	Summary             *string                                           `json:"summary"`
	Type                *string                                           `json:"type"`
}
