package sdk

import (
	"context"
	"fmt"
	"net/http"
	"openapi/internal/utils"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
	"strings"
)

var ServerList = []string{
	"https://api.portfoliooptimizer.io/v1",
	"https://eu-west-1.api.portfoliooptimizer.io/v1",
}

type HTTPClient interface {
	Do(req *http.Request) (*http.Response, error)
}

// SDK Documentation: https://docs.portfoliooptimizer.io/ - External documentation
type SDK struct {
	_defaultClient  HTTPClient
	_securityClient HTTPClient
	_security       *shared.Security
	_serverURL      string
	_language       string
	_sdkVersion     string
	_genVersion     string
}

type SDKOption func(*SDK)

func WithServerURL(serverURL string, params map[string]string) SDKOption {
	return func(sdk *SDK) {
		if params != nil {
			serverURL = utils.ReplaceParameters(serverURL, params)
		}

		sdk._serverURL = serverURL
	}
}

func WithClient(client HTTPClient) SDKOption {
	return func(sdk *SDK) {
		sdk._defaultClient = client
	}
}

func WithSecurity(security shared.Security) SDKOption {
	return func(sdk *SDK) {
		sdk._security = &security
	}
}

func New(opts ...SDKOption) *SDK {
	sdk := &SDK{
		_language:   "go",
		_sdkVersion: "",
		_genVersion: "internal",
	}
	for _, opt := range opts {
		opt(sdk)
	}

	if sdk._defaultClient == nil {
		sdk._defaultClient = http.DefaultClient
	}
	if sdk._securityClient == nil {

		if sdk._security != nil {
			sdk._securityClient = utils.ConfigureSecurityClient(sdk._defaultClient, sdk._security)
		} else {
			sdk._securityClient = sdk._defaultClient
		}

	}

	if sdk._serverURL == "" {
		sdk._serverURL = ServerList[0]
	}

	return sdk
}

// PostAssetsCorrelationMatrix - Correlation Matrix
// Compute the Pearson correlation matrix of assets from either:
// * The assets returns
// * The assets covariance matrix
//
// References
// * [Wikipedia, Correlation and Dependence](https://en.wikipedia.org/wiki/Correlation_and_dependence#Correlation_matrices)
func (s *SDK) PostAssetsCorrelationMatrix(ctx context.Context, request operations.PostAssetsCorrelationMatrixRequest) (*operations.PostAssetsCorrelationMatrixResponse, error) {
	baseURL := s._serverURL
	url := strings.TrimSuffix(baseURL, "/") + "/assets/correlation/matrix"

	bodyReader, reqContentType, err := utils.SerializeRequestBody(ctx, request)
	if err != nil {
		return nil, fmt.Errorf("error serializing request body: %w", err)
	}
	if bodyReader == nil {
		return nil, fmt.Errorf("request body is required")
	}

	req, err := http.NewRequestWithContext(ctx, "POST", url, bodyReader)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	req.Header.Set("Content-Type", reqContentType)

	client := s._securityClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.PostAssetsCorrelationMatrixResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *operations.PostAssetsCorrelationMatrix200ApplicationJSON
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.PostAssetsCorrelationMatrix200ApplicationJSONObject = out
		}
	}

	return res, nil
}

// PostAssetsCorrelationMatrixNearest - Nearest Correlation Matrix
// Compute the _closest_ correlation matrix to an approximate assets correlation matrix, optionally keeping a selected number of correlations fixed, _closest_ being defined in terms of [the Frobenius norm](https://en.wikipedia.org/wiki/Matrix_norm#Frobenius_norm).
//
// References
// * [Nicholas J. Higham, Computing the Nearest Correlation Matrix—A Problem from Finance, IMA J. Numer. Anal. 22, 329–343, 2002.](http://www.maths.manchester.ac.uk/~higham/narep/narep369.pdf)
func (s *SDK) PostAssetsCorrelationMatrixNearest(ctx context.Context, request operations.PostAssetsCorrelationMatrixNearestRequest) (*operations.PostAssetsCorrelationMatrixNearestResponse, error) {
	baseURL := s._serverURL
	url := strings.TrimSuffix(baseURL, "/") + "/assets/correlation/matrix/nearest"

	bodyReader, reqContentType, err := utils.SerializeRequestBody(ctx, request)
	if err != nil {
		return nil, fmt.Errorf("error serializing request body: %w", err)
	}
	if bodyReader == nil {
		return nil, fmt.Errorf("request body is required")
	}

	req, err := http.NewRequestWithContext(ctx, "POST", url, bodyReader)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	req.Header.Set("Content-Type", reqContentType)

	client := s._securityClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.PostAssetsCorrelationMatrixNearestResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *operations.PostAssetsCorrelationMatrixNearest200ApplicationJSON
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.PostAssetsCorrelationMatrixNearest200ApplicationJSONObject = out
		}
	}

	return res, nil
}

// PostAssetsCorrelationMatrixShrinkage - Correlation Matrix Shrinkage
// Compute a correlation matrix as a weighted average of an assets correlation matrix and a target correlation matrix, the target correlation matrix being either:
// * An equicorrelation matrix made of 1
// * An equicorrelation matrix made of 0
// * An equicorrelation matrix made of -1/(n-1), with n the number of assets
// * A provided correlation matrix
//
// References
// * [Steiner, Andreas, Manipulating Valid Correlation Matrices](https://papers.ssrn.com/sol3/papers.cfm?abstract_id=1878165)
func (s *SDK) PostAssetsCorrelationMatrixShrinkage(ctx context.Context, request operations.PostAssetsCorrelationMatrixShrinkageRequest) (*operations.PostAssetsCorrelationMatrixShrinkageResponse, error) {
	baseURL := s._serverURL
	url := strings.TrimSuffix(baseURL, "/") + "/assets/correlation/matrix/shrinkage"

	bodyReader, reqContentType, err := utils.SerializeRequestBody(ctx, request)
	if err != nil {
		return nil, fmt.Errorf("error serializing request body: %w", err)
	}
	if bodyReader == nil {
		return nil, fmt.Errorf("request body is required")
	}

	req, err := http.NewRequestWithContext(ctx, "POST", url, bodyReader)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	req.Header.Set("Content-Type", reqContentType)

	client := s._securityClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.PostAssetsCorrelationMatrixShrinkageResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *operations.PostAssetsCorrelationMatrixShrinkage200ApplicationJSON
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.PostAssetsCorrelationMatrixShrinkage200ApplicationJSONObject = out
		}
	}

	return res, nil
}

// PostAssetsCorrelationMatrixValidation - Correlation Matrix Validation
// Validate whether a matrix is a correlation matrix.
//
// References
// * [Wikipedia, Correlation and Dependence](https://en.wikipedia.org/wiki/Correlation_and_dependence#Correlation_matrices)
func (s *SDK) PostAssetsCorrelationMatrixValidation(ctx context.Context, request operations.PostAssetsCorrelationMatrixValidationRequest) (*operations.PostAssetsCorrelationMatrixValidationResponse, error) {
	baseURL := s._serverURL
	url := strings.TrimSuffix(baseURL, "/") + "/assets/correlation/matrix/validation"

	bodyReader, reqContentType, err := utils.SerializeRequestBody(ctx, request)
	if err != nil {
		return nil, fmt.Errorf("error serializing request body: %w", err)
	}
	if bodyReader == nil {
		return nil, fmt.Errorf("request body is required")
	}

	req, err := http.NewRequestWithContext(ctx, "POST", url, bodyReader)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	req.Header.Set("Content-Type", reqContentType)

	client := s._securityClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.PostAssetsCorrelationMatrixValidationResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *operations.PostAssetsCorrelationMatrixValidation200ApplicationJSON
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.PostAssetsCorrelationMatrixValidation200ApplicationJSONObject = out
		}
	}

	return res, nil
}

// PostAssetsCovarianceMatrix - Covariance Matrix
// Compute the covariance matrix of assets from either:
// * The assets correlation matrix and their volatilities (i.e., standard deviations)
// * The assets correlation matrix and their variances
// * The assets returns
//
// References
// * [Wikipedia, Covariance Matrix](https://en.wikipedia.org/wiki/Covariance_matrix)
func (s *SDK) PostAssetsCovarianceMatrix(ctx context.Context, request operations.PostAssetsCovarianceMatrixRequest) (*operations.PostAssetsCovarianceMatrixResponse, error) {
	baseURL := s._serverURL
	url := strings.TrimSuffix(baseURL, "/") + "/assets/covariance/matrix"

	bodyReader, reqContentType, err := utils.SerializeRequestBody(ctx, request)
	if err != nil {
		return nil, fmt.Errorf("error serializing request body: %w", err)
	}
	if bodyReader == nil {
		return nil, fmt.Errorf("request body is required")
	}

	req, err := http.NewRequestWithContext(ctx, "POST", url, bodyReader)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	req.Header.Set("Content-Type", reqContentType)

	client := s._securityClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.PostAssetsCovarianceMatrixResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *operations.PostAssetsCovarianceMatrix200ApplicationJSON
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.PostAssetsCovarianceMatrix200ApplicationJSONObject = out
		}
	}

	return res, nil
}

// PostAssetsCovarianceMatrixSample - Sample Covariance Matrix
// Compute the sample covariance matrix of assets returns.
//
// > This endpoint is similar to the endpoint [`/assets/covariance/matrix`](#post-/assets/covariance/matrix), but uses [Bessel's correction](https://en.wikipedia.org/wiki/Bessel%27s_correction) to compute the covariance matrix.
//
// References
// * [Wikipedia, Sample Mean and Covariance](https://en.wikipedia.org/wiki/Sample_mean_and_covariance)
func (s *SDK) PostAssetsCovarianceMatrixSample(ctx context.Context, request operations.PostAssetsCovarianceMatrixSampleRequest) (*operations.PostAssetsCovarianceMatrixSampleResponse, error) {
	baseURL := s._serverURL
	url := strings.TrimSuffix(baseURL, "/") + "/assets/covariance/matrix/sample"

	bodyReader, reqContentType, err := utils.SerializeRequestBody(ctx, request)
	if err != nil {
		return nil, fmt.Errorf("error serializing request body: %w", err)
	}
	if bodyReader == nil {
		return nil, fmt.Errorf("request body is required")
	}

	req, err := http.NewRequestWithContext(ctx, "POST", url, bodyReader)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	req.Header.Set("Content-Type", reqContentType)

	client := s._securityClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.PostAssetsCovarianceMatrixSampleResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *operations.PostAssetsCovarianceMatrixSample200ApplicationJSON
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.PostAssetsCovarianceMatrixSample200ApplicationJSONObject = out
		}
	}

	return res, nil
}

// PostAssetsCovarianceMatrixValidation - Covariance Matrix Validation
// Validate whether a matrix is a covariance matrix.
//
// References
// * [Wikipedia, Covariance Matrix](https://en.wikipedia.org/wiki/Covariance_matrix)
func (s *SDK) PostAssetsCovarianceMatrixValidation(ctx context.Context, request operations.PostAssetsCovarianceMatrixValidationRequest) (*operations.PostAssetsCovarianceMatrixValidationResponse, error) {
	baseURL := s._serverURL
	url := strings.TrimSuffix(baseURL, "/") + "/assets/covariance/matrix/validation"

	bodyReader, reqContentType, err := utils.SerializeRequestBody(ctx, request)
	if err != nil {
		return nil, fmt.Errorf("error serializing request body: %w", err)
	}
	if bodyReader == nil {
		return nil, fmt.Errorf("request body is required")
	}

	req, err := http.NewRequestWithContext(ctx, "POST", url, bodyReader)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	req.Header.Set("Content-Type", reqContentType)

	client := s._securityClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.PostAssetsCovarianceMatrixValidationResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *operations.PostAssetsCovarianceMatrixValidation200ApplicationJSON
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.PostAssetsCovarianceMatrixValidation200ApplicationJSONObject = out
		}
	}

	return res, nil
}

// PostAssetsReturns - Arithmetic Returns
// Compute the arithmetic return(s) of one or several asset(s) for one or several time period(s).
//
// References
// * [Wikipedia, Rate of Return](https://en.wikipedia.org/wiki/Rate_of_return#Return)
func (s *SDK) PostAssetsReturns(ctx context.Context, request operations.PostAssetsReturnsRequest) (*operations.PostAssetsReturnsResponse, error) {
	baseURL := s._serverURL
	url := strings.TrimSuffix(baseURL, "/") + "/assets/returns"

	bodyReader, reqContentType, err := utils.SerializeRequestBody(ctx, request)
	if err != nil {
		return nil, fmt.Errorf("error serializing request body: %w", err)
	}
	if bodyReader == nil {
		return nil, fmt.Errorf("request body is required")
	}

	req, err := http.NewRequestWithContext(ctx, "POST", url, bodyReader)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	req.Header.Set("Content-Type", reqContentType)

	client := s._securityClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.PostAssetsReturnsResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *operations.PostAssetsReturns200ApplicationJSON
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.PostAssetsReturns200ApplicationJSONObject = out
		}
	}

	return res, nil
}

// PostAssetsReturnsAverage - Arithmetic Average Return
// Compute the arithmetic average of the return(s) of one or several asset(s).
//
// References
// * [Wikipedia, Arithmetic Average Rate of Return](https://en.wikipedia.org/wiki/Rate_of_return#Arithmetic_average_rate_of_return)
func (s *SDK) PostAssetsReturnsAverage(ctx context.Context, request operations.PostAssetsReturnsAverageRequest) (*operations.PostAssetsReturnsAverageResponse, error) {
	baseURL := s._serverURL
	url := strings.TrimSuffix(baseURL, "/") + "/assets/returns/average"

	bodyReader, reqContentType, err := utils.SerializeRequestBody(ctx, request)
	if err != nil {
		return nil, fmt.Errorf("error serializing request body: %w", err)
	}
	if bodyReader == nil {
		return nil, fmt.Errorf("request body is required")
	}

	req, err := http.NewRequestWithContext(ctx, "POST", url, bodyReader)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	req.Header.Set("Content-Type", reqContentType)

	client := s._securityClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.PostAssetsReturnsAverageResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *operations.PostAssetsReturnsAverage200ApplicationJSON
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.PostAssetsReturnsAverage200ApplicationJSONObject = out
		}
	}

	return res, nil
}

// PostAssetsVariance - Variance
// Compute the variance of one or several asset(s) from either:
// * The asset(s) returns
// * The assets covariance matrix
// * The asset(s) volatility
//
// References
// * [Wikipedia, Variance](https://en.wikipedia.org/wiki/Variance)
func (s *SDK) PostAssetsVariance(ctx context.Context, request operations.PostAssetsVarianceRequest) (*operations.PostAssetsVarianceResponse, error) {
	baseURL := s._serverURL
	url := strings.TrimSuffix(baseURL, "/") + "/assets/variance"

	bodyReader, reqContentType, err := utils.SerializeRequestBody(ctx, request)
	if err != nil {
		return nil, fmt.Errorf("error serializing request body: %w", err)
	}
	if bodyReader == nil {
		return nil, fmt.Errorf("request body is required")
	}

	req, err := http.NewRequestWithContext(ctx, "POST", url, bodyReader)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	req.Header.Set("Content-Type", reqContentType)

	client := s._securityClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.PostAssetsVarianceResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *operations.PostAssetsVariance200ApplicationJSON
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.PostAssetsVariance200ApplicationJSONObject = out
		}
	}

	return res, nil
}

// PostAssetsVarianceSample - Sample variance
// Compute the sample variance of one or several asset(s) from the asset(s) returns.
//
// > This endpoint is similar to the endpoint [`/assets/variance`](#post-/assets/variance), but uses [Bessel's correction](https://en.wikipedia.org/wiki/Bessel%27s_correction) to compute the variance.
//
// References
// * [Wikipedia, Variance](https://en.wikipedia.org/wiki/Variance)
func (s *SDK) PostAssetsVarianceSample(ctx context.Context, request operations.PostAssetsVarianceSampleRequest) (*operations.PostAssetsVarianceSampleResponse, error) {
	baseURL := s._serverURL
	url := strings.TrimSuffix(baseURL, "/") + "/assets/variance/sample"

	bodyReader, reqContentType, err := utils.SerializeRequestBody(ctx, request)
	if err != nil {
		return nil, fmt.Errorf("error serializing request body: %w", err)
	}
	if bodyReader == nil {
		return nil, fmt.Errorf("request body is required")
	}

	req, err := http.NewRequestWithContext(ctx, "POST", url, bodyReader)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	req.Header.Set("Content-Type", reqContentType)

	client := s._securityClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.PostAssetsVarianceSampleResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *operations.PostAssetsVarianceSample200ApplicationJSON
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.PostAssetsVarianceSample200ApplicationJSONObject = out
		}
	}

	return res, nil
}

// PostAssetsVolatility - Volatility
// Compute the volatility (i.e., standard deviation) of one or several asset(s) from either:
// * The asset(s) returns
// * The assets covariance matrix
// * The asset(s) variance
//
// References
// * [Wikipedia, Standard Deviation](https://en.wikipedia.org/wiki/Standard_deviation)
func (s *SDK) PostAssetsVolatility(ctx context.Context, request operations.PostAssetsVolatilityRequest) (*operations.PostAssetsVolatilityResponse, error) {
	baseURL := s._serverURL
	url := strings.TrimSuffix(baseURL, "/") + "/assets/volatility"

	bodyReader, reqContentType, err := utils.SerializeRequestBody(ctx, request)
	if err != nil {
		return nil, fmt.Errorf("error serializing request body: %w", err)
	}
	if bodyReader == nil {
		return nil, fmt.Errorf("request body is required")
	}

	req, err := http.NewRequestWithContext(ctx, "POST", url, bodyReader)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	req.Header.Set("Content-Type", reqContentType)

	client := s._securityClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.PostAssetsVolatilityResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *operations.PostAssetsVolatility200ApplicationJSON
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.PostAssetsVolatility200ApplicationJSONObject = out
		}
	}

	return res, nil
}

// PostAssetsVolatilitySample - Sample volatility
// Compute the sample volatility (i.e., sample standard deviation) of one or several asset(s) from the asset(s) returns.
//
// > This endpoint is similar to the endpoint [`/assets/volatility`](#post-/assets/volatility), but uses [Bessel's correction](https://en.wikipedia.org/wiki/Bessel%27s_correction) to compute the volatility.
//
// References
// * [Wikipedia, Standard Deviation](https://en.wikipedia.org/wiki/Standard_deviation)
func (s *SDK) PostAssetsVolatilitySample(ctx context.Context, request operations.PostAssetsVolatilitySampleRequest) (*operations.PostAssetsVolatilitySampleResponse, error) {
	baseURL := s._serverURL
	url := strings.TrimSuffix(baseURL, "/") + "/assets/volatility/sample"

	bodyReader, reqContentType, err := utils.SerializeRequestBody(ctx, request)
	if err != nil {
		return nil, fmt.Errorf("error serializing request body: %w", err)
	}
	if bodyReader == nil {
		return nil, fmt.Errorf("request body is required")
	}

	req, err := http.NewRequestWithContext(ctx, "POST", url, bodyReader)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	req.Header.Set("Content-Type", reqContentType)

	client := s._securityClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.PostAssetsVolatilitySampleResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *operations.PostAssetsVolatilitySample200ApplicationJSON
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.PostAssetsVolatilitySample200ApplicationJSONObject = out
		}
	}

	return res, nil
}

// PostFactorsResidualization - Residualization
// Compute the residuals of a factor against a set of factors, using a returns-based linear regression analysis.
//
// References
// * [Factor Research, Factor Exposure Analysis: Exploring Residualization](https://insights.factorresearch.com/research-factor-exposure-analysis-exploring-residualization/)
// * [Catalina B. Garcia, Román Salmeron, Claudia Garcia & Jose Garcia (2019): Residualization: justification, properties and application, Journal of Applied Statistics](https://doi.org/10.1080/02664763.2019.1701638)
func (s *SDK) PostFactorsResidualization(ctx context.Context, request operations.PostFactorsResidualizationRequest) (*operations.PostFactorsResidualizationResponse, error) {
	baseURL := s._serverURL
	url := strings.TrimSuffix(baseURL, "/") + "/factors/residualization"

	bodyReader, reqContentType, err := utils.SerializeRequestBody(ctx, request)
	if err != nil {
		return nil, fmt.Errorf("error serializing request body: %w", err)
	}
	if bodyReader == nil {
		return nil, fmt.Errorf("request body is required")
	}

	req, err := http.NewRequestWithContext(ctx, "POST", url, bodyReader)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	req.Header.Set("Content-Type", reqContentType)

	client := s._securityClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.PostFactorsResidualizationResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *operations.PostFactorsResidualization200ApplicationJSON
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.PostFactorsResidualization200ApplicationJSONObject = out
		}
	}

	return res, nil
}

// PostPortfolioAnalysisAlpha - Alpha
// Compute the Jensen’s alpha of one or several portfolio(s) in the Capital Asset Pricing Model (CAPM).
//
// References
// * Carl R. Bacon, Practical Portfolio Performance Measurement and Attribution
func (s *SDK) PostPortfolioAnalysisAlpha(ctx context.Context, request operations.PostPortfolioAnalysisAlphaRequest) (*operations.PostPortfolioAnalysisAlphaResponse, error) {
	baseURL := s._serverURL
	url := strings.TrimSuffix(baseURL, "/") + "/portfolio/analysis/alpha"

	bodyReader, reqContentType, err := utils.SerializeRequestBody(ctx, request)
	if err != nil {
		return nil, fmt.Errorf("error serializing request body: %w", err)
	}
	if bodyReader == nil {
		return nil, fmt.Errorf("request body is required")
	}

	req, err := http.NewRequestWithContext(ctx, "POST", url, bodyReader)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	req.Header.Set("Content-Type", reqContentType)

	client := s._securityClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.PostPortfolioAnalysisAlphaResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *operations.PostPortfolioAnalysisAlpha200ApplicationJSON
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.PostPortfolioAnalysisAlpha200ApplicationJSONObject = out
		}
	}

	return res, nil
}

// PostPortfolioAnalysisBeta - Beta
// Compute the beta of one or several portfolio(s) in the Capital Asset Pricing Model (CAPM)..
//
// References
// * Carl R. Bacon, Practical Portfolio Performance Measurement and Attribution
func (s *SDK) PostPortfolioAnalysisBeta(ctx context.Context, request operations.PostPortfolioAnalysisBetaRequest) (*operations.PostPortfolioAnalysisBetaResponse, error) {
	baseURL := s._serverURL
	url := strings.TrimSuffix(baseURL, "/") + "/portfolio/analysis/beta"

	bodyReader, reqContentType, err := utils.SerializeRequestBody(ctx, request)
	if err != nil {
		return nil, fmt.Errorf("error serializing request body: %w", err)
	}
	if bodyReader == nil {
		return nil, fmt.Errorf("request body is required")
	}

	req, err := http.NewRequestWithContext(ctx, "POST", url, bodyReader)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	req.Header.Set("Content-Type", reqContentType)

	client := s._securityClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.PostPortfolioAnalysisBetaResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *operations.PostPortfolioAnalysisBeta200ApplicationJSON
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.PostPortfolioAnalysisBeta200ApplicationJSONObject = out
		}
	}

	return res, nil
}

// PostPortfolioAnalysisContributionsReturn - Return Contributions
// Perform a return contribution analysis of one or several portfolio(s), optionally using groups of assets.
//
// References
// * Carl R. Bacon, Practical Portfolio Performance Measurement and Attribution
func (s *SDK) PostPortfolioAnalysisContributionsReturn(ctx context.Context, request operations.PostPortfolioAnalysisContributionsReturnRequest) (*operations.PostPortfolioAnalysisContributionsReturnResponse, error) {
	baseURL := s._serverURL
	url := strings.TrimSuffix(baseURL, "/") + "/portfolio/analysis/contributions/return"

	bodyReader, reqContentType, err := utils.SerializeRequestBody(ctx, request)
	if err != nil {
		return nil, fmt.Errorf("error serializing request body: %w", err)
	}
	if bodyReader == nil {
		return nil, fmt.Errorf("request body is required")
	}

	req, err := http.NewRequestWithContext(ctx, "POST", url, bodyReader)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	req.Header.Set("Content-Type", reqContentType)

	client := s._securityClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.PostPortfolioAnalysisContributionsReturnResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *operations.PostPortfolioAnalysisContributionsReturn200ApplicationJSON
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.PostPortfolioAnalysisContributionsReturn200ApplicationJSONObject = out
		}
	}

	return res, nil
}

// PostPortfolioAnalysisContributionsRisk - Risk Contributions
// Perform a risk contribution analysis of one or several portfolio(s), optionally using groups of assets.
//
// References
// * Carl R. Bacon, Practical Portfolio Performance Measurement and Attribution
func (s *SDK) PostPortfolioAnalysisContributionsRisk(ctx context.Context, request operations.PostPortfolioAnalysisContributionsRiskRequest) (*operations.PostPortfolioAnalysisContributionsRiskResponse, error) {
	baseURL := s._serverURL
	url := strings.TrimSuffix(baseURL, "/") + "/portfolio/analysis/contributions/risk"

	bodyReader, reqContentType, err := utils.SerializeRequestBody(ctx, request)
	if err != nil {
		return nil, fmt.Errorf("error serializing request body: %w", err)
	}
	if bodyReader == nil {
		return nil, fmt.Errorf("request body is required")
	}

	req, err := http.NewRequestWithContext(ctx, "POST", url, bodyReader)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	req.Header.Set("Content-Type", reqContentType)

	client := s._securityClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.PostPortfolioAnalysisContributionsRiskResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *operations.PostPortfolioAnalysisContributionsRisk200ApplicationJSON
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.PostPortfolioAnalysisContributionsRisk200ApplicationJSONObject = out
		}
	}

	return res, nil
}

// PostPortfolioAnalysisDiversificationRatio - Diversification Ratio
// Compute the diversification ratio of one or several portfolio(s).
//
// References
// * [Yves Choueifaty and Yves Coignard, Toward Maximum Diversification, The Journal of Portfolio Management Fall 2008, 35 (1) 40-51](https://doi.org/10.3905/JPM.2008.35.1.40)
func (s *SDK) PostPortfolioAnalysisDiversificationRatio(ctx context.Context, request operations.PostPortfolioAnalysisDiversificationRatioRequest) (*operations.PostPortfolioAnalysisDiversificationRatioResponse, error) {
	baseURL := s._serverURL
	url := strings.TrimSuffix(baseURL, "/") + "/portfolio/analysis/diversification-ratio"

	bodyReader, reqContentType, err := utils.SerializeRequestBody(ctx, request)
	if err != nil {
		return nil, fmt.Errorf("error serializing request body: %w", err)
	}
	if bodyReader == nil {
		return nil, fmt.Errorf("request body is required")
	}

	req, err := http.NewRequestWithContext(ctx, "POST", url, bodyReader)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	req.Header.Set("Content-Type", reqContentType)

	client := s._securityClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.PostPortfolioAnalysisDiversificationRatioResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *operations.PostPortfolioAnalysisDiversificationRatio200ApplicationJSON
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.PostPortfolioAnalysisDiversificationRatio200ApplicationJSONObject = out
		}
	}

	return res, nil
}

// PostPortfolioAnalysisDrawdowns - Drawdowns
// Compute the drawdown function - also called the underwater equity curve -, as well as the worst 10 drawdowns of one or several portfolio(s).
//
// References
// * [Wikipedia, Drawdown](https://en.wikipedia.org/wiki/Drawdown_(economics))
func (s *SDK) PostPortfolioAnalysisDrawdowns(ctx context.Context, request operations.PostPortfolioAnalysisDrawdownsRequest) (*operations.PostPortfolioAnalysisDrawdownsResponse, error) {
	baseURL := s._serverURL
	url := strings.TrimSuffix(baseURL, "/") + "/portfolio/analysis/drawdowns"

	bodyReader, reqContentType, err := utils.SerializeRequestBody(ctx, request)
	if err != nil {
		return nil, fmt.Errorf("error serializing request body: %w", err)
	}
	if bodyReader == nil {
		return nil, fmt.Errorf("request body is required")
	}

	req, err := http.NewRequestWithContext(ctx, "POST", url, bodyReader)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	req.Header.Set("Content-Type", reqContentType)

	client := s._securityClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.PostPortfolioAnalysisDrawdownsResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *operations.PostPortfolioAnalysisDrawdowns200ApplicationJSON
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.PostPortfolioAnalysisDrawdowns200ApplicationJSONObject = out
		}
	}

	return res, nil
}

// PostPortfolioAnalysisFactorExposures - Factor Exposures
// Compute the exposures of one or several portfolio(s) to a set of factors, using a returns-based linear regression analysis.
//
// References
// * [Measuring Factor Exposures: Uses and Abuses, Ronen Israel and Adrienne Ross, The Journal of Alternative Investments Summer 2017, 20 (1) 10-25](https://jai.pm-research.com/content/20/1/10.short)
func (s *SDK) PostPortfolioAnalysisFactorExposures(ctx context.Context, request operations.PostPortfolioAnalysisFactorExposuresRequest) (*operations.PostPortfolioAnalysisFactorExposuresResponse, error) {
	baseURL := s._serverURL
	url := strings.TrimSuffix(baseURL, "/") + "/portfolio/analysis/factor/exposures"

	bodyReader, reqContentType, err := utils.SerializeRequestBody(ctx, request)
	if err != nil {
		return nil, fmt.Errorf("error serializing request body: %w", err)
	}
	if bodyReader == nil {
		return nil, fmt.Errorf("request body is required")
	}

	req, err := http.NewRequestWithContext(ctx, "POST", url, bodyReader)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	req.Header.Set("Content-Type", reqContentType)

	client := s._securityClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.PostPortfolioAnalysisFactorExposuresResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *operations.PostPortfolioAnalysisFactorExposures200ApplicationJSON
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.PostPortfolioAnalysisFactorExposures200ApplicationJSONObject = out
		}
	}

	return res, nil
}

// PostPortfolioAnalysisMeanVarianceEfficientFrontier - Mean-Variance Efficient Frontier
// Compute the discretized mean-variance efficient frontier associated to a list of assets, optionally subject to:
// * Minimum and maximum weights constraints
// * Maximum group weights constraints
// * Minimum and maximum portfolio exposure constraint
//
// References
//   - Harry M. Markowitz, Portfolio Selection, Efficient Diversification of Investments, Second edition, Blackwell Publishers Inc.
func (s *SDK) PostPortfolioAnalysisMeanVarianceEfficientFrontier(ctx context.Context, request operations.PostPortfolioAnalysisMeanVarianceEfficientFrontierRequest) (*operations.PostPortfolioAnalysisMeanVarianceEfficientFrontierResponse, error) {
	baseURL := s._serverURL
	url := strings.TrimSuffix(baseURL, "/") + "/portfolio/analysis/mean-variance/efficient-frontier"

	bodyReader, reqContentType, err := utils.SerializeRequestBody(ctx, request)
	if err != nil {
		return nil, fmt.Errorf("error serializing request body: %w", err)
	}
	if bodyReader == nil {
		return nil, fmt.Errorf("request body is required")
	}

	req, err := http.NewRequestWithContext(ctx, "POST", url, bodyReader)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	req.Header.Set("Content-Type", reqContentType)

	client := s._securityClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.PostPortfolioAnalysisMeanVarianceEfficientFrontierResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *operations.PostPortfolioAnalysisMeanVarianceEfficientFrontier200ApplicationJSON
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.PostPortfolioAnalysisMeanVarianceEfficientFrontier200ApplicationJSONObject = out
		}
	}

	return res, nil
}

// PostPortfolioAnalysisMeanVarianceMinimumVarianceFrontier - Mean-Variance Minimum Variance Frontier
// Compute the discretized mean-variance minimum variance frontier associated to a list of assets, optionally subject to:
// * Minimum and maximum weights constraints
// * Maximum group weights constraints
// * Minimum and maximum portfolio exposure constraint
//
// > This endpoint is similar to the endpoint [`/portfolio/analysis/mean-variance/efficient-frontier`](#post-/portfolio/analysis/mean-variance/efficient-frontier), because the mean-variance efficient frontier is the "top" portion of the mean-variance minimum variance frontier.
//
// References
//   - Harry M. Markowitz, Portfolio Selection, Efficient Diversification of Investments, Second edition, Blackwell Publishers Inc.
func (s *SDK) PostPortfolioAnalysisMeanVarianceMinimumVarianceFrontier(ctx context.Context, request operations.PostPortfolioAnalysisMeanVarianceMinimumVarianceFrontierRequest) (*operations.PostPortfolioAnalysisMeanVarianceMinimumVarianceFrontierResponse, error) {
	baseURL := s._serverURL
	url := strings.TrimSuffix(baseURL, "/") + "/portfolio/analysis/mean-variance/minimum-variance-frontier"

	bodyReader, reqContentType, err := utils.SerializeRequestBody(ctx, request)
	if err != nil {
		return nil, fmt.Errorf("error serializing request body: %w", err)
	}
	if bodyReader == nil {
		return nil, fmt.Errorf("request body is required")
	}

	req, err := http.NewRequestWithContext(ctx, "POST", url, bodyReader)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	req.Header.Set("Content-Type", reqContentType)

	client := s._securityClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.PostPortfolioAnalysisMeanVarianceMinimumVarianceFrontierResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *operations.PostPortfolioAnalysisMeanVarianceMinimumVarianceFrontier200ApplicationJSON
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.PostPortfolioAnalysisMeanVarianceMinimumVarianceFrontier200ApplicationJSONObject = out
		}
	}

	return res, nil
}

// PostPortfolioAnalysisReturn - Arithmetic Return
// Compute the arithmetic return of one or several portfolio(s) from either:
// * Portfolio assets arithmetic returns
// * Portfolio values
//
// References
// * [Wikipedia, Rate of Return](https://en.wikipedia.org/wiki/Rate_of_return#Return)
// * Harry M. Markowitz, Portfolio Selection, Efficient Diversification of Investments, Second edition, Blackwell Publishers Inc.
func (s *SDK) PostPortfolioAnalysisReturn(ctx context.Context, request operations.PostPortfolioAnalysisReturnRequest) (*operations.PostPortfolioAnalysisReturnResponse, error) {
	baseURL := s._serverURL
	url := strings.TrimSuffix(baseURL, "/") + "/portfolio/analysis/return"

	bodyReader, reqContentType, err := utils.SerializeRequestBody(ctx, request)
	if err != nil {
		return nil, fmt.Errorf("error serializing request body: %w", err)
	}
	if bodyReader == nil {
		return nil, fmt.Errorf("request body is required")
	}

	req, err := http.NewRequestWithContext(ctx, "POST", url, bodyReader)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	req.Header.Set("Content-Type", reqContentType)

	client := s._securityClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.PostPortfolioAnalysisReturnResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *operations.PostPortfolioAnalysisReturn200ApplicationJSON
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.PostPortfolioAnalysisReturn200ApplicationJSONObject = out
		}
	}

	return res, nil
}

// PostPortfolioAnalysisReturnsAverage - Arithmetic Average Return
// Compute the arithmetic average of the arithmetic return(s) of one or several portfolio(s).
//
// References
// * [Wikipedia, Arithmetic Average Rate of Return](https://en.wikipedia.org/wiki/Rate_of_return#Arithmetic_average_rate_of_return)
func (s *SDK) PostPortfolioAnalysisReturnsAverage(ctx context.Context, request operations.PostPortfolioAnalysisReturnsAverageRequest) (*operations.PostPortfolioAnalysisReturnsAverageResponse, error) {
	baseURL := s._serverURL
	url := strings.TrimSuffix(baseURL, "/") + "/portfolio/analysis/returns/average"

	bodyReader, reqContentType, err := utils.SerializeRequestBody(ctx, request)
	if err != nil {
		return nil, fmt.Errorf("error serializing request body: %w", err)
	}
	if bodyReader == nil {
		return nil, fmt.Errorf("request body is required")
	}

	req, err := http.NewRequestWithContext(ctx, "POST", url, bodyReader)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	req.Header.Set("Content-Type", reqContentType)

	client := s._securityClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.PostPortfolioAnalysisReturnsAverageResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *operations.PostPortfolioAnalysisReturnsAverage200ApplicationJSON
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.PostPortfolioAnalysisReturnsAverage200ApplicationJSONObject = out
		}
	}

	return res, nil
}

// PostPortfolioAnalysisSharpeRatio - Sharpe Ratio
// Compute the Sharpe ratio of one or several portfolio(s) from either:
// * Portfolio assets arithmetic returns and assets covariance matrix
// * Portfolio values
//
// References
// * Carl R. Bacon, Practical Portfolio Performance Measurement and Attribution
// * Harry M. Markowitz, Portfolio Selection, Efficient Diversification of Investments, Second edition, Blackwell Publishers Inc.
func (s *SDK) PostPortfolioAnalysisSharpeRatio(ctx context.Context, request operations.PostPortfolioAnalysisSharpeRatioRequest) (*operations.PostPortfolioAnalysisSharpeRatioResponse, error) {
	baseURL := s._serverURL
	url := strings.TrimSuffix(baseURL, "/") + "/portfolio/analysis/sharpe-ratio"

	bodyReader, reqContentType, err := utils.SerializeRequestBody(ctx, request)
	if err != nil {
		return nil, fmt.Errorf("error serializing request body: %w", err)
	}
	if bodyReader == nil {
		return nil, fmt.Errorf("request body is required")
	}

	req, err := http.NewRequestWithContext(ctx, "POST", url, bodyReader)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	req.Header.Set("Content-Type", reqContentType)

	client := s._securityClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.PostPortfolioAnalysisSharpeRatioResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *operations.PostPortfolioAnalysisSharpeRatio200ApplicationJSON
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.PostPortfolioAnalysisSharpeRatio200ApplicationJSONObject = out
		}
	}

	return res, nil
}

// PostPortfolioAnalysisTrackingError - Tracking Error
// Compute the tracking error between a benchmark and one or several portfolio(s).
//
// References
// * [Wikipedia, Tracking error](https://en.wikipedia.org/wiki/Tracking_error)
// * Carl R. Bacon, Practical Portfolio Performance Measurement and Attribution
func (s *SDK) PostPortfolioAnalysisTrackingError(ctx context.Context, request operations.PostPortfolioAnalysisTrackingErrorRequest) (*operations.PostPortfolioAnalysisTrackingErrorResponse, error) {
	baseURL := s._serverURL
	url := strings.TrimSuffix(baseURL, "/") + "/portfolio/analysis/tracking-error"

	bodyReader, reqContentType, err := utils.SerializeRequestBody(ctx, request)
	if err != nil {
		return nil, fmt.Errorf("error serializing request body: %w", err)
	}
	if bodyReader == nil {
		return nil, fmt.Errorf("request body is required")
	}

	req, err := http.NewRequestWithContext(ctx, "POST", url, bodyReader)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	req.Header.Set("Content-Type", reqContentType)

	client := s._securityClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.PostPortfolioAnalysisTrackingErrorResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *operations.PostPortfolioAnalysisTrackingError200ApplicationJSON
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.PostPortfolioAnalysisTrackingError200ApplicationJSONObject = out
		}
	}

	return res, nil
}

// PostPortfolioAnalysisVolatility - Volatility
// Compute the volatility (i.e., standard deviation) of one or several portfolio(s) from either:
// * Portfolio assets covariance matrix
// * Portfolio values
//
// References
// * [Wikipedia, Standard Deviation](https://en.wikipedia.org/wiki/Standard_deviation#Finance)
// * Carl R. Bacon, Practical Portfolio Performance Measurement and Attribution
// * Harry M. Markowitz, Portfolio Selection, Efficient Diversification of Investments, Second edition, Blackwell Publishers Inc.
func (s *SDK) PostPortfolioAnalysisVolatility(ctx context.Context, request operations.PostPortfolioAnalysisVolatilityRequest) (*operations.PostPortfolioAnalysisVolatilityResponse, error) {
	baseURL := s._serverURL
	url := strings.TrimSuffix(baseURL, "/") + "/portfolio/analysis/volatility"

	bodyReader, reqContentType, err := utils.SerializeRequestBody(ctx, request)
	if err != nil {
		return nil, fmt.Errorf("error serializing request body: %w", err)
	}
	if bodyReader == nil {
		return nil, fmt.Errorf("request body is required")
	}

	req, err := http.NewRequestWithContext(ctx, "POST", url, bodyReader)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	req.Header.Set("Content-Type", reqContentType)

	client := s._securityClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.PostPortfolioAnalysisVolatilityResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *operations.PostPortfolioAnalysisVolatility200ApplicationJSON
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.PostPortfolioAnalysisVolatility200ApplicationJSONObject = out
		}
	}

	return res, nil
}

// PostPortfolioConstructionInvestable - Investable Portfolio
// Compute an investable portfolio as close as possible, in terms of assets weights, to a desired portfolio, taking into account:
// * The desired assets weights
// * The desired assets groups weights
// * The desired maximum assets groups weights
// * The prices of the assets
// * The portfolio value
// * The requirement to purchase some assets by round lots or by odd lots
// * The possibility to purchase some assets by a fractional quantity of shares
// * The requirement to purchase a minimum number of shares, or a minimum monetary value, for some assets
//
// References
// * [Steiner, Andreas, Accuracy and Rounding in Portfolio Construction](https://papers.ssrn.com/sol3/papers.cfm?abstract_id=2261131)
func (s *SDK) PostPortfolioConstructionInvestable(ctx context.Context, request operations.PostPortfolioConstructionInvestableRequest) (*operations.PostPortfolioConstructionInvestableResponse, error) {
	baseURL := s._serverURL
	url := strings.TrimSuffix(baseURL, "/") + "/portfolio/construction/investable"

	bodyReader, reqContentType, err := utils.SerializeRequestBody(ctx, request)
	if err != nil {
		return nil, fmt.Errorf("error serializing request body: %w", err)
	}
	if bodyReader == nil {
		return nil, fmt.Errorf("request body is required")
	}

	req, err := http.NewRequestWithContext(ctx, "POST", url, bodyReader)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	req.Header.Set("Content-Type", reqContentType)

	client := s._securityClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.PostPortfolioConstructionInvestableResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *operations.PostPortfolioConstructionInvestable200ApplicationJSON
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.PostPortfolioConstructionInvestable200ApplicationJSONObject = out
		}
	}

	return res, nil
}

// PostPortfolioConstructionMimicking - Mimicking Portfolio
// Construct a portfolio as close as possible, in terms of returns, to a benchmark, optionally subject to:
// * Minimum and maximum weights constraints
// * Maximum group weights constraints
// * Minimum and maximum portfolio exposure constraints
//
// References
// * Konstantinos Benidis, Yiyong Feng, Daniel P. Palomar, Optimization Methods for Financial Index Tracking: From Theory to Practice, now publishers Inc (7 juin 2018)
func (s *SDK) PostPortfolioConstructionMimicking(ctx context.Context, request operations.PostPortfolioConstructionMimickingRequest) (*operations.PostPortfolioConstructionMimickingResponse, error) {
	baseURL := s._serverURL
	url := strings.TrimSuffix(baseURL, "/") + "/portfolio/construction/mimicking"

	bodyReader, reqContentType, err := utils.SerializeRequestBody(ctx, request)
	if err != nil {
		return nil, fmt.Errorf("error serializing request body: %w", err)
	}
	if bodyReader == nil {
		return nil, fmt.Errorf("request body is required")
	}

	req, err := http.NewRequestWithContext(ctx, "POST", url, bodyReader)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	req.Header.Set("Content-Type", reqContentType)

	client := s._securityClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.PostPortfolioConstructionMimickingResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *operations.PostPortfolioConstructionMimicking200ApplicationJSON
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.PostPortfolioConstructionMimicking200ApplicationJSONObject = out
		}
	}

	return res, nil
}

// PostPortfolioConstructionRandom - Random Portfolio
// Construct one or several random portfolio(s), optionally subject to:
// * Minimum and maximum weights constraints
// * Minimum and maximum portfolio exposure constraints
//
// > Because of the nature of the endpoint, subsequent calls with the same input data will result in different output data.
//
// References
// * [William Thornton Shaw, Monte Carlo Portfolio Optimization for General Investor Risk-Return Objectives and Arbitrary Return Distributions: A Solution for Long-Only Portfolios](https://papers.ssrn.com/sol3/papers.cfm?abstract_id=1680224)
func (s *SDK) PostPortfolioConstructionRandom(ctx context.Context, request operations.PostPortfolioConstructionRandomRequest) (*operations.PostPortfolioConstructionRandomResponse, error) {
	baseURL := s._serverURL
	url := strings.TrimSuffix(baseURL, "/") + "/portfolio/construction/random"

	bodyReader, reqContentType, err := utils.SerializeRequestBody(ctx, request)
	if err != nil {
		return nil, fmt.Errorf("error serializing request body: %w", err)
	}
	if bodyReader == nil {
		return nil, fmt.Errorf("request body is required")
	}

	req, err := http.NewRequestWithContext(ctx, "POST", url, bodyReader)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	req.Header.Set("Content-Type", reqContentType)

	client := s._securityClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.PostPortfolioConstructionRandomResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *operations.PostPortfolioConstructionRandom200ApplicationJSON
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.PostPortfolioConstructionRandom200ApplicationJSONObject = out
		}
	}

	return res, nil
}

// PostPortfolioOptimizationEqualRiskContributions - Equal Risk Contributions Portfolio
// Compute the assets weights of the equal risk contributions portfolio, optionally subject to:
// * Minimum and maximum weights constraints
//
// References
//   - [Richard, Jean-Charles and Roncalli, Thierry, Constrained Risk Budgeting Portfolios: Theory, Algorithms, Applications & Puzzles](https://papers.ssrn.com/sol3/papers.cfm?abstract_id=3331184)
func (s *SDK) PostPortfolioOptimizationEqualRiskContributions(ctx context.Context, request operations.PostPortfolioOptimizationEqualRiskContributionsRequest) (*operations.PostPortfolioOptimizationEqualRiskContributionsResponse, error) {
	baseURL := s._serverURL
	url := strings.TrimSuffix(baseURL, "/") + "/portfolio/optimization/equal-risk-contributions"

	bodyReader, reqContentType, err := utils.SerializeRequestBody(ctx, request)
	if err != nil {
		return nil, fmt.Errorf("error serializing request body: %w", err)
	}
	if bodyReader == nil {
		return nil, fmt.Errorf("request body is required")
	}

	req, err := http.NewRequestWithContext(ctx, "POST", url, bodyReader)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	req.Header.Set("Content-Type", reqContentType)

	client := s._securityClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.PostPortfolioOptimizationEqualRiskContributionsResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *operations.PostPortfolioOptimizationEqualRiskContributions200ApplicationJSON
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.PostPortfolioOptimizationEqualRiskContributions200ApplicationJSONObject = out
		}
	}

	return res, nil
}

// PostPortfolioOptimizationEqualSharpeRatioContributions - Equal Sharpe Ratio Contributions Portfolio
// Compute the assets weights of the equal Sharpe Ratio contributions portfolio.
//
// References
//   - [Andreas Steiner, Sharpe Ratio Contribution and Attribution Analysis](https://papers.ssrn.com/sol3/papers.cfm?abstract_id=1839166")
func (s *SDK) PostPortfolioOptimizationEqualSharpeRatioContributions(ctx context.Context, request operations.PostPortfolioOptimizationEqualSharpeRatioContributionsRequest) (*operations.PostPortfolioOptimizationEqualSharpeRatioContributionsResponse, error) {
	baseURL := s._serverURL
	url := strings.TrimSuffix(baseURL, "/") + "/portfolio/optimization/equal-sharpe-ratio-contributions"

	bodyReader, reqContentType, err := utils.SerializeRequestBody(ctx, request)
	if err != nil {
		return nil, fmt.Errorf("error serializing request body: %w", err)
	}
	if bodyReader == nil {
		return nil, fmt.Errorf("request body is required")
	}

	req, err := http.NewRequestWithContext(ctx, "POST", url, bodyReader)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	req.Header.Set("Content-Type", reqContentType)

	client := s._securityClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.PostPortfolioOptimizationEqualSharpeRatioContributionsResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *operations.PostPortfolioOptimizationEqualSharpeRatioContributions200ApplicationJSON
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.PostPortfolioOptimizationEqualSharpeRatioContributions200ApplicationJSONObject = out
		}
	}

	return res, nil
}

// PostPortfolioOptimizationEqualWeighted - Equal Weighted Portfolio
// Compute the assets weights of the equal-weighted portfolio.
//
// References
//   - [Victor DeMiguel and al., Optimal Versus Naive Diversification: How Inefficient is the 1/N Portfolio Strategy?](https://academic.oup.com/rfs/article-abstract/22/5/1915/1592901?redirectedFrom=fulltext)
func (s *SDK) PostPortfolioOptimizationEqualWeighted(ctx context.Context, request operations.PostPortfolioOptimizationEqualWeightedRequest) (*operations.PostPortfolioOptimizationEqualWeightedResponse, error) {
	baseURL := s._serverURL
	url := strings.TrimSuffix(baseURL, "/") + "/portfolio/optimization/equal-weighted"

	bodyReader, reqContentType, err := utils.SerializeRequestBody(ctx, request)
	if err != nil {
		return nil, fmt.Errorf("error serializing request body: %w", err)
	}
	if bodyReader == nil {
		return nil, fmt.Errorf("request body is required")
	}

	req, err := http.NewRequestWithContext(ctx, "POST", url, bodyReader)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	req.Header.Set("Content-Type", reqContentType)

	client := s._securityClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.PostPortfolioOptimizationEqualWeightedResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *operations.PostPortfolioOptimizationEqualWeighted200ApplicationJSON
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.PostPortfolioOptimizationEqualWeighted200ApplicationJSONObject = out
		}
	}

	return res, nil
}

// PostPortfolioOptimizationInverseVarianceWeighted - Inverse Variance Weighted Portfolio
// Compute the assets weights of the inverse variance-weighted portfolio.
//
// References
//   - [Raul Leote de Carvalho and al., Demystifying Equity Risk-Based Strategies: A Simple Alpha Plus Beta Description](https://doi.org/10.3905/jpm.2012.38.3.056)
func (s *SDK) PostPortfolioOptimizationInverseVarianceWeighted(ctx context.Context, request operations.PostPortfolioOptimizationInverseVarianceWeightedRequest) (*operations.PostPortfolioOptimizationInverseVarianceWeightedResponse, error) {
	baseURL := s._serverURL
	url := strings.TrimSuffix(baseURL, "/") + "/portfolio/optimization/inverse-variance-weighted"

	bodyReader, reqContentType, err := utils.SerializeRequestBody(ctx, request)
	if err != nil {
		return nil, fmt.Errorf("error serializing request body: %w", err)
	}
	if bodyReader == nil {
		return nil, fmt.Errorf("request body is required")
	}

	req, err := http.NewRequestWithContext(ctx, "POST", url, bodyReader)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	req.Header.Set("Content-Type", reqContentType)

	client := s._securityClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.PostPortfolioOptimizationInverseVarianceWeightedResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *operations.PostPortfolioOptimizationInverseVarianceWeighted200ApplicationJSON
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.PostPortfolioOptimizationInverseVarianceWeighted200ApplicationJSONObject = out
		}
	}

	return res, nil
}

// PostPortfolioOptimizationInverseVolatilityWeighted - Inverse Volatility Weighted Portfolio
// Compute the assets weights of the inverse volatility-weighted portfolio, also known as the naive-risk parity portfolio.
//
// References
//   - [Raul Leote de Carvalho and al., Demystifying Equity Risk-Based Strategies: A Simple Alpha Plus Beta Description](https://doi.org/10.3905/jpm.2012.38.3.056)
func (s *SDK) PostPortfolioOptimizationInverseVolatilityWeighted(ctx context.Context, request operations.PostPortfolioOptimizationInverseVolatilityWeightedRequest) (*operations.PostPortfolioOptimizationInverseVolatilityWeightedResponse, error) {
	baseURL := s._serverURL
	url := strings.TrimSuffix(baseURL, "/") + "/portfolio/optimization/inverse-volatility-weighted"

	bodyReader, reqContentType, err := utils.SerializeRequestBody(ctx, request)
	if err != nil {
		return nil, fmt.Errorf("error serializing request body: %w", err)
	}
	if bodyReader == nil {
		return nil, fmt.Errorf("request body is required")
	}

	req, err := http.NewRequestWithContext(ctx, "POST", url, bodyReader)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	req.Header.Set("Content-Type", reqContentType)

	client := s._securityClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.PostPortfolioOptimizationInverseVolatilityWeightedResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *operations.PostPortfolioOptimizationInverseVolatilityWeighted200ApplicationJSON
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.PostPortfolioOptimizationInverseVolatilityWeighted200ApplicationJSONObject = out
		}
	}

	return res, nil
}

// PostPortfolioOptimizationMarketCapitalizationWeighted - Market Capitalization Weighted Portfolio
// Compute the assets weights of the market capitalization-weighted portfolio.
//
// References
//   - [Wikipedia, Capitalization-weighted Index](https://en.wikipedia.org/wiki/Capitalization-weighted_index)
func (s *SDK) PostPortfolioOptimizationMarketCapitalizationWeighted(ctx context.Context, request operations.PostPortfolioOptimizationMarketCapitalizationWeightedRequest) (*operations.PostPortfolioOptimizationMarketCapitalizationWeightedResponse, error) {
	baseURL := s._serverURL
	url := strings.TrimSuffix(baseURL, "/") + "/portfolio/optimization/market-capitalization-weighted"

	bodyReader, reqContentType, err := utils.SerializeRequestBody(ctx, request)
	if err != nil {
		return nil, fmt.Errorf("error serializing request body: %w", err)
	}
	if bodyReader == nil {
		return nil, fmt.Errorf("request body is required")
	}

	req, err := http.NewRequestWithContext(ctx, "POST", url, bodyReader)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	req.Header.Set("Content-Type", reqContentType)

	client := s._securityClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.PostPortfolioOptimizationMarketCapitalizationWeightedResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *operations.PostPortfolioOptimizationMarketCapitalizationWeighted200ApplicationJSON
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.PostPortfolioOptimizationMarketCapitalizationWeighted200ApplicationJSONObject = out
		}
	}

	return res, nil
}

// PostPortfolioOptimizationMaximumDecorrelation - Maximum Decorrelation Portfolio
// Compute the assets weights of the maximum decorrelation portfolio, optionally subject to:
// * Minimum and maximum weights constraints
// * Maximum group weights constraints
// * Minimum and maximum portfolio exposure constraints
//
// References
//   - [F. Goltz, S. Sivasubramanian, Scientific Beta Maximum Decorrelation Indices](http://www.scientificbeta.com/download/file/scientific-beta-max-decorrelation-indices)
//
// https://docs.portfoliooptimizer.io/#maximum-decorrelation-portfolio
func (s *SDK) PostPortfolioOptimizationMaximumDecorrelation(ctx context.Context, request operations.PostPortfolioOptimizationMaximumDecorrelationRequest) (*operations.PostPortfolioOptimizationMaximumDecorrelationResponse, error) {
	baseURL := s._serverURL
	url := strings.TrimSuffix(baseURL, "/") + "/portfolio/optimization/maximum-decorrelation"

	bodyReader, reqContentType, err := utils.SerializeRequestBody(ctx, request)
	if err != nil {
		return nil, fmt.Errorf("error serializing request body: %w", err)
	}
	if bodyReader == nil {
		return nil, fmt.Errorf("request body is required")
	}

	req, err := http.NewRequestWithContext(ctx, "POST", url, bodyReader)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	req.Header.Set("Content-Type", reqContentType)

	client := s._securityClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.PostPortfolioOptimizationMaximumDecorrelationResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *operations.PostPortfolioOptimizationMaximumDecorrelation200ApplicationJSON
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.PostPortfolioOptimizationMaximumDecorrelation200ApplicationJSONObject = out
		}
	}

	return res, nil
}

// PostPortfolioOptimizationMaximumReturn - Maximum Return Portfolio
// Compute the assets weights of the maximum return portfolio, optionally subject to:
// * Minimum and maximum weights constraints
// * Maximum group weights constraints
// * Minimum and maximum portfolio exposure constraints
//
// References
//   - Harry M. Markowitz, Portfolio Selection, Efficient Diversification of Investments, Second edition, Blackwell Publishers Inc.
func (s *SDK) PostPortfolioOptimizationMaximumReturn(ctx context.Context, request operations.PostPortfolioOptimizationMaximumReturnRequest) (*operations.PostPortfolioOptimizationMaximumReturnResponse, error) {
	baseURL := s._serverURL
	url := strings.TrimSuffix(baseURL, "/") + "/portfolio/optimization/maximum-return"

	bodyReader, reqContentType, err := utils.SerializeRequestBody(ctx, request)
	if err != nil {
		return nil, fmt.Errorf("error serializing request body: %w", err)
	}
	if bodyReader == nil {
		return nil, fmt.Errorf("request body is required")
	}

	req, err := http.NewRequestWithContext(ctx, "POST", url, bodyReader)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	req.Header.Set("Content-Type", reqContentType)

	client := s._securityClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.PostPortfolioOptimizationMaximumReturnResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *operations.PostPortfolioOptimizationMaximumReturn200ApplicationJSON
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.PostPortfolioOptimizationMaximumReturn200ApplicationJSONObject = out
		}
	}

	return res, nil
}

// PostPortfolioOptimizationMaximumSharpeRatio - Maximum Sharpe Ratio Portfolio
// Compute the assets weights of the maximum Sharpe ratio portfolio, optionally subject to:
// * Minimum and maximum weights constraints
// * Maximum group weights constraints
// * Minimum and maximum portfolio exposure constraints
//
// References
//   - Harry M. Markowitz, Portfolio Selection, Efficient Diversification of Investments, Second edition, Blackwell Publishers Inc.
func (s *SDK) PostPortfolioOptimizationMaximumSharpeRatio(ctx context.Context, request operations.PostPortfolioOptimizationMaximumSharpeRatioRequest) (*operations.PostPortfolioOptimizationMaximumSharpeRatioResponse, error) {
	baseURL := s._serverURL
	url := strings.TrimSuffix(baseURL, "/") + "/portfolio/optimization/maximum-sharpe-ratio"

	bodyReader, reqContentType, err := utils.SerializeRequestBody(ctx, request)
	if err != nil {
		return nil, fmt.Errorf("error serializing request body: %w", err)
	}
	if bodyReader == nil {
		return nil, fmt.Errorf("request body is required")
	}

	req, err := http.NewRequestWithContext(ctx, "POST", url, bodyReader)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	req.Header.Set("Content-Type", reqContentType)

	client := s._securityClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.PostPortfolioOptimizationMaximumSharpeRatioResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *operations.PostPortfolioOptimizationMaximumSharpeRatio200ApplicationJSON
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.PostPortfolioOptimizationMaximumSharpeRatio200ApplicationJSONObject = out
		}
	}

	return res, nil
}

// PostPortfolioOptimizationMeanVarianceEfficient - Mean-Variance Efficient Portfolio
// Compute the assets weights of a mean-variance efficient portfolio, optionally subject to:
// * Minimum and maximum weights constraints
// * Maximum group weights constraints
// * Minimum and maximum portfolio exposure constraints
//
// > A mean-variance efficient portfolio is a portfolio belonging to [the mean-variance efficient frontier](#post-/portfolio/analysis/mean-variance/efficient-frontier).
//
// References
//   - Harry M. Markowitz, Portfolio Selection, Efficient Diversification of Investments, Second edition, Blackwell Publishers Inc.
func (s *SDK) PostPortfolioOptimizationMeanVarianceEfficient(ctx context.Context, request operations.PostPortfolioOptimizationMeanVarianceEfficientRequest) (*operations.PostPortfolioOptimizationMeanVarianceEfficientResponse, error) {
	baseURL := s._serverURL
	url := strings.TrimSuffix(baseURL, "/") + "/portfolio/optimization/mean-variance-efficient"

	bodyReader, reqContentType, err := utils.SerializeRequestBody(ctx, request)
	if err != nil {
		return nil, fmt.Errorf("error serializing request body: %w", err)
	}
	if bodyReader == nil {
		return nil, fmt.Errorf("request body is required")
	}

	req, err := http.NewRequestWithContext(ctx, "POST", url, bodyReader)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	req.Header.Set("Content-Type", reqContentType)

	client := s._securityClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.PostPortfolioOptimizationMeanVarianceEfficientResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *operations.PostPortfolioOptimizationMeanVarianceEfficient200ApplicationJSON
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.PostPortfolioOptimizationMeanVarianceEfficient200ApplicationJSONObject = out
		}
	}

	return res, nil
}

// PostPortfolioOptimizationMinimumCorrelation - Minimum Correlation Portfolio
// Compute the assets weights of the (heuristic) minimum correlation portfolio, which is a portfolio built using the Minimum Correlation Algorithm discovered by [David Varadi](https://cssanalytics.wordpress.com/).
//
// References
//   - [CSSA, Minimum Correlation Algorithm Paper Release](https://cssanalytics.wordpress.com/2012/09/21/minimum-correlation-algorithm-paper-release/)
func (s *SDK) PostPortfolioOptimizationMinimumCorrelation(ctx context.Context, request operations.PostPortfolioOptimizationMinimumCorrelationRequest) (*operations.PostPortfolioOptimizationMinimumCorrelationResponse, error) {
	baseURL := s._serverURL
	url := strings.TrimSuffix(baseURL, "/") + "/portfolio/optimization/minimum-correlation"

	bodyReader, reqContentType, err := utils.SerializeRequestBody(ctx, request)
	if err != nil {
		return nil, fmt.Errorf("error serializing request body: %w", err)
	}
	if bodyReader == nil {
		return nil, fmt.Errorf("request body is required")
	}

	req, err := http.NewRequestWithContext(ctx, "POST", url, bodyReader)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	req.Header.Set("Content-Type", reqContentType)

	client := s._securityClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.PostPortfolioOptimizationMinimumCorrelationResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *operations.PostPortfolioOptimizationMinimumCorrelation200ApplicationJSON
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.PostPortfolioOptimizationMinimumCorrelation200ApplicationJSONObject = out
		}
	}

	return res, nil
}

// PostPortfolioOptimizationMinimumVariance - Minimum Variance Portfolio
// Compute the assets weights of the minimum variance portfolio, optionally subject to:
// * Minimum and maximum weights constraints
// * Maximum group weights constraints
// * Minimum and maximum portfolio exposure constraints
//
// References
//   - Harry M. Markowitz, Portfolio Selection, Efficient Diversification of Investments, Second edition, Blackwell Publishers Inc.
func (s *SDK) PostPortfolioOptimizationMinimumVariance(ctx context.Context, request operations.PostPortfolioOptimizationMinimumVarianceRequest) (*operations.PostPortfolioOptimizationMinimumVarianceResponse, error) {
	baseURL := s._serverURL
	url := strings.TrimSuffix(baseURL, "/") + "/portfolio/optimization/minimum-variance"

	bodyReader, reqContentType, err := utils.SerializeRequestBody(ctx, request)
	if err != nil {
		return nil, fmt.Errorf("error serializing request body: %w", err)
	}
	if bodyReader == nil {
		return nil, fmt.Errorf("request body is required")
	}

	req, err := http.NewRequestWithContext(ctx, "POST", url, bodyReader)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	req.Header.Set("Content-Type", reqContentType)

	client := s._securityClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.PostPortfolioOptimizationMinimumVarianceResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *operations.PostPortfolioOptimizationMinimumVariance200ApplicationJSON
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.PostPortfolioOptimizationMinimumVariance200ApplicationJSONObject = out
		}
	}

	return res, nil
}

// PostPortfolioOptimizationMostDiversified - Most Diversified Portfolio
// Compute the assets weights of the most diversified portfolio, optionally subject to:
// * Minimum and maximum weights constraints
// * Maximum group weights constraints
// * Minimum and maximum portfolio exposure constraints
//
// References
//   - [Yves Choueifaty and Yves Coignard, Toward Maximum Diversification, The Journal of Portfolio Management Fall 2008, 35 (1) 40-51](https://doi.org/10.3905/JPM.2008.35.1.40)
func (s *SDK) PostPortfolioOptimizationMostDiversified(ctx context.Context, request operations.PostPortfolioOptimizationMostDiversifiedRequest) (*operations.PostPortfolioOptimizationMostDiversifiedResponse, error) {
	baseURL := s._serverURL
	url := strings.TrimSuffix(baseURL, "/") + "/portfolio/optimization/most-diversified"

	bodyReader, reqContentType, err := utils.SerializeRequestBody(ctx, request)
	if err != nil {
		return nil, fmt.Errorf("error serializing request body: %w", err)
	}
	if bodyReader == nil {
		return nil, fmt.Errorf("request body is required")
	}

	req, err := http.NewRequestWithContext(ctx, "POST", url, bodyReader)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	req.Header.Set("Content-Type", reqContentType)

	client := s._securityClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.PostPortfolioOptimizationMostDiversifiedResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *operations.PostPortfolioOptimizationMostDiversified200ApplicationJSON
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.PostPortfolioOptimizationMostDiversified200ApplicationJSONObject = out
		}
	}

	return res, nil
}

// PostPortfolioSimulationRebalancingDriftWeight - Drift-weight Portfolio Rebalancing
// Simulate the evolution of one or several portfolio(s) over one or several time period(s), the portfolio(s) being never rebalanced (a.k.a. buy and hold).
//
// References
// * [Hillion, Pierre, The Ex-Ante Rebalancing Premium (March 11, 2016). INSEAD Working Paper No. 2016/15/FIN](https://ssrn.com/abstract=2746471)
func (s *SDK) PostPortfolioSimulationRebalancingDriftWeight(ctx context.Context, request operations.PostPortfolioSimulationRebalancingDriftWeightRequest) (*operations.PostPortfolioSimulationRebalancingDriftWeightResponse, error) {
	baseURL := s._serverURL
	url := strings.TrimSuffix(baseURL, "/") + "/portfolio/simulation/rebalancing/drift-weight"

	bodyReader, reqContentType, err := utils.SerializeRequestBody(ctx, request)
	if err != nil {
		return nil, fmt.Errorf("error serializing request body: %w", err)
	}
	if bodyReader == nil {
		return nil, fmt.Errorf("request body is required")
	}

	req, err := http.NewRequestWithContext(ctx, "POST", url, bodyReader)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	req.Header.Set("Content-Type", reqContentType)

	client := s._securityClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.PostPortfolioSimulationRebalancingDriftWeightResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *operations.PostPortfolioSimulationRebalancingDriftWeight200ApplicationJSON
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.PostPortfolioSimulationRebalancingDriftWeight200ApplicationJSONObject = out
		}
	}

	return res, nil
}

// PostPortfolioSimulationRebalancingFixedWeight - Fixed-weight Portfolio Rebalancing
// Simulate the evolution of one or several portfolio(s) over one or several time period(s), the portfolio(s) being rebalanced toward fixed weights at the beginning of each time period.
//
// References
// * [Hillion, Pierre, The Ex-Ante Rebalancing Premium (March 11, 2016). INSEAD Working Paper No. 2016/15/FIN](https://ssrn.com/abstract=2746471)
func (s *SDK) PostPortfolioSimulationRebalancingFixedWeight(ctx context.Context, request operations.PostPortfolioSimulationRebalancingFixedWeightRequest) (*operations.PostPortfolioSimulationRebalancingFixedWeightResponse, error) {
	baseURL := s._serverURL
	url := strings.TrimSuffix(baseURL, "/") + "/portfolio/simulation/rebalancing/fixed-weight"

	bodyReader, reqContentType, err := utils.SerializeRequestBody(ctx, request)
	if err != nil {
		return nil, fmt.Errorf("error serializing request body: %w", err)
	}
	if bodyReader == nil {
		return nil, fmt.Errorf("request body is required")
	}

	req, err := http.NewRequestWithContext(ctx, "POST", url, bodyReader)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	req.Header.Set("Content-Type", reqContentType)

	client := s._securityClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.PostPortfolioSimulationRebalancingFixedWeightResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *operations.PostPortfolioSimulationRebalancingFixedWeight200ApplicationJSON
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.PostPortfolioSimulationRebalancingFixedWeight200ApplicationJSONObject = out
		}
	}

	return res, nil
}

// PostPortfolioSimulationRebalancingRandomWeight - Random-weight Portfolio Rebalancing
// Simulate the evolution of one or several portfolio(s) over one or several time period(s), the portfolio(s) being rebalanced toward random weights at the beginning of each time period.
//
// References
// * [R Stein, Not fooled by randomness: Using random portfolios to analyse investment funds, Investment Analysts Journal, 43:79, 1-15, DOI: 10.1080/10293523.2014.11082564](https://www.tandfonline.com/doi/abs/10.1080/10293523.2014.11082564)
func (s *SDK) PostPortfolioSimulationRebalancingRandomWeight(ctx context.Context, request operations.PostPortfolioSimulationRebalancingRandomWeightRequest) (*operations.PostPortfolioSimulationRebalancingRandomWeightResponse, error) {
	baseURL := s._serverURL
	url := strings.TrimSuffix(baseURL, "/") + "/portfolio/simulation/rebalancing/random-weight"

	bodyReader, reqContentType, err := utils.SerializeRequestBody(ctx, request)
	if err != nil {
		return nil, fmt.Errorf("error serializing request body: %w", err)
	}
	if bodyReader == nil {
		return nil, fmt.Errorf("request body is required")
	}

	req, err := http.NewRequestWithContext(ctx, "POST", url, bodyReader)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	req.Header.Set("Content-Type", reqContentType)

	client := s._securityClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.PostPortfolioSimulationRebalancingRandomWeightResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *operations.PostPortfolioSimulationRebalancingRandomWeight200ApplicationJSON
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.PostPortfolioSimulationRebalancingRandomWeight200ApplicationJSONObject = out
		}
	}

	return res, nil
}
