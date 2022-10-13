package shared

type ArtistForArtistForAPIContractLinkTypeEnum string

const (
	ArtistForArtistForAPIContractLinkTypeEnumCharacterDesigner ArtistForArtistForAPIContractLinkTypeEnum = "CharacterDesigner"
	ArtistForArtistForAPIContractLinkTypeEnumGroup             ArtistForArtistForAPIContractLinkTypeEnum = "Group"
	ArtistForArtistForAPIContractLinkTypeEnumIllustrator       ArtistForArtistForAPIContractLinkTypeEnum = "Illustrator"
	ArtistForArtistForAPIContractLinkTypeEnumManager           ArtistForArtistForAPIContractLinkTypeEnum = "Manager"
	ArtistForArtistForAPIContractLinkTypeEnumVoiceProvider     ArtistForArtistForAPIContractLinkTypeEnum = "VoiceProvider"
)

type ArtistForArtistForAPIContract struct {
	Artist   *ArtistContract                            `json:"artist"`
	LinkType *ArtistForArtistForAPIContractLinkTypeEnum `json:"linkType"`
}
