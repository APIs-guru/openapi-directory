package shared

type ArtistForAlbumForAPIContractCategoriesEnum string

const (
	ArtistForAlbumForAPIContractCategoriesEnumNothing     ArtistForAlbumForAPIContractCategoriesEnum = "Nothing"
	ArtistForAlbumForAPIContractCategoriesEnumVocalist    ArtistForAlbumForAPIContractCategoriesEnum = "Vocalist"
	ArtistForAlbumForAPIContractCategoriesEnumProducer    ArtistForAlbumForAPIContractCategoriesEnum = "Producer"
	ArtistForAlbumForAPIContractCategoriesEnumAnimator    ArtistForAlbumForAPIContractCategoriesEnum = "Animator"
	ArtistForAlbumForAPIContractCategoriesEnumLabel       ArtistForAlbumForAPIContractCategoriesEnum = "Label"
	ArtistForAlbumForAPIContractCategoriesEnumCircle      ArtistForAlbumForAPIContractCategoriesEnum = "Circle"
	ArtistForAlbumForAPIContractCategoriesEnumOther       ArtistForAlbumForAPIContractCategoriesEnum = "Other"
	ArtistForAlbumForAPIContractCategoriesEnumBand        ArtistForAlbumForAPIContractCategoriesEnum = "Band"
	ArtistForAlbumForAPIContractCategoriesEnumIllustrator ArtistForAlbumForAPIContractCategoriesEnum = "Illustrator"
	ArtistForAlbumForAPIContractCategoriesEnumSubject     ArtistForAlbumForAPIContractCategoriesEnum = "Subject"
)

type ArtistForAlbumForAPIContractEffectiveRolesEnum string

const (
	ArtistForAlbumForAPIContractEffectiveRolesEnumDefault           ArtistForAlbumForAPIContractEffectiveRolesEnum = "Default"
	ArtistForAlbumForAPIContractEffectiveRolesEnumAnimator          ArtistForAlbumForAPIContractEffectiveRolesEnum = "Animator"
	ArtistForAlbumForAPIContractEffectiveRolesEnumArranger          ArtistForAlbumForAPIContractEffectiveRolesEnum = "Arranger"
	ArtistForAlbumForAPIContractEffectiveRolesEnumComposer          ArtistForAlbumForAPIContractEffectiveRolesEnum = "Composer"
	ArtistForAlbumForAPIContractEffectiveRolesEnumDistributor       ArtistForAlbumForAPIContractEffectiveRolesEnum = "Distributor"
	ArtistForAlbumForAPIContractEffectiveRolesEnumIllustrator       ArtistForAlbumForAPIContractEffectiveRolesEnum = "Illustrator"
	ArtistForAlbumForAPIContractEffectiveRolesEnumInstrumentalist   ArtistForAlbumForAPIContractEffectiveRolesEnum = "Instrumentalist"
	ArtistForAlbumForAPIContractEffectiveRolesEnumLyricist          ArtistForAlbumForAPIContractEffectiveRolesEnum = "Lyricist"
	ArtistForAlbumForAPIContractEffectiveRolesEnumMastering         ArtistForAlbumForAPIContractEffectiveRolesEnum = "Mastering"
	ArtistForAlbumForAPIContractEffectiveRolesEnumPublisher         ArtistForAlbumForAPIContractEffectiveRolesEnum = "Publisher"
	ArtistForAlbumForAPIContractEffectiveRolesEnumVocalist          ArtistForAlbumForAPIContractEffectiveRolesEnum = "Vocalist"
	ArtistForAlbumForAPIContractEffectiveRolesEnumVoiceManipulator  ArtistForAlbumForAPIContractEffectiveRolesEnum = "VoiceManipulator"
	ArtistForAlbumForAPIContractEffectiveRolesEnumOther             ArtistForAlbumForAPIContractEffectiveRolesEnum = "Other"
	ArtistForAlbumForAPIContractEffectiveRolesEnumMixer             ArtistForAlbumForAPIContractEffectiveRolesEnum = "Mixer"
	ArtistForAlbumForAPIContractEffectiveRolesEnumChorus            ArtistForAlbumForAPIContractEffectiveRolesEnum = "Chorus"
	ArtistForAlbumForAPIContractEffectiveRolesEnumEncoder           ArtistForAlbumForAPIContractEffectiveRolesEnum = "Encoder"
	ArtistForAlbumForAPIContractEffectiveRolesEnumVocalDataProvider ArtistForAlbumForAPIContractEffectiveRolesEnum = "VocalDataProvider"
)

type ArtistForAlbumForAPIContractRolesEnum string

const (
	ArtistForAlbumForAPIContractRolesEnumDefault           ArtistForAlbumForAPIContractRolesEnum = "Default"
	ArtistForAlbumForAPIContractRolesEnumAnimator          ArtistForAlbumForAPIContractRolesEnum = "Animator"
	ArtistForAlbumForAPIContractRolesEnumArranger          ArtistForAlbumForAPIContractRolesEnum = "Arranger"
	ArtistForAlbumForAPIContractRolesEnumComposer          ArtistForAlbumForAPIContractRolesEnum = "Composer"
	ArtistForAlbumForAPIContractRolesEnumDistributor       ArtistForAlbumForAPIContractRolesEnum = "Distributor"
	ArtistForAlbumForAPIContractRolesEnumIllustrator       ArtistForAlbumForAPIContractRolesEnum = "Illustrator"
	ArtistForAlbumForAPIContractRolesEnumInstrumentalist   ArtistForAlbumForAPIContractRolesEnum = "Instrumentalist"
	ArtistForAlbumForAPIContractRolesEnumLyricist          ArtistForAlbumForAPIContractRolesEnum = "Lyricist"
	ArtistForAlbumForAPIContractRolesEnumMastering         ArtistForAlbumForAPIContractRolesEnum = "Mastering"
	ArtistForAlbumForAPIContractRolesEnumPublisher         ArtistForAlbumForAPIContractRolesEnum = "Publisher"
	ArtistForAlbumForAPIContractRolesEnumVocalist          ArtistForAlbumForAPIContractRolesEnum = "Vocalist"
	ArtistForAlbumForAPIContractRolesEnumVoiceManipulator  ArtistForAlbumForAPIContractRolesEnum = "VoiceManipulator"
	ArtistForAlbumForAPIContractRolesEnumOther             ArtistForAlbumForAPIContractRolesEnum = "Other"
	ArtistForAlbumForAPIContractRolesEnumMixer             ArtistForAlbumForAPIContractRolesEnum = "Mixer"
	ArtistForAlbumForAPIContractRolesEnumChorus            ArtistForAlbumForAPIContractRolesEnum = "Chorus"
	ArtistForAlbumForAPIContractRolesEnumEncoder           ArtistForAlbumForAPIContractRolesEnum = "Encoder"
	ArtistForAlbumForAPIContractRolesEnumVocalDataProvider ArtistForAlbumForAPIContractRolesEnum = "VocalDataProvider"
)

type ArtistForAlbumForAPIContract struct {
	Artist         *ArtistContract                                 `json:"artist,omitempty"`
	Categories     *ArtistForAlbumForAPIContractCategoriesEnum     `json:"categories,omitempty"`
	EffectiveRoles *ArtistForAlbumForAPIContractEffectiveRolesEnum `json:"effectiveRoles,omitempty"`
	IsSupport      *bool                                           `json:"isSupport,omitempty"`
	Name           *string                                         `json:"name,omitempty"`
	Roles          *ArtistForAlbumForAPIContractRolesEnum          `json:"roles,omitempty"`
}
