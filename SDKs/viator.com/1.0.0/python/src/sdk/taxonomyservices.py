import requests
from typing import Optional
from sdk.models import operations
from . import utils

class TaxonomyServices:
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

    
    def taxonomy_attractions(self, request: operations.TaxonomyAttractionsRequest) -> operations.TaxonomyAttractionsResponse:
        r"""/taxonomy/attractions
        Get attractions
        - Retrieves a list of attractions (things like the Eiffel Tower or Empire State Building) and their associated unique numeric identifiers
        - The attraction's identifier (`seoId`) can be used as a means of searching for available products; for example, in the [/search/products](#operation/searchProducts) service.
        
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/taxonomy/attractions"
        
        headers = utils.get_headers(request.headers)
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = self._security_client
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.TaxonomyAttractionsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.TaxonomyAttractions200ApplicationJSON])
                res.taxonomy_attractions_200_application_json_object = out

        return res

    
    def taxonomy_categories(self, request: operations.TaxonomyCategoriesRequest) -> operations.TaxonomyCategoriesResponse:
        r"""/taxonomy/categories
        Get all product categories
        - Retrieves a list of product categories for a destination that can be used as a means of filtering when searching for products using the [/search/products](/#operation/searchProducts) service
        - This service can be used to get a list of all categories and subcategories for a destination by including its `destId`, or you can omit the `destId` to get a list of all categories and subcategories
        - **Note:** If no `destId` is passed, `productCount` and `thumbnailURL` will be `null` as they are destination-specific fields
        
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/taxonomy/categories"
        
        headers = utils.get_headers(request.headers)
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("GET", url, params=query_params, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.TaxonomyCategoriesResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.TaxonomyCategories200ApplicationJSON])
                res.taxonomy_categories_200_application_json_object = out

        return res

    
    def taxonomy_destinations(self, request: operations.TaxonomyDestinationsRequest) -> operations.TaxonomyDestinationsResponse:
        r"""/taxonomy/destinations
        Get details of all destinations supported by this API
        - Retrieves all the country taxonomy/city nodes as a flat list
        - Returns a complete list of Viator destinations, including destination names and parent identifiers
        - Used to provide navigation through drill down lists or combo boxes
        
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/taxonomy/destinations"
        
        headers = utils.get_headers(request.headers)
        
        client = self._security_client
        
        r = client.request("GET", url, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.TaxonomyDestinationsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.TaxonomyDestinations200ApplicationJSON])
                res.taxonomy_destinations_200_application_json_object = out

        return res

    