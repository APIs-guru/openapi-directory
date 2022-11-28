import requests
from typing import Optional
from sdk.models import operations
from . import utils

class ProductServices:
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

    
    def available_products(self, request: operations.AvailableProductsRequest) -> operations.AvailableProductsResponse:
        r"""/available/products
        Find products that are available
        
         This endpoint returns available products filtered by product code, date range or number of adult travelers
        
        
         - **Note**: Availability data is limited to a period of **12 months** into the future from the present time on the production server and **6 months** on the sandbox server. 
         
        
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/available/products"
        
        headers = utils.get_headers(request.headers)
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = self._security_client
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.AvailableProductsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.AvailableProducts200ApplicationJSON])
                res.available_products_200_application_json_object = out

        return res

    
    def product(self, request: operations.ProductRequest) -> operations.ProductResponse:
        r"""/product
        Get product information
        This service provides all product details required for a product display page, as well as information required for price checks and booking, such as: 
        - age bands
        - tour grades
        - language options 
        - booking questions
        - hotel pickup flags
        
        **currencyCode (in query):** 
        - use this parameter to specify the currency in which product pricing should be displayed
        - the default currency is the currency of your account; or, if you have multi-currency enabled, US dollars
        - \"multi-currency\" allows pricing and booking in various currencies - please speak to the business development team if you'd like this enabled
        - **Note**: you will be billed in the currency in which the booking was made
        
        **Product photos**
        
        &lt;mark&gt;**&lt;u&gt;Update 13 Feb 2020&lt;/u&gt;**: All supplier-provided photos for the selected product are now available in the `productPhotos` array in this endpoint's response. Previously, only two supplier-provided photos were available – one in the `productPhotos` array and one in `thumbnailHiResURL`. &lt;/mark&gt;
        
        **Videos**
        
        - Videos are no longer provided via this API
        
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/product"
        
        headers = utils.get_headers(request.headers)
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("GET", url, params=query_params, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.ProductResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.Product200ApplicationJSON])
                res.product_200_application_json_object = out

        return res

    
    def product_photos(self, request: operations.ProductPhotosRequest) -> operations.ProductPhotosResponse:
        r"""/product/photos
        Get photos of a product submitted by users
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/product/photos"
        
        headers = utils.get_headers(request.headers)
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("GET", url, params=query_params, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.ProductPhotosResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.ProductPhotos200ApplicationJSON])
                res.product_photos_200_application_json_object = out

        return res

    
    def product_reviews(self, request: operations.ProductReviewsRequest) -> operations.ProductReviewsResponse:
        r"""/product/reviews
        Get user-submitted reviews of a product
        
        **Note**: 
        - The number of reviews that you can obtain via this service will depend on whether your account is limited in terms of the number of reviews you are entitled to receive. 
        - The number of reviews available through this service is given in the `reviewCount` element in the response from [/product](#operation/product)
        - Please speak to your account manager if you wish to receive more reviews. If your account is not limited, you will be able to receive all available reviews for this product.
        - Only reviews in the language specified in the Accept-Language request header will be returned
        
        **Example:** \"Get the first three reviews for product `5010SYDNEY` sorted by rating in ascending order\":
        
        ```javascript
        https://viatorapi.sandbox.viator.com/service/product/reviews?sortOrder=REVIEW_RATING_A&amp;topX=1-3&amp;code=5010SYDNEY&amp;showUnavailable=false
        ```
        
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/product/reviews"
        
        headers = utils.get_headers(request.headers)
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("GET", url, params=query_params, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.ProductReviewsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.ProductReviews200ApplicationJSON])
                res.product_reviews_200_application_json_object = out

        return res

    
    def search_freetext(self, request: operations.SearchFreetextRequest) -> operations.SearchFreetextResponse:
        r"""/search/freetext
        Free text search
        - This service provides a **free text search across all products and destinations**
        - The `text` parameter is required
        - **Note:** results include a type indicator (`type`) that you can use to display each result appropriately based on its content
        
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/search/freetext"
        
        headers = utils.get_headers(request.headers)
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = self._security_client
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.SearchFreetextResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.SearchFreetext200ApplicationJSON])
                res.search_freetext_200_application_json_object = out

        return res

    
    def search_products(self, request: operations.SearchProductsRequest) -> operations.SearchProductsResponse:
        r"""/search/products
        Search for products
        This service is used to search for products based on various criteria; such as:
        * the destination (locale) in which it operates
        * its association with a tourist attraction
        * its category and/or subcategory
        * the time period during which it operates
        The fields you include in the request body for this service determine the kind of search that will be performed.
        
        **&lt;u&gt;Note&lt;/u&gt;**: 
        
        * You can search **EITHER** by destination (`destId`) **OR** by attraction-link (`seoId`), but not both.
        * The destination identifier (`destId`) can be retrieved from the [/taxonomy/destinations](#operation/taxonomyDestinations) service.
        * The category (`catId`) and subcategory (`subCatId`) identifiers can be retrieved from the [/taxonomy/categories](#operation/taxonomyCategories) service.
        * The attraction identifier (`seoId`) can be retrieved from the [/taxonomy/attractions](#operation/taxonomyAttractions) service.
        
        **&lt;u&gt;Examples&lt;/u&gt;**:
        
        **Search by destination**:
        
        * E.g., \"Top ten highest-rated yoga classes operating in Las Vegas:
        ```javascript
        {
            \"destId\": 684,
            \"subCatId\": 26052,
            \"sortOrder\": \"REVIEW_AVG_RATING_D\",
            \"topX\": \"1-3\"
        }
        ```
        
        **Search by attraction-link**:
        
        * E.g., \"Products related to Everglades National Park operating 21-26 May 2019 in order of descending price\":
        ```javascript
        {
            \"seoId\": 1115,
            \"sortOrder\": \"PRICE_FROM_D\",
            \"topX\": \"1-3\"
        }
        ```
        
        **&lt;u&gt;'Freesale-only' merchants&lt;/u&gt;**:
        - Merchants with a \"freesale only\" key *must* pass `startDate` and `endDate` to this service to retrieve a list of all available 'freesale' products (and 'freesale/on-request' products that are currently 'freesale') in the destination. 
        - E.g., the following request body will result in 'freesale/on-request' products within their on-request period not appearing in the results from this service. 
        ```javascript
        {
            \"destId\": 684,
            \"startDate\": \"2020-02-21\",
            \"endDate\": \"2020-03-21\",
            \"sortOrder\": \"PRICE_FROM_D\",
            \"topX\": \"1-3\"
        }
        ```
        
        - If `startDate` and `endDate` are omitted, 'freesale/on-request' products that are presently within their on-request period may appear to be available to customers, but won't be available at the time of booking.
        
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/search/products"
        
        headers = utils.get_headers(request.headers)
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = self._security_client
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.SearchProductsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.SearchProducts200ApplicationJSON])
                res.search_products_200_application_json_object = out

        return res

    
    def search_products_codes(self, request: operations.SearchProductsCodesRequest) -> operations.SearchProductsCodesResponse:
        r"""/search/products/codes
        Search by product code
        - This service returns an array of products given an array of product identifiers that is useful for wishlist / shopping cart / user account display 
        - **Note**: requesting an inactive or non-existent product code will return `0`, `null` and blank values (as per the 'invalid_product' example).
        
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/search/products/codes"
        
        headers = utils.get_headers(request.headers)
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = self._security_client
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.SearchProductsCodesResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.SearchProductsCodes200ApplicationJSON])
                res.search_products_codes_200_application_json_object = out

        return res

    