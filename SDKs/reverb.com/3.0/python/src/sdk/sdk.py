import warnings
import requests
from typing import List
from sdk.models import operations
from . import utils


SERVERS = [
	"https://api.reverb.com/api",
]


class SDK:
    client = requests.Session()
    server_url = SERVERS[0]

    def config_server_url(self, server_url: str, params: dict[str, str]):
        if not params is None:
            self.server_url = utils.replace_parameters(server_url, params)
        else:
            self.server_url = server_url
            
    

    
    def delete_listings_listing_id_images_image_id_(self, request: operations.DeleteListingsListingIDImagesImageIDRequest) -> operations.DeleteListingsListingIDImagesImageIDResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/listings/{listing_id}/images/{image_id}", request.path_params)

        client = utils.configure_security_client(request.security)

        r = client.request("DELETE", url)
        content_type = r.headers.get("Content-Type")

        res = operations.DeleteListingsListingIDImagesImageIDResponse(status_code=r.status_code, content_type=content_type)
        
        if True:
            pass

        return res

    
    def delete_listings_slug_(self, request: operations.DeleteListingsSlugRequest) -> operations.DeleteListingsSlugResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/listings/{slug}", request.path_params)

        client = utils.configure_security_client(request.security)

        r = client.request("DELETE", url)
        content_type = r.headers.get("Content-Type")

        res = operations.DeleteListingsSlugResponse(status_code=r.status_code, content_type=content_type)
        
        if True:
            pass

        return res

    
    def delete_my_addresses_address_id_(self, request: operations.DeleteMyAddressesAddressIDRequest) -> operations.DeleteMyAddressesAddressIDResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/my/addresses/{address_id}", request.path_params)

        client = utils.configure_security_client(request.security)

        r = client.request("DELETE", url)
        content_type = r.headers.get("Content-Type")

        res = operations.DeleteMyAddressesAddressIDResponse(status_code=r.status_code, content_type=content_type)
        
        if True:
            pass

        return res

    
    def delete_my_curated_set_product_product_id_(self, request: operations.DeleteMyCuratedSetProductProductIDRequest) -> operations.DeleteMyCuratedSetProductProductIDResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/my/curated_set/product/{product_id}", request.path_params)

        client = self.client

        r = client.request("DELETE", url)
        content_type = r.headers.get("Content-Type")

        res = operations.DeleteMyCuratedSetProductProductIDResponse(status_code=r.status_code, content_type=content_type)
        
        if True:
            pass

        return res

    
    def delete_my_follows_brands_slug_(self, request: operations.DeleteMyFollowsBrandsSlugRequest) -> operations.DeleteMyFollowsBrandsSlugResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/my/follows/brands/{slug}", request.path_params)

        client = utils.configure_security_client(request.security)

        r = client.request("DELETE", url)
        content_type = r.headers.get("Content-Type")

        res = operations.DeleteMyFollowsBrandsSlugResponse(status_code=r.status_code, content_type=content_type)
        
        if True:
            pass

        return res

    
    def delete_my_follows_categories_category_subcategory_(self, request: operations.DeleteMyFollowsCategoriesCategorySubcategoryRequest) -> operations.DeleteMyFollowsCategoriesCategorySubcategoryResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/my/follows/categories/{category}/{subcategory}", request.path_params)

        client = utils.configure_security_client(request.security)

        r = client.request("DELETE", url)
        content_type = r.headers.get("Content-Type")

        res = operations.DeleteMyFollowsCategoriesCategorySubcategoryResponse(status_code=r.status_code, content_type=content_type)
        
        if True:
            pass

        return res

    
    def delete_my_follows_categories_identifier_(self, request: operations.DeleteMyFollowsCategoriesIdentifierRequest) -> operations.DeleteMyFollowsCategoriesIdentifierResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/my/follows/categories/{identifier}", request.path_params)

        client = utils.configure_security_client(request.security)

        r = client.request("DELETE", url)
        content_type = r.headers.get("Content-Type")

        res = operations.DeleteMyFollowsCategoriesIdentifierResponse(status_code=r.status_code, content_type=content_type)
        
        if True:
            pass

        return res

    
    def delete_my_follows_collections_slug_(self, request: operations.DeleteMyFollowsCollectionsSlugRequest) -> operations.DeleteMyFollowsCollectionsSlugResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/my/follows/collections/{slug}", request.path_params)

        client = utils.configure_security_client(request.security)

        r = client.request("DELETE", url)
        content_type = r.headers.get("Content-Type")

        res = operations.DeleteMyFollowsCollectionsSlugResponse(status_code=r.status_code, content_type=content_type)
        
        if True:
            pass

        return res

    
    def delete_my_follows_follow_id_(self, request: operations.DeleteMyFollowsFollowIDRequest) -> operations.DeleteMyFollowsFollowIDResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/my/follows/{follow_id}", request.path_params)

        client = utils.configure_security_client(request.security)

        r = client.request("DELETE", url)
        content_type = r.headers.get("Content-Type")

        res = operations.DeleteMyFollowsFollowIDResponse(status_code=r.status_code, content_type=content_type)
        
        if True:
            pass

        return res

    
    def delete_my_follows_follow_id_alert(self, request: operations.DeleteMyFollowsFollowIDAlertRequest) -> operations.DeleteMyFollowsFollowIDAlertResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/my/follows/{follow_id}/alert", request.path_params)

        client = self.client

        r = client.request("DELETE", url)
        content_type = r.headers.get("Content-Type")

        res = operations.DeleteMyFollowsFollowIDAlertResponse(status_code=r.status_code, content_type=content_type)
        
        if True:
            pass

        return res

    
    def delete_my_follows_handpicked_slug_(self, request: operations.DeleteMyFollowsHandpickedSlugRequest) -> operations.DeleteMyFollowsHandpickedSlugResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/my/follows/handpicked/{slug}", request.path_params)

        client = utils.configure_security_client(request.security)

        r = client.request("DELETE", url)
        content_type = r.headers.get("Content-Type")

        res = operations.DeleteMyFollowsHandpickedSlugResponse(status_code=r.status_code, content_type=content_type)
        
        if True:
            pass

        return res

    
    def delete_my_follows_shops_slug_(self, request: operations.DeleteMyFollowsShopsSlugRequest) -> operations.DeleteMyFollowsShopsSlugResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/my/follows/shops/{slug}", request.path_params)

        client = utils.configure_security_client(request.security)

        r = client.request("DELETE", url)
        content_type = r.headers.get("Content-Type")

        res = operations.DeleteMyFollowsShopsSlugResponse(status_code=r.status_code, content_type=content_type)
        
        if True:
            pass

        return res

    
    def delete_my_wishlist_id_(self, request: operations.DeleteMyWishlistIDRequest) -> operations.DeleteMyWishlistIDResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/my/wishlist/{id}", request.path_params)

        client = utils.configure_security_client(request.security)

        r = client.request("DELETE", url)
        content_type = r.headers.get("Content-Type")

        res = operations.DeleteMyWishlistIDResponse(status_code=r.status_code, content_type=content_type)
        
        if True:
            pass

        return res

    
    def delete_sales_sale_id_listings(self, request: operations.DeleteSalesSaleIDListingsRequest) -> operations.DeleteSalesSaleIDListingsResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/sales/{sale_id}/listings", request.path_params)

        client = utils.configure_security_client(request.security)

        r = client.request("DELETE", url)
        content_type = r.headers.get("Content-Type")

        res = operations.DeleteSalesSaleIDListingsResponse(status_code=r.status_code, content_type=content_type)
        
        if True:
            pass

        return res

    
    def delete_shop_vacation(self, request: operations.DeleteShopVacationRequest) -> operations.DeleteShopVacationResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = base_url.removesuffix("/") + "/shop/vacation"

        client = utils.configure_security_client(request.security)

        r = client.request("DELETE", url)
        content_type = r.headers.get("Content-Type")

        res = operations.DeleteShopVacationResponse(status_code=r.status_code, content_type=content_type)
        
        if True:
            pass

        return res

    
    def delete_wants_id_(self, request: operations.DeleteWantsIDRequest) -> operations.DeleteWantsIDResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/wants/{id}", request.path_params)

        client = utils.configure_security_client(request.security)

        r = client.request("DELETE", url)
        content_type = r.headers.get("Content-Type")

        res = operations.DeleteWantsIDResponse(status_code=r.status_code, content_type=content_type)
        
        if True:
            pass

        return res

    
    def delete_webhooks_registrations_id_(self, request: operations.DeleteWebhooksRegistrationsIDRequest) -> operations.DeleteWebhooksRegistrationsIDResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/webhooks/registrations/{id}", request.path_params)

        client = self.client

        r = client.request("DELETE", url)
        content_type = r.headers.get("Content-Type")

        res = operations.DeleteWebhooksRegistrationsIDResponse(status_code=r.status_code, content_type=content_type)
        
        if True:
            pass

        return res

    
    def get_articles(self, request: operations.GetArticlesRequest) -> operations.GetArticlesResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = base_url.removesuffix("/") + "/articles"

        query_params = utils.get_query_params(request.query_params)

        client = self.client

        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetArticlesResponse(status_code=r.status_code, content_type=content_type)
        
        if True:
            pass

        return res

    
    def get_articles_categories(self) -> operations.GetArticlesCategoriesResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = base_url.removesuffix("/") + "/articles/categories"

        client = self.client

        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetArticlesCategoriesResponse(status_code=r.status_code, content_type=content_type)
        
        if True:
            pass

        return res

    
    def get_categories(self) -> operations.GetCategoriesResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = base_url.removesuffix("/") + "/categories"

        client = self.client

        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetCategoriesResponse(status_code=r.status_code, content_type=content_type)
        
        if True:
            pass

        return res

    
    def get_categories_flat(self) -> operations.GetCategoriesFlatResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = base_url.removesuffix("/") + "/categories/flat"

        client = self.client

        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetCategoriesFlatResponse(status_code=r.status_code, content_type=content_type)
        
        if True:
            pass

        return res

    
    def get_categories_product_type_category_(self, request: operations.GetCategoriesProductTypeCategoryRequest) -> operations.GetCategoriesProductTypeCategoryResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/categories/{product_type}/{category}", request.path_params)

        client = self.client

        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetCategoriesProductTypeCategoryResponse(status_code=r.status_code, content_type=content_type)
        
        if True:
            pass

        return res

    
    def get_categories_taxonomy(self) -> operations.GetCategoriesTaxonomyResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = base_url.removesuffix("/") + "/categories/taxonomy"

        client = self.client

        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetCategoriesTaxonomyResponse(status_code=r.status_code, content_type=content_type)
        
        if True:
            pass

        return res

    
    def get_categories_uuid_(self, request: operations.GetCategoriesUUIDRequest) -> operations.GetCategoriesUUIDResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/categories/{uuid}", request.path_params)

        client = self.client

        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetCategoriesUUIDResponse(status_code=r.status_code, content_type=content_type)
        
        if True:
            pass

        return res

    
    def get_comparison_shopping_pages(self) -> operations.GetComparisonShoppingPagesResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = base_url.removesuffix("/") + "/comparison_shopping_pages"

        client = self.client

        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetComparisonShoppingPagesResponse(status_code=r.status_code, content_type=content_type)
        
        if True:
            pass

        return res

    
    def get_comparison_shopping_pages_find(self, request: operations.GetComparisonShoppingPagesFindRequest) -> operations.GetComparisonShoppingPagesFindResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = base_url.removesuffix("/") + "/comparison_shopping_pages/find"

        query_params = utils.get_query_params(request.query_params)

        client = self.client

        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetComparisonShoppingPagesFindResponse(status_code=r.status_code, content_type=content_type)
        
        if True:
            pass

        return res

    
    def get_comparison_shopping_pages_id_(self, request: operations.GetComparisonShoppingPagesIDRequest) -> operations.GetComparisonShoppingPagesIDResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/comparison_shopping_pages/{id}", request.path_params)

        client = self.client

        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetComparisonShoppingPagesIDResponse(status_code=r.status_code, content_type=content_type)
        
        if True:
            pass

        return res

    
    def get_comparison_shopping_pages_id_listings(self, request: operations.GetComparisonShoppingPagesIDListingsRequest) -> operations.GetComparisonShoppingPagesIDListingsResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/comparison_shopping_pages/{id}/listings", request.path_params)

        query_params = utils.get_query_params(request.query_params)

        client = self.client

        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetComparisonShoppingPagesIDListingsResponse(status_code=r.status_code, content_type=content_type)
        
        if True:
            pass

        return res

    
    def get_comparison_shopping_pages_id_reviews(self, request: operations.GetComparisonShoppingPagesIDReviewsRequest) -> operations.GetComparisonShoppingPagesIDReviewsResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/comparison_shopping_pages/{id}/reviews", request.path_params)

        client = self.client

        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetComparisonShoppingPagesIDReviewsResponse(status_code=r.status_code, content_type=content_type)
        
        if True:
            pass

        return res

    
    def get_countries(self) -> operations.GetCountriesResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = base_url.removesuffix("/") + "/countries"

        client = self.client

        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetCountriesResponse(status_code=r.status_code, content_type=content_type)
        
        if True:
            pass

        return res

    
    def get_csps(self) -> operations.GetCspsResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = base_url.removesuffix("/") + "/csps"

        client = self.client

        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetCspsResponse(status_code=r.status_code, content_type=content_type)
        
        if True:
            pass

        return res

    
    def get_csps_categories(self) -> operations.GetCspsCategoriesResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = base_url.removesuffix("/") + "/csps/categories"

        client = self.client

        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetCspsCategoriesResponse(status_code=r.status_code, content_type=content_type)
        
        if True:
            pass

        return res

    
    def get_csps_find(self, request: operations.GetCspsFindRequest) -> operations.GetCspsFindResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = base_url.removesuffix("/") + "/csps/find"

        query_params = utils.get_query_params(request.query_params)

        client = self.client

        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetCspsFindResponse(status_code=r.status_code, content_type=content_type)
        
        if True:
            pass

        return res

    
    def get_csps_id_(self, request: operations.GetCspsIDRequest) -> operations.GetCspsIDResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/csps/{id}", request.path_params)

        client = self.client

        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetCspsIDResponse(status_code=r.status_code, content_type=content_type)
        
        if True:
            pass

        return res

    
    def get_curated_sets_slug_(self, request: operations.GetCuratedSetsSlugRequest) -> operations.GetCuratedSetsSlugResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/curated_sets/{slug}", request.path_params)

        client = self.client

        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetCuratedSetsSlugResponse(status_code=r.status_code, content_type=content_type)
        
        if True:
            pass

        return res

    
    def get_currencies_display(self) -> operations.GetCurrenciesDisplayResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = base_url.removesuffix("/") + "/currencies/display"

        client = self.client

        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetCurrenciesDisplayResponse(status_code=r.status_code, content_type=content_type)
        
        if True:
            pass

        return res

    
    def get_currencies_listing(self) -> operations.GetCurrenciesListingResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = base_url.removesuffix("/") + "/currencies/listing"

        client = self.client

        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetCurrenciesListingResponse(status_code=r.status_code, content_type=content_type)
        
        if True:
            pass

        return res

    
    def get_feedback_feedback_id_(self, request: operations.GetFeedbackFeedbackIDRequest) -> operations.GetFeedbackFeedbackIDResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/feedback/{feedback_id}", request.path_params)

        client = self.client

        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetFeedbackFeedbackIDResponse(status_code=r.status_code, content_type=content_type)
        
        if True:
            pass

        return res

    
    def get_handpicked_slug_(self, request: operations.GetHandpickedSlugRequest) -> operations.GetHandpickedSlugResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/handpicked/{slug}", request.path_params)

        query_params = utils.get_query_params(request.query_params)

        client = self.client

        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetHandpickedSlugResponse(status_code=r.status_code, content_type=content_type)
        
        if True:
            pass

        return res

    
    def get_listing_conditions(self) -> operations.GetListingConditionsResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = base_url.removesuffix("/") + "/listing_conditions"

        client = self.client

        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetListingConditionsResponse(status_code=r.status_code, content_type=content_type)
        
        if True:
            pass

        return res

    
    def get_listings(self, request: operations.GetListingsRequest) -> operations.GetListingsResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = base_url.removesuffix("/") + "/listings"

        query_params = utils.get_query_params(request.query_params)

        client = self.client

        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetListingsResponse(status_code=r.status_code, content_type=content_type)
        
        if True:
            pass

        return res

    
    def get_listings_all(self, request: operations.GetListingsAllRequest) -> operations.GetListingsAllResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = base_url.removesuffix("/") + "/listings/all"

        query_params = utils.get_query_params(request.query_params)

        client = self.client

        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetListingsAllResponse(status_code=r.status_code, content_type=content_type)
        
        if True:
            pass

        return res

    
    def get_listings_facets_seller_location(self) -> operations.GetListingsFacetsSellerLocationResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = base_url.removesuffix("/") + "/listings/facets/seller_location"

        client = self.client

        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetListingsFacetsSellerLocationResponse(status_code=r.status_code, content_type=content_type)
        
        if True:
            pass

        return res

    
    def get_listings_id_negotiation(self, request: operations.GetListingsIDNegotiationRequest) -> operations.GetListingsIDNegotiationResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/listings/{id}/negotiation", request.path_params)

        client = utils.configure_security_client(request.security)

        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetListingsIDNegotiationResponse(status_code=r.status_code, content_type=content_type)
        
        if True:
            pass

        return res

    
    def get_listings_listing_id_bump(self, request: operations.GetListingsListingIDBumpRequest) -> operations.GetListingsListingIDBumpResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/listings/{listing_id}/bump", request.path_params)

        client = utils.configure_security_client(request.security)

        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetListingsListingIDBumpResponse(status_code=r.status_code, content_type=content_type)
        
        if True:
            pass

        return res

    
    def get_listings_listing_id_images(self, request: operations.GetListingsListingIDImagesRequest) -> operations.GetListingsListingIDImagesResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/listings/{listing_id}/images", request.path_params)

        client = utils.configure_security_client(request.security)

        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetListingsListingIDImagesResponse(status_code=r.status_code, content_type=content_type)
        
        if True:
            pass

        return res

    
    def get_listings_listing_id_sales(self, request: operations.GetListingsListingIDSalesRequest) -> operations.GetListingsListingIDSalesResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/listings/{listing_id}/sales", request.path_params)

        client = self.client

        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetListingsListingIDSalesResponse(status_code=r.status_code, content_type=content_type)
        
        if True:
            pass

        return res

    
    def get_listings_slug_(self, request: operations.GetListingsSlugRequest) -> operations.GetListingsSlugResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/listings/{slug}", request.path_params)

        client = self.client

        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetListingsSlugResponse(status_code=r.status_code, content_type=content_type)
        
        if True:
            pass

        return res

    
    def get_listings_slug_edit(self, request: operations.GetListingsSlugEditRequest) -> operations.GetListingsSlugEditResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/listings/{slug}/edit", request.path_params)

        client = utils.configure_security_client(request.security)

        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetListingsSlugEditResponse(status_code=r.status_code, content_type=content_type)
        
        if True:
            pass

        return res

    
    def get_listings_slug_reviews(self, request: operations.GetListingsSlugReviewsRequest) -> operations.GetListingsSlugReviewsResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/listings/{slug}/reviews", request.path_params)

        client = self.client

        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetListingsSlugReviewsResponse(status_code=r.status_code, content_type=content_type)
        
        if True:
            pass

        return res

    
    def get_listings_slug_similar_listings(self, request: operations.GetListingsSlugSimilarListingsRequest) -> operations.GetListingsSlugSimilarListingsResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/listings/{slug}/similar_listings", request.path_params)

        client = self.client

        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetListingsSlugSimilarListingsResponse(status_code=r.status_code, content_type=content_type)
        
        if True:
            pass

        return res

    
    def get_my_account(self, request: operations.GetMyAccountRequest) -> operations.GetMyAccountResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = base_url.removesuffix("/") + "/my/account"

        client = utils.configure_security_client(request.security)

        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetMyAccountResponse(status_code=r.status_code, content_type=content_type)
        
        if True:
            pass

        return res

    
    def get_my_addresses(self, request: operations.GetMyAddressesRequest) -> operations.GetMyAddressesResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = base_url.removesuffix("/") + "/my/addresses"

        client = utils.configure_security_client(request.security)

        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetMyAddressesResponse(status_code=r.status_code, content_type=content_type)
        
        if True:
            pass

        return res

    
    def get_my_conversations(self, request: operations.GetMyConversationsRequest) -> operations.GetMyConversationsResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = base_url.removesuffix("/") + "/my/conversations"

        query_params = utils.get_query_params(request.query_params)

        client = utils.configure_security_client(request.security)

        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetMyConversationsResponse(status_code=r.status_code, content_type=content_type)
        
        if True:
            pass

        return res

    
    def get_my_conversations_id_(self, request: operations.GetMyConversationsIDRequest) -> operations.GetMyConversationsIDResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/my/conversations/{id}", request.path_params)

        client = utils.configure_security_client(request.security)

        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetMyConversationsIDResponse(status_code=r.status_code, content_type=content_type)
        
        if True:
            pass

        return res

    
    def get_my_counts(self, request: operations.GetMyCountsRequest) -> operations.GetMyCountsResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = base_url.removesuffix("/") + "/my/counts"

        client = utils.configure_security_client(request.security)

        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetMyCountsResponse(status_code=r.status_code, content_type=content_type)
        
        if True:
            pass

        return res

    
    def get_my_feed(self, request: operations.GetMyFeedRequest) -> operations.GetMyFeedResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = base_url.removesuffix("/") + "/my/feed"

        client = utils.configure_security_client(request.security)

        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetMyFeedResponse(status_code=r.status_code, content_type=content_type)
        
        if True:
            pass

        return res

    
    def get_my_feed_customize(self, request: operations.GetMyFeedCustomizeRequest) -> operations.GetMyFeedCustomizeResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = base_url.removesuffix("/") + "/my/feed/customize"

        client = utils.configure_security_client(request.security)

        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetMyFeedCustomizeResponse(status_code=r.status_code, content_type=content_type)
        
        if True:
            pass

        return res

    
    def get_my_feed_grid(self, request: operations.GetMyFeedGridRequest) -> operations.GetMyFeedGridResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = base_url.removesuffix("/") + "/my/feed/grid"

        client = utils.configure_security_client(request.security)

        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetMyFeedGridResponse(status_code=r.status_code, content_type=content_type)
        
        if True:
            pass

        return res

    
    def get_my_feedback_received(self, request: operations.GetMyFeedbackReceivedRequest) -> operations.GetMyFeedbackReceivedResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = base_url.removesuffix("/") + "/my/feedback/received"

        client = utils.configure_security_client(request.security)

        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetMyFeedbackReceivedResponse(status_code=r.status_code, content_type=content_type)
        
        if True:
            pass

        return res

    
    def get_my_feedback_sent(self, request: operations.GetMyFeedbackSentRequest) -> operations.GetMyFeedbackSentResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = base_url.removesuffix("/") + "/my/feedback/sent"

        client = utils.configure_security_client(request.security)

        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetMyFeedbackSentResponse(status_code=r.status_code, content_type=content_type)
        
        if True:
            pass

        return res

    
    def get_my_follows(self, request: operations.GetMyFollowsRequest) -> operations.GetMyFollowsResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = base_url.removesuffix("/") + "/my/follows"

        client = utils.configure_security_client(request.security)

        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetMyFollowsResponse(status_code=r.status_code, content_type=content_type)
        
        if True:
            pass

        return res

    
    def get_my_follows_articles(self, request: operations.GetMyFollowsArticlesRequest) -> operations.GetMyFollowsArticlesResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = base_url.removesuffix("/") + "/my/follows/articles"

        client = utils.configure_security_client(request.security)

        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetMyFollowsArticlesResponse(status_code=r.status_code, content_type=content_type)
        
        if True:
            pass

        return res

    
    def get_my_follows_brands_slug_(self, request: operations.GetMyFollowsBrandsSlugRequest) -> operations.GetMyFollowsBrandsSlugResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/my/follows/brands/{slug}", request.path_params)

        client = utils.configure_security_client(request.security)

        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetMyFollowsBrandsSlugResponse(status_code=r.status_code, content_type=content_type)
        
        if True:
            pass

        return res

    
    def get_my_follows_categories_category_subcategory_(self, request: operations.GetMyFollowsCategoriesCategorySubcategoryRequest) -> operations.GetMyFollowsCategoriesCategorySubcategoryResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/my/follows/categories/{category}/{subcategory}", request.path_params)

        client = utils.configure_security_client(request.security)

        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetMyFollowsCategoriesCategorySubcategoryResponse(status_code=r.status_code, content_type=content_type)
        
        if True:
            pass

        return res

    
    def get_my_follows_categories_identifier_(self, request: operations.GetMyFollowsCategoriesIdentifierRequest) -> operations.GetMyFollowsCategoriesIdentifierResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/my/follows/categories/{identifier}", request.path_params)

        client = utils.configure_security_client(request.security)

        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetMyFollowsCategoriesIdentifierResponse(status_code=r.status_code, content_type=content_type)
        
        if True:
            pass

        return res

    
    def get_my_follows_collections_slug_(self, request: operations.GetMyFollowsCollectionsSlugRequest) -> operations.GetMyFollowsCollectionsSlugResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/my/follows/collections/{slug}", request.path_params)

        client = utils.configure_security_client(request.security)

        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetMyFollowsCollectionsSlugResponse(status_code=r.status_code, content_type=content_type)
        
        if True:
            pass

        return res

    
    def get_my_follows_handpicked_slug_(self, request: operations.GetMyFollowsHandpickedSlugRequest) -> operations.GetMyFollowsHandpickedSlugResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/my/follows/handpicked/{slug}", request.path_params)

        client = utils.configure_security_client(request.security)

        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetMyFollowsHandpickedSlugResponse(status_code=r.status_code, content_type=content_type)
        
        if True:
            pass

        return res

    
    def get_my_follows_search(self, request: operations.GetMyFollowsSearchRequest) -> operations.GetMyFollowsSearchResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = base_url.removesuffix("/") + "/my/follows/search"

        client = utils.configure_security_client(request.security)

        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetMyFollowsSearchResponse(status_code=r.status_code, content_type=content_type)
        
        if True:
            pass

        return res

    
    def get_my_follows_shops_slug_(self, request: operations.GetMyFollowsShopsSlugRequest) -> operations.GetMyFollowsShopsSlugResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/my/follows/shops/{slug}", request.path_params)

        client = utils.configure_security_client(request.security)

        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetMyFollowsShopsSlugResponse(status_code=r.status_code, content_type=content_type)
        
        if True:
            pass

        return res

    
    def get_my_listings(self, request: operations.GetMyListingsRequest) -> operations.GetMyListingsResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = base_url.removesuffix("/") + "/my/listings"

        query_params = utils.get_query_params(request.query_params)

        client = utils.configure_security_client(request.security)

        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetMyListingsResponse(status_code=r.status_code, content_type=content_type)
        
        if True:
            pass

        return res

    
    def get_my_listings_drafts(self, request: operations.GetMyListingsDraftsRequest) -> operations.GetMyListingsDraftsResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = base_url.removesuffix("/") + "/my/listings/drafts"

        query_params = utils.get_query_params(request.query_params)

        client = utils.configure_security_client(request.security)

        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetMyListingsDraftsResponse(status_code=r.status_code, content_type=content_type)
        
        if True:
            pass

        return res

    
    def get_my_listings_negotiations(self, request: operations.GetMyListingsNegotiationsRequest) -> operations.GetMyListingsNegotiationsResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = base_url.removesuffix("/") + "/my/listings/negotiations"

        query_params = utils.get_query_params(request.query_params)

        client = utils.configure_security_client(request.security)

        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetMyListingsNegotiationsResponse(status_code=r.status_code, content_type=content_type)
        
        if True:
            pass

        return res

    
    def get_my_lists(self, request: operations.GetMyListsRequest) -> operations.GetMyListsResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = base_url.removesuffix("/") + "/my/lists"

        client = utils.configure_security_client(request.security)

        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetMyListsResponse(status_code=r.status_code, content_type=content_type)
        
        if True:
            pass

        return res

    
    def get_my_negotiations_buying(self, request: operations.GetMyNegotiationsBuyingRequest) -> operations.GetMyNegotiationsBuyingResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = base_url.removesuffix("/") + "/my/negotiations/buying"

        query_params = utils.get_query_params(request.query_params)

        client = utils.configure_security_client(request.security)

        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetMyNegotiationsBuyingResponse(status_code=r.status_code, content_type=content_type)
        
        if True:
            pass

        return res

    
    def get_my_negotiations_id_(self, request: operations.GetMyNegotiationsIDRequest) -> operations.GetMyNegotiationsIDResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/my/negotiations/{id}", request.path_params)

        client = utils.configure_security_client(request.security)

        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetMyNegotiationsIDResponse(status_code=r.status_code, content_type=content_type)
        
        if True:
            pass

        return res

    
    def get_my_orders_awaiting_feedback(self, request: operations.GetMyOrdersAwaitingFeedbackRequest) -> operations.GetMyOrdersAwaitingFeedbackResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = base_url.removesuffix("/") + "/my/orders/awaiting_feedback"

        client = utils.configure_security_client(request.security)

        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetMyOrdersAwaitingFeedbackResponse(status_code=r.status_code, content_type=content_type)
        
        if True:
            pass

        return res

    
    def get_my_orders_buying_all(self, request: operations.GetMyOrdersBuyingAllRequest) -> operations.GetMyOrdersBuyingAllResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = base_url.removesuffix("/") + "/my/orders/buying/all"

        client = utils.configure_security_client(request.security)

        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetMyOrdersBuyingAllResponse(status_code=r.status_code, content_type=content_type)
        
        if True:
            pass

        return res

    
    def get_my_orders_buying_by_uuid_uuid_(self, request: operations.GetMyOrdersBuyingByUUIDUUIDRequest) -> operations.GetMyOrdersBuyingByUUIDUUIDResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/my/orders/buying/by_uuid/{uuid}", request.path_params)

        client = self.client

        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetMyOrdersBuyingByUUIDUUIDResponse(status_code=r.status_code, content_type=content_type)
        
        if True:
            pass

        return res

    
    def get_my_orders_buying_id_(self, request: operations.GetMyOrdersBuyingIDRequest) -> operations.GetMyOrdersBuyingIDResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/my/orders/buying/{id}", request.path_params)

        client = utils.configure_security_client(request.security)

        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetMyOrdersBuyingIDResponse(status_code=r.status_code, content_type=content_type)
        
        if True:
            pass

        return res

    
    def get_my_orders_buying_unpaid(self, request: operations.GetMyOrdersBuyingUnpaidRequest) -> operations.GetMyOrdersBuyingUnpaidResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = base_url.removesuffix("/") + "/my/orders/buying/unpaid"

        client = utils.configure_security_client(request.security)

        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetMyOrdersBuyingUnpaidResponse(status_code=r.status_code, content_type=content_type)
        
        if True:
            pass

        return res

    
    def get_my_orders_selling_all(self, request: operations.GetMyOrdersSellingAllRequest) -> operations.GetMyOrdersSellingAllResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = base_url.removesuffix("/") + "/my/orders/selling/all"

        client = utils.configure_security_client(request.security)

        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetMyOrdersSellingAllResponse(status_code=r.status_code, content_type=content_type)
        
        if True:
            pass

        return res

    
    def get_my_orders_selling_awaiting_shipment(self, request: operations.GetMyOrdersSellingAwaitingShipmentRequest) -> operations.GetMyOrdersSellingAwaitingShipmentResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = base_url.removesuffix("/") + "/my/orders/selling/awaiting_shipment"

        client = utils.configure_security_client(request.security)

        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetMyOrdersSellingAwaitingShipmentResponse(status_code=r.status_code, content_type=content_type)
        
        if True:
            pass

        return res

    
    def get_my_orders_selling_buyer_history_buyer_id_(self, request: operations.GetMyOrdersSellingBuyerHistoryBuyerIDRequest) -> operations.GetMyOrdersSellingBuyerHistoryBuyerIDResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/my/orders/selling/buyer_history/{buyer_id}", request.path_params)

        client = utils.configure_security_client(request.security)

        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetMyOrdersSellingBuyerHistoryBuyerIDResponse(status_code=r.status_code, content_type=content_type)
        
        if True:
            pass

        return res

    
    def get_my_orders_selling_by_uuid_uuid_(self, request: operations.GetMyOrdersSellingByUUIDUUIDRequest) -> operations.GetMyOrdersSellingByUUIDUUIDResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/my/orders/selling/by_uuid/{uuid}", request.path_params)

        client = self.client

        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetMyOrdersSellingByUUIDUUIDResponse(status_code=r.status_code, content_type=content_type)
        
        if True:
            pass

        return res

    
    def get_my_orders_selling_id_(self, request: operations.GetMyOrdersSellingIDRequest) -> operations.GetMyOrdersSellingIDResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/my/orders/selling/{id}", request.path_params)

        client = utils.configure_security_client(request.security)

        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetMyOrdersSellingIDResponse(status_code=r.status_code, content_type=content_type)
        
        if True:
            pass

        return res

    
    def get_my_orders_selling_unpaid(self, request: operations.GetMyOrdersSellingUnpaidRequest) -> operations.GetMyOrdersSellingUnpaidResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = base_url.removesuffix("/") + "/my/orders/selling/unpaid"

        client = utils.configure_security_client(request.security)

        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetMyOrdersSellingUnpaidResponse(status_code=r.status_code, content_type=content_type)
        
        if True:
            pass

        return res

    
    def get_my_payments_selling(self, request: operations.GetMyPaymentsSellingRequest) -> operations.GetMyPaymentsSellingResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = base_url.removesuffix("/") + "/my/payments/selling"

        query_params = utils.get_query_params(request.query_params)

        client = utils.configure_security_client(request.security)

        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetMyPaymentsSellingResponse(status_code=r.status_code, content_type=content_type)
        
        if True:
            pass

        return res

    
    def get_my_payments_selling_id_(self, request: operations.GetMyPaymentsSellingIDRequest) -> operations.GetMyPaymentsSellingIDResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/my/payments/selling/{id}", request.path_params)

        client = utils.configure_security_client(request.security)

        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetMyPaymentsSellingIDResponse(status_code=r.status_code, content_type=content_type)
        
        if True:
            pass

        return res

    
    def get_my_payouts(self, request: operations.GetMyPayoutsRequest) -> operations.GetMyPayoutsResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = base_url.removesuffix("/") + "/my/payouts"

        client = utils.configure_security_client(request.security)

        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetMyPayoutsResponse(status_code=r.status_code, content_type=content_type)
        
        if True:
            pass

        return res

    
    def get_my_payouts_id_line_items(self, request: operations.GetMyPayoutsIDLineItemsRequest) -> operations.GetMyPayoutsIDLineItemsResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/my/payouts/{id}/line_items", request.path_params)

        client = utils.configure_security_client(request.security)

        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetMyPayoutsIDLineItemsResponse(status_code=r.status_code, content_type=content_type)
        
        if True:
            pass

        return res

    
    def get_my_refund_requests_selling(self, request: operations.GetMyRefundRequestsSellingRequest) -> operations.GetMyRefundRequestsSellingResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = base_url.removesuffix("/") + "/my/refund_requests/selling"

        client = utils.configure_security_client(request.security)

        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetMyRefundRequestsSellingResponse(status_code=r.status_code, content_type=content_type)
        
        if True:
            pass

        return res

    
    def get_my_viewed_listings(self, request: operations.GetMyViewedListingsRequest) -> operations.GetMyViewedListingsResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = base_url.removesuffix("/") + "/my/viewed_listings"

        client = utils.configure_security_client(request.security)

        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetMyViewedListingsResponse(status_code=r.status_code, content_type=content_type)
        
        if True:
            pass

        return res

    
    def get_my_wishlist(self, request: operations.GetMyWishlistRequest) -> operations.GetMyWishlistResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = base_url.removesuffix("/") + "/my/wishlist"

        client = utils.configure_security_client(request.security)

        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetMyWishlistResponse(status_code=r.status_code, content_type=content_type)
        
        if True:
            pass

        return res

    
    def get_orders_order_id_feedback_buyer(self, request: operations.GetOrdersOrderIDFeedbackBuyerRequest) -> operations.GetOrdersOrderIDFeedbackBuyerResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/orders/{order_id}/feedback/buyer", request.path_params)

        client = self.client

        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetOrdersOrderIDFeedbackBuyerResponse(status_code=r.status_code, content_type=content_type)
        
        if True:
            pass

        return res

    
    def get_orders_order_id_feedback_seller(self, request: operations.GetOrdersOrderIDFeedbackSellerRequest) -> operations.GetOrdersOrderIDFeedbackSellerResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/orders/{order_id}/feedback/seller", request.path_params)

        client = self.client

        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetOrdersOrderIDFeedbackSellerResponse(status_code=r.status_code, content_type=content_type)
        
        if True:
            pass

        return res

    
    def get_payment_methods(self) -> operations.GetPaymentMethodsResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = base_url.removesuffix("/") + "/payment_methods"

        client = self.client

        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetPaymentMethodsResponse(status_code=r.status_code, content_type=content_type)
        
        if True:
            pass

        return res

    
    def get_priceguide_id_transactions_summary(self, request: operations.GetPriceguideIDTransactionsSummaryRequest) -> operations.GetPriceguideIDTransactionsSummaryResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/priceguide/{id}/transactions/summary", request.path_params)

        query_params = utils.get_query_params(request.query_params)

        client = self.client

        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetPriceguideIDTransactionsSummaryResponse(status_code=r.status_code, content_type=content_type)
        
        if True:
            pass

        return res

    
    def get_products_reviews_id_(self, request: operations.GetProductsReviewsIDRequest) -> operations.GetProductsReviewsIDResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/products/reviews/{id}", request.path_params)

        client = self.client

        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetProductsReviewsIDResponse(status_code=r.status_code, content_type=content_type)
        
        if True:
            pass

        return res

    
    def get_products_slug_reviews(self, request: operations.GetProductsSlugReviewsRequest) -> operations.GetProductsSlugReviewsResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/products/{slug}/reviews", request.path_params)

        client = self.client

        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetProductsSlugReviewsResponse(status_code=r.status_code, content_type=content_type)
        
        if True:
            pass

        return res

    
    def get_sales_reverb(self, request: operations.GetSalesReverbRequest) -> operations.GetSalesReverbResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = base_url.removesuffix("/") + "/sales/reverb"

        client = utils.configure_security_client(request.security)

        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetSalesReverbResponse(status_code=r.status_code, content_type=content_type)
        
        if True:
            pass

        return res

    
    def get_sales_seller(self, request: operations.GetSalesSellerRequest) -> operations.GetSalesSellerResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = base_url.removesuffix("/") + "/sales/seller"

        client = utils.configure_security_client(request.security)

        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetSalesSellerResponse(status_code=r.status_code, content_type=content_type)
        
        if True:
            pass

        return res

    
    def get_sales_slug_(self, request: operations.GetSalesSlugRequest) -> operations.GetSalesSlugResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/sales/{slug}", request.path_params)

        client = self.client

        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetSalesSlugResponse(status_code=r.status_code, content_type=content_type)
        
        if True:
            pass

        return res

    
    def get_shipping_providers(self) -> operations.GetShippingProvidersResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = base_url.removesuffix("/") + "/shipping/providers"

        client = self.client

        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetShippingProvidersResponse(status_code=r.status_code, content_type=content_type)
        
        if True:
            pass

        return res

    
    def get_shipping_regions(self) -> operations.GetShippingRegionsResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = base_url.removesuffix("/") + "/shipping/regions"

        client = self.client

        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetShippingRegionsResponse(status_code=r.status_code, content_type=content_type)
        
        if True:
            pass

        return res

    
    def get_shop(self, request: operations.GetShopRequest) -> operations.GetShopResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = base_url.removesuffix("/") + "/shop"

        client = utils.configure_security_client(request.security)

        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetShopResponse(status_code=r.status_code, content_type=content_type)
        
        if True:
            pass

        return res

    
    def get_shop_listing_conditions(self, request: operations.GetShopListingConditionsRequest) -> operations.GetShopListingConditionsResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = base_url.removesuffix("/") + "/shop/listing_conditions"

        client = utils.configure_security_client(request.security)

        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetShopListingConditionsResponse(status_code=r.status_code, content_type=content_type)
        
        if True:
            pass

        return res

    
    def get_shop_payment_methods(self, request: operations.GetShopPaymentMethodsRequest) -> operations.GetShopPaymentMethodsResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = base_url.removesuffix("/") + "/shop/payment_methods"

        client = utils.configure_security_client(request.security)

        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetShopPaymentMethodsResponse(status_code=r.status_code, content_type=content_type)
        
        if True:
            pass

        return res

    
    def get_shop_vacation(self, request: operations.GetShopVacationRequest) -> operations.GetShopVacationResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = base_url.removesuffix("/") + "/shop/vacation"

        client = utils.configure_security_client(request.security)

        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetShopVacationResponse(status_code=r.status_code, content_type=content_type)
        
        if True:
            pass

        return res

    
    def get_shops_id_storefronts(self, request: operations.GetShopsIDStorefrontsRequest) -> operations.GetShopsIDStorefrontsResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/shops/{id}/storefronts", request.path_params)

        client = self.client

        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetShopsIDStorefrontsResponse(status_code=r.status_code, content_type=content_type)
        
        if True:
            pass

        return res

    
    def get_shops_shop_id_shipping_profiles(self, request: operations.GetShopsShopIDShippingProfilesRequest) -> operations.GetShopsShopIDShippingProfilesResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/shops/{shop_id}/shipping_profiles", request.path_params)

        client = utils.configure_security_client(request.security)

        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetShopsShopIDShippingProfilesResponse(status_code=r.status_code, content_type=content_type)
        
        if True:
            pass

        return res

    
    def get_shops_slug_(self, request: operations.GetShopsSlugRequest) -> operations.GetShopsSlugResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/shops/{slug}", request.path_params)

        query_params = utils.get_query_params(request.query_params)

        client = self.client

        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetShopsSlugResponse(status_code=r.status_code, content_type=content_type)
        
        if True:
            pass

        return res

    
    def get_shops_slug_feedback(self, request: operations.GetShopsSlugFeedbackRequest) -> operations.GetShopsSlugFeedbackResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/shops/{slug}/feedback", request.path_params)

        client = self.client

        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetShopsSlugFeedbackResponse(status_code=r.status_code, content_type=content_type)
        
        if True:
            pass

        return res

    
    def get_shops_slug_feedback_buyer(self, request: operations.GetShopsSlugFeedbackBuyerRequest) -> operations.GetShopsSlugFeedbackBuyerResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/shops/{slug}/feedback/buyer", request.path_params)

        client = self.client

        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetShopsSlugFeedbackBuyerResponse(status_code=r.status_code, content_type=content_type)
        
        if True:
            pass

        return res

    
    def get_shops_slug_feedback_seller(self, request: operations.GetShopsSlugFeedbackSellerRequest) -> operations.GetShopsSlugFeedbackSellerResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/shops/{slug}/feedback/seller", request.path_params)

        client = self.client

        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetShopsSlugFeedbackSellerResponse(status_code=r.status_code, content_type=content_type)
        
        if True:
            pass

        return res

    
    def get_wants(self, request: operations.GetWantsRequest) -> operations.GetWantsResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = base_url.removesuffix("/") + "/wants"

        client = utils.configure_security_client(request.security)

        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetWantsResponse(status_code=r.status_code, content_type=content_type)
        
        if True:
            pass

        return res

    
    def get_webhooks_registrations(self) -> operations.GetWebhooksRegistrationsResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = base_url.removesuffix("/") + "/webhooks/registrations"

        client = self.client

        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetWebhooksRegistrationsResponse(status_code=r.status_code, content_type=content_type)
        
        if True:
            pass

        return res

    
    def get_webhooks_registrations_id_(self, request: operations.GetWebhooksRegistrationsIDRequest) -> operations.GetWebhooksRegistrationsIDResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/webhooks/registrations/{id}", request.path_params)

        client = self.client

        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetWebhooksRegistrationsIDResponse(status_code=r.status_code, content_type=content_type)
        
        if True:
            pass

        return res

    
    def post_conversations_conversation_id_offer(self, request: operations.PostConversationsConversationIDOfferRequest) -> operations.PostConversationsConversationIDOfferResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/conversations/{conversation_id}/offer", request.path_params)

        headers = {}

        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type

        client = utils.configure_security_client(request.security)

        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PostConversationsConversationIDOfferResponse(status_code=r.status_code, content_type=content_type)
        
        if True:
            pass

        return res

    
    def post_conversations_id_offer(self, request: operations.PostConversationsIDOfferRequest) -> operations.PostConversationsIDOfferResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/conversations/{id}/offer", request.path_params)

        headers = {}

        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type

        client = utils.configure_security_client(request.security)

        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PostConversationsIDOfferResponse(status_code=r.status_code, content_type=content_type)
        
        if True:
            pass

        return res

    
    def post_listings(self, request: operations.PostListingsRequest) -> operations.PostListingsResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = base_url.removesuffix("/") + "/listings"

        headers = {}

        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type

        client = utils.configure_security_client(request.security)

        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PostListingsResponse(status_code=r.status_code, content_type=content_type)
        
        if True:
            pass

        return res

    
    def post_listings_id_offer(self, request: operations.PostListingsIDOfferRequest) -> operations.PostListingsIDOfferResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/listings/{id}/offer", request.path_params)

        headers = {}

        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type

        client = utils.configure_security_client(request.security)

        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PostListingsIDOfferResponse(status_code=r.status_code, content_type=content_type)
        
        if True:
            pass

        return res

    
    def post_listings_listing_id_bump_budget_type_(self, request: operations.PostListingsListingIDBumpBudgetTypeRequest) -> operations.PostListingsListingIDBumpBudgetTypeResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/listings/{listing_id}/bump/{budget_type}", request.path_params)

        client = utils.configure_security_client(request.security)

        r = client.request("POST", url)
        content_type = r.headers.get("Content-Type")

        res = operations.PostListingsListingIDBumpBudgetTypeResponse(status_code=r.status_code, content_type=content_type)
        
        if True:
            pass

        return res

    
    def post_listings_listing_id_conversations(self, request: operations.PostListingsListingIDConversationsRequest) -> operations.PostListingsListingIDConversationsResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/listings/{listing_id}/conversations", request.path_params)

        headers = {}

        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type

        client = utils.configure_security_client(request.security)

        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PostListingsListingIDConversationsResponse(status_code=r.status_code, content_type=content_type)
        
        if True:
            pass

        return res

    
    def post_listings_slug_flag(self, request: operations.PostListingsSlugFlagRequest) -> operations.PostListingsSlugFlagResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/listings/{slug}/flag", request.path_params)

        headers = {}

        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type

        client = self.client

        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PostListingsSlugFlagResponse(status_code=r.status_code, content_type=content_type)
        
        if True:
            pass

        return res

    
    def post_listings_slug_reviews(self, request: operations.PostListingsSlugReviewsRequest) -> operations.PostListingsSlugReviewsResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/listings/{slug}/reviews", request.path_params)

        client = utils.configure_security_client(request.security)

        r = client.request("POST", url)
        content_type = r.headers.get("Content-Type")

        res = operations.PostListingsSlugReviewsResponse(status_code=r.status_code, content_type=content_type)
        
        if True:
            pass

        return res

    
    def post_my_addresses(self, request: operations.PostMyAddressesRequest) -> operations.PostMyAddressesResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = base_url.removesuffix("/") + "/my/addresses"

        client = utils.configure_security_client(request.security)

        r = client.request("POST", url)
        content_type = r.headers.get("Content-Type")

        res = operations.PostMyAddressesResponse(status_code=r.status_code, content_type=content_type)
        
        if True:
            pass

        return res

    
    def post_my_conversations(self, request: operations.PostMyConversationsRequest) -> operations.PostMyConversationsResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = base_url.removesuffix("/") + "/my/conversations"

        headers = {}

        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type

        client = utils.configure_security_client(request.security)

        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PostMyConversationsResponse(status_code=r.status_code, content_type=content_type)
        
        if True:
            pass

        return res

    
    def post_my_conversations_conversation_id_messages(self, request: operations.PostMyConversationsConversationIDMessagesRequest) -> operations.PostMyConversationsConversationIDMessagesResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/my/conversations/{conversation_id}/messages", request.path_params)

        headers = {}

        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type

        client = utils.configure_security_client(request.security)

        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PostMyConversationsConversationIDMessagesResponse(status_code=r.status_code, content_type=content_type)
        
        if True:
            pass

        return res

    
    def post_my_curated_set_product_product_id_(self, request: operations.PostMyCuratedSetProductProductIDRequest) -> operations.PostMyCuratedSetProductProductIDResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/my/curated_set/product/{product_id}", request.path_params)

        client = self.client

        r = client.request("POST", url)
        content_type = r.headers.get("Content-Type")

        res = operations.PostMyCuratedSetProductProductIDResponse(status_code=r.status_code, content_type=content_type)
        
        if True:
            pass

        return res

    
    def post_my_follows_articles(self, request: operations.PostMyFollowsArticlesRequest) -> operations.PostMyFollowsArticlesResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = base_url.removesuffix("/") + "/my/follows/articles"

        headers = {}

        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type

        client = utils.configure_security_client(request.security)

        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PostMyFollowsArticlesResponse(status_code=r.status_code, content_type=content_type)
        
        if True:
            pass

        return res

    
    def post_my_follows_brands_slug_(self, request: operations.PostMyFollowsBrandsSlugRequest) -> operations.PostMyFollowsBrandsSlugResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/my/follows/brands/{slug}", request.path_params)

        client = utils.configure_security_client(request.security)

        r = client.request("POST", url)
        content_type = r.headers.get("Content-Type")

        res = operations.PostMyFollowsBrandsSlugResponse(status_code=r.status_code, content_type=content_type)
        
        if True:
            pass

        return res

    
    def post_my_follows_categories_category_subcategory_(self, request: operations.PostMyFollowsCategoriesCategorySubcategoryRequest) -> operations.PostMyFollowsCategoriesCategorySubcategoryResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/my/follows/categories/{category}/{subcategory}", request.path_params)

        client = utils.configure_security_client(request.security)

        r = client.request("POST", url)
        content_type = r.headers.get("Content-Type")

        res = operations.PostMyFollowsCategoriesCategorySubcategoryResponse(status_code=r.status_code, content_type=content_type)
        
        if True:
            pass

        return res

    
    def post_my_follows_categories_identifier_(self, request: operations.PostMyFollowsCategoriesIdentifierRequest) -> operations.PostMyFollowsCategoriesIdentifierResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/my/follows/categories/{identifier}", request.path_params)

        client = utils.configure_security_client(request.security)

        r = client.request("POST", url)
        content_type = r.headers.get("Content-Type")

        res = operations.PostMyFollowsCategoriesIdentifierResponse(status_code=r.status_code, content_type=content_type)
        
        if True:
            pass

        return res

    
    def post_my_follows_categories_uuid_(self, request: operations.PostMyFollowsCategoriesUUIDRequest) -> operations.PostMyFollowsCategoriesUUIDResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/my/follows/categories/{uuid}", request.path_params)

        client = utils.configure_security_client(request.security)

        r = client.request("POST", url)
        content_type = r.headers.get("Content-Type")

        res = operations.PostMyFollowsCategoriesUUIDResponse(status_code=r.status_code, content_type=content_type)
        
        if True:
            pass

        return res

    
    def post_my_follows_collections_slug_(self, request: operations.PostMyFollowsCollectionsSlugRequest) -> operations.PostMyFollowsCollectionsSlugResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/my/follows/collections/{slug}", request.path_params)

        client = utils.configure_security_client(request.security)

        r = client.request("POST", url)
        content_type = r.headers.get("Content-Type")

        res = operations.PostMyFollowsCollectionsSlugResponse(status_code=r.status_code, content_type=content_type)
        
        if True:
            pass

        return res

    
    def post_my_follows_follow_id_alert(self, request: operations.PostMyFollowsFollowIDAlertRequest) -> operations.PostMyFollowsFollowIDAlertResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/my/follows/{follow_id}/alert", request.path_params)

        client = self.client

        r = client.request("POST", url)
        content_type = r.headers.get("Content-Type")

        res = operations.PostMyFollowsFollowIDAlertResponse(status_code=r.status_code, content_type=content_type)
        
        if True:
            pass

        return res

    
    def post_my_follows_handpicked_slug_(self, request: operations.PostMyFollowsHandpickedSlugRequest) -> operations.PostMyFollowsHandpickedSlugResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/my/follows/handpicked/{slug}", request.path_params)

        client = utils.configure_security_client(request.security)

        r = client.request("POST", url)
        content_type = r.headers.get("Content-Type")

        res = operations.PostMyFollowsHandpickedSlugResponse(status_code=r.status_code, content_type=content_type)
        
        if True:
            pass

        return res

    
    def post_my_follows_search(self, request: operations.PostMyFollowsSearchRequest) -> operations.PostMyFollowsSearchResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = base_url.removesuffix("/") + "/my/follows/search"

        headers = {}

        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type

        client = utils.configure_security_client(request.security)

        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PostMyFollowsSearchResponse(status_code=r.status_code, content_type=content_type)
        
        if True:
            pass

        return res

    
    def post_my_follows_shops_slug_(self, request: operations.PostMyFollowsShopsSlugRequest) -> operations.PostMyFollowsShopsSlugResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/my/follows/shops/{slug}", request.path_params)

        client = utils.configure_security_client(request.security)

        r = client.request("POST", url)
        content_type = r.headers.get("Content-Type")

        res = operations.PostMyFollowsShopsSlugResponse(status_code=r.status_code, content_type=content_type)
        
        if True:
            pass

        return res

    
    def post_my_negotiations_id_accept(self, request: operations.PostMyNegotiationsIDAcceptRequest) -> operations.PostMyNegotiationsIDAcceptResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/my/negotiations/{id}/accept", request.path_params)

        headers = {}

        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type

        client = utils.configure_security_client(request.security)

        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PostMyNegotiationsIDAcceptResponse(status_code=r.status_code, content_type=content_type)
        
        if True:
            pass

        return res

    
    def post_my_negotiations_id_counter(self, request: operations.PostMyNegotiationsIDCounterRequest) -> operations.PostMyNegotiationsIDCounterResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/my/negotiations/{id}/counter", request.path_params)

        headers = {}

        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type

        client = utils.configure_security_client(request.security)

        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PostMyNegotiationsIDCounterResponse(status_code=r.status_code, content_type=content_type)
        
        if True:
            pass

        return res

    
    def post_my_negotiations_id_decline(self, request: operations.PostMyNegotiationsIDDeclineRequest) -> operations.PostMyNegotiationsIDDeclineResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/my/negotiations/{id}/decline", request.path_params)

        client = utils.configure_security_client(request.security)

        r = client.request("POST", url)
        content_type = r.headers.get("Content-Type")

        res = operations.PostMyNegotiationsIDDeclineResponse(status_code=r.status_code, content_type=content_type)
        
        if True:
            pass

        return res

    
    def post_my_orders_buying_id_mark_received(self, request: operations.PostMyOrdersBuyingIDMarkReceivedRequest) -> operations.PostMyOrdersBuyingIDMarkReceivedResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/my/orders/buying/{id}/mark_received", request.path_params)

        client = utils.configure_security_client(request.security)

        r = client.request("POST", url)
        content_type = r.headers.get("Content-Type")

        res = operations.PostMyOrdersBuyingIDMarkReceivedResponse(status_code=r.status_code, content_type=content_type)
        
        if True:
            pass

        return res

    
    def post_my_orders_selling_id_mark_picked_up(self, request: operations.PostMyOrdersSellingIDMarkPickedUpRequest) -> operations.PostMyOrdersSellingIDMarkPickedUpResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/my/orders/selling/{id}/mark_picked_up", request.path_params)

        headers = {}

        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type

        client = utils.configure_security_client(request.security)

        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PostMyOrdersSellingIDMarkPickedUpResponse(status_code=r.status_code, content_type=content_type)
        
        if True:
            pass

        return res

    
    def post_my_orders_selling_id_ship(self, request: operations.PostMyOrdersSellingIDShipRequest) -> operations.PostMyOrdersSellingIDShipResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/my/orders/selling/{id}/ship", request.path_params)

        headers = {}

        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type

        client = utils.configure_security_client(request.security)

        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PostMyOrdersSellingIDShipResponse(status_code=r.status_code, content_type=content_type)
        
        if True:
            pass

        return res

    
    def post_my_orders_selling_order_id_refund_requests(self, request: operations.PostMyOrdersSellingOrderIDRefundRequestsRequest) -> operations.PostMyOrdersSellingOrderIDRefundRequestsResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/my/orders/selling/{order_id}/refund_requests", request.path_params)

        client = utils.configure_security_client(request.security)

        r = client.request("POST", url)
        content_type = r.headers.get("Content-Type")

        res = operations.PostMyOrdersSellingOrderIDRefundRequestsResponse(status_code=r.status_code, content_type=content_type)
        
        if True:
            pass

        return res

    
    def post_orders_order_id_feedback_buyer(self, request: operations.PostOrdersOrderIDFeedbackBuyerRequest) -> operations.PostOrdersOrderIDFeedbackBuyerResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/orders/{order_id}/feedback/buyer", request.path_params)

        client = utils.configure_security_client(request.security)

        r = client.request("POST", url)
        content_type = r.headers.get("Content-Type")

        res = operations.PostOrdersOrderIDFeedbackBuyerResponse(status_code=r.status_code, content_type=content_type)
        
        if True:
            pass

        return res

    
    def post_orders_order_id_feedback_seller(self, request: operations.PostOrdersOrderIDFeedbackSellerRequest) -> operations.PostOrdersOrderIDFeedbackSellerResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/orders/{order_id}/feedback/seller", request.path_params)

        client = utils.configure_security_client(request.security)

        r = client.request("POST", url)
        content_type = r.headers.get("Content-Type")

        res = operations.PostOrdersOrderIDFeedbackSellerResponse(status_code=r.status_code, content_type=content_type)
        
        if True:
            pass

        return res

    
    def post_products_slug_reviews(self, request: operations.PostProductsSlugReviewsRequest) -> operations.PostProductsSlugReviewsResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/products/{slug}/reviews", request.path_params)

        client = utils.configure_security_client(request.security)

        r = client.request("POST", url)
        content_type = r.headers.get("Content-Type")

        res = operations.PostProductsSlugReviewsResponse(status_code=r.status_code, content_type=content_type)
        
        if True:
            pass

        return res

    
    def post_sales_sale_id_listings(self, request: operations.PostSalesSaleIDListingsRequest) -> operations.PostSalesSaleIDListingsResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/sales/{sale_id}/listings", request.path_params)

        client = utils.configure_security_client(request.security)

        r = client.request("POST", url)
        content_type = r.headers.get("Content-Type")

        res = operations.PostSalesSaleIDListingsResponse(status_code=r.status_code, content_type=content_type)
        
        if True:
            pass

        return res

    
    def post_shop_vacation(self, request: operations.PostShopVacationRequest) -> operations.PostShopVacationResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = base_url.removesuffix("/") + "/shop/vacation"

        client = utils.configure_security_client(request.security)

        r = client.request("POST", url)
        content_type = r.headers.get("Content-Type")

        res = operations.PostShopVacationResponse(status_code=r.status_code, content_type=content_type)
        
        if True:
            pass

        return res

    
    def post_webhooks_registrations(self, request: operations.PostWebhooksRegistrationsRequest) -> operations.PostWebhooksRegistrationsResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = base_url.removesuffix("/") + "/webhooks/registrations"

        headers = {}

        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type

        client = self.client

        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PostWebhooksRegistrationsResponse(status_code=r.status_code, content_type=content_type)
        
        if True:
            pass

        return res

    
    def put_listings_slug_(self, request: operations.PutListingsSlugRequest) -> operations.PutListingsSlugResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/listings/{slug}", request.path_params)

        headers = {}

        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type

        client = utils.configure_security_client(request.security)

        r = client.request("PUT", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PutListingsSlugResponse(status_code=r.status_code, content_type=content_type)
        
        if True:
            pass

        return res

    
    def put_my_account(self, request: operations.PutMyAccountRequest) -> operations.PutMyAccountResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = base_url.removesuffix("/") + "/my/account"

        headers = {}

        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type

        client = utils.configure_security_client(request.security)

        r = client.request("PUT", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PutMyAccountResponse(status_code=r.status_code, content_type=content_type)
        
        if True:
            pass

        return res

    
    def put_my_addresses_address_id_(self, request: operations.PutMyAddressesAddressIDRequest) -> operations.PutMyAddressesAddressIDResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/my/addresses/{address_id}", request.path_params)

        client = utils.configure_security_client(request.security)

        r = client.request("PUT", url)
        content_type = r.headers.get("Content-Type")

        res = operations.PutMyAddressesAddressIDResponse(status_code=r.status_code, content_type=content_type)
        
        if True:
            pass

        return res

    
    def put_my_conversations_id_(self, request: operations.PutMyConversationsIDRequest) -> operations.PutMyConversationsIDResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/my/conversations/{id}", request.path_params)

        headers = {}

        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type

        client = utils.configure_security_client(request.security)

        r = client.request("PUT", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PutMyConversationsIDResponse(status_code=r.status_code, content_type=content_type)
        
        if True:
            pass

        return res

    
    def put_my_listings_slug_state_end(self, request: operations.PutMyListingsSlugStateEndRequest) -> operations.PutMyListingsSlugStateEndResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/my/listings/{slug}/state/end", request.path_params)

        headers = {}

        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type

        client = utils.configure_security_client(request.security)

        r = client.request("PUT", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PutMyListingsSlugStateEndResponse(status_code=r.status_code, content_type=content_type)
        
        if True:
            pass

        return res

    
    def put_my_refund_requests_selling_id_(self, request: operations.PutMyRefundRequestsSellingIDRequest) -> operations.PutMyRefundRequestsSellingIDResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/my/refund_requests/selling/{id}", request.path_params)

        client = utils.configure_security_client(request.security)

        r = client.request("PUT", url)
        content_type = r.headers.get("Content-Type")

        res = operations.PutMyRefundRequestsSellingIDResponse(status_code=r.status_code, content_type=content_type)
        
        if True:
            pass

        return res

    
    def put_my_wishlist_id_(self, request: operations.PutMyWishlistIDRequest) -> operations.PutMyWishlistIDResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/my/wishlist/{id}", request.path_params)

        client = utils.configure_security_client(request.security)

        r = client.request("PUT", url)
        content_type = r.headers.get("Content-Type")

        res = operations.PutMyWishlistIDResponse(status_code=r.status_code, content_type=content_type)
        
        if True:
            pass

        return res

    
    def put_products_reviews_id_(self, request: operations.PutProductsReviewsIDRequest) -> operations.PutProductsReviewsIDResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/products/reviews/{id}", request.path_params)

        headers = {}

        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type

        client = utils.configure_security_client(request.security)

        r = client.request("PUT", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PutProductsReviewsIDResponse(status_code=r.status_code, content_type=content_type)
        
        if True:
            pass

        return res

    
    def put_shop(self, request: operations.PutShopRequest) -> operations.PutShopResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = base_url.removesuffix("/") + "/shop"

        headers = {}

        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type

        client = utils.configure_security_client(request.security)

        r = client.request("PUT", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PutShopResponse(status_code=r.status_code, content_type=content_type)
        
        if True:
            pass

        return res

    
    def put_wants_id_(self, request: operations.PutWantsIDRequest) -> operations.PutWantsIDResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/wants/{id}", request.path_params)

        client = utils.configure_security_client(request.security)

        r = client.request("PUT", url)
        content_type = r.headers.get("Content-Type")

        res = operations.PutWantsIDResponse(status_code=r.status_code, content_type=content_type)
        
        if True:
            pass

        return res

    