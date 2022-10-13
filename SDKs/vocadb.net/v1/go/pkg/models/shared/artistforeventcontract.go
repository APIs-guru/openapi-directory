package shared

type ArtistForEventContractEffectiveRolesEnum string

const (
	ArtistForEventContractEffectiveRolesEnumDefault          ArtistForEventContractEffectiveRolesEnum = "Default"
	ArtistForEventContractEffectiveRolesEnumDancer           ArtistForEventContractEffectiveRolesEnum = "Dancer"
	ArtistForEventContractEffectiveRolesEnumDj               ArtistForEventContractEffectiveRolesEnum = "DJ"
	ArtistForEventContractEffectiveRolesEnumInstrumentalist  ArtistForEventContractEffectiveRolesEnum = "Instrumentalist"
	ArtistForEventContractEffectiveRolesEnumOrganizer        ArtistForEventContractEffectiveRolesEnum = "Organizer"
	ArtistForEventContractEffectiveRolesEnumPromoter         ArtistForEventContractEffectiveRolesEnum = "Promoter"
	ArtistForEventContractEffectiveRolesEnumVj               ArtistForEventContractEffectiveRolesEnum = "VJ"
	ArtistForEventContractEffectiveRolesEnumVocalist         ArtistForEventContractEffectiveRolesEnum = "Vocalist"
	ArtistForEventContractEffectiveRolesEnumVoiceManipulator ArtistForEventContractEffectiveRolesEnum = "VoiceManipulator"
	ArtistForEventContractEffectiveRolesEnumOtherPerformer   ArtistForEventContractEffectiveRolesEnum = "OtherPerformer"
	ArtistForEventContractEffectiveRolesEnumOther            ArtistForEventContractEffectiveRolesEnum = "Other"
)

type ArtistForEventContractRolesEnum string

const (
	ArtistForEventContractRolesEnumDefault          ArtistForEventContractRolesEnum = "Default"
	ArtistForEventContractRolesEnumDancer           ArtistForEventContractRolesEnum = "Dancer"
	ArtistForEventContractRolesEnumDj               ArtistForEventContractRolesEnum = "DJ"
	ArtistForEventContractRolesEnumInstrumentalist  ArtistForEventContractRolesEnum = "Instrumentalist"
	ArtistForEventContractRolesEnumOrganizer        ArtistForEventContractRolesEnum = "Organizer"
	ArtistForEventContractRolesEnumPromoter         ArtistForEventContractRolesEnum = "Promoter"
	ArtistForEventContractRolesEnumVj               ArtistForEventContractRolesEnum = "VJ"
	ArtistForEventContractRolesEnumVocalist         ArtistForEventContractRolesEnum = "Vocalist"
	ArtistForEventContractRolesEnumVoiceManipulator ArtistForEventContractRolesEnum = "VoiceManipulator"
	ArtistForEventContractRolesEnumOtherPerformer   ArtistForEventContractRolesEnum = "OtherPerformer"
	ArtistForEventContractRolesEnumOther            ArtistForEventContractRolesEnum = "Other"
)

type ArtistForEventContract struct {
	Artist         *ArtistContract                           `json:"artist"`
	EffectiveRoles *ArtistForEventContractEffectiveRolesEnum `json:"effectiveRoles"`
	ID             *int32                                    `json:"id"`
	Name           *string                                   `json:"name"`
	Roles          *ArtistForEventContractRolesEnum          `json:"roles"`
}
