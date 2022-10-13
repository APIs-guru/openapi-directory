package shared

type PersonalizationInfoBody struct {
	DotfilesInstallCommand *string `json:"dotfilesInstallCommand"`
	DotfilesRepository     *string `json:"dotfilesRepository"`
	DotfilesTargetPath     *string `json:"dotfilesTargetPath"`
}
