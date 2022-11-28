
__doc__ = """ SDK Documentation: https://dev.reverb.com/"""
import requests
from sdk.models import operations
from . import utils




SERVERS = [
	"https://api.reverb.com/api",
]


class SDK:
    r"""SDK Documentation: https://dev.reverb.com/"""

    _client: requests.Session
    _security_client: requests.Session
    
    _server_url: str = SERVERS[0]
    _language: str = "python"
    _sdk_version: str = "0.0.1"
    _gen_version: str = "internal"

    def __init__(self) -> None:
        self._client = requests.Session()
        self._security_client = requests.Session()
        


    def config_server_url(self, server_url: str, params: dict[str, str]):
        if params is not None:
            self._server_url = utils.replace_parameters(server_url, params)
        else:
            self._server_url = server_url

        
    

    def config_client(self, client: requests.Session):
        self._client = client
        
    
    
    
    def delete_listings_listing_id_images_image_id_(self, request: operations.DeleteListingsListingIDImagesImageIDRequest) -> operations.DeleteListingsListingIDImagesImageIDResponse:
        r"""Delete an image from a listing
        Delete an image from a listing
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/listings/{listing_id}/images/{image_id}", request.path_params)
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("DELETE", url)
        content_type = r.headers.get("Content-Type")

        res = operations.DeleteListingsListingIDImagesImageIDResponse(status_code=r.status_code, content_type=content_type)
        
        if True:
            pass

        return res

    
    def delete_listings_slug_(self, request: operations.DeleteListingsSlugRequest) -> operations.DeleteListingsSlugResponse:
        r"""Delete a draft listing. Cannot be used on non-drafts.
        Delete a draft listing. Cannot be used on non-drafts.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/listings/{slug}", request.path_params)
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("DELETE", url)
        content_type = r.headers.get("Content-Type")

        res = operations.DeleteListingsSlugResponse(status_code=r.status_code, content_type=content_type)
        
        if True:
            pass

        return res

    
    def delete_my_addresses_address_id_(self, request: operations.DeleteMyAddressesAddressIDRequest) -> operations.DeleteMyAddressesAddressIDResponse:
        r"""Delete an existing address in your address book
        Delete an existing address in your address book
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/my/addresses/{address_id}", request.path_params)
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("DELETE", url)
        content_type = r.headers.get("Content-Type")

        res = operations.DeleteMyAddressesAddressIDResponse(status_code=r.status_code, content_type=content_type)
        
        if True:
            pass

        return res

    
    def delete_my_curated_set_product_product_id_(self, request: operations.DeleteMyCuratedSetProductProductIDRequest) -> operations.DeleteMyCuratedSetProductProductIDResponse:
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/my/curated_set/product/{product_id}", request.path_params)
        
        
        client = self._client
        
        r = client.request("DELETE", url)
        content_type = r.headers.get("Content-Type")

        res = operations.DeleteMyCuratedSetProductProductIDResponse(status_code=r.status_code, content_type=content_type)
        
        if True:
            pass

        return res

    
    def delete_my_follows_brands_slug_(self, request: operations.DeleteMyFollowsBrandsSlugRequest) -> operations.DeleteMyFollowsBrandsSlugResponse:
        r"""Unfollow a brand
        Unfollow a brand
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/my/follows/brands/{slug}", request.path_params)
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("DELETE", url)
        content_type = r.headers.get("Content-Type")

        res = operations.DeleteMyFollowsBrandsSlugResponse(status_code=r.status_code, content_type=content_type)
        
        if True:
            pass

        return res

    
    def delete_my_follows_categories_category_subcategory_(self, request: operations.DeleteMyFollowsCategoriesCategorySubcategoryRequest) -> operations.DeleteMyFollowsCategoriesCategorySubcategoryResponse:
        r"""Unfollow a subcategory
        Unfollow a subcategory
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/my/follows/categories/{category}/{subcategory}", request.path_params)
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("DELETE", url)
        content_type = r.headers.get("Content-Type")

        res = operations.DeleteMyFollowsCategoriesCategorySubcategoryResponse(status_code=r.status_code, content_type=content_type)
        
        if True:
            pass

        return res

    
    def delete_my_follows_categories_identifier_(self, request: operations.DeleteMyFollowsCategoriesIdentifierRequest) -> operations.DeleteMyFollowsCategoriesIdentifierResponse:
        r"""Unfollow a category
        Unfollow a category
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/my/follows/categories/{identifier}", request.path_params)
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("DELETE", url)
        content_type = r.headers.get("Content-Type")

        res = operations.DeleteMyFollowsCategoriesIdentifierResponse(status_code=r.status_code, content_type=content_type)
        
        if True:
            pass

        return res

    
    def delete_my_follows_collections_slug_(self, request: operations.DeleteMyFollowsCollectionsSlugRequest) -> operations.DeleteMyFollowsCollectionsSlugResponse:
        r"""Unfollow a collection
        Unfollow a collection
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/my/follows/collections/{slug}", request.path_params)
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("DELETE", url)
        content_type = r.headers.get("Content-Type")

        res = operations.DeleteMyFollowsCollectionsSlugResponse(status_code=r.status_code, content_type=content_type)
        
        if True:
            pass

        return res

    
    def delete_my_follows_follow_id_(self, request: operations.DeleteMyFollowsFollowIDRequest) -> operations.DeleteMyFollowsFollowIDResponse:
        r"""Delete a follow
        Delete a follow
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/my/follows/{follow_id}", request.path_params)
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("DELETE", url)
        content_type = r.headers.get("Content-Type")

        res = operations.DeleteMyFollowsFollowIDResponse(status_code=r.status_code, content_type=content_type)
        
        if True:
            pass

        return res

    
    def delete_my_follows_follow_id_alert(self, request: operations.DeleteMyFollowsFollowIDAlertRequest) -> operations.DeleteMyFollowsFollowIDAlertResponse:
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/my/follows/{follow_id}/alert", request.path_params)
        
        
        client = self._client
        
        r = client.request("DELETE", url)
        content_type = r.headers.get("Content-Type")

        res = operations.DeleteMyFollowsFollowIDAlertResponse(status_code=r.status_code, content_type=content_type)
        
        if True:
            pass

        return res

    
    def delete_my_follows_handpicked_slug_(self, request: operations.DeleteMyFollowsHandpickedSlugRequest) -> operations.DeleteMyFollowsHandpickedSlugResponse:
        r"""Unfollow a handpicked collection
        Unfollow a handpicked collection
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/my/follows/handpicked/{slug}", request.path_params)
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("DELETE", url)
        content_type = r.headers.get("Content-Type")

        res = operations.DeleteMyFollowsHandpickedSlugResponse(status_code=r.status_code, content_type=content_type)
        
        if True:
            pass

        return res

    
    def delete_my_follows_shops_slug_(self, request: operations.DeleteMyFollowsShopsSlugRequest) -> operations.DeleteMyFollowsShopsSlugResponse:
        r"""Unfollow a shop
        Unfollow a shop
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/my/follows/shops/{slug}", request.path_params)
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("DELETE", url)
        content_type = r.headers.get("Content-Type")

        res = operations.DeleteMyFollowsShopsSlugResponse(status_code=r.status_code, content_type=content_type)
        
        if True:
            pass

        return res

    
    def delete_my_wishlist_id_(self, request: operations.DeleteMyWishlistIDRequest) -> operations.DeleteMyWishlistIDResponse:
        r"""Remove a listing from your wishlist
        Remove a listing from your wishlist
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/my/wishlist/{id}", request.path_params)
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("DELETE", url)
        content_type = r.headers.get("Content-Type")

        res = operations.DeleteMyWishlistIDResponse(status_code=r.status_code, content_type=content_type)
        
        if True:
            pass

        return res

    
    def delete_sales_sale_id_listings(self, request: operations.DeleteSalesSaleIDListingsRequest) -> operations.DeleteSalesSaleIDListingsResponse:
        r"""Remove a listing from a sale
        Remove a listing from a sale
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/sales/{sale_id}/listings", request.path_params)
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("DELETE", url)
        content_type = r.headers.get("Content-Type")

        res = operations.DeleteSalesSaleIDListingsResponse(status_code=r.status_code, content_type=content_type)
        
        if True:
            pass

        return res

    
    def delete_shop_vacation(self, request: operations.DeleteShopVacationRequest) -> operations.DeleteShopVacationResponse:
        r"""Disable vacation mode. All listings will be re-enabled.
        Disable vacation mode. All listings will be re-enabled.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/shop/vacation"
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("DELETE", url)
        content_type = r.headers.get("Content-Type")

        res = operations.DeleteShopVacationResponse(status_code=r.status_code, content_type=content_type)
        
        if True:
            pass

        return res

    
    def delete_wants_id_(self, request: operations.DeleteWantsIDRequest) -> operations.DeleteWantsIDResponse:
        r"""Unmark an item wanted.
        Unmark an item wanted.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/wants/{id}", request.path_params)
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("DELETE", url)
        content_type = r.headers.get("Content-Type")

        res = operations.DeleteWantsIDResponse(status_code=r.status_code, content_type=content_type)
        
        if True:
            pass

        return res

    
    def delete_webhooks_registrations_id_(self, request: operations.DeleteWebhooksRegistrationsIDRequest) -> operations.DeleteWebhooksRegistrationsIDResponse:
        r"""Remove a webhook
        Remove a webhook
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/webhooks/registrations/{id}", request.path_params)
        
        
        client = self._client
        
        r = client.request("DELETE", url)
        content_type = r.headers.get("Content-Type")

        res = operations.DeleteWebhooksRegistrationsIDResponse(status_code=r.status_code, content_type=content_type)
        
        if True:
            pass

        return res

    
    def get_articles(self, request: operations.GetArticlesRequest) -> operations.GetArticlesResponse:
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/articles"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetArticlesResponse(status_code=r.status_code, content_type=content_type)
        
        if True:
            pass

        return res

    
    def get_articles_categories(self) -> operations.GetArticlesCategoriesResponse:
        r"""List of all article categories
        List of all article categories
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/articles/categories"
        
        
        client = self._client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetArticlesCategoriesResponse(status_code=r.status_code, content_type=content_type)
        
        if True:
            pass

        return res

    
    def get_categories(self) -> operations.GetCategoriesResponse:
        r"""List of supported product categories
        List of supported product categories
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/categories"
        
        
        client = self._client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetCategoriesResponse(status_code=r.status_code, content_type=content_type)
        
        if True:
            pass

        return res

    
    def get_categories_flat(self) -> operations.GetCategoriesFlatResponse:
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/categories/flat"
        
        
        client = self._client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetCategoriesFlatResponse(status_code=r.status_code, content_type=content_type)
        
        if True:
            pass

        return res

    
    def get_categories_product_type_category_(self, request: operations.GetCategoriesProductTypeCategoryRequest) -> operations.GetCategoriesProductTypeCategoryResponse:
        r"""Get subcategory details
        Get subcategory details
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/categories/{product_type}/{category}", request.path_params)
        
        
        client = self._client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetCategoriesProductTypeCategoryResponse(status_code=r.status_code, content_type=content_type)
        
        if True:
            pass

        return res

    
    def get_categories_taxonomy(self) -> operations.GetCategoriesTaxonomyResponse:
        r"""Full taxonomy tree of categories including middle categories
        Full taxonomy tree of categories including middle categories
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/categories/taxonomy"
        
        
        client = self._client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetCategoriesTaxonomyResponse(status_code=r.status_code, content_type=content_type)
        
        if True:
            pass

        return res

    
    def get_categories_uuid_(self, request: operations.GetCategoriesUUIDRequest) -> operations.GetCategoriesUUIDResponse:
        r"""Get category details
        Get category details
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/categories/{uuid}", request.path_params)
        
        
        client = self._client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetCategoriesUUIDResponse(status_code=r.status_code, content_type=content_type)
        
        if True:
            pass

        return res

    
    def get_comparison_shopping_pages(self) -> operations.GetComparisonShoppingPagesResponse:
        r"""Returns a set of comparison shopping pages based on the current params
        Returns a set of comparison shopping pages based on the current params
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/comparison_shopping_pages"
        
        
        client = self._client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetComparisonShoppingPagesResponse(status_code=r.status_code, content_type=content_type)
        
        if True:
            pass

        return res

    
    def get_comparison_shopping_pages_find(self, request: operations.GetComparisonShoppingPagesFindRequest) -> operations.GetComparisonShoppingPagesFindResponse:
        r"""Show comparison shopping page
        Show comparison shopping page
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/comparison_shopping_pages/find"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetComparisonShoppingPagesFindResponse(status_code=r.status_code, content_type=content_type)
        
        if True:
            pass

        return res

    
    def get_comparison_shopping_pages_id_(self, request: operations.GetComparisonShoppingPagesIDRequest) -> operations.GetComparisonShoppingPagesIDResponse:
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/comparison_shopping_pages/{id}", request.path_params)
        
        
        client = self._client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetComparisonShoppingPagesIDResponse(status_code=r.status_code, content_type=content_type)
        
        if True:
            pass

        return res

    
    def get_comparison_shopping_pages_id_listings(self, request: operations.GetComparisonShoppingPagesIDListingsRequest) -> operations.GetComparisonShoppingPagesIDListingsResponse:
        r"""Return new or used listings for a comparison shopping page
        Return new or used listings for a comparison shopping page
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/comparison_shopping_pages/{id}/listings", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetComparisonShoppingPagesIDListingsResponse(status_code=r.status_code, content_type=content_type)
        
        if True:
            pass

        return res

    
    def get_comparison_shopping_pages_id_reviews(self, request: operations.GetComparisonShoppingPagesIDReviewsRequest) -> operations.GetComparisonShoppingPagesIDReviewsResponse:
        r"""View reviews of a comparison shopping page
        View reviews of a comparison shopping page
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/comparison_shopping_pages/{id}/reviews", request.path_params)
        
        
        client = self._client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetComparisonShoppingPagesIDReviewsResponse(status_code=r.status_code, content_type=content_type)
        
        if True:
            pass

        return res

    
    def get_countries(self) -> operations.GetCountriesResponse:
        r"""Retrieve a list of country codes with corresponding subregions
        Retrieve a list of country codes with corresponding subregions
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/countries"
        
        
        client = self._client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetCountriesResponse(status_code=r.status_code, content_type=content_type)
        
        if True:
            pass

        return res

    
    def get_csps(self) -> operations.GetCspsResponse:
        r"""Returns a set of comparison shopping pages based on the current params
        Returns a set of comparison shopping pages based on the current params
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/csps"
        
        
        client = self._client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetCspsResponse(status_code=r.status_code, content_type=content_type)
        
        if True:
            pass

        return res

    
    def get_csps_categories(self) -> operations.GetCspsCategoriesResponse:
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/csps/categories"
        
        
        client = self._client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetCspsCategoriesResponse(status_code=r.status_code, content_type=content_type)
        
        if True:
            pass

        return res

    
    def get_csps_find(self, request: operations.GetCspsFindRequest) -> operations.GetCspsFindResponse:
        r"""Show comparison shopping page
        Show comparison shopping page
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/csps/find"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetCspsFindResponse(status_code=r.status_code, content_type=content_type)
        
        if True:
            pass

        return res

    
    def get_csps_id_(self, request: operations.GetCspsIDRequest) -> operations.GetCspsIDResponse:
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/csps/{id}", request.path_params)
        
        
        client = self._client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetCspsIDResponse(status_code=r.status_code, content_type=content_type)
        
        if True:
            pass

        return res

    
    def get_curated_sets_slug_(self, request: operations.GetCuratedSetsSlugRequest) -> operations.GetCuratedSetsSlugResponse:
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/curated_sets/{slug}", request.path_params)
        
        
        client = self._client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetCuratedSetsSlugResponse(status_code=r.status_code, content_type=content_type)
        
        if True:
            pass

        return res

    
    def get_currencies_display(self) -> operations.GetCurrenciesDisplayResponse:
        r"""List of supported display currencies for browsing listings
        List of supported display currencies for browsing listings
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/currencies/display"
        
        
        client = self._client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetCurrenciesDisplayResponse(status_code=r.status_code, content_type=content_type)
        
        if True:
            pass

        return res

    
    def get_currencies_listing(self) -> operations.GetCurrenciesListingResponse:
        r"""List of supported listing currencies for shops
        List of supported listing currencies for shops
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/currencies/listing"
        
        
        client = self._client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetCurrenciesListingResponse(status_code=r.status_code, content_type=content_type)
        
        if True:
            pass

        return res

    
    def get_feedback_feedback_id_(self, request: operations.GetFeedbackFeedbackIDRequest) -> operations.GetFeedbackFeedbackIDResponse:
        r"""Feedback details
        Feedback details
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/feedback/{feedback_id}", request.path_params)
        
        
        client = self._client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetFeedbackFeedbackIDResponse(status_code=r.status_code, content_type=content_type)
        
        if True:
            pass

        return res

    
    def get_handpicked_slug_(self, request: operations.GetHandpickedSlugRequest) -> operations.GetHandpickedSlugResponse:
        r"""Get results from a handpicked collection
        Get results from a handpicked collection
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/handpicked/{slug}", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetHandpickedSlugResponse(status_code=r.status_code, content_type=content_type)
        
        if True:
            pass

        return res

    
    def get_listing_conditions(self) -> operations.GetListingConditionsResponse:
        r"""List of supported product conditions
        List of supported product conditions
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/listing_conditions"
        
        
        client = self._client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetListingConditionsResponse(status_code=r.status_code, content_type=content_type)
        
        if True:
            pass

        return res

    
    def get_listings(self, request: operations.GetListingsRequest) -> operations.GetListingsResponse:
        r"""Default search of listings includes only used & handmade. Add a filter to view all listings or use the /listings/all endpoint.
        Default search of listings includes only used & handmade. Add a filter to view all listings or use the /listings/all endpoint.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/listings"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetListingsResponse(status_code=r.status_code, content_type=content_type)
        
        if True:
            pass

        return res

    
    def get_listings_all(self, request: operations.GetListingsAllRequest) -> operations.GetListingsAllResponse:
        r"""All listings including used, handmade, and brand new
        All listings including used, handmade, and brand new
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/listings/all"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetListingsAllResponse(status_code=r.status_code, content_type=content_type)
        
        if True:
            pass

        return res

    
    def get_listings_facets_seller_location(self) -> operations.GetListingsFacetsSellerLocationResponse:
        r"""Individual facets
        Individual facets
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/listings/facets/seller_location"
        
        
        client = self._client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetListingsFacetsSellerLocationResponse(status_code=r.status_code, content_type=content_type)
        
        if True:
            pass

        return res

    
    def get_listings_id_negotiation(self, request: operations.GetListingsIDNegotiationRequest) -> operations.GetListingsIDNegotiationResponse:
        r"""Returns the latest negotiation for the requesting user given a listing id
        Returns the latest negotiation for the requesting user given a listing id
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/listings/{id}/negotiation", request.path_params)
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetListingsIDNegotiationResponse(status_code=r.status_code, content_type=content_type)
        
        if True:
            pass

        return res

    
    def get_listings_listing_id_bump(self, request: operations.GetListingsListingIDBumpRequest) -> operations.GetListingsListingIDBumpResponse:
        r"""View available bump tiers and stats for a listing
        View available bump tiers and stats for a listing
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/listings/{listing_id}/bump", request.path_params)
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetListingsListingIDBumpResponse(status_code=r.status_code, content_type=content_type)
        
        if True:
            pass

        return res

    
    def get_listings_listing_id_images(self, request: operations.GetListingsListingIDImagesRequest) -> operations.GetListingsListingIDImagesResponse:
        r"""View the images associated with a particular listing
        View the images associated with a particular listing
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/listings/{listing_id}/images", request.path_params)
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetListingsListingIDImagesResponse(status_code=r.status_code, content_type=content_type)
        
        if True:
            pass

        return res

    
    def get_listings_listing_id_sales(self, request: operations.GetListingsListingIDSalesRequest) -> operations.GetListingsListingIDSalesResponse:
        r"""See all sales that include a listing.
        See all sales that include a listing.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/listings/{listing_id}/sales", request.path_params)
        
        
        client = self._client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetListingsListingIDSalesResponse(status_code=r.status_code, content_type=content_type)
        
        if True:
            pass

        return res

    
    def get_listings_slug_(self, request: operations.GetListingsSlugRequest) -> operations.GetListingsSlugResponse:
        r"""Listing details
        Listing details
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/listings/{slug}", request.path_params)
        
        
        client = self._client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetListingsSlugResponse(status_code=r.status_code, content_type=content_type)
        
        if True:
            pass

        return res

    
    def get_listings_slug_edit(self, request: operations.GetListingsSlugEditRequest) -> operations.GetListingsSlugEditResponse:
        r"""Edit listing.
        Edit listing.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/listings/{slug}/edit", request.path_params)
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetListingsSlugEditResponse(status_code=r.status_code, content_type=content_type)
        
        if True:
            pass

        return res

    
    def get_listings_slug_reviews(self, request: operations.GetListingsSlugReviewsRequest) -> operations.GetListingsSlugReviewsResponse:
        r"""View reviews of a listing
        View reviews of a listing
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/listings/{slug}/reviews", request.path_params)
        
        
        client = self._client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetListingsSlugReviewsResponse(status_code=r.status_code, content_type=content_type)
        
        if True:
            pass

        return res

    
    def get_listings_slug_similar_listings(self, request: operations.GetListingsSlugSimilarListingsRequest) -> operations.GetListingsSlugSimilarListingsResponse:
        r"""Listing details
        Listing details
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/listings/{slug}/similar_listings", request.path_params)
        
        
        client = self._client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetListingsSlugSimilarListingsResponse(status_code=r.status_code, content_type=content_type)
        
        if True:
            pass

        return res

    
    def get_my_account(self, request: operations.GetMyAccountRequest) -> operations.GetMyAccountResponse:
        r"""Get account details
        Get account details
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/my/account"
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetMyAccountResponse(status_code=r.status_code, content_type=content_type)
        
        if True:
            pass

        return res

    
    def get_my_addresses(self, request: operations.GetMyAddressesRequest) -> operations.GetMyAddressesResponse:
        r"""See all addresses in your address book
        See all addresses in your address book
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/my/addresses"
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetMyAddressesResponse(status_code=r.status_code, content_type=content_type)
        
        if True:
            pass

        return res

    
    def get_my_conversations(self, request: operations.GetMyConversationsRequest) -> operations.GetMyConversationsResponse:
        r"""Get a list of your conversations
        Get a list of your conversations
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/my/conversations"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetMyConversationsResponse(status_code=r.status_code, content_type=content_type)
        
        if True:
            pass

        return res

    
    def get_my_conversations_id_(self, request: operations.GetMyConversationsIDRequest) -> operations.GetMyConversationsIDResponse:
        r"""Display conversation details with messages in natural time order (oldest to newest)
        Display conversation details with messages in natural time order (oldest to newest)
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/my/conversations/{id}", request.path_params)
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetMyConversationsIDResponse(status_code=r.status_code, content_type=content_type)
        
        if True:
            pass

        return res

    
    def get_my_counts(self, request: operations.GetMyCountsRequest) -> operations.GetMyCountsResponse:
        r"""Get your actionable status counts
        Get your actionable status counts
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/my/counts"
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetMyCountsResponse(status_code=r.status_code, content_type=content_type)
        
        if True:
            pass

        return res

    
    def get_my_feed(self, request: operations.GetMyFeedRequest) -> operations.GetMyFeedResponse:
        r"""Get listings from your feed
        Get listings from your feed
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/my/feed"
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetMyFeedResponse(status_code=r.status_code, content_type=content_type)
        
        if True:
            pass

        return res

    
    def get_my_feed_customize(self, request: operations.GetMyFeedCustomizeRequest) -> operations.GetMyFeedCustomizeResponse:
        r"""get your feed customization options
        get your feed customization options
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/my/feed/customize"
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetMyFeedCustomizeResponse(status_code=r.status_code, content_type=content_type)
        
        if True:
            pass

        return res

    
    def get_my_feed_grid(self, request: operations.GetMyFeedGridRequest) -> operations.GetMyFeedGridResponse:
        r"""get your feed
        get your feed
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/my/feed/grid"
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetMyFeedGridResponse(status_code=r.status_code, content_type=content_type)
        
        if True:
            pass

        return res

    
    def get_my_feedback_received(self, request: operations.GetMyFeedbackReceivedRequest) -> operations.GetMyFeedbackReceivedResponse:
        r"""List of received feedback
        List of received feedback
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/my/feedback/received"
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetMyFeedbackReceivedResponse(status_code=r.status_code, content_type=content_type)
        
        if True:
            pass

        return res

    
    def get_my_feedback_sent(self, request: operations.GetMyFeedbackSentRequest) -> operations.GetMyFeedbackSentResponse:
        r"""List of sent feedback
        List of sent feedback
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/my/feedback/sent"
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetMyFeedbackSentResponse(status_code=r.status_code, content_type=content_type)
        
        if True:
            pass

        return res

    
    def get_my_follows(self, request: operations.GetMyFollowsRequest) -> operations.GetMyFollowsResponse:
        r"""See what the user is following
        See what the user is following
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/my/follows"
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetMyFollowsResponse(status_code=r.status_code, content_type=content_type)
        
        if True:
            pass

        return res

    
    def get_my_follows_articles(self, request: operations.GetMyFollowsArticlesRequest) -> operations.GetMyFollowsArticlesResponse:
        r"""Returns a user's ArticleCategoryFollows
        Returns a user's ArticleCategoryFollows
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/my/follows/articles"
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetMyFollowsArticlesResponse(status_code=r.status_code, content_type=content_type)
        
        if True:
            pass

        return res

    
    def get_my_follows_brands_slug_(self, request: operations.GetMyFollowsBrandsSlugRequest) -> operations.GetMyFollowsBrandsSlugResponse:
        r"""Follow status for a brand
        Follow status for a brand
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/my/follows/brands/{slug}", request.path_params)
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetMyFollowsBrandsSlugResponse(status_code=r.status_code, content_type=content_type)
        
        if True:
            pass

        return res

    
    def get_my_follows_categories_category_subcategory_(self, request: operations.GetMyFollowsCategoriesCategorySubcategoryRequest) -> operations.GetMyFollowsCategoriesCategorySubcategoryResponse:
        r"""Follow status for a subcategory
        Follow status for a subcategory
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/my/follows/categories/{category}/{subcategory}", request.path_params)
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetMyFollowsCategoriesCategorySubcategoryResponse(status_code=r.status_code, content_type=content_type)
        
        if True:
            pass

        return res

    
    def get_my_follows_categories_identifier_(self, request: operations.GetMyFollowsCategoriesIdentifierRequest) -> operations.GetMyFollowsCategoriesIdentifierResponse:
        r"""Follow status for a category
        Follow status for a category
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/my/follows/categories/{identifier}", request.path_params)
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetMyFollowsCategoriesIdentifierResponse(status_code=r.status_code, content_type=content_type)
        
        if True:
            pass

        return res

    
    def get_my_follows_collections_slug_(self, request: operations.GetMyFollowsCollectionsSlugRequest) -> operations.GetMyFollowsCollectionsSlugResponse:
        r"""Follow status for a collection
        Follow status for a collection
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/my/follows/collections/{slug}", request.path_params)
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetMyFollowsCollectionsSlugResponse(status_code=r.status_code, content_type=content_type)
        
        if True:
            pass

        return res

    
    def get_my_follows_handpicked_slug_(self, request: operations.GetMyFollowsHandpickedSlugRequest) -> operations.GetMyFollowsHandpickedSlugResponse:
        r"""Follow status for a handpicked collection
        Follow status for a handpicked collection
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/my/follows/handpicked/{slug}", request.path_params)
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetMyFollowsHandpickedSlugResponse(status_code=r.status_code, content_type=content_type)
        
        if True:
            pass

        return res

    
    def get_my_follows_search(self, request: operations.GetMyFollowsSearchRequest) -> operations.GetMyFollowsSearchResponse:
        r"""Follow status for a search
        Follow status for a search
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/my/follows/search"
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetMyFollowsSearchResponse(status_code=r.status_code, content_type=content_type)
        
        if True:
            pass

        return res

    
    def get_my_follows_shops_slug_(self, request: operations.GetMyFollowsShopsSlugRequest) -> operations.GetMyFollowsShopsSlugResponse:
        r"""Follow status for a shop
        Follow status for a shop
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/my/follows/shops/{slug}", request.path_params)
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetMyFollowsShopsSlugResponse(status_code=r.status_code, content_type=content_type)
        
        if True:
            pass

        return res

    
    def get_my_listings(self, request: operations.GetMyListingsRequest) -> operations.GetMyListingsResponse:
        r"""Retrieve a list of live listings for the seller. To search all listings specify state=all
        Retrieve a list of live listings for the seller. To search all listings specify state=all
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/my/listings"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetMyListingsResponse(status_code=r.status_code, content_type=content_type)
        
        if True:
            pass

        return res

    
    def get_my_listings_drafts(self, request: operations.GetMyListingsDraftsRequest) -> operations.GetMyListingsDraftsResponse:
        r"""Retrieve a list your draft listings
        Retrieve a list your draft listings
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/my/listings/drafts"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetMyListingsDraftsResponse(status_code=r.status_code, content_type=content_type)
        
        if True:
            pass

        return res

    
    def get_my_listings_negotiations(self, request: operations.GetMyListingsNegotiationsRequest) -> operations.GetMyListingsNegotiationsResponse:
        r"""Get a list of active negotiations as a seller
        Get a list of active negotiations as a seller
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/my/listings/negotiations"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetMyListingsNegotiationsResponse(status_code=r.status_code, content_type=content_type)
        
        if True:
            pass

        return res

    
    def get_my_lists(self, request: operations.GetMyListsRequest) -> operations.GetMyListsResponse:
        r"""Get a list of your lists (wishlist, watch list, etc)
        Get a list of your lists (wishlist, watch list, etc)
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/my/lists"
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetMyListsResponse(status_code=r.status_code, content_type=content_type)
        
        if True:
            pass

        return res

    
    def get_my_negotiations_buying(self, request: operations.GetMyNegotiationsBuyingRequest) -> operations.GetMyNegotiationsBuyingResponse:
        r"""Get a list of active negotiations as a buyer
        Get a list of active negotiations as a buyer
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/my/negotiations/buying"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetMyNegotiationsBuyingResponse(status_code=r.status_code, content_type=content_type)
        
        if True:
            pass

        return res

    
    def get_my_negotiations_id_(self, request: operations.GetMyNegotiationsIDRequest) -> operations.GetMyNegotiationsIDResponse:
        r"""Get offer details
        Get offer details
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/my/negotiations/{id}", request.path_params)
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetMyNegotiationsIDResponse(status_code=r.status_code, content_type=content_type)
        
        if True:
            pass

        return res

    
    def get_my_orders_awaiting_feedback(self, request: operations.GetMyOrdersAwaitingFeedbackRequest) -> operations.GetMyOrdersAwaitingFeedbackResponse:
        r"""List of orders that need feedback
        List of orders that need feedback
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/my/orders/awaiting_feedback"
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetMyOrdersAwaitingFeedbackResponse(status_code=r.status_code, content_type=content_type)
        
        if True:
            pass

        return res

    
    def get_my_orders_buying_all(self, request: operations.GetMyOrdersBuyingAllRequest) -> operations.GetMyOrdersBuyingAllResponse:
        r"""Returns all orders, newest first.
        Returns all orders, newest first.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/my/orders/buying/all"
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetMyOrdersBuyingAllResponse(status_code=r.status_code, content_type=content_type)
        
        if True:
            pass

        return res

    
    def get_my_orders_buying_by_uuid_uuid_(self, request: operations.GetMyOrdersBuyingByUUIDUUIDRequest) -> operations.GetMyOrdersBuyingByUUIDUUIDResponse:
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/my/orders/buying/by_uuid/{uuid}", request.path_params)
        
        
        client = self._client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetMyOrdersBuyingByUUIDUUIDResponse(status_code=r.status_code, content_type=content_type)
        
        if True:
            pass

        return res

    
    def get_my_orders_buying_id_(self, request: operations.GetMyOrdersBuyingIDRequest) -> operations.GetMyOrdersBuyingIDResponse:
        r"""Returns order details for a buyer
        Returns order details for a buyer
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/my/orders/buying/{id}", request.path_params)
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetMyOrdersBuyingIDResponse(status_code=r.status_code, content_type=content_type)
        
        if True:
            pass

        return res

    
    def get_my_orders_buying_unpaid(self, request: operations.GetMyOrdersBuyingUnpaidRequest) -> operations.GetMyOrdersBuyingUnpaidResponse:
        r"""Returns unpaid orders, newest first.
        Returns unpaid orders, newest first.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/my/orders/buying/unpaid"
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetMyOrdersBuyingUnpaidResponse(status_code=r.status_code, content_type=content_type)
        
        if True:
            pass

        return res

    
    def get_my_orders_selling_all(self, request: operations.GetMyOrdersSellingAllRequest) -> operations.GetMyOrdersSellingAllResponse:
        r"""Get all seller orders, newest first.
        Get all seller orders, newest first.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/my/orders/selling/all"
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetMyOrdersSellingAllResponse(status_code=r.status_code, content_type=content_type)
        
        if True:
            pass

        return res

    
    def get_my_orders_selling_awaiting_shipment(self, request: operations.GetMyOrdersSellingAwaitingShipmentRequest) -> operations.GetMyOrdersSellingAwaitingShipmentResponse:
        r"""Get unpaid seller orders, newest first.
        Get unpaid seller orders, newest first.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/my/orders/selling/awaiting_shipment"
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetMyOrdersSellingAwaitingShipmentResponse(status_code=r.status_code, content_type=content_type)
        
        if True:
            pass

        return res

    
    def get_my_orders_selling_buyer_history_buyer_id_(self, request: operations.GetMyOrdersSellingBuyerHistoryBuyerIDRequest) -> operations.GetMyOrdersSellingBuyerHistoryBuyerIDResponse:
        r"""See previous orders from buyer
        See previous orders from buyer
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/my/orders/selling/buyer_history/{buyer_id}", request.path_params)
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetMyOrdersSellingBuyerHistoryBuyerIDResponse(status_code=r.status_code, content_type=content_type)
        
        if True:
            pass

        return res

    
    def get_my_orders_selling_by_uuid_uuid_(self, request: operations.GetMyOrdersSellingByUUIDUUIDRequest) -> operations.GetMyOrdersSellingByUUIDUUIDResponse:
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/my/orders/selling/by_uuid/{uuid}", request.path_params)
        
        
        client = self._client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetMyOrdersSellingByUUIDUUIDResponse(status_code=r.status_code, content_type=content_type)
        
        if True:
            pass

        return res

    
    def get_my_orders_selling_id_(self, request: operations.GetMyOrdersSellingIDRequest) -> operations.GetMyOrdersSellingIDResponse:
        r"""Returns order details for a seller
        Returns order details for a seller
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/my/orders/selling/{id}", request.path_params)
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetMyOrdersSellingIDResponse(status_code=r.status_code, content_type=content_type)
        
        if True:
            pass

        return res

    
    def get_my_orders_selling_unpaid(self, request: operations.GetMyOrdersSellingUnpaidRequest) -> operations.GetMyOrdersSellingUnpaidResponse:
        r"""Get unpaid seller orders, newest first.
        Get unpaid seller orders, newest first.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/my/orders/selling/unpaid"
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetMyOrdersSellingUnpaidResponse(status_code=r.status_code, content_type=content_type)
        
        if True:
            pass

        return res

    
    def get_my_payments_selling(self, request: operations.GetMyPaymentsSellingRequest) -> operations.GetMyPaymentsSellingResponse:
        r"""Get payments
        Get payments
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/my/payments/selling"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetMyPaymentsSellingResponse(status_code=r.status_code, content_type=content_type)
        
        if True:
            pass

        return res

    
    def get_my_payments_selling_id_(self, request: operations.GetMyPaymentsSellingIDRequest) -> operations.GetMyPaymentsSellingIDResponse:
        r"""Get payment
        Get payment
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/my/payments/selling/{id}", request.path_params)
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetMyPaymentsSellingIDResponse(status_code=r.status_code, content_type=content_type)
        
        if True:
            pass

        return res

    
    def get_my_payouts(self, request: operations.GetMyPayoutsRequest) -> operations.GetMyPayoutsResponse:
        r"""Get a list of payouts
        Get a list of payouts
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/my/payouts"
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetMyPayoutsResponse(status_code=r.status_code, content_type=content_type)
        
        if True:
            pass

        return res

    
    def get_my_payouts_id_line_items(self, request: operations.GetMyPayoutsIDLineItemsRequest) -> operations.GetMyPayoutsIDLineItemsResponse:
        r"""Read the line items of a payout
        Read the line items of a payout
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/my/payouts/{id}/line_items", request.path_params)
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetMyPayoutsIDLineItemsResponse(status_code=r.status_code, content_type=content_type)
        
        if True:
            pass

        return res

    
    def get_my_refund_requests_selling(self, request: operations.GetMyRefundRequestsSellingRequest) -> operations.GetMyRefundRequestsSellingResponse:
        r"""Get a list of refund requests as a seller
        Get a list of refund requests as a seller
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/my/refund_requests/selling"
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetMyRefundRequestsSellingResponse(status_code=r.status_code, content_type=content_type)
        
        if True:
            pass

        return res

    
    def get_my_viewed_listings(self, request: operations.GetMyViewedListingsRequest) -> operations.GetMyViewedListingsResponse:
        r"""Get a list of your recently viewed listings.
        Get a list of your recently viewed listings.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/my/viewed_listings"
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetMyViewedListingsResponse(status_code=r.status_code, content_type=content_type)
        
        if True:
            pass

        return res

    
    def get_my_wishlist(self, request: operations.GetMyWishlistRequest) -> operations.GetMyWishlistResponse:
        r"""Get a list of wishlisted items
        Get a list of wishlisted items
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/my/wishlist"
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetMyWishlistResponse(status_code=r.status_code, content_type=content_type)
        
        if True:
            pass

        return res

    
    def get_orders_order_id_feedback_buyer(self, request: operations.GetOrdersOrderIDFeedbackBuyerRequest) -> operations.GetOrdersOrderIDFeedbackBuyerResponse:
        r"""Feedback details for an order's buyer
        Feedback details for an order's buyer
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/orders/{order_id}/feedback/buyer", request.path_params)
        
        
        client = self._client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetOrdersOrderIDFeedbackBuyerResponse(status_code=r.status_code, content_type=content_type)
        
        if True:
            pass

        return res

    
    def get_orders_order_id_feedback_seller(self, request: operations.GetOrdersOrderIDFeedbackSellerRequest) -> operations.GetOrdersOrderIDFeedbackSellerResponse:
        r"""Feedback details for an order's seller
        Feedback details for an order's seller
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/orders/{order_id}/feedback/seller", request.path_params)
        
        
        client = self._client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetOrdersOrderIDFeedbackSellerResponse(status_code=r.status_code, content_type=content_type)
        
        if True:
            pass

        return res

    
    def get_payment_methods(self) -> operations.GetPaymentMethodsResponse:
        r"""Get list of payment methods
        Get list of payment methods
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/payment_methods"
        
        
        client = self._client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetPaymentMethodsResponse(status_code=r.status_code, content_type=content_type)
        
        if True:
            pass

        return res

    
    def get_priceguide_id_transactions_summary(self, request: operations.GetPriceguideIDTransactionsSummaryRequest) -> operations.GetPriceguideIDTransactionsSummaryResponse:
        r"""Get a summary of transactions for a given price guide
        Get a summary of transactions for a given price guide
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/priceguide/{id}/transactions/summary", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetPriceguideIDTransactionsSummaryResponse(status_code=r.status_code, content_type=content_type)
        
        if True:
            pass

        return res

    
    def get_products_reviews_id_(self, request: operations.GetProductsReviewsIDRequest) -> operations.GetProductsReviewsIDResponse:
        r"""View a review
        View a review
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/products/reviews/{id}", request.path_params)
        
        
        client = self._client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetProductsReviewsIDResponse(status_code=r.status_code, content_type=content_type)
        
        if True:
            pass

        return res

    
    def get_products_slug_reviews(self, request: operations.GetProductsSlugReviewsRequest) -> operations.GetProductsSlugReviewsResponse:
        r"""View reviews of a comparison shopping page
        View reviews of a comparison shopping page
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/products/{slug}/reviews", request.path_params)
        
        
        client = self._client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetProductsSlugReviewsResponse(status_code=r.status_code, content_type=content_type)
        
        if True:
            pass

        return res

    
    def get_sales_reverb(self, request: operations.GetSalesReverbRequest) -> operations.GetSalesReverbResponse:
        r"""View upcoming and live Reverb official sales.
        View upcoming and live Reverb official sales.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/sales/reverb"
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetSalesReverbResponse(status_code=r.status_code, content_type=content_type)
        
        if True:
            pass

        return res

    
    def get_sales_seller(self, request: operations.GetSalesSellerRequest) -> operations.GetSalesSellerResponse:
        r"""View your created sales.
        View your created sales.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/sales/seller"
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetSalesSellerResponse(status_code=r.status_code, content_type=content_type)
        
        if True:
            pass

        return res

    
    def get_sales_slug_(self, request: operations.GetSalesSlugRequest) -> operations.GetSalesSlugResponse:
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/sales/{slug}", request.path_params)
        
        
        client = self._client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetSalesSlugResponse(status_code=r.status_code, content_type=content_type)
        
        if True:
            pass

        return res

    
    def get_shipping_providers(self) -> operations.GetShippingProvidersResponse:
        r"""List of supported shipping providers
        List of supported shipping providers
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/shipping/providers"
        
        
        client = self._client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetShippingProvidersResponse(status_code=r.status_code, content_type=content_type)
        
        if True:
            pass

        return res

    
    def get_shipping_regions(self) -> operations.GetShippingRegionsResponse:
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/shipping/regions"
        
        
        client = self._client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetShippingRegionsResponse(status_code=r.status_code, content_type=content_type)
        
        if True:
            pass

        return res

    
    def get_shop(self, request: operations.GetShopRequest) -> operations.GetShopResponse:
        r"""Get your own shop details
        Get your own shop details
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/shop"
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetShopResponse(status_code=r.status_code, content_type=content_type)
        
        if True:
            pass

        return res

    
    def get_shop_listing_conditions(self, request: operations.GetShopListingConditionsRequest) -> operations.GetShopListingConditionsResponse:
        r"""List of supported product conditions
        List of supported product conditions
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/shop/listing_conditions"
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetShopListingConditionsResponse(status_code=r.status_code, content_type=content_type)
        
        if True:
            pass

        return res

    
    def get_shop_payment_methods(self, request: operations.GetShopPaymentMethodsRequest) -> operations.GetShopPaymentMethodsResponse:
        r"""Get accepted payment methods
        Get accepted payment methods
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/shop/payment_methods"
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetShopPaymentMethodsResponse(status_code=r.status_code, content_type=content_type)
        
        if True:
            pass

        return res

    
    def get_shop_vacation(self, request: operations.GetShopVacationRequest) -> operations.GetShopVacationResponse:
        r"""Returns shop vacation status
        Returns shop vacation status
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/shop/vacation"
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetShopVacationResponse(status_code=r.status_code, content_type=content_type)
        
        if True:
            pass

        return res

    
    def get_shops_id_storefronts(self, request: operations.GetShopsIDStorefrontsRequest) -> operations.GetShopsIDStorefrontsResponse:
        r"""Get storefront details on a shop.
        Get storefront details on a shop.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/shops/{id}/storefronts", request.path_params)
        
        
        client = self._client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetShopsIDStorefrontsResponse(status_code=r.status_code, content_type=content_type)
        
        if True:
            pass

        return res

    
    def get_shops_shop_id_shipping_profiles(self, request: operations.GetShopsShopIDShippingProfilesRequest) -> operations.GetShopsShopIDShippingProfilesResponse:
        r"""List of shipping profiles for your shop
        List of shipping profiles for your shop
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/shops/{shop_id}/shipping_profiles", request.path_params)
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetShopsShopIDShippingProfilesResponse(status_code=r.status_code, content_type=content_type)
        
        if True:
            pass

        return res

    
    def get_shops_slug_(self, request: operations.GetShopsSlugRequest) -> operations.GetShopsSlugResponse:
        r"""Get details on a shop.
        Get details on a shop.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/shops/{slug}", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetShopsSlugResponse(status_code=r.status_code, content_type=content_type)
        
        if True:
            pass

        return res

    
    def get_shops_slug_feedback(self, request: operations.GetShopsSlugFeedbackRequest) -> operations.GetShopsSlugFeedbackResponse:
        r"""Get seller's feedback
        Get seller's feedback
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/shops/{slug}/feedback", request.path_params)
        
        
        client = self._client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetShopsSlugFeedbackResponse(status_code=r.status_code, content_type=content_type)
        
        if True:
            pass

        return res

    
    def get_shops_slug_feedback_buyer(self, request: operations.GetShopsSlugFeedbackBuyerRequest) -> operations.GetShopsSlugFeedbackBuyerResponse:
        r"""Get seller's feedback as a buyer
        Get seller's feedback as a buyer
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/shops/{slug}/feedback/buyer", request.path_params)
        
        
        client = self._client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetShopsSlugFeedbackBuyerResponse(status_code=r.status_code, content_type=content_type)
        
        if True:
            pass

        return res

    
    def get_shops_slug_feedback_seller(self, request: operations.GetShopsSlugFeedbackSellerRequest) -> operations.GetShopsSlugFeedbackSellerResponse:
        r"""Get seller's feedback as a seller
        Get seller's feedback as a seller
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/shops/{slug}/feedback/seller", request.path_params)
        
        
        client = self._client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetShopsSlugFeedbackSellerResponse(status_code=r.status_code, content_type=content_type)
        
        if True:
            pass

        return res

    
    def get_wants(self, request: operations.GetWantsRequest) -> operations.GetWantsResponse:
        r"""A list of wanted items by the user
        A list of wanted items by the user
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/wants"
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetWantsResponse(status_code=r.status_code, content_type=content_type)
        
        if True:
            pass

        return res

    
    def get_webhooks_registrations(self) -> operations.GetWebhooksRegistrationsResponse:
        r"""Get webhook registrations
        Get webhook registrations
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/webhooks/registrations"
        
        
        client = self._client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetWebhooksRegistrationsResponse(status_code=r.status_code, content_type=content_type)
        
        if True:
            pass

        return res

    
    def get_webhooks_registrations_id_(self, request: operations.GetWebhooksRegistrationsIDRequest) -> operations.GetWebhooksRegistrationsIDResponse:
        r"""Get details of a webhook registration
        Get details of a webhook registration
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/webhooks/registrations/{id}", request.path_params)
        
        
        client = self._client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetWebhooksRegistrationsIDResponse(status_code=r.status_code, content_type=content_type)
        
        if True:
            pass

        return res

    
    def post_conversations_conversation_id_offer(self, request: operations.PostConversationsConversationIDOfferRequest) -> operations.PostConversationsConversationIDOfferResponse:
        r"""Make an offer to the other participant in the conversation
        Make an offer to the other participant in the conversation
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/conversations/{conversation_id}/offer", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PostConversationsConversationIDOfferResponse(status_code=r.status_code, content_type=content_type)
        
        if True:
            pass

        return res

    
    def post_conversations_id_offer(self, request: operations.PostConversationsIDOfferRequest) -> operations.PostConversationsIDOfferResponse:
        r"""Make an offer to the other participant in the conversation
        Make an offer to the other participant in the conversation
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/conversations/{id}/offer", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PostConversationsIDOfferResponse(status_code=r.status_code, content_type=content_type)
        
        if True:
            pass

        return res

    
    def post_listings(self, request: operations.PostListingsRequest) -> operations.PostListingsResponse:
        r"""Create a listing
        Create a listing
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/listings"
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PostListingsResponse(status_code=r.status_code, content_type=content_type)
        
        if True:
            pass

        return res

    
    def post_listings_id_offer(self, request: operations.PostListingsIDOfferRequest) -> operations.PostListingsIDOfferResponse:
        r"""Make an offer to the seller of a listing
        Make an offer to the seller of a listing
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/listings/{id}/offer", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PostListingsIDOfferResponse(status_code=r.status_code, content_type=content_type)
        
        if True:
            pass

        return res

    
    def post_listings_listing_id_bump_budget_type_(self, request: operations.PostListingsListingIDBumpBudgetTypeRequest) -> operations.PostListingsListingIDBumpBudgetTypeResponse:
        r"""Bump a listing
        Bump a listing
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/listings/{listing_id}/bump/{budget_type}", request.path_params)
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url)
        content_type = r.headers.get("Content-Type")

        res = operations.PostListingsListingIDBumpBudgetTypeResponse(status_code=r.status_code, content_type=content_type)
        
        if True:
            pass

        return res

    
    def post_listings_listing_id_conversations(self, request: operations.PostListingsListingIDConversationsRequest) -> operations.PostListingsListingIDConversationsResponse:
        r"""Start a conversation with a seller
        Start a conversation with a seller
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/listings/{listing_id}/conversations", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PostListingsListingIDConversationsResponse(status_code=r.status_code, content_type=content_type)
        
        if True:
            pass

        return res

    
    def post_listings_slug_flag(self, request: operations.PostListingsSlugFlagRequest) -> operations.PostListingsSlugFlagResponse:
        r"""Flag a listing for inappropriate content or fraud
        Flag a listing for inappropriate content or fraud
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/listings/{slug}/flag", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = self._client
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PostListingsSlugFlagResponse(status_code=r.status_code, content_type=content_type)
        
        if True:
            pass

        return res

    
    def post_listings_slug_reviews(self, request: operations.PostListingsSlugReviewsRequest) -> operations.PostListingsSlugReviewsResponse:
        r"""Create a review for a listing
        Create a review for a listing
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/listings/{slug}/reviews", request.path_params)
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url)
        content_type = r.headers.get("Content-Type")

        res = operations.PostListingsSlugReviewsResponse(status_code=r.status_code, content_type=content_type)
        
        if True:
            pass

        return res

    
    def post_my_addresses(self, request: operations.PostMyAddressesRequest) -> operations.PostMyAddressesResponse:
        r"""Create a new address in your address book
        Create a new address in your address book
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/my/addresses"
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url)
        content_type = r.headers.get("Content-Type")

        res = operations.PostMyAddressesResponse(status_code=r.status_code, content_type=content_type)
        
        if True:
            pass

        return res

    
    def post_my_conversations(self, request: operations.PostMyConversationsRequest) -> operations.PostMyConversationsResponse:
        r"""Start a conversation
        Start a conversation
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/my/conversations"
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PostMyConversationsResponse(status_code=r.status_code, content_type=content_type)
        
        if True:
            pass

        return res

    
    def post_my_conversations_conversation_id_messages(self, request: operations.PostMyConversationsConversationIDMessagesRequest) -> operations.PostMyConversationsConversationIDMessagesResponse:
        r"""Send a message
        Send a message
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/my/conversations/{conversation_id}/messages", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PostMyConversationsConversationIDMessagesResponse(status_code=r.status_code, content_type=content_type)
        
        if True:
            pass

        return res

    
    def post_my_curated_set_product_product_id_(self, request: operations.PostMyCuratedSetProductProductIDRequest) -> operations.PostMyCuratedSetProductProductIDResponse:
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/my/curated_set/product/{product_id}", request.path_params)
        
        
        client = self._client
        
        r = client.request("POST", url)
        content_type = r.headers.get("Content-Type")

        res = operations.PostMyCuratedSetProductProductIDResponse(status_code=r.status_code, content_type=content_type)
        
        if True:
            pass

        return res

    
    def post_my_follows_articles(self, request: operations.PostMyFollowsArticlesRequest) -> operations.PostMyFollowsArticlesResponse:
        r"""Set a user's ArticleCategoryFollows
        Set a user's ArticleCategoryFollows
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/my/follows/articles"
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PostMyFollowsArticlesResponse(status_code=r.status_code, content_type=content_type)
        
        if True:
            pass

        return res

    
    def post_my_follows_brands_slug_(self, request: operations.PostMyFollowsBrandsSlugRequest) -> operations.PostMyFollowsBrandsSlugResponse:
        r"""Follow a brand
        Follow a brand
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/my/follows/brands/{slug}", request.path_params)
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url)
        content_type = r.headers.get("Content-Type")

        res = operations.PostMyFollowsBrandsSlugResponse(status_code=r.status_code, content_type=content_type)
        
        if True:
            pass

        return res

    
    def post_my_follows_categories_category_subcategory_(self, request: operations.PostMyFollowsCategoriesCategorySubcategoryRequest) -> operations.PostMyFollowsCategoriesCategorySubcategoryResponse:
        r"""Follow a subcategory
        Follow a subcategory
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/my/follows/categories/{category}/{subcategory}", request.path_params)
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url)
        content_type = r.headers.get("Content-Type")

        res = operations.PostMyFollowsCategoriesCategorySubcategoryResponse(status_code=r.status_code, content_type=content_type)
        
        if True:
            pass

        return res

    
    def post_my_follows_categories_identifier_(self, request: operations.PostMyFollowsCategoriesIdentifierRequest) -> operations.PostMyFollowsCategoriesIdentifierResponse:
        r"""Follow a category
        Follow a category
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/my/follows/categories/{identifier}", request.path_params)
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url)
        content_type = r.headers.get("Content-Type")

        res = operations.PostMyFollowsCategoriesIdentifierResponse(status_code=r.status_code, content_type=content_type)
        
        if True:
            pass

        return res

    
    def post_my_follows_categories_uuid_(self, request: operations.PostMyFollowsCategoriesUUIDRequest) -> operations.PostMyFollowsCategoriesUUIDResponse:
        r"""Follow a category
        Follow a category
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/my/follows/categories/{uuid}", request.path_params)
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url)
        content_type = r.headers.get("Content-Type")

        res = operations.PostMyFollowsCategoriesUUIDResponse(status_code=r.status_code, content_type=content_type)
        
        if True:
            pass

        return res

    
    def post_my_follows_collections_slug_(self, request: operations.PostMyFollowsCollectionsSlugRequest) -> operations.PostMyFollowsCollectionsSlugResponse:
        r"""Follow a collection
        Follow a collection
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/my/follows/collections/{slug}", request.path_params)
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url)
        content_type = r.headers.get("Content-Type")

        res = operations.PostMyFollowsCollectionsSlugResponse(status_code=r.status_code, content_type=content_type)
        
        if True:
            pass

        return res

    
    def post_my_follows_follow_id_alert(self, request: operations.PostMyFollowsFollowIDAlertRequest) -> operations.PostMyFollowsFollowIDAlertResponse:
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/my/follows/{follow_id}/alert", request.path_params)
        
        
        client = self._client
        
        r = client.request("POST", url)
        content_type = r.headers.get("Content-Type")

        res = operations.PostMyFollowsFollowIDAlertResponse(status_code=r.status_code, content_type=content_type)
        
        if True:
            pass

        return res

    
    def post_my_follows_handpicked_slug_(self, request: operations.PostMyFollowsHandpickedSlugRequest) -> operations.PostMyFollowsHandpickedSlugResponse:
        r"""Follow a handpicked collection
        Follow a handpicked collection
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/my/follows/handpicked/{slug}", request.path_params)
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url)
        content_type = r.headers.get("Content-Type")

        res = operations.PostMyFollowsHandpickedSlugResponse(status_code=r.status_code, content_type=content_type)
        
        if True:
            pass

        return res

    
    def post_my_follows_search(self, request: operations.PostMyFollowsSearchRequest) -> operations.PostMyFollowsSearchResponse:
        r"""Follow a search
        Follow a search
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/my/follows/search"
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PostMyFollowsSearchResponse(status_code=r.status_code, content_type=content_type)
        
        if True:
            pass

        return res

    
    def post_my_follows_shops_slug_(self, request: operations.PostMyFollowsShopsSlugRequest) -> operations.PostMyFollowsShopsSlugResponse:
        r"""Follow a shop
        Follow a shop
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/my/follows/shops/{slug}", request.path_params)
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url)
        content_type = r.headers.get("Content-Type")

        res = operations.PostMyFollowsShopsSlugResponse(status_code=r.status_code, content_type=content_type)
        
        if True:
            pass

        return res

    
    def post_my_negotiations_id_accept(self, request: operations.PostMyNegotiationsIDAcceptRequest) -> operations.PostMyNegotiationsIDAcceptResponse:
        r"""Accept an offer
        Accept an offer
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/my/negotiations/{id}/accept", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PostMyNegotiationsIDAcceptResponse(status_code=r.status_code, content_type=content_type)
        
        if True:
            pass

        return res

    
    def post_my_negotiations_id_counter(self, request: operations.PostMyNegotiationsIDCounterRequest) -> operations.PostMyNegotiationsIDCounterResponse:
        r"""Counter an offer
        Counter an offer
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/my/negotiations/{id}/counter", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PostMyNegotiationsIDCounterResponse(status_code=r.status_code, content_type=content_type)
        
        if True:
            pass

        return res

    
    def post_my_negotiations_id_decline(self, request: operations.PostMyNegotiationsIDDeclineRequest) -> operations.PostMyNegotiationsIDDeclineResponse:
        r"""Decline an offer
        Decline an offer
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/my/negotiations/{id}/decline", request.path_params)
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url)
        content_type = r.headers.get("Content-Type")

        res = operations.PostMyNegotiationsIDDeclineResponse(status_code=r.status_code, content_type=content_type)
        
        if True:
            pass

        return res

    
    def post_my_orders_buying_id_mark_received(self, request: operations.PostMyOrdersBuyingIDMarkReceivedRequest) -> operations.PostMyOrdersBuyingIDMarkReceivedResponse:
        r"""Marks an order as received by the buyer
        Marks an order as received by the buyer
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/my/orders/buying/{id}/mark_received", request.path_params)
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url)
        content_type = r.headers.get("Content-Type")

        res = operations.PostMyOrdersBuyingIDMarkReceivedResponse(status_code=r.status_code, content_type=content_type)
        
        if True:
            pass

        return res

    
    def post_my_orders_selling_id_mark_picked_up(self, request: operations.PostMyOrdersSellingIDMarkPickedUpRequest) -> operations.PostMyOrdersSellingIDMarkPickedUpResponse:
        r"""Marks an order as picked up
        Marks an order as picked up
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/my/orders/selling/{id}/mark_picked_up", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PostMyOrdersSellingIDMarkPickedUpResponse(status_code=r.status_code, content_type=content_type)
        
        if True:
            pass

        return res

    
    def post_my_orders_selling_id_ship(self, request: operations.PostMyOrdersSellingIDShipRequest) -> operations.PostMyOrdersSellingIDShipResponse:
        r"""Marks an order as shipped
        Marks an order as shipped
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/my/orders/selling/{id}/ship", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PostMyOrdersSellingIDShipResponse(status_code=r.status_code, content_type=content_type)
        
        if True:
            pass

        return res

    
    def post_my_orders_selling_order_id_refund_requests(self, request: operations.PostMyOrdersSellingOrderIDRefundRequestsRequest) -> operations.PostMyOrdersSellingOrderIDRefundRequestsResponse:
        r"""Initiate a refund for a sold order
        Initiate a refund for a sold order
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/my/orders/selling/{order_id}/refund_requests", request.path_params)
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url)
        content_type = r.headers.get("Content-Type")

        res = operations.PostMyOrdersSellingOrderIDRefundRequestsResponse(status_code=r.status_code, content_type=content_type)
        
        if True:
            pass

        return res

    
    def post_orders_order_id_feedback_buyer(self, request: operations.PostOrdersOrderIDFeedbackBuyerRequest) -> operations.PostOrdersOrderIDFeedbackBuyerResponse:
        r"""Add feedback about an order's buyer
        Add feedback about an order's buyer
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/orders/{order_id}/feedback/buyer", request.path_params)
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url)
        content_type = r.headers.get("Content-Type")

        res = operations.PostOrdersOrderIDFeedbackBuyerResponse(status_code=r.status_code, content_type=content_type)
        
        if True:
            pass

        return res

    
    def post_orders_order_id_feedback_seller(self, request: operations.PostOrdersOrderIDFeedbackSellerRequest) -> operations.PostOrdersOrderIDFeedbackSellerResponse:
        r"""Add feedback about an order's seller
        Add feedback about an order's seller
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/orders/{order_id}/feedback/seller", request.path_params)
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url)
        content_type = r.headers.get("Content-Type")

        res = operations.PostOrdersOrderIDFeedbackSellerResponse(status_code=r.status_code, content_type=content_type)
        
        if True:
            pass

        return res

    
    def post_products_slug_reviews(self, request: operations.PostProductsSlugReviewsRequest) -> operations.PostProductsSlugReviewsResponse:
        r"""Create a review for a product
        Create a review for a product
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/products/{slug}/reviews", request.path_params)
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url)
        content_type = r.headers.get("Content-Type")

        res = operations.PostProductsSlugReviewsResponse(status_code=r.status_code, content_type=content_type)
        
        if True:
            pass

        return res

    
    def post_sales_sale_id_listings(self, request: operations.PostSalesSaleIDListingsRequest) -> operations.PostSalesSaleIDListingsResponse:
        r"""Add listings to a sale
        Add listings to a sale
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/sales/{sale_id}/listings", request.path_params)
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url)
        content_type = r.headers.get("Content-Type")

        res = operations.PostSalesSaleIDListingsResponse(status_code=r.status_code, content_type=content_type)
        
        if True:
            pass

        return res

    
    def post_shop_vacation(self, request: operations.PostShopVacationRequest) -> operations.PostShopVacationResponse:
        r"""Enable vacation mode. All listings will be unavailable until vacation mode is turned off.
        Enable vacation mode. All listings will be unavailable until vacation mode is turned off.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/shop/vacation"
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url)
        content_type = r.headers.get("Content-Type")

        res = operations.PostShopVacationResponse(status_code=r.status_code, content_type=content_type)
        
        if True:
            pass

        return res

    
    def post_webhooks_registrations(self, request: operations.PostWebhooksRegistrationsRequest) -> operations.PostWebhooksRegistrationsResponse:
        r"""Register a webhook
        Register a webhook
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/webhooks/registrations"
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = self._client
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PostWebhooksRegistrationsResponse(status_code=r.status_code, content_type=content_type)
        
        if True:
            pass

        return res

    
    def put_listings_slug_(self, request: operations.PutListingsSlugRequest) -> operations.PutListingsSlugResponse:
        r"""Update a listing
        Update a listing
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/listings/{slug}", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("PUT", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PutListingsSlugResponse(status_code=r.status_code, content_type=content_type)
        
        if True:
            pass

        return res

    
    def put_my_account(self, request: operations.PutMyAccountRequest) -> operations.PutMyAccountResponse:
        r"""Update account details
        Update account details
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/my/account"
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("PUT", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PutMyAccountResponse(status_code=r.status_code, content_type=content_type)
        
        if True:
            pass

        return res

    
    def put_my_addresses_address_id_(self, request: operations.PutMyAddressesAddressIDRequest) -> operations.PutMyAddressesAddressIDResponse:
        r"""Update an existing address in your address book
        Update an existing address in your address book
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/my/addresses/{address_id}", request.path_params)
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("PUT", url)
        content_type = r.headers.get("Content-Type")

        res = operations.PutMyAddressesAddressIDResponse(status_code=r.status_code, content_type=content_type)
        
        if True:
            pass

        return res

    
    def put_my_conversations_id_(self, request: operations.PutMyConversationsIDRequest) -> operations.PutMyConversationsIDResponse:
        r"""Mark a conversation read/unread
        Mark a conversation read/unread
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/my/conversations/{id}", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("PUT", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PutMyConversationsIDResponse(status_code=r.status_code, content_type=content_type)
        
        if True:
            pass

        return res

    
    def put_my_listings_slug_state_end(self, request: operations.PutMyListingsSlugStateEndRequest) -> operations.PutMyListingsSlugStateEndResponse:
        r"""End a listing
        End a listing
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/my/listings/{slug}/state/end", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("PUT", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PutMyListingsSlugStateEndResponse(status_code=r.status_code, content_type=content_type)
        
        if True:
            pass

        return res

    
    def put_my_refund_requests_selling_id_(self, request: operations.PutMyRefundRequestsSellingIDRequest) -> operations.PutMyRefundRequestsSellingIDResponse:
        r"""Update a refund request for a sold order
        Update a refund request for a sold order
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/my/refund_requests/selling/{id}", request.path_params)
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("PUT", url)
        content_type = r.headers.get("Content-Type")

        res = operations.PutMyRefundRequestsSellingIDResponse(status_code=r.status_code, content_type=content_type)
        
        if True:
            pass

        return res

    
    def put_my_wishlist_id_(self, request: operations.PutMyWishlistIDRequest) -> operations.PutMyWishlistIDResponse:
        r"""Add a listing to your wishlist
        Add a listing to your wishlist
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/my/wishlist/{id}", request.path_params)
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("PUT", url)
        content_type = r.headers.get("Content-Type")

        res = operations.PutMyWishlistIDResponse(status_code=r.status_code, content_type=content_type)
        
        if True:
            pass

        return res

    
    def put_products_reviews_id_(self, request: operations.PutProductsReviewsIDRequest) -> operations.PutProductsReviewsIDResponse:
        r"""Update a review
        Update a review
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/products/reviews/{id}", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("PUT", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PutProductsReviewsIDResponse(status_code=r.status_code, content_type=content_type)
        
        if True:
            pass

        return res

    
    def put_shop(self, request: operations.PutShopRequest) -> operations.PutShopResponse:
        r"""Update your shop profile
        Update your shop profile
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/shop"
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("PUT", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PutShopResponse(status_code=r.status_code, content_type=content_type)
        
        if True:
            pass

        return res

    
    def put_wants_id_(self, request: operations.PutWantsIDRequest) -> operations.PutWantsIDResponse:
        r"""Mark an item wanted. Returns 200 on success or 422 on failure.
        Mark an item wanted. Returns 200 on success or 422 on failure.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/wants/{id}", request.path_params)
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("PUT", url)
        content_type = r.headers.get("Content-Type")

        res = operations.PutWantsIDResponse(status_code=r.status_code, content_type=content_type)
        
        if True:
            pass

        return res

    