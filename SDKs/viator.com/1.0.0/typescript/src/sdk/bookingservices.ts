import { AxiosError, AxiosInstance, AxiosRequestConfig, AxiosResponse, ParamsSerializerOptions } from "axios";
import FormData from "form-data";
import * as operations from "./models/operations";
import * as utils from "../internal/utils";

export class BookingServices {
  _defaultClient: AxiosInstance;
  _securityClient: AxiosInstance;
  _serverURL: string;
  _language: string;
  _sdkVersion: string;
  _genVersion: string;

  constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string) {
    this._defaultClient = defaultClient;
    this._securityClient = securityClient;
    this._serverURL = serverURL;
    this._language = language;
    this._sdkVersion = sdkVersion;
    this._genVersion = genVersion;
  }
  
  /**
   * bookingAvailability - /booking/availability
   *
   * Get the tour-grade with the lowest price that is available for a product on each day of the specified month
   * 
   * This service:
   * - returns 
   * - useful when displaying a calendar of available tours
   * - For more information, see: [Availability services](#section/Key-concepts/Availability-services)
   * - **Notes:** 
   *   - [/booking/availability/dates](#operation/bookingAvailabilityDates) provides all availability in one call and is more suitable for calendars, etc.
   * 
   *   - Availability data is limited to a period of **12 months** into the future from the present time on the production server and **6 months** on the sandbox server. 
   * 
  **/
  bookingAvailability(
    req: operations.BookingAvailabilityRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.BookingAvailabilityResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.BookingAvailabilityRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/booking/availability";

    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = utils.SerializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    
    const client: AxiosInstance = this._securityClient!;
    const headers = {...utils.GetHeadersFromRequest(req.headers), ...reqBodyHeaders, ...config?.headers};
    let body: any;
    if (reqBody instanceof FormData) body = reqBody;
    else body = {...reqBody};
    return client
      .request({
        url: url,
        method: "post",
        headers: headers,
        data: body, 
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.BookingAvailabilityResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.bookingAvailability200ApplicationJsonObject = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * bookingAvailabilityDates - /booking/availability/dates
   *
   * Get dates on which a product is available
   * 
   * This service:
   * - retrieves all available dates for a product, excluding days it does not operate and blocked-out dates
   * - returns a multi-dimensional array of year-month -&gt; days that have any availabile tour grade or traveler mix
   * - useful to present the user with a list of dates for selection on which *this* product is available for booking
   * - **Notes**: 
   * 
   *   - The user's desired traveler mix may not be eligible for booking; these details can be displayed when you retrieve its list of tour grades
   *   - Availability data is limited to a period of **12 months** into the future from the present time on the production server and **6 months** on the sandbox server. 
   * 
  **/
  bookingAvailabilityDates(
    req: operations.BookingAvailabilityDatesRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.BookingAvailabilityDatesResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.BookingAvailabilityDatesRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/booking/availability/dates";
    
    const client: AxiosInstance = this._securityClient!;
    const headers = {...utils.GetHeadersFromRequest(req.headers), ...config?.headers};
    const qpSerializer: ParamsSerializerOptions = utils.GetQueryParamSerializer(req.queryParams);

    const requestConfig: AxiosRequestConfig = {
      ...config,
      params: req.queryParams,
      paramsSerializer: qpSerializer,
    };
    
    return client
      .request({
        url: url,
        method: "get",
        headers: headers,
        ...requestConfig,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.BookingAvailabilityDatesResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.bookingAvailabilityDates200ApplicationJsonObject = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * bookingAvailabilityTourgrades - /booking/availability/tourgrades
   *
   * Get the tour grades of a product that are currently available
   * 
   * This service reports:
   * - all tour grades for the specified product, on the specified day, that are available for the specified age bands
   * - the pricing breakdown and the total depending on the travel date and traveler mix
   * 
   * **Note**: Availability data is limited to a period of **12 months** into the future from the present time on the production server and **6 months** on the sandbox server. 
   * 
  **/
  bookingAvailabilityTourgrades(
    req: operations.BookingAvailabilityTourgradesRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.BookingAvailabilityTourgradesResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.BookingAvailabilityTourgradesRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/booking/availability/tourgrades";

    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = utils.SerializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    
    const client: AxiosInstance = this._securityClient!;
    const headers = {...utils.GetHeadersFromRequest(req.headers), ...reqBodyHeaders, ...config?.headers};
    let body: any;
    if (reqBody instanceof FormData) body = reqBody;
    else body = {...reqBody};
    return client
      .request({
        url: url,
        method: "post",
        headers: headers,
        data: body, 
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.BookingAvailabilityTourgradesResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.bookingAvailabilityTourgrades200ApplicationJsonObject = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * bookingAvailabilityTourgradesPricingmatrix - /booking/availability/tourgrades/pricingmatrix
   *
   * Get a pricing matrix that includes availability and tour-grades for a product
   * 
   * Given a month, this service returns days with available tour grades only (i.e., days which have at least one tourgrade available), and the pricing matrix for that tour grade for that day.
   * 
   * - **Note**: Availability data is limited to a period of **12 months** into the future from the present time on the production server and **6 months** on the sandbox server. 
   * 
  **/
  bookingAvailabilityTourgradesPricingmatrix(
    req: operations.BookingAvailabilityTourgradesPricingmatrixRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.BookingAvailabilityTourgradesPricingmatrixResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.BookingAvailabilityTourgradesPricingmatrixRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/booking/availability/tourgrades/pricingmatrix";

    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = utils.SerializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    
    const client: AxiosInstance = this._securityClient!;
    const headers = {...utils.GetHeadersFromRequest(req.headers), ...reqBodyHeaders, ...config?.headers};
    let body: any;
    if (reqBody instanceof FormData) body = reqBody;
    else body = {...reqBody};
    return client
      .request({
        url: url,
        method: "post",
        headers: headers,
        data: body, 
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.BookingAvailabilityTourgradesPricingmatrixResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.bookingAvailabilityTourgradesPricingmatrix200ApplicationJsonObject = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * bookingBook - /booking/book
   *
   * Make a booking
   * 
   * For more information, see: 
   * 
   *   - [Cancellation policy](#section/Key-concepts/Cancellation-policy)
   *   - [Booking concepts](#section/Key-concepts/Booking-concepts)
   *   - [Booking process flow](#section/Common-workflows-and-data-validation/Booking-process-flow)
   *   - [Making a booking](#section/Common-workflows-and-data-validation/Making-a-booking)
   *   - [Supplier communications](#section/Key-concepts/Supplier-communications)
   * 
  **/
  bookingBook(
    req: operations.BookingBookRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.BookingBookResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.BookingBookRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/booking/book";

    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = utils.SerializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    
    const client: AxiosInstance = this._securityClient!;
    const headers = {...utils.GetHeadersFromRequest(req.headers), ...reqBodyHeaders, ...config?.headers};
    let body: any;
    if (reqBody instanceof FormData) body = reqBody;
    else body = {...reqBody};
    return client
      .request({
        url: url,
        method: "post",
        headers: headers,
        data: body, 
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.BookingBookResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.bookingBook200ApplicationJsonObject = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * bookingCalculateprice - /booking/calculateprice
   *
   * Confirm the price of a tour / activity prior to booking
   * 
   * For more information, see: [Calculating prices](#section/Common-workflows-and-data-validation/Calculating-prices)  
   * 
   * - **Note**: Availability and pricing data is limited to a period of **six months** into the future from the present time
   * 
  **/
  bookingCalculateprice(
    req: operations.BookingCalculatepriceRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.BookingCalculatepriceResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.BookingCalculatepriceRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/booking/calculateprice";

    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = utils.SerializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    
    const client: AxiosInstance = this._securityClient!;
    const headers = {...utils.GetHeadersFromRequest(req.headers), ...reqBodyHeaders, ...config?.headers};
    let body: any;
    if (reqBody instanceof FormData) body = reqBody;
    else body = {...reqBody};
    return client
      .request({
        url: url,
        method: "post",
        headers: headers,
        data: body, 
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.BookingCalculatepriceResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.bookingCalculateprice200ApplicationJsonObject = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * bookingHotels - /booking/hotels
   *
   * Get hotel pick-ups
   * Lists the hotel pickups available for either a product or a destination
   * 
  **/
  bookingHotels(
    req: operations.BookingHotelsRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.BookingHotelsResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.BookingHotelsRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/booking/hotels";
    
    const client: AxiosInstance = this._securityClient!;
    const headers = {...utils.GetHeadersFromRequest(req.headers), ...config?.headers};
    const qpSerializer: ParamsSerializerOptions = utils.GetQueryParamSerializer(req.queryParams);

    const requestConfig: AxiosRequestConfig = {
      ...config,
      params: req.queryParams,
      paramsSerializer: qpSerializer,
    };
    
    return client
      .request({
        url: url,
        method: "get",
        headers: headers,
        ...requestConfig,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.BookingHotelsResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.bookingHotels200ApplicationJsonObject = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * bookingMybookings - /booking/mybookings
   *
   * Get a user's bookings with travel dates in the future. 
   * 
   * This service can also be used to check the status of a booking. 
   * 
   * **Provide either:** 
   * - A `voucherKey`, **or...** 
   * - An email address (`email`) and a booking reference (`itineraryOrItemId`) ([Booking Reference](#section/Key-concepts/Booking-references))
   * 
  **/
  bookingMybookings(
    req: operations.BookingMybookingsRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.BookingMybookingsResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.BookingMybookingsRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/booking/mybookings";
    
    const client: AxiosInstance = this._securityClient!;
    const headers = {...utils.GetHeadersFromRequest(req.headers), ...config?.headers};
    const qpSerializer: ParamsSerializerOptions = utils.GetQueryParamSerializer(req.queryParams);

    const requestConfig: AxiosRequestConfig = {
      ...config,
      params: req.queryParams,
      paramsSerializer: qpSerializer,
    };
    
    return client
      .request({
        url: url,
        method: "get",
        headers: headers,
        ...requestConfig,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.BookingMybookingsResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.bookingMybookings200ApplicationJsonObject = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * bookingPastbooking - /booking/pastbooking
   *
   * Get the details of a single specific past booking based on the `voucherKey` or `itemId` and email address sent in the request.
   * 
   * **Note**: this service will only return past bookings that were made with the same API key that was used to make the booking
   * 
   * **Sample query parameters**:
   * - email=apitest@viator.com&amp;itemId=580669678
   * 
   * **or**
   * - voucherKey=1005851866:4af44c13ecf3f1a7d3f9ef2fc00c2257e08fa42ae20f877f3039ff9b52aba24e:580669678
   * 
   * **email**
   * - The email address passed must match the email address associated with the booking
   * 
   * **Departure details**
   * 
   * - Departure details such as the `departurePoint`, `departurePointAddress` and `departurePointDirections` is included in the response. 
   * - These fields may contain HTML escape characters such as &amp;amp; and special characters that are escaped by a backslash. Ensure that these fields are parsed after receiving the response as it will cause your JSON to be invalid.
   * 
   * For more information, see: [Reviewing bookings](#section/Common-workflows-and-data-validation/Reviewing-bookings)
   * 
  **/
  bookingPastbooking(
    req: operations.BookingPastbookingRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.BookingPastbookingResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.BookingPastbookingRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/booking/pastbooking";
    
    const client: AxiosInstance = this._securityClient!;
    const headers = {...utils.GetHeadersFromRequest(req.headers), ...config?.headers};
    const qpSerializer: ParamsSerializerOptions = utils.GetQueryParamSerializer(req.queryParams);

    const requestConfig: AxiosRequestConfig = {
      ...config,
      params: req.queryParams,
      paramsSerializer: qpSerializer,
    };
    
    return client
      .request({
        url: url,
        method: "get",
        headers: headers,
        ...requestConfig,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.BookingPastbookingResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.bookingPastbooking200ApplicationJsonObject = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * bookingPricingmatrix - /booking/pricingmatrix
   *
   * Get the pricing matrix for tour-grades, product age bands and pax mixes
   * 
   * For more information, see: [Get the tour-grade pricing matrix](#section/Common-workflows-and-data-validation/Get-the-tour-grade-pricing-matrix)
   * 
  **/
  bookingPricingmatrix(
    req: operations.BookingPricingmatrixRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.BookingPricingmatrixResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.BookingPricingmatrixRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/booking/pricingmatrix";

    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = utils.SerializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    
    const client: AxiosInstance = this._securityClient!;
    const headers = {...utils.GetHeadersFromRequest(req.headers), ...reqBodyHeaders, ...config?.headers};
    let body: any;
    if (reqBody instanceof FormData) body = reqBody;
    else body = {...reqBody};
    return client
      .request({
        url: url,
        method: "post",
        headers: headers,
        data: body, 
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.BookingPricingmatrixResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.bookingPricingmatrix200ApplicationJsonObject = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * bookingStatus - /booking/status
   *
   * Get the booking status for multiple items based on different criteria
   * 
   * This service: 
   * - is ideally be used in software for bulk updates of pending bookings
   * - returns a maximum of 1000 bookings (narrow your search if you expect a greater number of results)
   * - will return &lt;u&gt;both&lt;/u&gt; live &lt;u&gt;and&lt;/u&gt; test bookings
   * - rate limited to &lt;u&gt;one request every 30 minutes&lt;/u&gt;
   * - For more information, see: [Get the bookiing status for multiple items](#section/Common-workflows-and-data-validation/Get-the-booking-status-for-multiple-items)
   * 
   * **Exceeding the rate limit**
   * - You will receive the following error message if you exceed the rate limit allowed for this service. Set `test` to `true` to bypass this limit:
   * ```javascript
   * {
   *     "data": null
   *     "vmid": 221002
   *     "errorMessage": ["Access allowed every 30 minutes"]
   *     "errorType": "EXCEPTION"
   *     "dateStamp": "2013-03-26T10:28:51+0000"
   *     "errorReference": 55315512721712161381352771
   *     "errorMessageText": ["Access allowed every 30 minutes"]
   *     "success": false
   *     "totalCount": 1
   *     "errorName": "PollingDeniedException"  
   * }
   * ```
   * 
  **/
  bookingStatus(
    req: operations.BookingStatusRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.BookingStatusResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.BookingStatusRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/booking/status";

    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = utils.SerializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    
    const client: AxiosInstance = this._securityClient!;
    const headers = {...utils.GetHeadersFromRequest(req.headers), ...reqBodyHeaders, ...config?.headers};
    let body: any;
    if (reqBody instanceof FormData) body = reqBody;
    else body = {...reqBody};
    return client
      .request({
        url: url,
        method: "post",
        headers: headers,
        data: body, 
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.BookingStatusResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.bookingStatus200ApplicationJsonObject = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * bookingStatusItems - /booking/status/items
   *
   * Get brief booking statuses
   * 
   * This service is similar to [/booking/status](#operation/bookingStatus) in that it:
   * - retrieves the booking status for multiple items based on different criteria
   * - has the same request parameters as [/booking/status](#operation/bookingStatus)
   * 
   * However, it differs in that it returns a multi-item array of booking items with less detail than what would be received from [/booking/status](#operation/bookingStatus).
   * 
  **/
  bookingStatusItems(
    req: operations.BookingStatusItemsRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.BookingStatusItemsResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.BookingStatusItemsRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/booking/status/items";

    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = utils.SerializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    
    const client: AxiosInstance = this._securityClient!;
    const headers = {...utils.GetHeadersFromRequest(req.headers), ...reqBodyHeaders, ...config?.headers};
    let body: any;
    if (reqBody instanceof FormData) body = reqBody;
    else body = {...reqBody};
    return client
      .request({
        url: url,
        method: "post",
        headers: headers,
        data: body, 
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.BookingStatusItemsResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.bookingStatusItems200ApplicationJsonObject = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * bookingVoucher - /booking/voucher
   *
   * Get voucher details
   * - Use this service to retrieve the voucher details of a booked item.
   * - The data returned is HTML-formatted and can be wrapped in a header and/or footer.
   * 
   * **Sample query parameters**
   * - leadLastName=Simpson test&amp;itemId=580669678
   * 
   * **or** 
   * - voucherKey=1005851866:4af44c13ecf3f1a7d3f9ef2fc00c2257e08fa42ae20f877f3039ff9b52aba24e:580669678&amp;fullHTML=true&amp;mobileVoucher=true
   * 
  **/
  bookingVoucher(
    req: operations.BookingVoucherRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.BookingVoucherResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.BookingVoucherRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/booking/voucher";
    
    const client: AxiosInstance = this._securityClient!;
    const headers = {...utils.GetHeadersFromRequest(req.headers), ...config?.headers};
    const qpSerializer: ParamsSerializerOptions = utils.GetQueryParamSerializer(req.queryParams);

    const requestConfig: AxiosRequestConfig = {
      ...config,
      params: req.queryParams,
      paramsSerializer: qpSerializer,
    };
    
    return client
      .request({
        url: url,
        method: "get",
        headers: headers,
        ...requestConfig,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.BookingVoucherResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.bookingVoucher200ApplicationJsonObject = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * cancelBooking - /bookings/{booking-reference}/cancel
   *
   * Submits a cancellation request for the specified booking
   * 
   * For information on how to use this service, see: [Cancellation API workflow](#section/Common-workflows-and-data-validation/Cancellation-API-workflow)
   * 
   * **Note**: 
   * 
   *   * This service &lt;u&gt;requires&lt;/u&gt; [exp-api-key](#section/Authentication/exp-api-key) to be included as a header parameter. Please speak to your account manager if you have not yet been issued an exp-api-key.
   *   * The base URL for the server for this endpoint is different from the older endpoints described in this document. Use `https://api.sandbox.viator.com/partner/bookings/{booking-reference}/cancel`
   * 
  **/
  cancelBooking(
    req: operations.CancelBookingRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.CancelBookingResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.CancelBookingRequest(req);
    }
    
    let baseURL: string = operations.CancelBookingServerList[0];
    if (req.serverUrl) {
      baseURL = req.serverUrl;
    }
    const url: string = utils.GenerateURL(baseURL, "/bookings/{booking-reference}/cancel", req.pathParams);

    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = utils.SerializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    
    const client: AxiosInstance = this._securityClient!;
    const headers = {...utils.GetHeadersFromRequest(req.headers), ...reqBodyHeaders, ...config?.headers};
    let body: any;
    if (reqBody instanceof FormData) body = reqBody;
    else body = {...reqBody};
    return client
      .request({
        url: url,
        method: "post",
        headers: headers,
        data: body, 
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.CancelBookingResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.cancelBookingResponse = httpRes?.data;
            }
            break;
          case httpRes?.status == 400:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.cancelBooking400ApplicationJsonObject = httpRes?.data;
            }
            break;
          case httpRes?.status == 401:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.fourHundredAndOneUnauthorized = httpRes?.data;
            }
            break;
          case httpRes?.status == 404:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.cancelBooking404ApplicationJsonObject = httpRes?.data;
            }
            break;
          case httpRes?.status == 406:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.fourHundredAndSixNotAcceptable = httpRes?.data;
            }
            break;
          case httpRes?.status == 500:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.fiveHundredInternalServerError = httpRes?.data;
            }
            break;
          case httpRes?.status == 503:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.fiveHundredAndThreeServiceUnavailable = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * cancelBookingQuote - /bookings/{booking-reference}/cancel-quote
   *
   * Retrieves a quote for the cancellation of a booking
   * 
   * For information on how to use this service, see: [Cancellation API workflow](#section/Common-workflows-and-data-validation/Cancellation-API-workflow)
   * 
   * **Note**: 
   * 
   *   * This service &lt;u&gt;requires&lt;/u&gt; [exp-api-key](#section/Authentication/exp-api-key) to be included as a header parameter. Please speak to your account manager if you have not yet been issued an exp-api-key.
   *   * The base URL for the server for this endpoint is different from the older endpoints described in this document. Use `https://api.sandbox.viator.com/partner/bookings/{booking-reference}/cancel-quote`
   * 
  **/
  cancelBookingQuote(
    req: operations.CancelBookingQuoteRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.CancelBookingQuoteResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.CancelBookingQuoteRequest(req);
    }
    
    let baseURL: string = operations.CancelBookingQuoteServerList[0];
    if (req.serverUrl) {
      baseURL = req.serverUrl;
    }
    const url: string = utils.GenerateURL(baseURL, "/bookings/{booking-reference}/cancel-quote", req.pathParams);
    
    const client: AxiosInstance = this._securityClient!;
    
    return client
      .request({
        url: url,
        method: "get",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.CancelBookingQuoteResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.cancelBookingQuoteResponse = httpRes?.data;
            }
            break;
          case httpRes?.status == 401:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.fourHundredAndOneUnauthorized = httpRes?.data;
            }
            break;
          case httpRes?.status == 406:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.fourHundredAndSixNotAcceptable = httpRes?.data;
            }
            break;
          case httpRes?.status == 500:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.fiveHundredInternalServerError = httpRes?.data;
            }
            break;
          case httpRes?.status == 503:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.fiveHundredAndThreeServiceUnavailable = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * cancellationReasons - /bookings/cancel-reasons
   *
   * Retrieves a dictionary of unique identification codes (`cancellationReasonCode`) and their associated natural-language descriptions (`cancellationReasonText`).
   * 
   * For information on how to use this service, see: [Cancellation API workflow](#section/Common-workflows-and-data-validation/Cancellation-API-workflow)
   * 
   * **Note**: 
   * 
   *   * This service &lt;u&gt;requires&lt;/u&gt; [exp-api-key](#section/Authentication/exp-api-key) to be included as a header parameter. Please speak to your account manager if you have not yet been issued an exp-api-key.
   *   * The base URL for the server for this endpoint is different from the older endpoints described in this document. Use `https://api.sandbox.viator.com/partner/cancel-reasons`
   * 
  **/
  cancellationReasons(
    req: operations.CancellationReasonsRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.CancellationReasonsResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.CancellationReasonsRequest(req);
    }
    
    let baseURL: string = operations.CancellationReasonsServerList[0];
    if (req.serverUrl) {
      baseURL = req.serverUrl;
    }
    const url: string = baseURL.replace(/\/$/, "") + "/bookings/cancel-reasons";
    
    const client: AxiosInstance = this._securityClient!;
    const headers = {...utils.GetHeadersFromRequest(req.headers), ...config?.headers};
    return client
      .request({
        url: url,
        method: "get",
        headers: headers,
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.CancellationReasonsResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.cancellationReasonsResponses = httpRes?.data;
            }
            break;
          case httpRes?.status == 401:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.fourHundredAndOneUnauthorized = httpRes?.data;
            }
            break;
          case httpRes?.status == 406:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.fourHundredAndSixNotAcceptable = httpRes?.data;
            }
            break;
          case httpRes?.status == 500:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.fiveHundredInternalServerError = httpRes?.data;
            }
            break;
          case httpRes?.status == 503:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.fiveHundredAndThreeServiceUnavailable = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

}
