import requests
from typing import List,Optional
from sdk.models import shared, operations
from . import utils

class BookingServices:
    _client: requests.Session
    _security_client: requests.Session
    _server_url: str
    _language: str
    _sdk_version: str
    _gen_version: str

    def __init__(self, client: requests.Session, security_client: requests.Session, server_url: str, language: str, sdk_version: str, gen_version: str) -> None:
        self._client = client
        self._security_client = security_client
        self._server_url = server_url
        self._language = language
        self._sdk_version = sdk_version
        self._gen_version = gen_version

    
    def booking_availability(self, request: operations.BookingAvailabilityRequest) -> operations.BookingAvailabilityResponse:
        r"""/booking/availability
        Get the tour-grade with the lowest price that is available for a product on each day of the specified month
        
        This service:
        - returns 
        - useful when displaying a calendar of available tours
        - For more information, see: [Availability services](#section/Key-concepts/Availability-services)
        - **Notes:** 
          - [/booking/availability/dates](#operation/bookingAvailabilityDates) provides all availability in one call and is more suitable for calendars, etc.
        
          - Availability data is limited to a period of **12 months** into the future from the present time on the production server and **6 months** on the sandbox server. 
        
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/booking/availability"
        
        headers = utils.get_headers(request.headers)
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = self._security_client
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.BookingAvailabilityResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.BookingAvailability200ApplicationJSON])
                res.booking_availability_200_application_json_object = out

        return res

    
    def booking_availability_dates(self, request: operations.BookingAvailabilityDatesRequest) -> operations.BookingAvailabilityDatesResponse:
        r"""/booking/availability/dates
        Get dates on which a product is available
        
        This service:
        - retrieves all available dates for a product, excluding days it does not operate and blocked-out dates
        - returns a multi-dimensional array of year-month -&gt; days that have any availabile tour grade or traveler mix
        - useful to present the user with a list of dates for selection on which *this* product is available for booking
        - **Notes**: 
        
          - The user's desired traveler mix may not be eligible for booking; these details can be displayed when you retrieve its list of tour grades
          - Availability data is limited to a period of **12 months** into the future from the present time on the production server and **6 months** on the sandbox server. 
        
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/booking/availability/dates"
        
        headers = utils.get_headers(request.headers)
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("GET", url, params=query_params, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.BookingAvailabilityDatesResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.BookingAvailabilityDates200ApplicationJSON])
                res.booking_availability_dates_200_application_json_object = out

        return res

    
    def booking_availability_tourgrades(self, request: operations.BookingAvailabilityTourgradesRequest) -> operations.BookingAvailabilityTourgradesResponse:
        r"""/booking/availability/tourgrades
        Get the tour grades of a product that are currently available
        
        This service reports:
        - all tour grades for the specified product, on the specified day, that are available for the specified age bands
        - the pricing breakdown and the total depending on the travel date and traveler mix
        
        **Note**: Availability data is limited to a period of **12 months** into the future from the present time on the production server and **6 months** on the sandbox server. 
        
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/booking/availability/tourgrades"
        
        headers = utils.get_headers(request.headers)
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = self._security_client
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.BookingAvailabilityTourgradesResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.BookingAvailabilityTourgrades200ApplicationJSON])
                res.booking_availability_tourgrades_200_application_json_object = out

        return res

    
    def booking_availability_tourgrades_pricingmatrix(self, request: operations.BookingAvailabilityTourgradesPricingmatrixRequest) -> operations.BookingAvailabilityTourgradesPricingmatrixResponse:
        r"""/booking/availability/tourgrades/pricingmatrix
        Get a pricing matrix that includes availability and tour-grades for a product
        
        Given a month, this service returns days with available tour grades only (i.e., days which have at least one tourgrade available), and the pricing matrix for that tour grade for that day.
        
        - **Note**: Availability data is limited to a period of **12 months** into the future from the present time on the production server and **6 months** on the sandbox server. 
        
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/booking/availability/tourgrades/pricingmatrix"
        
        headers = utils.get_headers(request.headers)
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = self._security_client
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.BookingAvailabilityTourgradesPricingmatrixResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.BookingAvailabilityTourgradesPricingmatrix200ApplicationJSON])
                res.booking_availability_tourgrades_pricingmatrix_200_application_json_object = out

        return res

    
    def booking_book(self, request: operations.BookingBookRequest) -> operations.BookingBookResponse:
        r"""/booking/book
        Make a booking
        
        For more information, see: 
        
          - [Cancellation policy](#section/Key-concepts/Cancellation-policy)
          - [Booking concepts](#section/Key-concepts/Booking-concepts)
          - [Booking process flow](#section/Common-workflows-and-data-validation/Booking-process-flow)
          - [Making a booking](#section/Common-workflows-and-data-validation/Making-a-booking)
          - [Supplier communications](#section/Key-concepts/Supplier-communications)
        
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/booking/book"
        
        headers = utils.get_headers(request.headers)
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = self._security_client
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.BookingBookResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.BookingBook200ApplicationJSON])
                res.booking_book_200_application_json_object = out

        return res

    
    def booking_calculateprice(self, request: operations.BookingCalculatepriceRequest) -> operations.BookingCalculatepriceResponse:
        r"""/booking/calculateprice
        Confirm the price of a tour / activity prior to booking
        
        For more information, see: [Calculating prices](#section/Common-workflows-and-data-validation/Calculating-prices)  
        
        - **Note**: Availability and pricing data is limited to a period of **six months** into the future from the present time
        
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/booking/calculateprice"
        
        headers = utils.get_headers(request.headers)
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = self._security_client
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.BookingCalculatepriceResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.BookingCalculateprice200ApplicationJSON])
                res.booking_calculateprice_200_application_json_object = out

        return res

    
    def booking_hotels(self, request: operations.BookingHotelsRequest) -> operations.BookingHotelsResponse:
        r"""/booking/hotels
        Get hotel pick-ups
        Lists the hotel pickups available for either a product or a destination
        
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/booking/hotels"
        
        headers = utils.get_headers(request.headers)
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("GET", url, params=query_params, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.BookingHotelsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.BookingHotels200ApplicationJSON])
                res.booking_hotels_200_application_json_object = out

        return res

    
    def booking_mybookings(self, request: operations.BookingMybookingsRequest) -> operations.BookingMybookingsResponse:
        r"""/booking/mybookings
        Get a user's bookings with travel dates in the future. 
        
        This service can also be used to check the status of a booking. 
        
        **Provide either:** 
        - A `voucherKey`, **or...** 
        - An email address (`email`) and a booking reference (`itineraryOrItemId`) ([Booking Reference](#section/Key-concepts/Booking-references))
        
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/booking/mybookings"
        
        headers = utils.get_headers(request.headers)
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("GET", url, params=query_params, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.BookingMybookingsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.BookingMybookings200ApplicationJSON])
                res.booking_mybookings_200_application_json_object = out

        return res

    
    def booking_pastbooking(self, request: operations.BookingPastbookingRequest) -> operations.BookingPastbookingResponse:
        r"""/booking/pastbooking
        Get the details of a single specific past booking based on the `voucherKey` or `itemId` and email address sent in the request.
        
        **Note**: this service will only return past bookings that were made with the same API key that was used to make the booking
        
        **Sample query parameters**:
        - email=apitest@viator.com&amp;itemId=580669678
        
        **or**
        - voucherKey=1005851866:4af44c13ecf3f1a7d3f9ef2fc00c2257e08fa42ae20f877f3039ff9b52aba24e:580669678
        
        **email**
        - The email address passed must match the email address associated with the booking
        
        **Departure details**
        
        - Departure details such as the `departurePoint`, `departurePointAddress` and `departurePointDirections` is included in the response. 
        - These fields may contain HTML escape characters such as &amp;amp; and special characters that are escaped by a backslash. Ensure that these fields are parsed after receiving the response as it will cause your JSON to be invalid.
        
        For more information, see: [Reviewing bookings](#section/Common-workflows-and-data-validation/Reviewing-bookings)
        
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/booking/pastbooking"
        
        headers = utils.get_headers(request.headers)
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("GET", url, params=query_params, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.BookingPastbookingResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.BookingPastbooking200ApplicationJSON])
                res.booking_pastbooking_200_application_json_object = out

        return res

    
    def booking_pricingmatrix(self, request: operations.BookingPricingmatrixRequest) -> operations.BookingPricingmatrixResponse:
        r"""/booking/pricingmatrix
        Get the pricing matrix for tour-grades, product age bands and pax mixes
        
        For more information, see: [Get the tour-grade pricing matrix](#section/Common-workflows-and-data-validation/Get-the-tour-grade-pricing-matrix)
        
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/booking/pricingmatrix"
        
        headers = utils.get_headers(request.headers)
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = self._security_client
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.BookingPricingmatrixResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.BookingPricingmatrix200ApplicationJSON])
                res.booking_pricingmatrix_200_application_json_object = out

        return res

    
    def booking_status(self, request: operations.BookingStatusRequest) -> operations.BookingStatusResponse:
        r"""/booking/status
        Get the booking status for multiple items based on different criteria
        
        This service: 
        - is ideally be used in software for bulk updates of pending bookings
        - returns a maximum of 1000 bookings (narrow your search if you expect a greater number of results)
        - will return &lt;u&gt;both&lt;/u&gt; live &lt;u&gt;and&lt;/u&gt; test bookings
        - rate limited to &lt;u&gt;one request every 30 minutes&lt;/u&gt;
        - For more information, see: [Get the bookiing status for multiple items](#section/Common-workflows-and-data-validation/Get-the-booking-status-for-multiple-items)
        
        **Exceeding the rate limit**
        - You will receive the following error message if you exceed the rate limit allowed for this service. Set `test` to `true` to bypass this limit:
        ```javascript
        {
            \"data\": null
            \"vmid\": 221002
            \"errorMessage\": [\"Access allowed every 30 minutes\"]
            \"errorType\": \"EXCEPTION\"
            \"dateStamp\": \"2013-03-26T10:28:51+0000\"
            \"errorReference\": 55315512721712161381352771
            \"errorMessageText\": [\"Access allowed every 30 minutes\"]
            \"success\": false
            \"totalCount\": 1
            \"errorName\": \"PollingDeniedException\"  
        }
        ```
        
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/booking/status"
        
        headers = utils.get_headers(request.headers)
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = self._security_client
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.BookingStatusResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.BookingStatus200ApplicationJSON])
                res.booking_status_200_application_json_object = out

        return res

    
    def booking_status_items(self, request: operations.BookingStatusItemsRequest) -> operations.BookingStatusItemsResponse:
        r"""/booking/status/items
        Get brief booking statuses
        
        This service is similar to [/booking/status](#operation/bookingStatus) in that it:
        - retrieves the booking status for multiple items based on different criteria
        - has the same request parameters as [/booking/status](#operation/bookingStatus)
        
        However, it differs in that it returns a multi-item array of booking items with less detail than what would be received from [/booking/status](#operation/bookingStatus).
        
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/booking/status/items"
        
        headers = utils.get_headers(request.headers)
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = self._security_client
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.BookingStatusItemsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.BookingStatusItems200ApplicationJSON])
                res.booking_status_items_200_application_json_object = out

        return res

    
    def booking_voucher(self, request: operations.BookingVoucherRequest) -> operations.BookingVoucherResponse:
        r"""/booking/voucher
        Get voucher details
        - Use this service to retrieve the voucher details of a booked item.
        - The data returned is HTML-formatted and can be wrapped in a header and/or footer.
        
        **Sample query parameters**
        - leadLastName=Simpson test&amp;itemId=580669678
        
        **or** 
        - voucherKey=1005851866:4af44c13ecf3f1a7d3f9ef2fc00c2257e08fa42ae20f877f3039ff9b52aba24e:580669678&amp;fullHTML=true&amp;mobileVoucher=true
        
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/booking/voucher"
        
        headers = utils.get_headers(request.headers)
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("GET", url, params=query_params, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.BookingVoucherResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.BookingVoucher200ApplicationJSON])
                res.booking_voucher_200_application_json_object = out

        return res

    
    def cancel_booking(self, request: operations.CancelBookingRequest) -> operations.CancelBookingResponse:
        r"""/bookings/{booking-reference}/cancel
        Submits a cancellation request for the specified booking
        
        For information on how to use this service, see: [Cancellation API workflow](#section/Common-workflows-and-data-validation/Cancellation-API-workflow)
        
        **Note**: 
        
          * This service &lt;u&gt;requires&lt;/u&gt; [exp-api-key](#section/Authentication/exp-api-key) to be included as a header parameter. Please speak to your account manager if you have not yet been issued an exp-api-key.
          * The base URL for the server for this endpoint is different from the older endpoints described in this document. Use `https://api.sandbox.viator.com/partner/bookings/{booking-reference}/cancel`
        
        """
        
        base_url = operations.CANCEL_BOOKING_SERVERS[0]
        if request.server_url is not None:
            base_url = request.server_url
        
        
        url = utils.generate_url(base_url, "/bookings/{booking-reference}/cancel", request.path_params)
        
        headers = utils.get_headers(request.headers)
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = self._security_client
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.CancelBookingResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.CancelBookingResponse])
                res.cancel_booking_response = out
        elif r.status_code == 400:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.CancelBooking400ApplicationJSON])
                res.cancel_booking_400_application_json_object = out
        elif r.status_code == 401:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.FourHundredAndOneUnauthorized])
                res.four_hundred_and_one_unauthorized = out
        elif r.status_code == 404:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.CancelBooking404ApplicationJSON])
                res.cancel_booking_404_application_json_object = out
        elif r.status_code == 406:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.FourHundredAndSixNotAcceptable])
                res.four_hundred_and_six_not_acceptable = out
        elif r.status_code == 500:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.FiveHundredInternalServerError])
                res.five_hundred_internal_server_error = out
        elif r.status_code == 503:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.FiveHundredAndThreeServiceUnavailable])
                res.five_hundred_and_three_service_unavailable = out

        return res

    
    def cancel_booking_quote(self, request: operations.CancelBookingQuoteRequest) -> operations.CancelBookingQuoteResponse:
        r"""/bookings/{booking-reference}/cancel-quote
        Retrieves a quote for the cancellation of a booking
        
        For information on how to use this service, see: [Cancellation API workflow](#section/Common-workflows-and-data-validation/Cancellation-API-workflow)
        
        **Note**: 
        
          * This service &lt;u&gt;requires&lt;/u&gt; [exp-api-key](#section/Authentication/exp-api-key) to be included as a header parameter. Please speak to your account manager if you have not yet been issued an exp-api-key.
          * The base URL for the server for this endpoint is different from the older endpoints described in this document. Use `https://api.sandbox.viator.com/partner/bookings/{booking-reference}/cancel-quote`
        
        """
        
        base_url = operations.CANCEL_BOOKING_QUOTE_SERVERS[0]
        if request.server_url is not None:
            base_url = request.server_url
        
        
        url = utils.generate_url(base_url, "/bookings/{booking-reference}/cancel-quote", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.CancelBookingQuoteResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.CancelBookingQuoteResponse])
                res.cancel_booking_quote_response = out
        elif r.status_code == 401:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.FourHundredAndOneUnauthorized])
                res.four_hundred_and_one_unauthorized = out
        elif r.status_code == 406:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.FourHundredAndSixNotAcceptable])
                res.four_hundred_and_six_not_acceptable = out
        elif r.status_code == 500:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.FiveHundredInternalServerError])
                res.five_hundred_internal_server_error = out
        elif r.status_code == 503:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.FiveHundredAndThreeServiceUnavailable])
                res.five_hundred_and_three_service_unavailable = out

        return res

    
    def cancellation_reasons(self, request: operations.CancellationReasonsRequest) -> operations.CancellationReasonsResponse:
        r"""/bookings/cancel-reasons
        Retrieves a dictionary of unique identification codes (`cancellationReasonCode`) and their associated natural-language descriptions (`cancellationReasonText`).
        
        For information on how to use this service, see: [Cancellation API workflow](#section/Common-workflows-and-data-validation/Cancellation-API-workflow)
        
        **Note**: 
        
          * This service &lt;u&gt;requires&lt;/u&gt; [exp-api-key](#section/Authentication/exp-api-key) to be included as a header parameter. Please speak to your account manager if you have not yet been issued an exp-api-key.
          * The base URL for the server for this endpoint is different from the older endpoints described in this document. Use `https://api.sandbox.viator.com/partner/cancel-reasons`
        
        """
        
        base_url = operations.CANCELLATION_REASONS_SERVERS[0]
        if request.server_url is not None:
            base_url = request.server_url
        
        
        url = base_url.removesuffix("/") + "/bookings/cancel-reasons"
        
        headers = utils.get_headers(request.headers)
        
        client = self._security_client
        
        r = client.request("GET", url, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.CancellationReasonsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[List[shared.CancellationReasonsResponse]])
                res.cancellation_reasons_responses = out
        elif r.status_code == 401:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.FourHundredAndOneUnauthorized])
                res.four_hundred_and_one_unauthorized = out
        elif r.status_code == 406:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.FourHundredAndSixNotAcceptable])
                res.four_hundred_and_six_not_acceptable = out
        elif r.status_code == 500:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.FiveHundredInternalServerError])
                res.five_hundred_internal_server_error = out
        elif r.status_code == 503:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.FiveHundredAndThreeServiceUnavailable])
                res.five_hundred_and_three_service_unavailable = out

        return res

    