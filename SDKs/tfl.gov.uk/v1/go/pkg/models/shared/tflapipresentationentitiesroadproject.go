package shared

import (
	"time"
)

type TflAPIPresentationEntitiesRoadProjectPhaseEnum string

const (
	TflAPIPresentationEntitiesRoadProjectPhaseEnumUnscoped          TflAPIPresentationEntitiesRoadProjectPhaseEnum = "Unscoped"
	TflAPIPresentationEntitiesRoadProjectPhaseEnumConcept           TflAPIPresentationEntitiesRoadProjectPhaseEnum = "Concept"
	TflAPIPresentationEntitiesRoadProjectPhaseEnumConsultationEnded TflAPIPresentationEntitiesRoadProjectPhaseEnum = "ConsultationEnded"
	TflAPIPresentationEntitiesRoadProjectPhaseEnumConsultation      TflAPIPresentationEntitiesRoadProjectPhaseEnum = "Consultation"
	TflAPIPresentationEntitiesRoadProjectPhaseEnumConstruction      TflAPIPresentationEntitiesRoadProjectPhaseEnum = "Construction"
	TflAPIPresentationEntitiesRoadProjectPhaseEnumComplete          TflAPIPresentationEntitiesRoadProjectPhaseEnum = "Complete"
)

type TflAPIPresentationEntitiesRoadProject struct {
	BoroughsBenefited     []string                                        `json:"boroughsBenefited,omitempty"`
	ConstructionEndDate   *time.Time                                      `json:"constructionEndDate,omitempty"`
	ConstructionStartDate *time.Time                                      `json:"constructionStartDate,omitempty"`
	ConsultationEndDate   *time.Time                                      `json:"consultationEndDate,omitempty"`
	ConsultationPageURL   *string                                         `json:"consultationPageUrl,omitempty"`
	ConsultationStartDate *time.Time                                      `json:"consultationStartDate,omitempty"`
	ContactEmail          *string                                         `json:"contactEmail,omitempty"`
	ContactName           *string                                         `json:"contactName,omitempty"`
	CycleSuperhighwayID   *string                                         `json:"cycleSuperhighwayId,omitempty"`
	ExternalPageURL       *string                                         `json:"externalPageUrl,omitempty"`
	Phase                 *TflAPIPresentationEntitiesRoadProjectPhaseEnum `json:"phase,omitempty"`
	ProjectDescription    *string                                         `json:"projectDescription,omitempty"`
	ProjectID             *string                                         `json:"projectId,omitempty"`
	ProjectName           *string                                         `json:"projectName,omitempty"`
	ProjectPageURL        *string                                         `json:"projectPageUrl,omitempty"`
	ProjectSummaryPageURL *string                                         `json:"projectSummaryPageUrl,omitempty"`
	SchemeName            *string                                         `json:"schemeName,omitempty"`
}
