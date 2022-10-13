package shared

import (
	"time"
)

type LookupTypeTypeEnum string

const (
	LookupTypeTypeEnumGroup                          LookupTypeTypeEnum = "GROUP"
	LookupTypeTypeEnumMenu                           LookupTypeTypeEnum = "MENU"
	LookupTypeTypeEnumRole                           LookupTypeTypeEnum = "ROLE"
	LookupTypeTypeEnumCodeStandard                   LookupTypeTypeEnum = "CODE_STANDARD"
	LookupTypeTypeEnumCodeType                       LookupTypeTypeEnum = "CODE_TYPE"
	LookupTypeTypeEnumFeatureType                    LookupTypeTypeEnum = "FEATURE_TYPE"
	LookupTypeTypeEnumRelationshipType               LookupTypeTypeEnum = "RELATIONSHIP_TYPE"
	LookupTypeTypeEnumIdentifier                     LookupTypeTypeEnum = "IDENTIFIER"
	LookupTypeTypeEnumContactPointType               LookupTypeTypeEnum = "CONTACT_POINT_TYPE"
	LookupTypeTypeEnumStatisticType                  LookupTypeTypeEnum = "STATISTIC_TYPE"
	LookupTypeTypeEnumNewsType                       LookupTypeTypeEnum = "NEWS_TYPE"
	LookupTypeTypeEnumGender                         LookupTypeTypeEnum = "GENDER"
	LookupTypeTypeEnumIbdCrohnslocation              LookupTypeTypeEnum = "IBD_CROHNSLOCATION"
	LookupTypeTypeEnumIbdCrohnsproximalterminalileum LookupTypeTypeEnum = "IBD_CROHNSPROXIMALTERMINALILEUM"
	LookupTypeTypeEnumIbdCrohnsperianal              LookupTypeTypeEnum = "IBD_CROHNSPERIANAL"
	LookupTypeTypeEnumIbdCrohnsbehaviour             LookupTypeTypeEnum = "IBD_CROHNSBEHAVIOUR"
	LookupTypeTypeEnumIbdUcextent                    LookupTypeTypeEnum = "IBD_UCEXTENT"
	LookupTypeTypeEnumIbdEgimcomplication            LookupTypeTypeEnum = "IBD_EGIMCOMPLICATION"
	LookupTypeTypeEnumIbdSurgerymainprocedure        LookupTypeTypeEnum = "IBD_SURGERYMAINPROCEDURE"
	LookupTypeTypeEnumIbdSmokingstatus               LookupTypeTypeEnum = "IBD_SMOKINGSTATUS"
	LookupTypeTypeEnumIbdFamilyhistory               LookupTypeTypeEnum = "IBD_FAMILYHISTORY"
	LookupTypeTypeEnumLinkType                       LookupTypeTypeEnum = "LINK_TYPE"
)

type LookupType struct {
	Created     *time.Time          `json:"created"`
	Description *string             `json:"description"`
	ID          *int64              `json:"id"`
	LastUpdate  *time.Time          `json:"lastUpdate"`
	Type        *LookupTypeTypeEnum `json:"type"`
}
