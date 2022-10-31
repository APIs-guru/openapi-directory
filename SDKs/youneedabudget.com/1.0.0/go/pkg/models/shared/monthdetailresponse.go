package shared



type MonthDetailResponseData struct {
    Month MonthDetail `json:"month"`
    
}

type MonthDetailResponse struct {
    Data MonthDetailResponseData `json:"data"`
    
}

