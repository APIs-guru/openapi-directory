package sdk

import (
	"net/http"
	"openapi/internal/utils"
)

var ServerList = []string{
	"https://api.telematicssdk.com",
	"https://mobilesdk.telematicssdk.com",
}

type HTTPClient interface {
	Do(req *http.Request) (*http.Response, error)
}

type SDK struct {
	TwoForMobileAppOptional     *TwoForMobileAppOptional
	Two1UserStatisticsOptional  *Two1UserStatisticsOptional
	Two2UserTripsOptional       *Two2UserTripsOptional
	Two4UserSafeScoringOptional *Two4UserSafeScoringOptional
	ThreeForBackEndOptional     *ThreeForBackEndOptional
	ConsolidatedSafeScoring     *ConsolidatedSafeScoring
	ConsolidatedStatistics      *ConsolidatedStatistics

	_defaultClient  HTTPClient
	_securityClient HTTPClient

	_serverURL  string
	_language   string
	_sdkVersion string
	_genVersion string
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

		sdk._securityClient = sdk._defaultClient

	}

	if sdk._serverURL == "" {
		sdk._serverURL = ServerList[0]
	}

	sdk.TwoForMobileAppOptional = NewTwoForMobileAppOptional(
		sdk._defaultClient,
		sdk._securityClient,
		sdk._serverURL,
		sdk._language,
		sdk._sdkVersion,
		sdk._genVersion,
	)

	sdk.Two1UserStatisticsOptional = NewTwo1UserStatisticsOptional(
		sdk._defaultClient,
		sdk._securityClient,
		sdk._serverURL,
		sdk._language,
		sdk._sdkVersion,
		sdk._genVersion,
	)

	sdk.Two2UserTripsOptional = NewTwo2UserTripsOptional(
		sdk._defaultClient,
		sdk._securityClient,
		sdk._serverURL,
		sdk._language,
		sdk._sdkVersion,
		sdk._genVersion,
	)

	sdk.Two4UserSafeScoringOptional = NewTwo4UserSafeScoringOptional(
		sdk._defaultClient,
		sdk._securityClient,
		sdk._serverURL,
		sdk._language,
		sdk._sdkVersion,
		sdk._genVersion,
	)

	sdk.ThreeForBackEndOptional = NewThreeForBackEndOptional(
		sdk._defaultClient,
		sdk._securityClient,
		sdk._serverURL,
		sdk._language,
		sdk._sdkVersion,
		sdk._genVersion,
	)

	sdk.ConsolidatedSafeScoring = NewConsolidatedSafeScoring(
		sdk._defaultClient,
		sdk._securityClient,
		sdk._serverURL,
		sdk._language,
		sdk._sdkVersion,
		sdk._genVersion,
	)

	sdk.ConsolidatedStatistics = NewConsolidatedStatistics(
		sdk._defaultClient,
		sdk._securityClient,
		sdk._serverURL,
		sdk._language,
		sdk._sdkVersion,
		sdk._genVersion,
	)

	return sdk
}
