package sdk

import (
	"context"
	"fmt"
	"net/http"
	"openapi/internal/utils"
	"openapi/pkg/models/operations"
	"strings"
)

var ServerList = []string{
	"https://api.peoplefinderspro.com",
}

type HTTPClient interface {
	Do(req *http.Request) (*http.Response, error)
}

type SDK struct {
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

	return sdk
}

// PostAddressAutocomplete - Search
// ###### *Click on the grey search box above, to view sample request/response objects for Address Autocomplete Search*
//
// Perform a search:
//
// 1. Add your key and key secret to the request headers.
//   - galaxy-ap-name: [Key]
//   - galaxy-ap-password: [Secret]
//   - galaxy-search-type: DevAPIAddressAutoComplete
//
//  2. Add search criteria to your request.
//     ~~~html
//     {
//     "Input":"1821 Q"
//     }
//     ~~~
//
// 3.  Submit your search
//
// The JSON request should have parts of the address.
//
// + <code>Input</code> = null (optional, string) ... address.
func (s *SDK) PostAddressAutocomplete(ctx context.Context, request operations.PostAddressAutocompleteRequest) (*operations.PostAddressAutocompleteResponse, error) {
	baseURL := s._serverURL
	url := strings.TrimSuffix(baseURL, "/") + "/address/autocomplete"

	bodyReader, reqContentType, err := utils.SerializeRequestBody(ctx, request)
	if err != nil {
		return nil, fmt.Errorf("error serializing request body: %w", err)
	}

	req, err := http.NewRequestWithContext(ctx, "POST", url, bodyReader)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	req.Header.Set("Content-Type", reqContentType)

	utils.PopulateHeaders(ctx, req, request.Headers)

	client := s._defaultClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.PostAddressAutocompleteResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
	}

	return res, nil
}

// PostContactEnrich - Search
// ###### *Click on the grey search box above, to view sample request/response objects for Contact Enrichment Search*
//
// Perform a search:
//
// 1. Add your key and key secret to the request headers.
//   - galaxy-ap-name: [Key]
//   - galaxy-ap-password: [Secret]
//   - galaxy-search-type: DevAPIContactEnrich
//
//  2. Add search criteria to your request. At least two are required: Name, Phone, Address, or Email.
//     ~~~html
//     {
//     "FirstName": "John",
//     "MiddleName": "T",
//     "LastName": "Lawrence",
//     "Dob":"",
//     "Age": 0,
//     "Address": {
//     "addressLine1":"123 Q Street",
//     "addressLine2":"Sacramento, CA"
//     },
//     "PhoneNumber":"",
//     "Email":""
//     }
//     ~~~
//
// 3.  Submit your search
//
// A complete list of JSON request properties follows.
//
// + <code>FirstName</code>= null (optional, string) ... First name.
//
// + <code>MiddleName</code> = null (optional, string) ... Middle name or middle initial.
//
// + <code>LastName</code> = null (optional, string) ... Last name.
//
// + <code>Dob</code> = null (optional, string) ... Date of birth (format: MM/DD/YYYY).
//
// + <code>Age</code> = null (optional, int) ... Age.
//
// + <code>Addresses</code> = null (optional, Addresses[]) ... List of addresses.
//   - <code>Members</code>
//   - <code>AddressLine1</code> = null (optional, string) ... House number, street name and Unit number (i.e. 123 Q Street, Unit 102) or PO Box (i.e. 1821 Q Street).
//   - <code>AddressLine2</code> = null (optional, string) ... State or City and State or Zip (i.e. Sacramento, CA).
//
// + <code>Phone</code> = null (optional, string) ... Phone number (formats: ###-###-####, (###) ###-####).
//
// + <code>Email</code> = null (optional, string) ... E-mail address.
func (s *SDK) PostContactEnrich(ctx context.Context, request operations.PostContactEnrichRequest) (*operations.PostContactEnrichResponse, error) {
	baseURL := s._serverURL
	url := strings.TrimSuffix(baseURL, "/") + "/contact/enrich"

	bodyReader, reqContentType, err := utils.SerializeRequestBody(ctx, request)
	if err != nil {
		return nil, fmt.Errorf("error serializing request body: %w", err)
	}

	req, err := http.NewRequestWithContext(ctx, "POST", url, bodyReader)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	req.Header.Set("Content-Type", reqContentType)

	utils.PopulateHeaders(ctx, req, request.Headers)

	client := s._defaultClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.PostContactEnrichResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
	}

	return res, nil
}

// PostEmailEnrich - Search
// ###### *Click on the grey search box above, to view sample request/response objects for Email Enrichment Search*
//
// Perform a search:
//
// 1. Add your Access Profile username and password to the request headers.
//   - galaxy-ap-name: [Key]
//   - galaxy-ap-password: [Secret]
//   - galaxy-search-type: DevAPIEmailID
//
//  2. Add search criteria to your request.
//     ~~~html
//     {
//     "Email":"johnsmith@somedomain"
//     }
//     ~~~
//
// 3.  Submit your search
//
// The JSON request should have an email.
//
// + <code>Email</code> = null (optional, string) ... E-mail address.
func (s *SDK) PostEmailEnrich(ctx context.Context, request operations.PostEmailEnrichRequest) (*operations.PostEmailEnrichResponse, error) {
	baseURL := s._serverURL
	url := strings.TrimSuffix(baseURL, "/") + "/email/enrich"

	bodyReader, reqContentType, err := utils.SerializeRequestBody(ctx, request)
	if err != nil {
		return nil, fmt.Errorf("error serializing request body: %w", err)
	}

	req, err := http.NewRequestWithContext(ctx, "POST", url, bodyReader)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	req.Header.Set("Content-Type", reqContentType)

	utils.PopulateHeaders(ctx, req, request.Headers)

	client := s._defaultClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.PostEmailEnrichResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
	}

	return res, nil
}

// PostPhoneEnrich - Search
// ###### *Click on the grey search box above, to view sample request/response objects for Phone Enrichment Search*
//
// Perform a search:
//
// 1. Add your key and key secret to the request headers.
//   - galaxy-ap-name: [Key]
//   - galaxy-ap-password: [Secret]
//   - galaxy-search-type: DevAPICallerID
//
//  2. Add search criteria to your request.
//     ~~~html
//     {
//     "Phone":"(123) 456-7890"
//     }
//     ~~~
//
// 3.  Submit your search
//
// The JSON request should have a phone number.
//
// + <code>Phone</code> = null (optional, string) ... Phone number (formats: ###-###-####, (###) ###-####).
func (s *SDK) PostPhoneEnrich(ctx context.Context, request operations.PostPhoneEnrichRequest) (*operations.PostPhoneEnrichResponse, error) {
	baseURL := s._serverURL
	url := strings.TrimSuffix(baseURL, "/") + "/phone/enrich"

	bodyReader, reqContentType, err := utils.SerializeRequestBody(ctx, request)
	if err != nil {
		return nil, fmt.Errorf("error serializing request body: %w", err)
	}

	req, err := http.NewRequestWithContext(ctx, "POST", url, bodyReader)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	req.Header.Set("Content-Type", reqContentType)

	utils.PopulateHeaders(ctx, req, request.Headers)

	client := s._defaultClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.PostPhoneEnrichResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
	}

	return res, nil
}

// Search - Search
// ###### *Click on the grey search box above, to view sample request/response objects for the Identity Verification Search*
//
// Perform a search:
//
// 1. Add your key and key secret to the request headers.
//   - galaxy-ap-name: [Key]
//   - galaxy-ap-password: [Secret]
//   - galaxy-search-type: DevAPIIDVerification
//
//  2. Add search criteria to your request. At least two are required: SSN, Name, Phone, Address or Email.
//     ~~~html
//     {
//     "FirstName": "John",
//     "MiddleName": "T",
//     "LastName": "Lawrence",
//     "Dob":"",
//     "Age": 0,
//     "Address": {
//     "addressLine1":"123 Q Street, Unit 102",
//     "addressLine2":"Sacramento, CA"
//     },
//     "PhoneNumber":"",
//     "Email":""
//     }
//     ~~~
//
// 3.  Submit your search
//
// A complete list of JSON request properties follows.
//
// + <code>FirstName</code>= null (optional, string) ... First name.
//
// + <code>MiddleName</code> = null (optional, string) ... Middle name or middle initial.
//
// + <code>LastName</code> = null (optional, string) ... Last name.
//
// + <code>Dob</code> = null (optional, string) ... Date of birth (format: MM/DD/YYYY).
//
// + <code>Age</code> = null (optional, int) ... Age.
//
// + <code>Addresses</code> = null (optional, Addresses[]) ... List of addresses.
//   - <code>Members</code>
//   - <code>AddressLine1</code> = null (optional, string) ... House number, street name and Unit number (i.e. 123 Q Street, Unit 102) or PO Box (i.e. 1821 Q Street).
//   - <code>AddressLine2</code> = null (optional, string) ... State or City and State or Zip (i.e. Sacramento, CA).
//
// + <code>Phone</code> = null (optional, string) ... Phone number (formats: ###-###-####, (###) ###-####).
//
// + <code>Email</code> = null (optional, string) ... E-mail address.
func (s *SDK) Search(ctx context.Context, request operations.SearchRequest) (*operations.SearchResponse, error) {
	baseURL := s._serverURL
	url := strings.TrimSuffix(baseURL, "/") + "/identity/verify_id"

	bodyReader, reqContentType, err := utils.SerializeRequestBody(ctx, request)
	if err != nil {
		return nil, fmt.Errorf("error serializing request body: %w", err)
	}

	req, err := http.NewRequestWithContext(ctx, "POST", url, bodyReader)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	req.Header.Set("Content-Type", reqContentType)

	utils.PopulateHeaders(ctx, req, request.Headers)

	client := s._defaultClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.SearchResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
	}

	return res, nil
}
