package shared

type ArtistForSongContractCategoriesEnum string

const (
	ArtistForSongContractCategoriesEnumNothing     ArtistForSongContractCategoriesEnum = "Nothing"
	ArtistForSongContractCategoriesEnumVocalist    ArtistForSongContractCategoriesEnum = "Vocalist"
	ArtistForSongContractCategoriesEnumProducer    ArtistForSongContractCategoriesEnum = "Producer"
	ArtistForSongContractCategoriesEnumAnimator    ArtistForSongContractCategoriesEnum = "Animator"
	ArtistForSongContractCategoriesEnumLabel       ArtistForSongContractCategoriesEnum = "Label"
	ArtistForSongContractCategoriesEnumCircle      ArtistForSongContractCategoriesEnum = "Circle"
	ArtistForSongContractCategoriesEnumOther       ArtistForSongContractCategoriesEnum = "Other"
	ArtistForSongContractCategoriesEnumBand        ArtistForSongContractCategoriesEnum = "Band"
	ArtistForSongContractCategoriesEnumIllustrator ArtistForSongContractCategoriesEnum = "Illustrator"
	ArtistForSongContractCategoriesEnumSubject     ArtistForSongContractCategoriesEnum = "Subject"
)

type ArtistForSongContractEffectiveRolesEnum string

const (
	ArtistForSongContractEffectiveRolesEnumDefault           ArtistForSongContractEffectiveRolesEnum = "Default"
	ArtistForSongContractEffectiveRolesEnumAnimator          ArtistForSongContractEffectiveRolesEnum = "Animator"
	ArtistForSongContractEffectiveRolesEnumArranger          ArtistForSongContractEffectiveRolesEnum = "Arranger"
	ArtistForSongContractEffectiveRolesEnumComposer          ArtistForSongContractEffectiveRolesEnum = "Composer"
	ArtistForSongContractEffectiveRolesEnumDistributor       ArtistForSongContractEffectiveRolesEnum = "Distributor"
	ArtistForSongContractEffectiveRolesEnumIllustrator       ArtistForSongContractEffectiveRolesEnum = "Illustrator"
	ArtistForSongContractEffectiveRolesEnumInstrumentalist   ArtistForSongContractEffectiveRolesEnum = "Instrumentalist"
	ArtistForSongContractEffectiveRolesEnumLyricist          ArtistForSongContractEffectiveRolesEnum = "Lyricist"
	ArtistForSongContractEffectiveRolesEnumMastering         ArtistForSongContractEffectiveRolesEnum = "Mastering"
	ArtistForSongContractEffectiveRolesEnumPublisher         ArtistForSongContractEffectiveRolesEnum = "Publisher"
	ArtistForSongContractEffectiveRolesEnumVocalist          ArtistForSongContractEffectiveRolesEnum = "Vocalist"
	ArtistForSongContractEffectiveRolesEnumVoiceManipulator  ArtistForSongContractEffectiveRolesEnum = "VoiceManipulator"
	ArtistForSongContractEffectiveRolesEnumOther             ArtistForSongContractEffectiveRolesEnum = "Other"
	ArtistForSongContractEffectiveRolesEnumMixer             ArtistForSongContractEffectiveRolesEnum = "Mixer"
	ArtistForSongContractEffectiveRolesEnumChorus            ArtistForSongContractEffectiveRolesEnum = "Chorus"
	ArtistForSongContractEffectiveRolesEnumEncoder           ArtistForSongContractEffectiveRolesEnum = "Encoder"
	ArtistForSongContractEffectiveRolesEnumVocalDataProvider ArtistForSongContractEffectiveRolesEnum = "VocalDataProvider"
)

type ArtistForSongContractRolesEnum string

const (
	ArtistForSongContractRolesEnumDefault           ArtistForSongContractRolesEnum = "Default"
	ArtistForSongContractRolesEnumAnimator          ArtistForSongContractRolesEnum = "Animator"
	ArtistForSongContractRolesEnumArranger          ArtistForSongContractRolesEnum = "Arranger"
	ArtistForSongContractRolesEnumComposer          ArtistForSongContractRolesEnum = "Composer"
	ArtistForSongContractRolesEnumDistributor       ArtistForSongContractRolesEnum = "Distributor"
	ArtistForSongContractRolesEnumIllustrator       ArtistForSongContractRolesEnum = "Illustrator"
	ArtistForSongContractRolesEnumInstrumentalist   ArtistForSongContractRolesEnum = "Instrumentalist"
	ArtistForSongContractRolesEnumLyricist          ArtistForSongContractRolesEnum = "Lyricist"
	ArtistForSongContractRolesEnumMastering         ArtistForSongContractRolesEnum = "Mastering"
	ArtistForSongContractRolesEnumPublisher         ArtistForSongContractRolesEnum = "Publisher"
	ArtistForSongContractRolesEnumVocalist          ArtistForSongContractRolesEnum = "Vocalist"
	ArtistForSongContractRolesEnumVoiceManipulator  ArtistForSongContractRolesEnum = "VoiceManipulator"
	ArtistForSongContractRolesEnumOther             ArtistForSongContractRolesEnum = "Other"
	ArtistForSongContractRolesEnumMixer             ArtistForSongContractRolesEnum = "Mixer"
	ArtistForSongContractRolesEnumChorus            ArtistForSongContractRolesEnum = "Chorus"
	ArtistForSongContractRolesEnumEncoder           ArtistForSongContractRolesEnum = "Encoder"
	ArtistForSongContractRolesEnumVocalDataProvider ArtistForSongContractRolesEnum = "VocalDataProvider"
)

type ArtistForSongContract struct {
	Artist         *ArtistContract                          `json:"artist"`
	Categories     *ArtistForSongContractCategoriesEnum     `json:"categories"`
	EffectiveRoles *ArtistForSongContractEffectiveRolesEnum `json:"effectiveRoles"`
	ID             *int32                                   `json:"id"`
	IsCustomName   *bool                                    `json:"isCustomName"`
	IsSupport      *bool                                    `json:"isSupport"`
	Name           *string                                  `json:"name"`
	Roles          *ArtistForSongContractRolesEnum          `json:"roles"`
}
