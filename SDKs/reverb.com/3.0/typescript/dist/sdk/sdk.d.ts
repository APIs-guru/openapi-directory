import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
type OptsFunc = (sdk: SDK) => void;
export declare const ServerList: readonly ["https://api.reverb.com/api"];
export declare function WithServerURL(serverURL: string, params?: Map<string, string>): OptsFunc;
export declare function WithClient(client: AxiosInstance): OptsFunc;
export declare class SDK {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    private _language;
    private _sdkVersion;
    private _genVersion;
    constructor(...opts: OptsFunc[]);
    /**
     * deleteListingsListingIdImagesImageId - Delete an image from a listing
     *
     * Delete an image from a listing
    **/
    deleteListingsListingIdImagesImageId(req: operations.DeleteListingsListingIdImagesImageIdRequest, config?: AxiosRequestConfig): Promise<operations.DeleteListingsListingIdImagesImageIdResponse>;
    /**
     * deleteListingsSlug - Delete a draft listing. Cannot be used on non-drafts.
     *
     * Delete a draft listing. Cannot be used on non-drafts.
    **/
    deleteListingsSlug(req: operations.DeleteListingsSlugRequest, config?: AxiosRequestConfig): Promise<operations.DeleteListingsSlugResponse>;
    /**
     * deleteMyAddressesAddressId - Delete an existing address in your address book
     *
     * Delete an existing address in your address book
    **/
    deleteMyAddressesAddressId(req: operations.DeleteMyAddressesAddressIdRequest, config?: AxiosRequestConfig): Promise<operations.DeleteMyAddressesAddressIdResponse>;
    deleteMyCuratedSetProductProductId(req: operations.DeleteMyCuratedSetProductProductIdRequest, config?: AxiosRequestConfig): Promise<operations.DeleteMyCuratedSetProductProductIdResponse>;
    /**
     * deleteMyFollowsBrandsSlug - Unfollow a brand
     *
     * Unfollow a brand
    **/
    deleteMyFollowsBrandsSlug(req: operations.DeleteMyFollowsBrandsSlugRequest, config?: AxiosRequestConfig): Promise<operations.DeleteMyFollowsBrandsSlugResponse>;
    /**
     * deleteMyFollowsCategoriesCategorySubcategory - Unfollow a subcategory
     *
     * Unfollow a subcategory
    **/
    deleteMyFollowsCategoriesCategorySubcategory(req: operations.DeleteMyFollowsCategoriesCategorySubcategoryRequest, config?: AxiosRequestConfig): Promise<operations.DeleteMyFollowsCategoriesCategorySubcategoryResponse>;
    /**
     * deleteMyFollowsCategoriesIdentifier - Unfollow a category
     *
     * Unfollow a category
    **/
    deleteMyFollowsCategoriesIdentifier(req: operations.DeleteMyFollowsCategoriesIdentifierRequest, config?: AxiosRequestConfig): Promise<operations.DeleteMyFollowsCategoriesIdentifierResponse>;
    /**
     * deleteMyFollowsCollectionsSlug - Unfollow a collection
     *
     * Unfollow a collection
    **/
    deleteMyFollowsCollectionsSlug(req: operations.DeleteMyFollowsCollectionsSlugRequest, config?: AxiosRequestConfig): Promise<operations.DeleteMyFollowsCollectionsSlugResponse>;
    /**
     * deleteMyFollowsFollowId - Delete a follow
     *
     * Delete a follow
    **/
    deleteMyFollowsFollowId(req: operations.DeleteMyFollowsFollowIdRequest, config?: AxiosRequestConfig): Promise<operations.DeleteMyFollowsFollowIdResponse>;
    deleteMyFollowsFollowIdAlert(req: operations.DeleteMyFollowsFollowIdAlertRequest, config?: AxiosRequestConfig): Promise<operations.DeleteMyFollowsFollowIdAlertResponse>;
    /**
     * deleteMyFollowsHandpickedSlug - Unfollow a handpicked collection
     *
     * Unfollow a handpicked collection
    **/
    deleteMyFollowsHandpickedSlug(req: operations.DeleteMyFollowsHandpickedSlugRequest, config?: AxiosRequestConfig): Promise<operations.DeleteMyFollowsHandpickedSlugResponse>;
    /**
     * deleteMyFollowsShopsSlug - Unfollow a shop
     *
     * Unfollow a shop
    **/
    deleteMyFollowsShopsSlug(req: operations.DeleteMyFollowsShopsSlugRequest, config?: AxiosRequestConfig): Promise<operations.DeleteMyFollowsShopsSlugResponse>;
    /**
     * deleteMyWishlistId - Remove a listing from your wishlist
     *
     * Remove a listing from your wishlist
    **/
    deleteMyWishlistId(req: operations.DeleteMyWishlistIdRequest, config?: AxiosRequestConfig): Promise<operations.DeleteMyWishlistIdResponse>;
    /**
     * deleteSalesSaleIdListings - Remove a listing from a sale
     *
     * Remove a listing from a sale
    **/
    deleteSalesSaleIdListings(req: operations.DeleteSalesSaleIdListingsRequest, config?: AxiosRequestConfig): Promise<operations.DeleteSalesSaleIdListingsResponse>;
    /**
     * deleteShopVacation - Disable vacation mode. All listings will be re-enabled.
     *
     * Disable vacation mode. All listings will be re-enabled.
    **/
    deleteShopVacation(req: operations.DeleteShopVacationRequest, config?: AxiosRequestConfig): Promise<operations.DeleteShopVacationResponse>;
    /**
     * deleteWantsId - Unmark an item wanted.
     *
     * Unmark an item wanted.
    **/
    deleteWantsId(req: operations.DeleteWantsIdRequest, config?: AxiosRequestConfig): Promise<operations.DeleteWantsIdResponse>;
    /**
     * deleteWebhooksRegistrationsId - Remove a webhook
     *
     * Remove a webhook
    **/
    deleteWebhooksRegistrationsId(req: operations.DeleteWebhooksRegistrationsIdRequest, config?: AxiosRequestConfig): Promise<operations.DeleteWebhooksRegistrationsIdResponse>;
    getArticles(req: operations.GetArticlesRequest, config?: AxiosRequestConfig): Promise<operations.GetArticlesResponse>;
    /**
     * getArticlesCategories - List of all article categories
     *
     * List of all article categories
    **/
    getArticlesCategories(config?: AxiosRequestConfig): Promise<operations.GetArticlesCategoriesResponse>;
    /**
     * getCategories - List of supported product categories
     *
     * List of supported product categories
    **/
    getCategories(config?: AxiosRequestConfig): Promise<operations.GetCategoriesResponse>;
    getCategoriesFlat(config?: AxiosRequestConfig): Promise<operations.GetCategoriesFlatResponse>;
    /**
     * getCategoriesProductTypeCategory - Get subcategory details
     *
     * Get subcategory details
    **/
    getCategoriesProductTypeCategory(req: operations.GetCategoriesProductTypeCategoryRequest, config?: AxiosRequestConfig): Promise<operations.GetCategoriesProductTypeCategoryResponse>;
    /**
     * getCategoriesTaxonomy - Full taxonomy tree of categories including middle categories
     *
     * Full taxonomy tree of categories including middle categories
    **/
    getCategoriesTaxonomy(config?: AxiosRequestConfig): Promise<operations.GetCategoriesTaxonomyResponse>;
    /**
     * getCategoriesUuid - Get category details
     *
     * Get category details
    **/
    getCategoriesUuid(req: operations.GetCategoriesUuidRequest, config?: AxiosRequestConfig): Promise<operations.GetCategoriesUuidResponse>;
    /**
     * getComparisonShoppingPages - Returns a set of comparison shopping pages based on the current params
     *
     * Returns a set of comparison shopping pages based on the current params
    **/
    getComparisonShoppingPages(config?: AxiosRequestConfig): Promise<operations.GetComparisonShoppingPagesResponse>;
    /**
     * getComparisonShoppingPagesFind - Show comparison shopping page
     *
     * Show comparison shopping page
    **/
    getComparisonShoppingPagesFind(req: operations.GetComparisonShoppingPagesFindRequest, config?: AxiosRequestConfig): Promise<operations.GetComparisonShoppingPagesFindResponse>;
    getComparisonShoppingPagesId(req: operations.GetComparisonShoppingPagesIdRequest, config?: AxiosRequestConfig): Promise<operations.GetComparisonShoppingPagesIdResponse>;
    /**
     * getComparisonShoppingPagesIdListings - Return new or used listings for a comparison shopping page
     *
     * Return new or used listings for a comparison shopping page
    **/
    getComparisonShoppingPagesIdListings(req: operations.GetComparisonShoppingPagesIdListingsRequest, config?: AxiosRequestConfig): Promise<operations.GetComparisonShoppingPagesIdListingsResponse>;
    /**
     * getComparisonShoppingPagesIdReviews - View reviews of a comparison shopping page
     *
     * View reviews of a comparison shopping page
    **/
    getComparisonShoppingPagesIdReviews(req: operations.GetComparisonShoppingPagesIdReviewsRequest, config?: AxiosRequestConfig): Promise<operations.GetComparisonShoppingPagesIdReviewsResponse>;
    /**
     * getCountries - Retrieve a list of country codes with corresponding subregions
     *
     * Retrieve a list of country codes with corresponding subregions
    **/
    getCountries(config?: AxiosRequestConfig): Promise<operations.GetCountriesResponse>;
    /**
     * getCsps - Returns a set of comparison shopping pages based on the current params
     *
     * Returns a set of comparison shopping pages based on the current params
    **/
    getCsps(config?: AxiosRequestConfig): Promise<operations.GetCspsResponse>;
    getCspsCategories(config?: AxiosRequestConfig): Promise<operations.GetCspsCategoriesResponse>;
    /**
     * getCspsFind - Show comparison shopping page
     *
     * Show comparison shopping page
    **/
    getCspsFind(req: operations.GetCspsFindRequest, config?: AxiosRequestConfig): Promise<operations.GetCspsFindResponse>;
    getCspsId(req: operations.GetCspsIdRequest, config?: AxiosRequestConfig): Promise<operations.GetCspsIdResponse>;
    getCuratedSetsSlug(req: operations.GetCuratedSetsSlugRequest, config?: AxiosRequestConfig): Promise<operations.GetCuratedSetsSlugResponse>;
    /**
     * getCurrenciesDisplay - List of supported display currencies for browsing listings
     *
     * List of supported display currencies for browsing listings
    **/
    getCurrenciesDisplay(config?: AxiosRequestConfig): Promise<operations.GetCurrenciesDisplayResponse>;
    /**
     * getCurrenciesListing - List of supported listing currencies for shops
     *
     * List of supported listing currencies for shops
    **/
    getCurrenciesListing(config?: AxiosRequestConfig): Promise<operations.GetCurrenciesListingResponse>;
    /**
     * getFeedbackFeedbackId - Feedback details
     *
     * Feedback details
    **/
    getFeedbackFeedbackId(req: operations.GetFeedbackFeedbackIdRequest, config?: AxiosRequestConfig): Promise<operations.GetFeedbackFeedbackIdResponse>;
    /**
     * getHandpickedSlug - Get results from a handpicked collection
     *
     * Get results from a handpicked collection
    **/
    getHandpickedSlug(req: operations.GetHandpickedSlugRequest, config?: AxiosRequestConfig): Promise<operations.GetHandpickedSlugResponse>;
    /**
     * getListingConditions - List of supported product conditions
     *
     * List of supported product conditions
    **/
    getListingConditions(config?: AxiosRequestConfig): Promise<operations.GetListingConditionsResponse>;
    /**
     * getListings - Default search of listings includes only used & handmade. Add a filter to view all listings or use the /listings/all endpoint.
     *
     * Default search of listings includes only used & handmade. Add a filter to view all listings or use the /listings/all endpoint.
    **/
    getListings(req: operations.GetListingsRequest, config?: AxiosRequestConfig): Promise<operations.GetListingsResponse>;
    /**
     * getListingsAll - All listings including used, handmade, and brand new
     *
     * All listings including used, handmade, and brand new
    **/
    getListingsAll(req: operations.GetListingsAllRequest, config?: AxiosRequestConfig): Promise<operations.GetListingsAllResponse>;
    /**
     * getListingsFacetsSellerLocation - Individual facets
     *
     * Individual facets
    **/
    getListingsFacetsSellerLocation(config?: AxiosRequestConfig): Promise<operations.GetListingsFacetsSellerLocationResponse>;
    /**
     * getListingsIdNegotiation - Returns the latest negotiation for the requesting user given a listing id
     *
     * Returns the latest negotiation for the requesting user given a listing id
    **/
    getListingsIdNegotiation(req: operations.GetListingsIdNegotiationRequest, config?: AxiosRequestConfig): Promise<operations.GetListingsIdNegotiationResponse>;
    /**
     * getListingsListingIdBump - View available bump tiers and stats for a listing
     *
     * View available bump tiers and stats for a listing
    **/
    getListingsListingIdBump(req: operations.GetListingsListingIdBumpRequest, config?: AxiosRequestConfig): Promise<operations.GetListingsListingIdBumpResponse>;
    /**
     * getListingsListingIdImages - View the images associated with a particular listing
     *
     * View the images associated with a particular listing
    **/
    getListingsListingIdImages(req: operations.GetListingsListingIdImagesRequest, config?: AxiosRequestConfig): Promise<operations.GetListingsListingIdImagesResponse>;
    /**
     * getListingsListingIdSales - See all sales that include a listing.
     *
     * See all sales that include a listing.
    **/
    getListingsListingIdSales(req: operations.GetListingsListingIdSalesRequest, config?: AxiosRequestConfig): Promise<operations.GetListingsListingIdSalesResponse>;
    /**
     * getListingsSlug - Listing details
     *
     * Listing details
    **/
    getListingsSlug(req: operations.GetListingsSlugRequest, config?: AxiosRequestConfig): Promise<operations.GetListingsSlugResponse>;
    /**
     * getListingsSlugEdit - Edit listing.
     *
     * Edit listing.
    **/
    getListingsSlugEdit(req: operations.GetListingsSlugEditRequest, config?: AxiosRequestConfig): Promise<operations.GetListingsSlugEditResponse>;
    /**
     * getListingsSlugReviews - View reviews of a listing
     *
     * View reviews of a listing
    **/
    getListingsSlugReviews(req: operations.GetListingsSlugReviewsRequest, config?: AxiosRequestConfig): Promise<operations.GetListingsSlugReviewsResponse>;
    /**
     * getListingsSlugSimilarListings - Listing details
     *
     * Listing details
    **/
    getListingsSlugSimilarListings(req: operations.GetListingsSlugSimilarListingsRequest, config?: AxiosRequestConfig): Promise<operations.GetListingsSlugSimilarListingsResponse>;
    /**
     * getMyAccount - Get account details
     *
     * Get account details
    **/
    getMyAccount(req: operations.GetMyAccountRequest, config?: AxiosRequestConfig): Promise<operations.GetMyAccountResponse>;
    /**
     * getMyAddresses - See all addresses in your address book
     *
     * See all addresses in your address book
    **/
    getMyAddresses(req: operations.GetMyAddressesRequest, config?: AxiosRequestConfig): Promise<operations.GetMyAddressesResponse>;
    /**
     * getMyConversations - Get a list of your conversations
     *
     * Get a list of your conversations
    **/
    getMyConversations(req: operations.GetMyConversationsRequest, config?: AxiosRequestConfig): Promise<operations.GetMyConversationsResponse>;
    /**
     * getMyConversationsId - Display conversation details with messages in natural time order (oldest to newest)
     *
     * Display conversation details with messages in natural time order (oldest to newest)
    **/
    getMyConversationsId(req: operations.GetMyConversationsIdRequest, config?: AxiosRequestConfig): Promise<operations.GetMyConversationsIdResponse>;
    /**
     * getMyCounts - Get your actionable status counts
     *
     * Get your actionable status counts
    **/
    getMyCounts(req: operations.GetMyCountsRequest, config?: AxiosRequestConfig): Promise<operations.GetMyCountsResponse>;
    /**
     * getMyFeed - Get listings from your feed
     *
     * Get listings from your feed
    **/
    getMyFeed(req: operations.GetMyFeedRequest, config?: AxiosRequestConfig): Promise<operations.GetMyFeedResponse>;
    /**
     * getMyFeedCustomize - get your feed customization options
     *
     * get your feed customization options
    **/
    getMyFeedCustomize(req: operations.GetMyFeedCustomizeRequest, config?: AxiosRequestConfig): Promise<operations.GetMyFeedCustomizeResponse>;
    /**
     * getMyFeedGrid - get your feed
     *
     * get your feed
    **/
    getMyFeedGrid(req: operations.GetMyFeedGridRequest, config?: AxiosRequestConfig): Promise<operations.GetMyFeedGridResponse>;
    /**
     * getMyFeedbackReceived - List of received feedback
     *
     * List of received feedback
    **/
    getMyFeedbackReceived(req: operations.GetMyFeedbackReceivedRequest, config?: AxiosRequestConfig): Promise<operations.GetMyFeedbackReceivedResponse>;
    /**
     * getMyFeedbackSent - List of sent feedback
     *
     * List of sent feedback
    **/
    getMyFeedbackSent(req: operations.GetMyFeedbackSentRequest, config?: AxiosRequestConfig): Promise<operations.GetMyFeedbackSentResponse>;
    /**
     * getMyFollows - See what the user is following
     *
     * See what the user is following
    **/
    getMyFollows(req: operations.GetMyFollowsRequest, config?: AxiosRequestConfig): Promise<operations.GetMyFollowsResponse>;
    /**
     * getMyFollowsArticles - Returns a user's ArticleCategoryFollows
     *
     * Returns a user's ArticleCategoryFollows
    **/
    getMyFollowsArticles(req: operations.GetMyFollowsArticlesRequest, config?: AxiosRequestConfig): Promise<operations.GetMyFollowsArticlesResponse>;
    /**
     * getMyFollowsBrandsSlug - Follow status for a brand
     *
     * Follow status for a brand
    **/
    getMyFollowsBrandsSlug(req: operations.GetMyFollowsBrandsSlugRequest, config?: AxiosRequestConfig): Promise<operations.GetMyFollowsBrandsSlugResponse>;
    /**
     * getMyFollowsCategoriesCategorySubcategory - Follow status for a subcategory
     *
     * Follow status for a subcategory
    **/
    getMyFollowsCategoriesCategorySubcategory(req: operations.GetMyFollowsCategoriesCategorySubcategoryRequest, config?: AxiosRequestConfig): Promise<operations.GetMyFollowsCategoriesCategorySubcategoryResponse>;
    /**
     * getMyFollowsCategoriesIdentifier - Follow status for a category
     *
     * Follow status for a category
    **/
    getMyFollowsCategoriesIdentifier(req: operations.GetMyFollowsCategoriesIdentifierRequest, config?: AxiosRequestConfig): Promise<operations.GetMyFollowsCategoriesIdentifierResponse>;
    /**
     * getMyFollowsCollectionsSlug - Follow status for a collection
     *
     * Follow status for a collection
    **/
    getMyFollowsCollectionsSlug(req: operations.GetMyFollowsCollectionsSlugRequest, config?: AxiosRequestConfig): Promise<operations.GetMyFollowsCollectionsSlugResponse>;
    /**
     * getMyFollowsHandpickedSlug - Follow status for a handpicked collection
     *
     * Follow status for a handpicked collection
    **/
    getMyFollowsHandpickedSlug(req: operations.GetMyFollowsHandpickedSlugRequest, config?: AxiosRequestConfig): Promise<operations.GetMyFollowsHandpickedSlugResponse>;
    /**
     * getMyFollowsSearch - Follow status for a search
     *
     * Follow status for a search
    **/
    getMyFollowsSearch(req: operations.GetMyFollowsSearchRequest, config?: AxiosRequestConfig): Promise<operations.GetMyFollowsSearchResponse>;
    /**
     * getMyFollowsShopsSlug - Follow status for a shop
     *
     * Follow status for a shop
    **/
    getMyFollowsShopsSlug(req: operations.GetMyFollowsShopsSlugRequest, config?: AxiosRequestConfig): Promise<operations.GetMyFollowsShopsSlugResponse>;
    /**
     * getMyListings - Retrieve a list of live listings for the seller. To search all listings specify state=all
     *
     * Retrieve a list of live listings for the seller. To search all listings specify state=all
    **/
    getMyListings(req: operations.GetMyListingsRequest, config?: AxiosRequestConfig): Promise<operations.GetMyListingsResponse>;
    /**
     * getMyListingsDrafts - Retrieve a list your draft listings
     *
     * Retrieve a list your draft listings
    **/
    getMyListingsDrafts(req: operations.GetMyListingsDraftsRequest, config?: AxiosRequestConfig): Promise<operations.GetMyListingsDraftsResponse>;
    /**
     * getMyListingsNegotiations - Get a list of active negotiations as a seller
     *
     * Get a list of active negotiations as a seller
    **/
    getMyListingsNegotiations(req: operations.GetMyListingsNegotiationsRequest, config?: AxiosRequestConfig): Promise<operations.GetMyListingsNegotiationsResponse>;
    /**
     * getMyLists - Get a list of your lists (wishlist, watch list, etc)
     *
     * Get a list of your lists (wishlist, watch list, etc)
    **/
    getMyLists(req: operations.GetMyListsRequest, config?: AxiosRequestConfig): Promise<operations.GetMyListsResponse>;
    /**
     * getMyNegotiationsBuying - Get a list of active negotiations as a buyer
     *
     * Get a list of active negotiations as a buyer
    **/
    getMyNegotiationsBuying(req: operations.GetMyNegotiationsBuyingRequest, config?: AxiosRequestConfig): Promise<operations.GetMyNegotiationsBuyingResponse>;
    /**
     * getMyNegotiationsId - Get offer details
     *
     * Get offer details
    **/
    getMyNegotiationsId(req: operations.GetMyNegotiationsIdRequest, config?: AxiosRequestConfig): Promise<operations.GetMyNegotiationsIdResponse>;
    /**
     * getMyOrdersAwaitingFeedback - List of orders that need feedback
     *
     * List of orders that need feedback
    **/
    getMyOrdersAwaitingFeedback(req: operations.GetMyOrdersAwaitingFeedbackRequest, config?: AxiosRequestConfig): Promise<operations.GetMyOrdersAwaitingFeedbackResponse>;
    /**
     * getMyOrdersBuyingAll - Returns all orders, newest first.
     *
     * Returns all orders, newest first.
    **/
    getMyOrdersBuyingAll(req: operations.GetMyOrdersBuyingAllRequest, config?: AxiosRequestConfig): Promise<operations.GetMyOrdersBuyingAllResponse>;
    getMyOrdersBuyingByUuidUuid(req: operations.GetMyOrdersBuyingByUuidUuidRequest, config?: AxiosRequestConfig): Promise<operations.GetMyOrdersBuyingByUuidUuidResponse>;
    /**
     * getMyOrdersBuyingId - Returns order details for a buyer
     *
     * Returns order details for a buyer
    **/
    getMyOrdersBuyingId(req: operations.GetMyOrdersBuyingIdRequest, config?: AxiosRequestConfig): Promise<operations.GetMyOrdersBuyingIdResponse>;
    /**
     * getMyOrdersBuyingUnpaid - Returns unpaid orders, newest first.
     *
     * Returns unpaid orders, newest first.
    **/
    getMyOrdersBuyingUnpaid(req: operations.GetMyOrdersBuyingUnpaidRequest, config?: AxiosRequestConfig): Promise<operations.GetMyOrdersBuyingUnpaidResponse>;
    /**
     * getMyOrdersSellingAll - Get all seller orders, newest first.
     *
     * Get all seller orders, newest first.
    **/
    getMyOrdersSellingAll(req: operations.GetMyOrdersSellingAllRequest, config?: AxiosRequestConfig): Promise<operations.GetMyOrdersSellingAllResponse>;
    /**
     * getMyOrdersSellingAwaitingShipment - Get unpaid seller orders, newest first.
     *
     * Get unpaid seller orders, newest first.
    **/
    getMyOrdersSellingAwaitingShipment(req: operations.GetMyOrdersSellingAwaitingShipmentRequest, config?: AxiosRequestConfig): Promise<operations.GetMyOrdersSellingAwaitingShipmentResponse>;
    /**
     * getMyOrdersSellingBuyerHistoryBuyerId - See previous orders from buyer
     *
     * See previous orders from buyer
    **/
    getMyOrdersSellingBuyerHistoryBuyerId(req: operations.GetMyOrdersSellingBuyerHistoryBuyerIdRequest, config?: AxiosRequestConfig): Promise<operations.GetMyOrdersSellingBuyerHistoryBuyerIdResponse>;
    getMyOrdersSellingByUuidUuid(req: operations.GetMyOrdersSellingByUuidUuidRequest, config?: AxiosRequestConfig): Promise<operations.GetMyOrdersSellingByUuidUuidResponse>;
    /**
     * getMyOrdersSellingId - Returns order details for a seller
     *
     * Returns order details for a seller
    **/
    getMyOrdersSellingId(req: operations.GetMyOrdersSellingIdRequest, config?: AxiosRequestConfig): Promise<operations.GetMyOrdersSellingIdResponse>;
    /**
     * getMyOrdersSellingUnpaid - Get unpaid seller orders, newest first.
     *
     * Get unpaid seller orders, newest first.
    **/
    getMyOrdersSellingUnpaid(req: operations.GetMyOrdersSellingUnpaidRequest, config?: AxiosRequestConfig): Promise<operations.GetMyOrdersSellingUnpaidResponse>;
    /**
     * getMyPaymentsSelling - Get payments
     *
     * Get payments
    **/
    getMyPaymentsSelling(req: operations.GetMyPaymentsSellingRequest, config?: AxiosRequestConfig): Promise<operations.GetMyPaymentsSellingResponse>;
    /**
     * getMyPaymentsSellingId - Get payment
     *
     * Get payment
    **/
    getMyPaymentsSellingId(req: operations.GetMyPaymentsSellingIdRequest, config?: AxiosRequestConfig): Promise<operations.GetMyPaymentsSellingIdResponse>;
    /**
     * getMyPayouts - Get a list of payouts
     *
     * Get a list of payouts
    **/
    getMyPayouts(req: operations.GetMyPayoutsRequest, config?: AxiosRequestConfig): Promise<operations.GetMyPayoutsResponse>;
    /**
     * getMyPayoutsIdLineItems - Read the line items of a payout
     *
     * Read the line items of a payout
    **/
    getMyPayoutsIdLineItems(req: operations.GetMyPayoutsIdLineItemsRequest, config?: AxiosRequestConfig): Promise<operations.GetMyPayoutsIdLineItemsResponse>;
    /**
     * getMyRefundRequestsSelling - Get a list of refund requests as a seller
     *
     * Get a list of refund requests as a seller
    **/
    getMyRefundRequestsSelling(req: operations.GetMyRefundRequestsSellingRequest, config?: AxiosRequestConfig): Promise<operations.GetMyRefundRequestsSellingResponse>;
    /**
     * getMyViewedListings - Get a list of your recently viewed listings.
     *
     * Get a list of your recently viewed listings.
    **/
    getMyViewedListings(req: operations.GetMyViewedListingsRequest, config?: AxiosRequestConfig): Promise<operations.GetMyViewedListingsResponse>;
    /**
     * getMyWishlist - Get a list of wishlisted items
     *
     * Get a list of wishlisted items
    **/
    getMyWishlist(req: operations.GetMyWishlistRequest, config?: AxiosRequestConfig): Promise<operations.GetMyWishlistResponse>;
    /**
     * getOrdersOrderIdFeedbackBuyer - Feedback details for an order's buyer
     *
     * Feedback details for an order's buyer
    **/
    getOrdersOrderIdFeedbackBuyer(req: operations.GetOrdersOrderIdFeedbackBuyerRequest, config?: AxiosRequestConfig): Promise<operations.GetOrdersOrderIdFeedbackBuyerResponse>;
    /**
     * getOrdersOrderIdFeedbackSeller - Feedback details for an order's seller
     *
     * Feedback details for an order's seller
    **/
    getOrdersOrderIdFeedbackSeller(req: operations.GetOrdersOrderIdFeedbackSellerRequest, config?: AxiosRequestConfig): Promise<operations.GetOrdersOrderIdFeedbackSellerResponse>;
    /**
     * getPaymentMethods - Get list of payment methods
     *
     * Get list of payment methods
    **/
    getPaymentMethods(config?: AxiosRequestConfig): Promise<operations.GetPaymentMethodsResponse>;
    /**
     * getPriceguideIdTransactionsSummary - Get a summary of transactions for a given price guide
     *
     * Get a summary of transactions for a given price guide
    **/
    getPriceguideIdTransactionsSummary(req: operations.GetPriceguideIdTransactionsSummaryRequest, config?: AxiosRequestConfig): Promise<operations.GetPriceguideIdTransactionsSummaryResponse>;
    /**
     * getProductsReviewsId - View a review
     *
     * View a review
    **/
    getProductsReviewsId(req: operations.GetProductsReviewsIdRequest, config?: AxiosRequestConfig): Promise<operations.GetProductsReviewsIdResponse>;
    /**
     * getProductsSlugReviews - View reviews of a comparison shopping page
     *
     * View reviews of a comparison shopping page
    **/
    getProductsSlugReviews(req: operations.GetProductsSlugReviewsRequest, config?: AxiosRequestConfig): Promise<operations.GetProductsSlugReviewsResponse>;
    /**
     * getSalesReverb - View upcoming and live Reverb official sales.
     *
     * View upcoming and live Reverb official sales.
    **/
    getSalesReverb(req: operations.GetSalesReverbRequest, config?: AxiosRequestConfig): Promise<operations.GetSalesReverbResponse>;
    /**
     * getSalesSeller - View your created sales.
     *
     * View your created sales.
    **/
    getSalesSeller(req: operations.GetSalesSellerRequest, config?: AxiosRequestConfig): Promise<operations.GetSalesSellerResponse>;
    getSalesSlug(req: operations.GetSalesSlugRequest, config?: AxiosRequestConfig): Promise<operations.GetSalesSlugResponse>;
    /**
     * getShippingProviders - List of supported shipping providers
     *
     * List of supported shipping providers
    **/
    getShippingProviders(config?: AxiosRequestConfig): Promise<operations.GetShippingProvidersResponse>;
    getShippingRegions(config?: AxiosRequestConfig): Promise<operations.GetShippingRegionsResponse>;
    /**
     * getShop - Get your own shop details
     *
     * Get your own shop details
    **/
    getShop(req: operations.GetShopRequest, config?: AxiosRequestConfig): Promise<operations.GetShopResponse>;
    /**
     * getShopListingConditions - List of supported product conditions
     *
     * List of supported product conditions
    **/
    getShopListingConditions(req: operations.GetShopListingConditionsRequest, config?: AxiosRequestConfig): Promise<operations.GetShopListingConditionsResponse>;
    /**
     * getShopPaymentMethods - Get accepted payment methods
     *
     * Get accepted payment methods
    **/
    getShopPaymentMethods(req: operations.GetShopPaymentMethodsRequest, config?: AxiosRequestConfig): Promise<operations.GetShopPaymentMethodsResponse>;
    /**
     * getShopVacation - Returns shop vacation status
     *
     * Returns shop vacation status
    **/
    getShopVacation(req: operations.GetShopVacationRequest, config?: AxiosRequestConfig): Promise<operations.GetShopVacationResponse>;
    /**
     * getShopsIdStorefronts - Get storefront details on a shop.
     *
     * Get storefront details on a shop.
    **/
    getShopsIdStorefronts(req: operations.GetShopsIdStorefrontsRequest, config?: AxiosRequestConfig): Promise<operations.GetShopsIdStorefrontsResponse>;
    /**
     * getShopsShopIdShippingProfiles - List of shipping profiles for your shop
     *
     * List of shipping profiles for your shop
    **/
    getShopsShopIdShippingProfiles(req: operations.GetShopsShopIdShippingProfilesRequest, config?: AxiosRequestConfig): Promise<operations.GetShopsShopIdShippingProfilesResponse>;
    /**
     * getShopsSlug - Get details on a shop.
     *
     * Get details on a shop.
    **/
    getShopsSlug(req: operations.GetShopsSlugRequest, config?: AxiosRequestConfig): Promise<operations.GetShopsSlugResponse>;
    /**
     * getShopsSlugFeedback - Get seller's feedback
     *
     * Get seller's feedback
    **/
    getShopsSlugFeedback(req: operations.GetShopsSlugFeedbackRequest, config?: AxiosRequestConfig): Promise<operations.GetShopsSlugFeedbackResponse>;
    /**
     * getShopsSlugFeedbackBuyer - Get seller's feedback as a buyer
     *
     * Get seller's feedback as a buyer
    **/
    getShopsSlugFeedbackBuyer(req: operations.GetShopsSlugFeedbackBuyerRequest, config?: AxiosRequestConfig): Promise<operations.GetShopsSlugFeedbackBuyerResponse>;
    /**
     * getShopsSlugFeedbackSeller - Get seller's feedback as a seller
     *
     * Get seller's feedback as a seller
    **/
    getShopsSlugFeedbackSeller(req: operations.GetShopsSlugFeedbackSellerRequest, config?: AxiosRequestConfig): Promise<operations.GetShopsSlugFeedbackSellerResponse>;
    /**
     * getWants - A list of wanted items by the user
     *
     * A list of wanted items by the user
    **/
    getWants(req: operations.GetWantsRequest, config?: AxiosRequestConfig): Promise<operations.GetWantsResponse>;
    /**
     * getWebhooksRegistrations - Get webhook registrations
     *
     * Get webhook registrations
    **/
    getWebhooksRegistrations(config?: AxiosRequestConfig): Promise<operations.GetWebhooksRegistrationsResponse>;
    /**
     * getWebhooksRegistrationsId - Get details of a webhook registration
     *
     * Get details of a webhook registration
    **/
    getWebhooksRegistrationsId(req: operations.GetWebhooksRegistrationsIdRequest, config?: AxiosRequestConfig): Promise<operations.GetWebhooksRegistrationsIdResponse>;
    /**
     * postConversationsConversationIdOffer - Make an offer to the other participant in the conversation
     *
     * Make an offer to the other participant in the conversation
    **/
    postConversationsConversationIdOffer(req: operations.PostConversationsConversationIdOfferRequest, config?: AxiosRequestConfig): Promise<operations.PostConversationsConversationIdOfferResponse>;
    /**
     * postConversationsIdOffer - Make an offer to the other participant in the conversation
     *
     * Make an offer to the other participant in the conversation
    **/
    postConversationsIdOffer(req: operations.PostConversationsIdOfferRequest, config?: AxiosRequestConfig): Promise<operations.PostConversationsIdOfferResponse>;
    /**
     * postListings - Create a listing
     *
     * Create a listing
    **/
    postListings(req: operations.PostListingsRequest, config?: AxiosRequestConfig): Promise<operations.PostListingsResponse>;
    /**
     * postListingsIdOffer - Make an offer to the seller of a listing
     *
     * Make an offer to the seller of a listing
    **/
    postListingsIdOffer(req: operations.PostListingsIdOfferRequest, config?: AxiosRequestConfig): Promise<operations.PostListingsIdOfferResponse>;
    /**
     * postListingsListingIdBumpBudgetType - Bump a listing
     *
     * Bump a listing
    **/
    postListingsListingIdBumpBudgetType(req: operations.PostListingsListingIdBumpBudgetTypeRequest, config?: AxiosRequestConfig): Promise<operations.PostListingsListingIdBumpBudgetTypeResponse>;
    /**
     * postListingsListingIdConversations - Start a conversation with a seller
     *
     * Start a conversation with a seller
    **/
    postListingsListingIdConversations(req: operations.PostListingsListingIdConversationsRequest, config?: AxiosRequestConfig): Promise<operations.PostListingsListingIdConversationsResponse>;
    /**
     * postListingsSlugFlag - Flag a listing for inappropriate content or fraud
     *
     * Flag a listing for inappropriate content or fraud
    **/
    postListingsSlugFlag(req: operations.PostListingsSlugFlagRequest, config?: AxiosRequestConfig): Promise<operations.PostListingsSlugFlagResponse>;
    /**
     * postListingsSlugReviews - Create a review for a listing
     *
     * Create a review for a listing
    **/
    postListingsSlugReviews(req: operations.PostListingsSlugReviewsRequest, config?: AxiosRequestConfig): Promise<operations.PostListingsSlugReviewsResponse>;
    /**
     * postMyAddresses - Create a new address in your address book
     *
     * Create a new address in your address book
    **/
    postMyAddresses(req: operations.PostMyAddressesRequest, config?: AxiosRequestConfig): Promise<operations.PostMyAddressesResponse>;
    /**
     * postMyConversations - Start a conversation
     *
     * Start a conversation
    **/
    postMyConversations(req: operations.PostMyConversationsRequest, config?: AxiosRequestConfig): Promise<operations.PostMyConversationsResponse>;
    /**
     * postMyConversationsConversationIdMessages - Send a message
     *
     * Send a message
    **/
    postMyConversationsConversationIdMessages(req: operations.PostMyConversationsConversationIdMessagesRequest, config?: AxiosRequestConfig): Promise<operations.PostMyConversationsConversationIdMessagesResponse>;
    postMyCuratedSetProductProductId(req: operations.PostMyCuratedSetProductProductIdRequest, config?: AxiosRequestConfig): Promise<operations.PostMyCuratedSetProductProductIdResponse>;
    /**
     * postMyFollowsArticles - Set a user's ArticleCategoryFollows
     *
     * Set a user's ArticleCategoryFollows
    **/
    postMyFollowsArticles(req: operations.PostMyFollowsArticlesRequest, config?: AxiosRequestConfig): Promise<operations.PostMyFollowsArticlesResponse>;
    /**
     * postMyFollowsBrandsSlug - Follow a brand
     *
     * Follow a brand
    **/
    postMyFollowsBrandsSlug(req: operations.PostMyFollowsBrandsSlugRequest, config?: AxiosRequestConfig): Promise<operations.PostMyFollowsBrandsSlugResponse>;
    /**
     * postMyFollowsCategoriesCategorySubcategory - Follow a subcategory
     *
     * Follow a subcategory
    **/
    postMyFollowsCategoriesCategorySubcategory(req: operations.PostMyFollowsCategoriesCategorySubcategoryRequest, config?: AxiosRequestConfig): Promise<operations.PostMyFollowsCategoriesCategorySubcategoryResponse>;
    /**
     * postMyFollowsCategoriesIdentifier - Follow a category
     *
     * Follow a category
    **/
    postMyFollowsCategoriesIdentifier(req: operations.PostMyFollowsCategoriesIdentifierRequest, config?: AxiosRequestConfig): Promise<operations.PostMyFollowsCategoriesIdentifierResponse>;
    /**
     * postMyFollowsCategoriesUuid - Follow a category
     *
     * Follow a category
    **/
    postMyFollowsCategoriesUuid(req: operations.PostMyFollowsCategoriesUuidRequest, config?: AxiosRequestConfig): Promise<operations.PostMyFollowsCategoriesUuidResponse>;
    /**
     * postMyFollowsCollectionsSlug - Follow a collection
     *
     * Follow a collection
    **/
    postMyFollowsCollectionsSlug(req: operations.PostMyFollowsCollectionsSlugRequest, config?: AxiosRequestConfig): Promise<operations.PostMyFollowsCollectionsSlugResponse>;
    postMyFollowsFollowIdAlert(req: operations.PostMyFollowsFollowIdAlertRequest, config?: AxiosRequestConfig): Promise<operations.PostMyFollowsFollowIdAlertResponse>;
    /**
     * postMyFollowsHandpickedSlug - Follow a handpicked collection
     *
     * Follow a handpicked collection
    **/
    postMyFollowsHandpickedSlug(req: operations.PostMyFollowsHandpickedSlugRequest, config?: AxiosRequestConfig): Promise<operations.PostMyFollowsHandpickedSlugResponse>;
    /**
     * postMyFollowsSearch - Follow a search
     *
     * Follow a search
    **/
    postMyFollowsSearch(req: operations.PostMyFollowsSearchRequest, config?: AxiosRequestConfig): Promise<operations.PostMyFollowsSearchResponse>;
    /**
     * postMyFollowsShopsSlug - Follow a shop
     *
     * Follow a shop
    **/
    postMyFollowsShopsSlug(req: operations.PostMyFollowsShopsSlugRequest, config?: AxiosRequestConfig): Promise<operations.PostMyFollowsShopsSlugResponse>;
    /**
     * postMyNegotiationsIdAccept - Accept an offer
     *
     * Accept an offer
    **/
    postMyNegotiationsIdAccept(req: operations.PostMyNegotiationsIdAcceptRequest, config?: AxiosRequestConfig): Promise<operations.PostMyNegotiationsIdAcceptResponse>;
    /**
     * postMyNegotiationsIdCounter - Counter an offer
     *
     * Counter an offer
    **/
    postMyNegotiationsIdCounter(req: operations.PostMyNegotiationsIdCounterRequest, config?: AxiosRequestConfig): Promise<operations.PostMyNegotiationsIdCounterResponse>;
    /**
     * postMyNegotiationsIdDecline - Decline an offer
     *
     * Decline an offer
    **/
    postMyNegotiationsIdDecline(req: operations.PostMyNegotiationsIdDeclineRequest, config?: AxiosRequestConfig): Promise<operations.PostMyNegotiationsIdDeclineResponse>;
    /**
     * postMyOrdersBuyingIdMarkReceived - Marks an order as received by the buyer
     *
     * Marks an order as received by the buyer
    **/
    postMyOrdersBuyingIdMarkReceived(req: operations.PostMyOrdersBuyingIdMarkReceivedRequest, config?: AxiosRequestConfig): Promise<operations.PostMyOrdersBuyingIdMarkReceivedResponse>;
    /**
     * postMyOrdersSellingIdMarkPickedUp - Marks an order as picked up
     *
     * Marks an order as picked up
    **/
    postMyOrdersSellingIdMarkPickedUp(req: operations.PostMyOrdersSellingIdMarkPickedUpRequest, config?: AxiosRequestConfig): Promise<operations.PostMyOrdersSellingIdMarkPickedUpResponse>;
    /**
     * postMyOrdersSellingIdShip - Marks an order as shipped
     *
     * Marks an order as shipped
    **/
    postMyOrdersSellingIdShip(req: operations.PostMyOrdersSellingIdShipRequest, config?: AxiosRequestConfig): Promise<operations.PostMyOrdersSellingIdShipResponse>;
    /**
     * postMyOrdersSellingOrderIdRefundRequests - Initiate a refund for a sold order
     *
     * Initiate a refund for a sold order
    **/
    postMyOrdersSellingOrderIdRefundRequests(req: operations.PostMyOrdersSellingOrderIdRefundRequestsRequest, config?: AxiosRequestConfig): Promise<operations.PostMyOrdersSellingOrderIdRefundRequestsResponse>;
    /**
     * postOrdersOrderIdFeedbackBuyer - Add feedback about an order's buyer
     *
     * Add feedback about an order's buyer
    **/
    postOrdersOrderIdFeedbackBuyer(req: operations.PostOrdersOrderIdFeedbackBuyerRequest, config?: AxiosRequestConfig): Promise<operations.PostOrdersOrderIdFeedbackBuyerResponse>;
    /**
     * postOrdersOrderIdFeedbackSeller - Add feedback about an order's seller
     *
     * Add feedback about an order's seller
    **/
    postOrdersOrderIdFeedbackSeller(req: operations.PostOrdersOrderIdFeedbackSellerRequest, config?: AxiosRequestConfig): Promise<operations.PostOrdersOrderIdFeedbackSellerResponse>;
    /**
     * postProductsSlugReviews - Create a review for a product
     *
     * Create a review for a product
    **/
    postProductsSlugReviews(req: operations.PostProductsSlugReviewsRequest, config?: AxiosRequestConfig): Promise<operations.PostProductsSlugReviewsResponse>;
    /**
     * postSalesSaleIdListings - Add listings to a sale
     *
     * Add listings to a sale
    **/
    postSalesSaleIdListings(req: operations.PostSalesSaleIdListingsRequest, config?: AxiosRequestConfig): Promise<operations.PostSalesSaleIdListingsResponse>;
    /**
     * postShopVacation - Enable vacation mode. All listings will be unavailable until vacation mode is turned off.
     *
     * Enable vacation mode. All listings will be unavailable until vacation mode is turned off.
    **/
    postShopVacation(req: operations.PostShopVacationRequest, config?: AxiosRequestConfig): Promise<operations.PostShopVacationResponse>;
    /**
     * postWebhooksRegistrations - Register a webhook
     *
     * Register a webhook
    **/
    postWebhooksRegistrations(req: operations.PostWebhooksRegistrationsRequest, config?: AxiosRequestConfig): Promise<operations.PostWebhooksRegistrationsResponse>;
    /**
     * putListingsSlug - Update a listing
     *
     * Update a listing
    **/
    putListingsSlug(req: operations.PutListingsSlugRequest, config?: AxiosRequestConfig): Promise<operations.PutListingsSlugResponse>;
    /**
     * putMyAccount - Update account details
     *
     * Update account details
    **/
    putMyAccount(req: operations.PutMyAccountRequest, config?: AxiosRequestConfig): Promise<operations.PutMyAccountResponse>;
    /**
     * putMyAddressesAddressId - Update an existing address in your address book
     *
     * Update an existing address in your address book
    **/
    putMyAddressesAddressId(req: operations.PutMyAddressesAddressIdRequest, config?: AxiosRequestConfig): Promise<operations.PutMyAddressesAddressIdResponse>;
    /**
     * putMyConversationsId - Mark a conversation read/unread
     *
     * Mark a conversation read/unread
    **/
    putMyConversationsId(req: operations.PutMyConversationsIdRequest, config?: AxiosRequestConfig): Promise<operations.PutMyConversationsIdResponse>;
    /**
     * putMyListingsSlugStateEnd - End a listing
     *
     * End a listing
    **/
    putMyListingsSlugStateEnd(req: operations.PutMyListingsSlugStateEndRequest, config?: AxiosRequestConfig): Promise<operations.PutMyListingsSlugStateEndResponse>;
    /**
     * putMyRefundRequestsSellingId - Update a refund request for a sold order
     *
     * Update a refund request for a sold order
    **/
    putMyRefundRequestsSellingId(req: operations.PutMyRefundRequestsSellingIdRequest, config?: AxiosRequestConfig): Promise<operations.PutMyRefundRequestsSellingIdResponse>;
    /**
     * putMyWishlistId - Add a listing to your wishlist
     *
     * Add a listing to your wishlist
    **/
    putMyWishlistId(req: operations.PutMyWishlistIdRequest, config?: AxiosRequestConfig): Promise<operations.PutMyWishlistIdResponse>;
    /**
     * putProductsReviewsId - Update a review
     *
     * Update a review
    **/
    putProductsReviewsId(req: operations.PutProductsReviewsIdRequest, config?: AxiosRequestConfig): Promise<operations.PutProductsReviewsIdResponse>;
    /**
     * putShop - Update your shop profile
     *
     * Update your shop profile
    **/
    putShop(req: operations.PutShopRequest, config?: AxiosRequestConfig): Promise<operations.PutShopResponse>;
    /**
     * putWantsId - Mark an item wanted. Returns 200 on success or 422 on failure.
     *
     * Mark an item wanted. Returns 200 on success or 422 on failure.
    **/
    putWantsId(req: operations.PutWantsIdRequest, config?: AxiosRequestConfig): Promise<operations.PutWantsIdResponse>;
}
export {};
