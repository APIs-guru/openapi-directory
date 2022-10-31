package operations

type PostPortfolioSimulationRebalancingRandomWeightRequestBodyAssets struct {
	AssetPrices []float64 `json:"assetPrices"`
}

type PostPortfolioSimulationRebalancingRandomWeightRequestBody struct {
	Assets     []PostPortfolioSimulationRebalancingRandomWeightRequestBodyAssets `json:"assets"`
	Portfolios *int64                                                            `json:"portfolios,omitempty"`
}

type PostPortfolioSimulationRebalancingRandomWeightRequest struct {
	Request PostPortfolioSimulationRebalancingRandomWeightRequestBody `request:"mediaType=application/json"`
}

type PostPortfolioSimulationRebalancingRandomWeight200ApplicationJSONPortfolios struct {
	PortfolioValues []float64 `json:"portfolioValues"`
}

type PostPortfolioSimulationRebalancingRandomWeight200ApplicationJSON struct {
	Portfolios []PostPortfolioSimulationRebalancingRandomWeight200ApplicationJSONPortfolios `json:"portfolios"`
}

type PostPortfolioSimulationRebalancingRandomWeightResponse struct {
	ContentType                                                            string
	PostPortfolioSimulationRebalancingRandomWeight200ApplicationJSONObject *PostPortfolioSimulationRebalancingRandomWeight200ApplicationJSON
	StatusCode                                                             int64
}
