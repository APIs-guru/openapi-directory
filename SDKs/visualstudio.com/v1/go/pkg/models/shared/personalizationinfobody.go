package shared

type PersonalizationInfoBody struct {
	DotfilesInstallCommand *string `json:"dotfilesInstallCommand,omitempty"`
	DotfilesRepository     *string `json:"dotfilesRepository,omitempty"`
	DotfilesTargetPath     *string `json:"dotfilesTargetPath,omitempty"`
}
