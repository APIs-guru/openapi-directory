package operations

type PostPortfolioSimulationRebalancingDriftWeightRequestBodyAssets struct {
	AssetPrices []float64 `json:"assetPrices"`
}

type PostPortfolioSimulationRebalancingDriftWeightRequestBodyPortfolios struct {
	AssetsWeights []float64 `json:"assetsWeights"`
}

type PostPortfolioSimulationRebalancingDriftWeightRequestBody struct {
	Assets     []PostPortfolioSimulationRebalancingDriftWeightRequestBodyAssets     `json:"assets"`
	Portfolios []PostPortfolioSimulationRebalancingDriftWeightRequestBodyPortfolios `json:"portfolios"`
}

type PostPortfolioSimulationRebalancingDriftWeight200ApplicationJSONPortfolios struct {
	PortfolioValues []float64 `json:"portfolioValues"`
}

type PostPortfolioSimulationRebalancingDriftWeight200ApplicationJSON struct {
	Portfolios []PostPortfolioSimulationRebalancingDriftWeight200ApplicationJSONPortfolios `json:"portfolios"`
}

type PostPortfolioSimulationRebalancingDriftWeightRequest struct {
	Request PostPortfolioSimulationRebalancingDriftWeightRequestBody `request:"mediaType=application/json"`
}

type PostPortfolioSimulationRebalancingDriftWeightResponse struct {
	ContentType                                                           string
	PostPortfolioSimulationRebalancingDriftWeight200ApplicationJSONObject *PostPortfolioSimulationRebalancingDriftWeight200ApplicationJSON
	StatusCode                                                            int64
}
