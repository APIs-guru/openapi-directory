package shared

type CatalogQuickAmount struct {
	Amount  Money  `json:"amount"`
	Ordinal *int64 `json:"ordinal"`
	Score   *int64 `json:"score"`
	Type    string `json:"type"`
}
