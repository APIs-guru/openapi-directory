import axios, { AxiosError, AxiosInstance, AxiosRequestConfig, AxiosResponse } from "axios";
import { MatchContentType } from "../internal/utils/contenttype";
import * as operations from "./models/operations";
import { ParamsSerializerOptions } from "axios";
import { GetQueryParamSerializer } from "../internal/utils/queryparams";
import { SerializeRequestBody } from "../internal/utils/requestbody";
import FormData from 'form-data';
import {GetHeadersFromRequest} from "../internal/utils/headers";
import { CreateSecurityClient } from "../internal/utils/security";
import * as utils from "../internal/utils/utils";
import { Security } from "./models/shared";

type OptsFunc = (sdk: SDK) => void;

const Servers = [
  "https://viatorapi.viator.com/service",
  "https://viatorapi.sandbox.viator.com/service",
] as const;

export function WithServerURL(
  serverURL: string,
  params?: Map<string, string>
): OptsFunc {
  return (sdk: SDK) => {
    if (params != null) {
      serverURL = utils.ReplaceParameters(serverURL, params);
    }
    sdk.serverURL = serverURL;
  };
}

export function WithClient(client: AxiosInstance): OptsFunc {
  return (sdk: SDK) => {
    sdk.defaultClient = client;
  };
}

export function WithSecurity(security: Security): OptsFunc {
  if (!(security instanceof utils.SpeakeasyBase)) {
    security = new Security(security);
  }
  return (sdk: SDK) => {
    sdk.security = security;
  };
}


export class SDK {
  defaultClient?: AxiosInstance;
  securityClient?: AxiosInstance;
  security?: any;
  serverURL: string;

  constructor(...opts: OptsFunc[]) {
    opts.forEach((o) => o(this));
    if (this.serverURL == "") {
      this.serverURL = Servers[0];
    }

    if (!this.defaultClient) {
      this.defaultClient = axios.create({ baseURL: this.serverURL });
    }

    if (!this.securityClient) {
      if (this.security) {
        this.securityClient = CreateSecurityClient(
          this.defaultClient,
          this.security
        );
      } else {
        this.securityClient = this.defaultClient;
      }
    }
  }
  
  // AvailableProducts - /available/products
  /** 
   * Find products that are available
   * 
   *  This endpoint returns available products filtered by product code, date range or number of adult travelers
   * 
   * 
   *  - **Note**: Availability data is limited to a period of **12 months** into the future from the present time on the production server and **6 months** on the sandbox server. 
   *  
   * 
  **/
  AvailableProducts(
    req: operations.AvailableProductsRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.AvailableProductsResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.AvailableProductsRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/available/products";
    
    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = SerializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    
    const client: AxiosInstance = this.securityClient!;const headers = { ...GetHeadersFromRequest(req.headers), ...reqBodyHeaders, ...config?.headers};
    
    let body: any;
    if (reqBody instanceof FormData) body = reqBody;
    else body = {...reqBody};
    
    return client
      .post(url, body, {
        headers: headers,
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.AvailableProductsResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.availableProducts200ApplicationJsonObject = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // BookingAvailability - /booking/availability
  /** 
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
  BookingAvailability(
    req: operations.BookingAvailabilityRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.BookingAvailabilityResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.BookingAvailabilityRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/booking/availability";
    
    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = SerializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    
    const client: AxiosInstance = this.securityClient!;const headers = { ...GetHeadersFromRequest(req.headers), ...reqBodyHeaders, ...config?.headers};
    
    let body: any;
    if (reqBody instanceof FormData) body = reqBody;
    else body = {...reqBody};
    
    return client
      .post(url, body, {
        headers: headers,
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.BookingAvailabilityResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.bookingAvailability200ApplicationJsonObject = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // BookingAvailabilityDates - /booking/availability/dates
  /** 
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
  BookingAvailabilityDates(
    req: operations.BookingAvailabilityDatesRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.BookingAvailabilityDatesResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.BookingAvailabilityDatesRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/booking/availability/dates";
    
    const client: AxiosInstance = this.securityClient!;const headers = { ...GetHeadersFromRequest(req.headers), ...config?.headers};
    
    let qpSerializer: ParamsSerializerOptions = GetQueryParamSerializer(req.queryParams);

    const requestConfig: AxiosRequestConfig = {
      ...config,
      params: req.queryParams,
      paramsSerializer: qpSerializer,
    };
    
    return client
      .get(url, {
        ...requestConfig,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.BookingAvailabilityDatesResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.bookingAvailabilityDates200ApplicationJsonObject = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // BookingAvailabilityTourgrades - /booking/availability/tourgrades
  /** 
   * Get the tour grades of a product that are currently available
   * 
   * This service reports:
   * - all tour grades for the specified product, on the specified day, that are available for the specified age bands
   * - the pricing breakdown and the total depending on the travel date and traveler mix
   * 
   * **Note**: Availability data is limited to a period of **12 months** into the future from the present time on the production server and **6 months** on the sandbox server. 
   * 
  **/
  BookingAvailabilityTourgrades(
    req: operations.BookingAvailabilityTourgradesRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.BookingAvailabilityTourgradesResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.BookingAvailabilityTourgradesRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/booking/availability/tourgrades";
    
    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = SerializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    
    const client: AxiosInstance = this.securityClient!;const headers = { ...GetHeadersFromRequest(req.headers), ...reqBodyHeaders, ...config?.headers};
    
    let body: any;
    if (reqBody instanceof FormData) body = reqBody;
    else body = {...reqBody};
    
    return client
      .post(url, body, {
        headers: headers,
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.BookingAvailabilityTourgradesResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.bookingAvailabilityTourgrades200ApplicationJsonObject = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // BookingAvailabilityTourgradesPricingmatrix - /booking/availability/tourgrades/pricingmatrix
  /** 
   * Get a pricing matrix that includes availability and tour-grades for a product
   * 
   * Given a month, this service returns days with available tour grades only (i.e., days which have at least one tourgrade available), and the pricing matrix for that tour grade for that day.
   * 
   * - **Note**: Availability data is limited to a period of **12 months** into the future from the present time on the production server and **6 months** on the sandbox server. 
   * 
  **/
  BookingAvailabilityTourgradesPricingmatrix(
    req: operations.BookingAvailabilityTourgradesPricingmatrixRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.BookingAvailabilityTourgradesPricingmatrixResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.BookingAvailabilityTourgradesPricingmatrixRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/booking/availability/tourgrades/pricingmatrix";
    
    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = SerializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    
    const client: AxiosInstance = this.securityClient!;const headers = { ...GetHeadersFromRequest(req.headers), ...reqBodyHeaders, ...config?.headers};
    
    let body: any;
    if (reqBody instanceof FormData) body = reqBody;
    else body = {...reqBody};
    
    return client
      .post(url, body, {
        headers: headers,
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.BookingAvailabilityTourgradesPricingmatrixResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.bookingAvailabilityTourgradesPricingmatrix200ApplicationJsonObject = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // BookingBook - /booking/book
  /** 
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
  BookingBook(
    req: operations.BookingBookRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.BookingBookResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.BookingBookRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/booking/book";
    
    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = SerializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    
    const client: AxiosInstance = this.securityClient!;const headers = { ...GetHeadersFromRequest(req.headers), ...reqBodyHeaders, ...config?.headers};
    
    let body: any;
    if (reqBody instanceof FormData) body = reqBody;
    else body = {...reqBody};
    
    return client
      .post(url, body, {
        headers: headers,
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.BookingBookResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.bookingBook200ApplicationJsonObject = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // BookingCalculateprice - /booking/calculateprice
  /** 
   * Confirm the price of a tour / activity prior to booking
   * 
   * For more information, see: [Calculating prices](#section/Common-workflows-and-data-validation/Calculating-prices)  
   * 
   * - **Note**: Availability and pricing data is limited to a period of **six months** into the future from the present time
   * 
  **/
  BookingCalculateprice(
    req: operations.BookingCalculatepriceRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.BookingCalculatepriceResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.BookingCalculatepriceRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/booking/calculateprice";
    
    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = SerializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    
    const client: AxiosInstance = this.securityClient!;const headers = { ...GetHeadersFromRequest(req.headers), ...reqBodyHeaders, ...config?.headers};
    
    let body: any;
    if (reqBody instanceof FormData) body = reqBody;
    else body = {...reqBody};
    
    return client
      .post(url, body, {
        headers: headers,
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.BookingCalculatepriceResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.bookingCalculateprice200ApplicationJsonObject = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // BookingHotels - /booking/hotels
  /** 
   * Get hotel pick-ups
   * Lists the hotel pickups available for either a product or a destination
   * 
  **/
  BookingHotels(
    req: operations.BookingHotelsRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.BookingHotelsResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.BookingHotelsRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/booking/hotels";
    
    const client: AxiosInstance = this.securityClient!;const headers = { ...GetHeadersFromRequest(req.headers), ...config?.headers};
    
    let qpSerializer: ParamsSerializerOptions = GetQueryParamSerializer(req.queryParams);

    const requestConfig: AxiosRequestConfig = {
      ...config,
      params: req.queryParams,
      paramsSerializer: qpSerializer,
    };
    
    return client
      .get(url, {
        ...requestConfig,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.BookingHotelsResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.bookingHotels200ApplicationJsonObject = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // BookingMybookings - /booking/mybookings
  /** 
   * Get a user's bookings with travel dates in the future. 
   * 
   * This service can also be used to check the status of a booking. 
   * 
   * **Provide either:** 
   * - A `voucherKey`, **or...** 
   * - An email address (`email`) and a booking reference (`itineraryOrItemId`) ([Booking Reference](#section/Key-concepts/Booking-references))
   * 
  **/
  BookingMybookings(
    req: operations.BookingMybookingsRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.BookingMybookingsResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.BookingMybookingsRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/booking/mybookings";
    
    const client: AxiosInstance = this.securityClient!;const headers = { ...GetHeadersFromRequest(req.headers), ...config?.headers};
    
    let qpSerializer: ParamsSerializerOptions = GetQueryParamSerializer(req.queryParams);

    const requestConfig: AxiosRequestConfig = {
      ...config,
      params: req.queryParams,
      paramsSerializer: qpSerializer,
    };
    
    return client
      .get(url, {
        ...requestConfig,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.BookingMybookingsResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.bookingMybookings200ApplicationJsonObject = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // BookingPastbooking - /booking/pastbooking
  /** 
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
  BookingPastbooking(
    req: operations.BookingPastbookingRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.BookingPastbookingResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.BookingPastbookingRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/booking/pastbooking";
    
    const client: AxiosInstance = this.securityClient!;const headers = { ...GetHeadersFromRequest(req.headers), ...config?.headers};
    
    let qpSerializer: ParamsSerializerOptions = GetQueryParamSerializer(req.queryParams);

    const requestConfig: AxiosRequestConfig = {
      ...config,
      params: req.queryParams,
      paramsSerializer: qpSerializer,
    };
    
    return client
      .get(url, {
        ...requestConfig,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.BookingPastbookingResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.bookingPastbooking200ApplicationJsonObject = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // BookingPricingmatrix - /booking/pricingmatrix
  /** 
   * Get the pricing matrix for tour-grades, product age bands and pax mixes
   * 
   * For more information, see: [Get the tour-grade pricing matrix](#section/Common-workflows-and-data-validation/Get-the-tour-grade-pricing-matrix)
   * 
  **/
  BookingPricingmatrix(
    req: operations.BookingPricingmatrixRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.BookingPricingmatrixResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.BookingPricingmatrixRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/booking/pricingmatrix";
    
    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = SerializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    
    const client: AxiosInstance = this.securityClient!;const headers = { ...GetHeadersFromRequest(req.headers), ...reqBodyHeaders, ...config?.headers};
    
    let body: any;
    if (reqBody instanceof FormData) body = reqBody;
    else body = {...reqBody};
    
    return client
      .post(url, body, {
        headers: headers,
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.BookingPricingmatrixResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.bookingPricingmatrix200ApplicationJsonObject = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // BookingStatus - /booking/status
  /** 
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
  BookingStatus(
    req: operations.BookingStatusRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.BookingStatusResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.BookingStatusRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/booking/status";
    
    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = SerializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    
    const client: AxiosInstance = this.securityClient!;const headers = { ...GetHeadersFromRequest(req.headers), ...reqBodyHeaders, ...config?.headers};
    
    let body: any;
    if (reqBody instanceof FormData) body = reqBody;
    else body = {...reqBody};
    
    return client
      .post(url, body, {
        headers: headers,
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.BookingStatusResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.bookingStatus200ApplicationJsonObject = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // BookingStatusItems - /booking/status/items
  /** 
   * Get brief booking statuses
   * 
   * This service is similar to [/booking/status](#operation/bookingStatus) in that it:
   * - retrieves the booking status for multiple items based on different criteria
   * - has the same request parameters as [/booking/status](#operation/bookingStatus)
   * 
   * However, it differs in that it returns a multi-item array of booking items with less detail than what would be received from [/booking/status](#operation/bookingStatus).
   * 
  **/
  BookingStatusItems(
    req: operations.BookingStatusItemsRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.BookingStatusItemsResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.BookingStatusItemsRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/booking/status/items";
    
    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = SerializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    
    const client: AxiosInstance = this.securityClient!;const headers = { ...GetHeadersFromRequest(req.headers), ...reqBodyHeaders, ...config?.headers};
    
    let body: any;
    if (reqBody instanceof FormData) body = reqBody;
    else body = {...reqBody};
    
    return client
      .post(url, body, {
        headers: headers,
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.BookingStatusItemsResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.bookingStatusItems200ApplicationJsonObject = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // BookingVoucher - /booking/voucher
  /** 
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
  BookingVoucher(
    req: operations.BookingVoucherRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.BookingVoucherResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.BookingVoucherRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/booking/voucher";
    
    const client: AxiosInstance = this.securityClient!;const headers = { ...GetHeadersFromRequest(req.headers), ...config?.headers};
    
    let qpSerializer: ParamsSerializerOptions = GetQueryParamSerializer(req.queryParams);

    const requestConfig: AxiosRequestConfig = {
      ...config,
      params: req.queryParams,
      paramsSerializer: qpSerializer,
    };
    
    return client
      .get(url, {
        ...requestConfig,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.BookingVoucherResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.bookingVoucher200ApplicationJsonObject = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // CancelBooking - /bookings/{booking-reference}/cancel
  /** 
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
  CancelBooking(
    req: operations.CancelBookingRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.CancelBookingResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.CancelBookingRequest(req);
    }
    
    let baseURL: string = operations.CANCELBOOKING_SERVERS[0];
    const url: string = utils.GenerateURL(baseURL, "/bookings/{booking-reference}/cancel", req.pathParams);
    
    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = SerializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    
    const client: AxiosInstance = this.securityClient!;const headers = { ...GetHeadersFromRequest(req.headers), ...reqBodyHeaders, ...config?.headers};
    
    let body: any;
    if (reqBody instanceof FormData) body = reqBody;
    else body = {...reqBody};
    
    return client
      .post(url, body, {
        headers: headers,
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.CancelBookingResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.cancelBookingResponse = httpRes?.data;
            }
            break;
          case 400:
            if (MatchContentType(contentType, `application/json`)) {
                res.cancelBooking400ApplicationJsonObject = httpRes?.data;
            }
            break;
          case 401:
            if (MatchContentType(contentType, `application/json`)) {
                res.fourHundredAndOneUnauthorized = httpRes?.data;
            }
            break;
          case 404:
            if (MatchContentType(contentType, `application/json`)) {
                res.cancelBooking404ApplicationJsonObject = httpRes?.data;
            }
            break;
          case 406:
            if (MatchContentType(contentType, `application/json`)) {
                res.fourHundredAndSixNotAcceptable = httpRes?.data;
            }
            break;
          case 500:
            if (MatchContentType(contentType, `application/json`)) {
                res.fiveHundredInternalServerError = httpRes?.data;
            }
            break;
          case 503:
            if (MatchContentType(contentType, `application/json`)) {
                res.fiveHundredAndThreeServiceUnavailable = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // CancelBookingQuote - /bookings/{booking-reference}/cancel-quote
  /** 
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
  CancelBookingQuote(
    req: operations.CancelBookingQuoteRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.CancelBookingQuoteResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.CancelBookingQuoteRequest(req);
    }
    
    let baseURL: string = operations.CANCELBOOKINGQUOTE_SERVERS[0];
    const url: string = utils.GenerateURL(baseURL, "/bookings/{booking-reference}/cancel-quote", req.pathParams);
    
    const client: AxiosInstance = this.securityClient!;
    return client
      .get(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.CancelBookingQuoteResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.cancelBookingQuoteResponse = httpRes?.data;
            }
            break;
          case 401:
            if (MatchContentType(contentType, `application/json`)) {
                res.fourHundredAndOneUnauthorized = httpRes?.data;
            }
            break;
          case 406:
            if (MatchContentType(contentType, `application/json`)) {
                res.fourHundredAndSixNotAcceptable = httpRes?.data;
            }
            break;
          case 500:
            if (MatchContentType(contentType, `application/json`)) {
                res.fiveHundredInternalServerError = httpRes?.data;
            }
            break;
          case 503:
            if (MatchContentType(contentType, `application/json`)) {
                res.fiveHundredAndThreeServiceUnavailable = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // CancellationReasons - /bookings/cancel-reasons
  /** 
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
  CancellationReasons(
    req: operations.CancellationReasonsRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.CancellationReasonsResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.CancellationReasonsRequest(req);
    }
    
    let baseURL: string = operations.CANCELLATIONREASONS_SERVERS[0];
    const url: string = baseURL.replace(/\/$/, "") + "/bookings/cancel-reasons";
    
    const client: AxiosInstance = this.securityClient!;const headers = { ...GetHeadersFromRequest(req.headers), ...config?.headers};
    
    return client
      .get(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.CancellationReasonsResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.cancellationReasonsResponses = httpRes?.data;
            }
            break;
          case 401:
            if (MatchContentType(contentType, `application/json`)) {
                res.fourHundredAndOneUnauthorized = httpRes?.data;
            }
            break;
          case 406:
            if (MatchContentType(contentType, `application/json`)) {
                res.fourHundredAndSixNotAcceptable = httpRes?.data;
            }
            break;
          case 500:
            if (MatchContentType(contentType, `application/json`)) {
                res.fiveHundredInternalServerError = httpRes?.data;
            }
            break;
          case 503:
            if (MatchContentType(contentType, `application/json`)) {
                res.fiveHundredAndThreeServiceUnavailable = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // HealthCheck - /health/check
  /** 
   * Health check
   * Use this service to determine whether the Viator API is presently online and that your API key is valid. You should receive a response identical to the example shown. If you have not yet received an API key, please request one from your business development partner. If you have not yet signed up as a Viator merchant partner and would like to, please visit our [distribution partner website](https://www.viator.com/distribution-partners?mcid=58463#api-solutions)."
   * 
  **/
  HealthCheck(
    req: operations.HealthCheckRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.HealthCheckResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.HealthCheckRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/health/check";
    
    const client: AxiosInstance = this.securityClient!;const headers = { ...GetHeadersFromRequest(req.headers), ...config?.headers};
    
    return client
      .get(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.HealthCheckResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.healthCheck200ApplicationJsonObject = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // MerchantCancellation - /merchant/cancellation
  /** 
   * Cancel a booking
   * **Note**: This service has been replaced by the [cancellationReasons](#operation/cancellationReasons), [bookingQuote](#operation/bookingQuote) and [cancelBooking](#operation/cancelBooking) endpoints
   * 
  **/
  MerchantCancellation(
    req: operations.MerchantCancellationRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.MerchantCancellationResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.MerchantCancellationRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/merchant/cancellation";
    
    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = SerializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    
    const client: AxiosInstance = this.securityClient!;const headers = { ...GetHeadersFromRequest(req.headers), ...reqBodyHeaders, ...config?.headers};
    
    let body: any;
    if (reqBody instanceof FormData) body = reqBody;
    else body = {...reqBody};
    
    return client
      .post(url, body, {
        headers: headers,
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.MerchantCancellationResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.merchantCancellation200ApplicationJsonObject = httpRes?.data;
            }
            break;
          case 400:
            if (MatchContentType(contentType, `application/json`)) {
                res.merchantCancellation400ApplicationJsonObject = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // Product - /product
  /** 
   * Get product information
   * This service provides all product details required for a product display page, as well as information required for price checks and booking, such as: 
   * - age bands
   * - tour grades
   * - language options 
   * - booking questions
   * - hotel pickup flags
   * 
   * **currencyCode (in query):** 
   * - use this parameter to specify the currency in which product pricing should be displayed
   * - the default currency is the currency of your account; or, if you have multi-currency enabled, US dollars
   * - "multi-currency" allows pricing and booking in various currencies - please speak to the business development team if you'd like this enabled
   * - **Note**: you will be billed in the currency in which the booking was made
   * 
   * **Product photos**
   * 
   * &lt;mark&gt;**&lt;u&gt;Update 13 Feb 2020&lt;/u&gt;**: All supplier-provided photos for the selected product are now available in the `productPhotos` array in this endpoint's response. Previously, only two supplier-provided photos were available – one in the `productPhotos` array and one in `thumbnailHiResURL`. &lt;/mark&gt;
   * 
   * **Videos**
   * 
   * - Videos are no longer provided via this API
   * 
  **/
  Product(
    req: operations.ProductRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ProductResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ProductRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/product";
    
    const client: AxiosInstance = this.securityClient!;const headers = { ...GetHeadersFromRequest(req.headers), ...config?.headers};
    
    let qpSerializer: ParamsSerializerOptions = GetQueryParamSerializer(req.queryParams);

    const requestConfig: AxiosRequestConfig = {
      ...config,
      params: req.queryParams,
      paramsSerializer: qpSerializer,
    };
    
    return client
      .get(url, {
        ...requestConfig,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.ProductResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.product200ApplicationJsonObject = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // ProductPhotos - /product/photos
  /** 
   * Get photos of a product submitted by users
  **/
  ProductPhotos(
    req: operations.ProductPhotosRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ProductPhotosResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ProductPhotosRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/product/photos";
    
    const client: AxiosInstance = this.securityClient!;const headers = { ...GetHeadersFromRequest(req.headers), ...config?.headers};
    
    let qpSerializer: ParamsSerializerOptions = GetQueryParamSerializer(req.queryParams);

    const requestConfig: AxiosRequestConfig = {
      ...config,
      params: req.queryParams,
      paramsSerializer: qpSerializer,
    };
    
    return client
      .get(url, {
        ...requestConfig,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.ProductPhotosResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.productPhotos200ApplicationJsonObject = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // ProductReviews - /product/reviews
  /** 
   * Get user-submitted reviews of a product
   * 
   * **Note**: 
   * - The number of reviews that you can obtain via this service will depend on whether your account is limited in terms of the number of reviews you are entitled to receive. 
   * - The number of reviews available through this service is given in the `reviewCount` element in the response from [/product](#operation/product)
   * - Please speak to your account manager if you wish to receive more reviews. If your account is not limited, you will be able to receive all available reviews for this product.
   * - Only reviews in the language specified in the Accept-Language request header will be returned
   * 
   * **Example:** "Get the first three reviews for product `5010SYDNEY` sorted by rating in ascending order":
   * 
   * ```javascript
   * https://viatorapi.sandbox.viator.com/service/product/reviews?sortOrder=REVIEW_RATING_A&amp;topX=1-3&amp;code=5010SYDNEY&amp;showUnavailable=false
   * ```
   * 
  **/
  ProductReviews(
    req: operations.ProductReviewsRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ProductReviewsResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ProductReviewsRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/product/reviews";
    
    const client: AxiosInstance = this.securityClient!;const headers = { ...GetHeadersFromRequest(req.headers), ...config?.headers};
    
    let qpSerializer: ParamsSerializerOptions = GetQueryParamSerializer(req.queryParams);

    const requestConfig: AxiosRequestConfig = {
      ...config,
      params: req.queryParams,
      paramsSerializer: qpSerializer,
    };
    
    return client
      .get(url, {
        ...requestConfig,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.ProductReviewsResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.productReviews200ApplicationJsonObject = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // SearchFreetext - /search/freetext
  /** 
   * Free text search
   * - This service provides a **free text search across all products and destinations**
   * - The `text` parameter is required
   * - **Note:** results include a type indicator (`type`) that you can use to display each result appropriately based on its content
   * 
  **/
  SearchFreetext(
    req: operations.SearchFreetextRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.SearchFreetextResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.SearchFreetextRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/search/freetext";
    
    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = SerializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    
    const client: AxiosInstance = this.securityClient!;const headers = { ...GetHeadersFromRequest(req.headers), ...reqBodyHeaders, ...config?.headers};
    
    let body: any;
    if (reqBody instanceof FormData) body = reqBody;
    else body = {...reqBody};
    
    return client
      .post(url, body, {
        headers: headers,
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.SearchFreetextResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.searchFreetext200ApplicationJsonObject = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // SearchProducts - /search/products
  /** 
   * Search for products
   * This service is used to search for products based on various criteria; such as:
   * * the destination (locale) in which it operates
   * * its association with a tourist attraction
   * * its category and/or subcategory
   * * the time period during which it operates
   * The fields you include in the request body for this service determine the kind of search that will be performed.
   * 
   * **&lt;u&gt;Note&lt;/u&gt;**: 
   * 
   * * You can search **EITHER** by destination (`destId`) **OR** by attraction-link (`seoId`), but not both.
   * * The destination identifier (`destId`) can be retrieved from the [/taxonomy/destinations](#operation/taxonomyDestinations) service.
   * * The category (`catId`) and subcategory (`subCatId`) identifiers can be retrieved from the [/taxonomy/categories](#operation/taxonomyCategories) service.
   * * The attraction identifier (`seoId`) can be retrieved from the [/taxonomy/attractions](#operation/taxonomyAttractions) service.
   * 
   * **&lt;u&gt;Examples&lt;/u&gt;**:
   * 
   * **Search by destination**:
   * 
   * * E.g., "Top ten highest-rated yoga classes operating in Las Vegas:
   * ```javascript
   * {
   *     "destId": 684,
   *     "subCatId": 26052,
   *     "sortOrder": "REVIEW_AVG_RATING_D",
   *     "topX": "1-3"
   * }
   * ```
   * 
   * **Search by attraction-link**:
   * 
   * * E.g., "Products related to Everglades National Park operating 21-26 May 2019 in order of descending price":
   * ```javascript
   * {
   *     "seoId": 1115,
   *     "sortOrder": "PRICE_FROM_D",
   *     "topX": "1-3"
   * }
   * ```
   * 
   * **&lt;u&gt;'Freesale-only' merchants&lt;/u&gt;**:
   * - Merchants with a "freesale only" key *must* pass `startDate` and `endDate` to this service to retrieve a list of all available 'freesale' products (and 'freesale/on-request' products that are currently 'freesale') in the destination. 
   * - E.g., the following request body will result in 'freesale/on-request' products within their on-request period not appearing in the results from this service. 
   * ```javascript
   * {
   *     "destId": 684,
   *     "startDate": "2020-02-21",
   *     "endDate": "2020-03-21",
   *     "sortOrder": "PRICE_FROM_D",
   *     "topX": "1-3"
   * }
   * ```
   * 
   * - If `startDate` and `endDate` are omitted, 'freesale/on-request' products that are presently within their on-request period may appear to be available to customers, but won't be available at the time of booking.
   * 
  **/
  SearchProducts(
    req: operations.SearchProductsRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.SearchProductsResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.SearchProductsRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/search/products";
    
    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = SerializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    
    const client: AxiosInstance = this.securityClient!;const headers = { ...GetHeadersFromRequest(req.headers), ...reqBodyHeaders, ...config?.headers};
    
    let body: any;
    if (reqBody instanceof FormData) body = reqBody;
    else body = {...reqBody};
    
    return client
      .post(url, body, {
        headers: headers,
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.SearchProductsResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.searchProducts200ApplicationJsonObject = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // SearchProductsCodes - /search/products/codes
  /** 
   * Search by product code
   * - This service returns an array of products given an array of product identifiers that is useful for wishlist / shopping cart / user account display 
   * - **Note**: requesting an inactive or non-existent product code will return `0`, `null` and blank values (as per the 'invalid_product' example).
   * 
  **/
  SearchProductsCodes(
    req: operations.SearchProductsCodesRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.SearchProductsCodesResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.SearchProductsCodesRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/search/products/codes";
    
    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = SerializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    
    const client: AxiosInstance = this.securityClient!;const headers = { ...GetHeadersFromRequest(req.headers), ...reqBodyHeaders, ...config?.headers};
    
    let body: any;
    if (reqBody instanceof FormData) body = reqBody;
    else body = {...reqBody};
    
    return client
      .post(url, body, {
        headers: headers,
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.SearchProductsCodesResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.searchProductsCodes200ApplicationJsonObject = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // TaxonomyAttractions - /taxonomy/attractions
  /** 
   * Get attractions
   * - Retrieves a list of attractions (things like the Eiffel Tower or Empire State Building) and their associated unique numeric identifiers
   * - The attraction's identifier (`seoId`) can be used as a means of searching for available products; for example, in the [/search/products](#operation/searchProducts) service.
   * 
  **/
  TaxonomyAttractions(
    req: operations.TaxonomyAttractionsRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.TaxonomyAttractionsResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.TaxonomyAttractionsRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/taxonomy/attractions";
    
    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = SerializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    
    const client: AxiosInstance = this.securityClient!;const headers = { ...GetHeadersFromRequest(req.headers), ...reqBodyHeaders, ...config?.headers};
    
    let body: any;
    if (reqBody instanceof FormData) body = reqBody;
    else body = {...reqBody};
    
    return client
      .post(url, body, {
        headers: headers,
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.TaxonomyAttractionsResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.taxonomyAttractions200ApplicationJsonObject = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // TaxonomyCategories - /taxonomy/categories
  /** 
   * Get all product categories
   * - Retrieves a list of product categories for a destination that can be used as a means of filtering when searching for products using the [/search/products](/#operation/searchProducts) service
   * - This service can be used to get a list of all categories and subcategories for a destination by including its `destId`, or you can omit the `destId` to get a list of all categories and subcategories
   * - **Note:** If no `destId` is passed, `productCount` and `thumbnailURL` will be `null` as they are destination-specific fields
   * 
  **/
  TaxonomyCategories(
    req: operations.TaxonomyCategoriesRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.TaxonomyCategoriesResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.TaxonomyCategoriesRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/taxonomy/categories";
    
    const client: AxiosInstance = this.securityClient!;const headers = { ...GetHeadersFromRequest(req.headers), ...config?.headers};
    
    let qpSerializer: ParamsSerializerOptions = GetQueryParamSerializer(req.queryParams);

    const requestConfig: AxiosRequestConfig = {
      ...config,
      params: req.queryParams,
      paramsSerializer: qpSerializer,
    };
    
    return client
      .get(url, {
        ...requestConfig,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.TaxonomyCategoriesResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.taxonomyCategories200ApplicationJsonObject = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // TaxonomyDestinations - /taxonomy/destinations
  /** 
   * Get details of all destinations supported by this API
   * - Retrieves all the country taxonomy/city nodes as a flat list
   * - Returns a complete list of Viator destinations, including destination names and parent identifiers
   * - Used to provide navigation through drill down lists or combo boxes
   * 
  **/
  TaxonomyDestinations(
    req: operations.TaxonomyDestinationsRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.TaxonomyDestinationsResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.TaxonomyDestinationsRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/taxonomy/destinations";
    
    const client: AxiosInstance = this.securityClient!;const headers = { ...GetHeadersFromRequest(req.headers), ...config?.headers};
    
    return client
      .get(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.TaxonomyDestinationsResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.taxonomyDestinations200ApplicationJsonObject = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

}
