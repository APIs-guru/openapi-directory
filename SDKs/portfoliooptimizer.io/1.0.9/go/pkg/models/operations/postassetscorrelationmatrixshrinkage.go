package operations

type PostAssetsCorrelationMatrixShrinkageRequestBody1ShrinkageTargetEnum string

const (
	PostAssetsCorrelationMatrixShrinkageRequestBody1ShrinkageTargetEnumMinimumEquicorrelationMatrix PostAssetsCorrelationMatrixShrinkageRequestBody1ShrinkageTargetEnum = "minimumEquicorrelationMatrix"
	PostAssetsCorrelationMatrixShrinkageRequestBody1ShrinkageTargetEnumZeroEquicorrelationMatrix    PostAssetsCorrelationMatrixShrinkageRequestBody1ShrinkageTargetEnum = "zeroEquicorrelationMatrix"
	PostAssetsCorrelationMatrixShrinkageRequestBody1ShrinkageTargetEnumMaximumEquicorrelationMatrix PostAssetsCorrelationMatrixShrinkageRequestBody1ShrinkageTargetEnum = "maximumEquicorrelationMatrix"
)

type PostAssetsCorrelationMatrixShrinkageRequestBody1 struct {
	Assets                  int64                                                               `json:"assets"`
	AssetsCorrelationMatrix [][]float64                                                         `json:"assetsCorrelationMatrix"`
	ShrinkageFactor         float64                                                             `json:"shrinkageFactor"`
	ShrinkageTarget         PostAssetsCorrelationMatrixShrinkageRequestBody1ShrinkageTargetEnum `json:"shrinkageTarget"`
}

type PostAssetsCorrelationMatrixShrinkageRequestBody2 struct {
	Assets                           int64       `json:"assets"`
	AssetsCorrelationMatrix          [][]float64 `json:"assetsCorrelationMatrix"`
	ShrinkageFactor                  float64     `json:"shrinkageFactor"`
	ShrinkageTargetCorrelationMatrix [][]float64 `json:"shrinkageTargetCorrelationMatrix"`
}

type PostAssetsCorrelationMatrixShrinkageRequest struct {
	Request interface{} `request:"mediaType=application/json"`
}

type PostAssetsCorrelationMatrixShrinkage200ApplicationJSON struct {
	AssetsCorrelationMatrix [][]float64 `json:"assetsCorrelationMatrix"`
}

type PostAssetsCorrelationMatrixShrinkageResponse struct {
	ContentType                                                  string
	PostAssetsCorrelationMatrixShrinkage200ApplicationJSONObject *PostAssetsCorrelationMatrixShrinkage200ApplicationJSON
	StatusCode                                                   int64
}
