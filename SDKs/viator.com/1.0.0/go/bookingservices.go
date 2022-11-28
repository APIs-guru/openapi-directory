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

type BookingServices struct {
	_defaultClient  HTTPClient
	_securityClient HTTPClient
	_serverURL      string
	_language       string
	_sdkVersion     string
	_genVersion     string
}

func NewBookingServices(defaultClient, securityClient HTTPClient, serverURL, language, sdkVersion, genVersion string) *BookingServices {
	return &BookingServices{
		_defaultClient:  defaultClient,
		_securityClient: securityClient,
		_serverURL:      serverURL,
		_language:       language,
		_sdkVersion:     sdkVersion,
		_genVersion:     genVersion,
	}
}

// BookingAvailability - /booking/availability
// Get the tour-grade with the lowest price that is available for a product on each day of the specified month
//
// This service:
// - returns
// - useful when displaying a calendar of available tours
// - For more information, see: [Availability services](#section/Key-concepts/Availability-services)
// - **Notes:**
//
//   - [/booking/availability/dates](#operation/bookingAvailabilityDates) provides all availability in one call and is more suitable for calendars, etc.
//
//   - Availability data is limited to a period of **12 months** into the future from the present time on the production server and **6 months** on the sandbox server.
func (s *BookingServices) BookingAvailability(ctx context.Context, request operations.BookingAvailabilityRequest) (*operations.BookingAvailabilityResponse, error) {
	baseURL := s._serverURL
	url := strings.TrimSuffix(baseURL, "/") + "/booking/availability"

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

	client := s._securityClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.BookingAvailabilityResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *operations.BookingAvailability200ApplicationJSON
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.BookingAvailability200ApplicationJSONObject = out
		}
	}

	return res, nil
}

// BookingAvailabilityDates - /booking/availability/dates
// Get dates on which a product is available
//
// This service:
// - retrieves all available dates for a product, excluding days it does not operate and blocked-out dates
// - returns a multi-dimensional array of year-month -&gt; days that have any availabile tour grade or traveler mix
// - useful to present the user with a list of dates for selection on which *this* product is available for booking
// - **Notes**:
//
//   - The user's desired traveler mix may not be eligible for booking; these details can be displayed when you retrieve its list of tour grades
//   - Availability data is limited to a period of **12 months** into the future from the present time on the production server and **6 months** on the sandbox server.
func (s *BookingServices) BookingAvailabilityDates(ctx context.Context, request operations.BookingAvailabilityDatesRequest) (*operations.BookingAvailabilityDatesResponse, error) {
	baseURL := s._serverURL
	url := strings.TrimSuffix(baseURL, "/") + "/booking/availability/dates"

	req, err := http.NewRequestWithContext(ctx, "GET", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	utils.PopulateHeaders(ctx, req, request.Headers)

	utils.PopulateQueryParams(ctx, req, request.QueryParams)

	client := s._securityClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.BookingAvailabilityDatesResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *operations.BookingAvailabilityDates200ApplicationJSON
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.BookingAvailabilityDates200ApplicationJSONObject = out
		}
	}

	return res, nil
}

// BookingAvailabilityTourgrades - /booking/availability/tourgrades
// Get the tour grades of a product that are currently available
//
// This service reports:
// - all tour grades for the specified product, on the specified day, that are available for the specified age bands
// - the pricing breakdown and the total depending on the travel date and traveler mix
//
// **Note**: Availability data is limited to a period of **12 months** into the future from the present time on the production server and **6 months** on the sandbox server.
func (s *BookingServices) BookingAvailabilityTourgrades(ctx context.Context, request operations.BookingAvailabilityTourgradesRequest) (*operations.BookingAvailabilityTourgradesResponse, error) {
	baseURL := s._serverURL
	url := strings.TrimSuffix(baseURL, "/") + "/booking/availability/tourgrades"

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

	client := s._securityClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.BookingAvailabilityTourgradesResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *operations.BookingAvailabilityTourgrades200ApplicationJSON
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.BookingAvailabilityTourgrades200ApplicationJSONObject = out
		}
	}

	return res, nil
}

// BookingAvailabilityTourgradesPricingmatrix - /booking/availability/tourgrades/pricingmatrix
// Get a pricing matrix that includes availability and tour-grades for a product
//
// Given a month, this service returns days with available tour grades only (i.e., days which have at least one tourgrade available), and the pricing matrix for that tour grade for that day.
//
// - **Note**: Availability data is limited to a period of **12 months** into the future from the present time on the production server and **6 months** on the sandbox server.
func (s *BookingServices) BookingAvailabilityTourgradesPricingmatrix(ctx context.Context, request operations.BookingAvailabilityTourgradesPricingmatrixRequest) (*operations.BookingAvailabilityTourgradesPricingmatrixResponse, error) {
	baseURL := s._serverURL
	url := strings.TrimSuffix(baseURL, "/") + "/booking/availability/tourgrades/pricingmatrix"

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

	client := s._securityClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.BookingAvailabilityTourgradesPricingmatrixResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *operations.BookingAvailabilityTourgradesPricingmatrix200ApplicationJSON
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.BookingAvailabilityTourgradesPricingmatrix200ApplicationJSONObject = out
		}
	}

	return res, nil
}

// BookingBook - /booking/book
// Make a booking
//
// For more information, see:
//
//   - [Cancellation policy](#section/Key-concepts/Cancellation-policy)
//   - [Booking concepts](#section/Key-concepts/Booking-concepts)
//   - [Booking process flow](#section/Common-workflows-and-data-validation/Booking-process-flow)
//   - [Making a booking](#section/Common-workflows-and-data-validation/Making-a-booking)
//   - [Supplier communications](#section/Key-concepts/Supplier-communications)
func (s *BookingServices) BookingBook(ctx context.Context, request operations.BookingBookRequest) (*operations.BookingBookResponse, error) {
	baseURL := s._serverURL
	url := strings.TrimSuffix(baseURL, "/") + "/booking/book"

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

	client := s._securityClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.BookingBookResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *operations.BookingBook200ApplicationJSON
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.BookingBook200ApplicationJSONObject = out
		}
	}

	return res, nil
}

// BookingCalculateprice - /booking/calculateprice
// Confirm the price of a tour / activity prior to booking
//
// For more information, see: [Calculating prices](#section/Common-workflows-and-data-validation/Calculating-prices)
//
// - **Note**: Availability and pricing data is limited to a period of **six months** into the future from the present time
func (s *BookingServices) BookingCalculateprice(ctx context.Context, request operations.BookingCalculatepriceRequest) (*operations.BookingCalculatepriceResponse, error) {
	baseURL := s._serverURL
	url := strings.TrimSuffix(baseURL, "/") + "/booking/calculateprice"

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

	client := s._securityClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.BookingCalculatepriceResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *operations.BookingCalculateprice200ApplicationJSON
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.BookingCalculateprice200ApplicationJSONObject = out
		}
	}

	return res, nil
}

// BookingHotels - /booking/hotels
// Get hotel pick-ups
// Lists the hotel pickups available for either a product or a destination
func (s *BookingServices) BookingHotels(ctx context.Context, request operations.BookingHotelsRequest) (*operations.BookingHotelsResponse, error) {
	baseURL := s._serverURL
	url := strings.TrimSuffix(baseURL, "/") + "/booking/hotels"

	req, err := http.NewRequestWithContext(ctx, "GET", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	utils.PopulateHeaders(ctx, req, request.Headers)

	utils.PopulateQueryParams(ctx, req, request.QueryParams)

	client := s._securityClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.BookingHotelsResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *operations.BookingHotels200ApplicationJSON
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.BookingHotels200ApplicationJSONObject = out
		}
	}

	return res, nil
}

// BookingMybookings - /booking/mybookings
// Get a user's bookings with travel dates in the future.
//
// This service can also be used to check the status of a booking.
//
// **Provide either:**
// - A `voucherKey`, **or...**
// - An email address (`email`) and a booking reference (`itineraryOrItemId`) ([Booking Reference](#section/Key-concepts/Booking-references))
func (s *BookingServices) BookingMybookings(ctx context.Context, request operations.BookingMybookingsRequest) (*operations.BookingMybookingsResponse, error) {
	baseURL := s._serverURL
	url := strings.TrimSuffix(baseURL, "/") + "/booking/mybookings"

	req, err := http.NewRequestWithContext(ctx, "GET", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	utils.PopulateHeaders(ctx, req, request.Headers)

	utils.PopulateQueryParams(ctx, req, request.QueryParams)

	client := s._securityClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.BookingMybookingsResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *operations.BookingMybookings200ApplicationJSON
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.BookingMybookings200ApplicationJSONObject = out
		}
	}

	return res, nil
}

// BookingPastbooking - /booking/pastbooking
// Get the details of a single specific past booking based on the `voucherKey` or `itemId` and email address sent in the request.
//
// **Note**: this service will only return past bookings that were made with the same API key that was used to make the booking
//
// **Sample query parameters**:
// - email=apitest@viator.com&amp;itemId=580669678
//
// **or**
// - voucherKey=1005851866:4af44c13ecf3f1a7d3f9ef2fc00c2257e08fa42ae20f877f3039ff9b52aba24e:580669678
//
// **email**
// - The email address passed must match the email address associated with the booking
//
// **Departure details**
//
// - Departure details such as the `departurePoint`, `departurePointAddress` and `departurePointDirections` is included in the response.
// - These fields may contain HTML escape characters such as &amp;amp; and special characters that are escaped by a backslash. Ensure that these fields are parsed after receiving the response as it will cause your JSON to be invalid.
//
// For more information, see: [Reviewing bookings](#section/Common-workflows-and-data-validation/Reviewing-bookings)
func (s *BookingServices) BookingPastbooking(ctx context.Context, request operations.BookingPastbookingRequest) (*operations.BookingPastbookingResponse, error) {
	baseURL := s._serverURL
	url := strings.TrimSuffix(baseURL, "/") + "/booking/pastbooking"

	req, err := http.NewRequestWithContext(ctx, "GET", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	utils.PopulateHeaders(ctx, req, request.Headers)

	utils.PopulateQueryParams(ctx, req, request.QueryParams)

	client := s._securityClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.BookingPastbookingResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *operations.BookingPastbooking200ApplicationJSON
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.BookingPastbooking200ApplicationJSONObject = out
		}
	}

	return res, nil
}

// BookingPricingmatrix - /booking/pricingmatrix
// Get the pricing matrix for tour-grades, product age bands and pax mixes
//
// For more information, see: [Get the tour-grade pricing matrix](#section/Common-workflows-and-data-validation/Get-the-tour-grade-pricing-matrix)
func (s *BookingServices) BookingPricingmatrix(ctx context.Context, request operations.BookingPricingmatrixRequest) (*operations.BookingPricingmatrixResponse, error) {
	baseURL := s._serverURL
	url := strings.TrimSuffix(baseURL, "/") + "/booking/pricingmatrix"

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

	client := s._securityClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.BookingPricingmatrixResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *operations.BookingPricingmatrix200ApplicationJSON
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.BookingPricingmatrix200ApplicationJSONObject = out
		}
	}

	return res, nil
}

// BookingStatus - /booking/status
// Get the booking status for multiple items based on different criteria
//
// This service:
// - is ideally be used in software for bulk updates of pending bookings
// - returns a maximum of 1000 bookings (narrow your search if you expect a greater number of results)
// - will return &lt;u&gt;both&lt;/u&gt; live &lt;u&gt;and&lt;/u&gt; test bookings
// - rate limited to &lt;u&gt;one request every 30 minutes&lt;/u&gt;
// - For more information, see: [Get the bookiing status for multiple items](#section/Common-workflows-and-data-validation/Get-the-booking-status-for-multiple-items)
//
// **Exceeding the rate limit**
// - You will receive the following error message if you exceed the rate limit allowed for this service. Set `test` to `true` to bypass this limit:
// ```javascript
//
//	{
//	    "data": null
//	    "vmid": 221002
//	    "errorMessage": ["Access allowed every 30 minutes"]
//	    "errorType": "EXCEPTION"
//	    "dateStamp": "2013-03-26T10:28:51+0000"
//	    "errorReference": 55315512721712161381352771
//	    "errorMessageText": ["Access allowed every 30 minutes"]
//	    "success": false
//	    "totalCount": 1
//	    "errorName": "PollingDeniedException"
//	}
//
// ```
func (s *BookingServices) BookingStatus(ctx context.Context, request operations.BookingStatusRequest) (*operations.BookingStatusResponse, error) {
	baseURL := s._serverURL
	url := strings.TrimSuffix(baseURL, "/") + "/booking/status"

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

	client := s._securityClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.BookingStatusResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *operations.BookingStatus200ApplicationJSON
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.BookingStatus200ApplicationJSONObject = out
		}
	}

	return res, nil
}

// BookingStatusItems - /booking/status/items
// Get brief booking statuses
//
// This service is similar to [/booking/status](#operation/bookingStatus) in that it:
// - retrieves the booking status for multiple items based on different criteria
// - has the same request parameters as [/booking/status](#operation/bookingStatus)
//
// However, it differs in that it returns a multi-item array of booking items with less detail than what would be received from [/booking/status](#operation/bookingStatus).
func (s *BookingServices) BookingStatusItems(ctx context.Context, request operations.BookingStatusItemsRequest) (*operations.BookingStatusItemsResponse, error) {
	baseURL := s._serverURL
	url := strings.TrimSuffix(baseURL, "/") + "/booking/status/items"

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

	client := s._securityClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.BookingStatusItemsResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *operations.BookingStatusItems200ApplicationJSON
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.BookingStatusItems200ApplicationJSONObject = out
		}
	}

	return res, nil
}

// BookingVoucher - /booking/voucher
// Get voucher details
// - Use this service to retrieve the voucher details of a booked item.
// - The data returned is HTML-formatted and can be wrapped in a header and/or footer.
//
// **Sample query parameters**
// - leadLastName=Simpson test&amp;itemId=580669678
//
// **or**
// - voucherKey=1005851866:4af44c13ecf3f1a7d3f9ef2fc00c2257e08fa42ae20f877f3039ff9b52aba24e:580669678&amp;fullHTML=true&amp;mobileVoucher=true
func (s *BookingServices) BookingVoucher(ctx context.Context, request operations.BookingVoucherRequest) (*operations.BookingVoucherResponse, error) {
	baseURL := s._serverURL
	url := strings.TrimSuffix(baseURL, "/") + "/booking/voucher"

	req, err := http.NewRequestWithContext(ctx, "GET", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	utils.PopulateHeaders(ctx, req, request.Headers)

	utils.PopulateQueryParams(ctx, req, request.QueryParams)

	client := s._securityClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.BookingVoucherResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *operations.BookingVoucher200ApplicationJSON
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.BookingVoucher200ApplicationJSONObject = out
		}
	}

	return res, nil
}

// CancelBooking - /bookings/{booking-reference}/cancel
// Submits a cancellation request for the specified booking
//
// For information on how to use this service, see: [Cancellation API workflow](#section/Common-workflows-and-data-validation/Cancellation-API-workflow)
//
// **Note**:
//
//   - This service &lt;u&gt;requires&lt;/u&gt; [exp-api-key](#section/Authentication/exp-api-key) to be included as a header parameter. Please speak to your account manager if you have not yet been issued an exp-api-key.
//   - The base URL for the server for this endpoint is different from the older endpoints described in this document. Use `https://api.sandbox.viator.com/partner/bookings/{booking-reference}/cancel`
func (s *BookingServices) CancelBooking(ctx context.Context, request operations.CancelBookingRequest) (*operations.CancelBookingResponse, error) {
	baseURL := operations.CancelBookingServerList[0]
	if request.ServerURL != nil {
		baseURL = *request.ServerURL
	}

	url := utils.GenerateURL(ctx, baseURL, "/bookings/{booking-reference}/cancel", request.PathParams)

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

	client := s._securityClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.CancelBookingResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.CancelBookingResponse
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.CancelBookingResponse = out
		}
	case httpRes.StatusCode == 400:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *operations.CancelBooking400ApplicationJSON
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.CancelBooking400ApplicationJSONObject = out
		}
	case httpRes.StatusCode == 401:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.FourHundredAndOneUnauthorized
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.FourHundredAndOneUnauthorized = out
		}
	case httpRes.StatusCode == 404:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *operations.CancelBooking404ApplicationJSON
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.CancelBooking404ApplicationJSONObject = out
		}
	case httpRes.StatusCode == 406:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.FourHundredAndSixNotAcceptable
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.FourHundredAndSixNotAcceptable = out
		}
	case httpRes.StatusCode == 500:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.FiveHundredInternalServerError
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.FiveHundredInternalServerError = out
		}
	case httpRes.StatusCode == 503:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.FiveHundredAndThreeServiceUnavailable
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.FiveHundredAndThreeServiceUnavailable = out
		}
	}

	return res, nil
}

// CancelBookingQuote - /bookings/{booking-reference}/cancel-quote
// Retrieves a quote for the cancellation of a booking
//
// For information on how to use this service, see: [Cancellation API workflow](#section/Common-workflows-and-data-validation/Cancellation-API-workflow)
//
// **Note**:
//
//   - This service &lt;u&gt;requires&lt;/u&gt; [exp-api-key](#section/Authentication/exp-api-key) to be included as a header parameter. Please speak to your account manager if you have not yet been issued an exp-api-key.
//   - The base URL for the server for this endpoint is different from the older endpoints described in this document. Use `https://api.sandbox.viator.com/partner/bookings/{booking-reference}/cancel-quote`
func (s *BookingServices) CancelBookingQuote(ctx context.Context, request operations.CancelBookingQuoteRequest) (*operations.CancelBookingQuoteResponse, error) {
	baseURL := operations.CancelBookingQuoteServerList[0]
	if request.ServerURL != nil {
		baseURL = *request.ServerURL
	}

	url := utils.GenerateURL(ctx, baseURL, "/bookings/{booking-reference}/cancel-quote", request.PathParams)

	req, err := http.NewRequestWithContext(ctx, "GET", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	client := s._securityClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.CancelBookingQuoteResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.CancelBookingQuoteResponse
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.CancelBookingQuoteResponse = out
		}
	case httpRes.StatusCode == 401:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.FourHundredAndOneUnauthorized
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.FourHundredAndOneUnauthorized = out
		}
	case httpRes.StatusCode == 406:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.FourHundredAndSixNotAcceptable
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.FourHundredAndSixNotAcceptable = out
		}
	case httpRes.StatusCode == 500:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.FiveHundredInternalServerError
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.FiveHundredInternalServerError = out
		}
	case httpRes.StatusCode == 503:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.FiveHundredAndThreeServiceUnavailable
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.FiveHundredAndThreeServiceUnavailable = out
		}
	}

	return res, nil
}

// CancellationReasons - /bookings/cancel-reasons
// Retrieves a dictionary of unique identification codes (`cancellationReasonCode`) and their associated natural-language descriptions (`cancellationReasonText`).
//
// For information on how to use this service, see: [Cancellation API workflow](#section/Common-workflows-and-data-validation/Cancellation-API-workflow)
//
// **Note**:
//
//   - This service &lt;u&gt;requires&lt;/u&gt; [exp-api-key](#section/Authentication/exp-api-key) to be included as a header parameter. Please speak to your account manager if you have not yet been issued an exp-api-key.
//   - The base URL for the server for this endpoint is different from the older endpoints described in this document. Use `https://api.sandbox.viator.com/partner/cancel-reasons`
func (s *BookingServices) CancellationReasons(ctx context.Context, request operations.CancellationReasonsRequest) (*operations.CancellationReasonsResponse, error) {
	baseURL := operations.CancellationReasonsServerList[0]
	if request.ServerURL != nil {
		baseURL = *request.ServerURL
	}

	url := strings.TrimSuffix(baseURL, "/") + "/bookings/cancel-reasons"

	req, err := http.NewRequestWithContext(ctx, "GET", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	utils.PopulateHeaders(ctx, req, request.Headers)

	client := s._securityClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.CancellationReasonsResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out []shared.CancellationReasonsResponse
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.CancellationReasonsResponses = out
		}
	case httpRes.StatusCode == 401:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.FourHundredAndOneUnauthorized
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.FourHundredAndOneUnauthorized = out
		}
	case httpRes.StatusCode == 406:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.FourHundredAndSixNotAcceptable
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.FourHundredAndSixNotAcceptable = out
		}
	case httpRes.StatusCode == 500:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.FiveHundredInternalServerError
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.FiveHundredInternalServerError = out
		}
	case httpRes.StatusCode == 503:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.FiveHundredAndThreeServiceUnavailable
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.FiveHundredAndThreeServiceUnavailable = out
		}
	}

	return res, nil
}
