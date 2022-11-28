package operations

type PostPortfolioSimulationRebalancingFixedWeightRequestBodyAssets struct {
	AssetPrices []float64 `json:"assetPrices"`
}

type PostPortfolioSimulationRebalancingFixedWeightRequestBodyPortfolios struct {
	AssetsWeights []float64 `json:"assetsWeights"`
}

type PostPortfolioSimulationRebalancingFixedWeightRequestBody struct {
	Assets     []PostPortfolioSimulationRebalancingFixedWeightRequestBodyAssets     `json:"assets"`
	Portfolios []PostPortfolioSimulationRebalancingFixedWeightRequestBodyPortfolios `json:"portfolios"`
}

type PostPortfolioSimulationRebalancingFixedWeight200ApplicationJSONPortfolios struct {
	PortfolioValues []float64 `json:"portfolioValues"`
}

type PostPortfolioSimulationRebalancingFixedWeight200ApplicationJSON struct {
	Portfolios []PostPortfolioSimulationRebalancingFixedWeight200ApplicationJSONPortfolios `json:"portfolios"`
}

type PostPortfolioSimulationRebalancingFixedWeightRequest struct {
	Request PostPortfolioSimulationRebalancingFixedWeightRequestBody `request:"mediaType=application/json"`
}

type PostPortfolioSimulationRebalancingFixedWeightResponse struct {
	ContentType                                                           string
	PostPortfolioSimulationRebalancingFixedWeight200ApplicationJSONObject *PostPortfolioSimulationRebalancingFixedWeight200ApplicationJSON
	StatusCode                                                            int64
}
