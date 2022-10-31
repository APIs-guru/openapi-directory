package shared



type APIStatus struct {
    Android APIStatusAppVersion `json:"android"`
    CurrentSeason int64 `json:"current_season"`
    DownEvents []string `json:"down_events"`
    Ios APIStatusAppVersion `json:"ios"`
    IsDatafeedDown bool `json:"is_datafeed_down"`
    MaxSeason int64 `json:"max_season"`
    
}

