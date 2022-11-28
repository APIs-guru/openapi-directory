# openapi

<!-- Start SDK Installation -->
## SDK Installation

```bash
go get openapi
```
<!-- End SDK Installation -->

<!-- Start SDK Example Usage -->
## SDK Example Usage

```go
package main

import (
    "openapi"
    "openapi/pkg/models/shared"
    "openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()
    
    req := operations.DeleteListingsListingIDImagesImageIDRequest{
        Security: operations.DeleteListingsListingIDImagesImageIDSecurity{
            Oauth2: shared.SchemeOauth2{
                Authorization: "Bearer YOUR_ACCESS_TOKEN_HERE",
            },
        },
        PathParams: operations.DeleteListingsListingIDImagesImageIDPathParams{
            ImageID: "qui",
            ListingID: "in",
        },
    }
    
    res, err := s.Sdk.DeleteListingsListingIDImagesImageID(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## SDK Available Operations

### SDK SDK

* `DeleteListingsListingIDImagesImageID` - Delete an image from a listing
* `DeleteListingsSlug` - Delete a draft listing. Cannot be used on non-drafts.
* `DeleteMyAddressesAddressID` - Delete an existing address in your address book
* `DeleteMyCuratedSetProductProductID`
* `DeleteMyFollowsBrandsSlug` - Unfollow a brand
* `DeleteMyFollowsCategoriesCategorySubcategory` - Unfollow a subcategory
* `DeleteMyFollowsCategoriesIdentifier` - Unfollow a category
* `DeleteMyFollowsCollectionsSlug` - Unfollow a collection
* `DeleteMyFollowsFollowID` - Delete a follow
* `DeleteMyFollowsFollowIDAlert`
* `DeleteMyFollowsHandpickedSlug` - Unfollow a handpicked collection
* `DeleteMyFollowsShopsSlug` - Unfollow a shop
* `DeleteMyWishlistID` - Remove a listing from your wishlist
* `DeleteSalesSaleIDListings` - Remove a listing from a sale
* `DeleteShopVacation` - Disable vacation mode. All listings will be re-enabled.
* `DeleteWantsID` - Unmark an item wanted.
* `DeleteWebhooksRegistrationsID` - Remove a webhook
* `GetArticles`
* `GetArticlesCategories` - List of all article categories
* `GetCategories` - List of supported product categories
* `GetCategoriesFlat`
* `GetCategoriesProductTypeCategory` - Get subcategory details
* `GetCategoriesTaxonomy` - Full taxonomy tree of categories including middle categories
* `GetCategoriesUUID` - Get category details
* `GetComparisonShoppingPages` - Returns a set of comparison shopping pages based on the current params
* `GetComparisonShoppingPagesFind` - Show comparison shopping page
* `GetComparisonShoppingPagesID`
* `GetComparisonShoppingPagesIDListings` - Return new or used listings for a comparison shopping page
* `GetComparisonShoppingPagesIDReviews` - View reviews of a comparison shopping page
* `GetCountries` - Retrieve a list of country codes with corresponding subregions
* `GetCsps` - Returns a set of comparison shopping pages based on the current params
* `GetCspsCategories`
* `GetCspsFind` - Show comparison shopping page
* `GetCspsID`
* `GetCuratedSetsSlug`
* `GetCurrenciesDisplay` - List of supported display currencies for browsing listings
* `GetCurrenciesListing` - List of supported listing currencies for shops
* `GetFeedbackFeedbackID` - Feedback details
* `GetHandpickedSlug` - Get results from a handpicked collection
* `GetListingConditions` - List of supported product conditions
* `GetListings` - Default search of listings includes only used & handmade. Add a filter to view all listings or use the /listings/all endpoint.
* `GetListingsAll` - All listings including used, handmade, and brand new
* `GetListingsFacetsSellerLocation` - Individual facets
* `GetListingsIDNegotiation` - Returns the latest negotiation for the requesting user given a listing id
* `GetListingsListingIDBump` - View available bump tiers and stats for a listing
* `GetListingsListingIDImages` - View the images associated with a particular listing
* `GetListingsListingIDSales` - See all sales that include a listing.
* `GetListingsSlug` - Listing details
* `GetListingsSlugEdit` - Edit listing.
* `GetListingsSlugReviews` - View reviews of a listing
* `GetListingsSlugSimilarListings` - Listing details
* `GetMyAccount` - Get account details
* `GetMyAddresses` - See all addresses in your address book
* `GetMyConversations` - Get a list of your conversations
* `GetMyConversationsID` - Display conversation details with messages in natural time order (oldest to newest)
* `GetMyCounts` - Get your actionable status counts
* `GetMyFeed` - Get listings from your feed
* `GetMyFeedCustomize` - get your feed customization options
* `GetMyFeedGrid` - get your feed
* `GetMyFeedbackReceived` - List of received feedback
* `GetMyFeedbackSent` - List of sent feedback
* `GetMyFollows` - See what the user is following
* `GetMyFollowsArticles` - Returns a user's ArticleCategoryFollows
* `GetMyFollowsBrandsSlug` - Follow status for a brand
* `GetMyFollowsCategoriesCategorySubcategory` - Follow status for a subcategory
* `GetMyFollowsCategoriesIdentifier` - Follow status for a category
* `GetMyFollowsCollectionsSlug` - Follow status for a collection
* `GetMyFollowsHandpickedSlug` - Follow status for a handpicked collection
* `GetMyFollowsSearch` - Follow status for a search
* `GetMyFollowsShopsSlug` - Follow status for a shop
* `GetMyListings` - Retrieve a list of live listings for the seller. To search all listings specify state=all
* `GetMyListingsDrafts` - Retrieve a list your draft listings
* `GetMyListingsNegotiations` - Get a list of active negotiations as a seller
* `GetMyLists` - Get a list of your lists (wishlist, watch list, etc)
* `GetMyNegotiationsBuying` - Get a list of active negotiations as a buyer
* `GetMyNegotiationsID` - Get offer details
* `GetMyOrdersAwaitingFeedback` - List of orders that need feedback
* `GetMyOrdersBuyingAll` - Returns all orders, newest first.
* `GetMyOrdersBuyingByUUIDUUID`
* `GetMyOrdersBuyingID` - Returns order details for a buyer
* `GetMyOrdersBuyingUnpaid` - Returns unpaid orders, newest first.
* `GetMyOrdersSellingAll` - Get all seller orders, newest first.
* `GetMyOrdersSellingAwaitingShipment` - Get unpaid seller orders, newest first.
* `GetMyOrdersSellingBuyerHistoryBuyerID` - See previous orders from buyer
* `GetMyOrdersSellingByUUIDUUID`
* `GetMyOrdersSellingID` - Returns order details for a seller
* `GetMyOrdersSellingUnpaid` - Get unpaid seller orders, newest first.
* `GetMyPaymentsSelling` - Get payments
* `GetMyPaymentsSellingID` - Get payment
* `GetMyPayouts` - Get a list of payouts
* `GetMyPayoutsIDLineItems` - Read the line items of a payout
* `GetMyRefundRequestsSelling` - Get a list of refund requests as a seller
* `GetMyViewedListings` - Get a list of your recently viewed listings.
* `GetMyWishlist` - Get a list of wishlisted items
* `GetOrdersOrderIDFeedbackBuyer` - Feedback details for an order's buyer
* `GetOrdersOrderIDFeedbackSeller` - Feedback details for an order's seller
* `GetPaymentMethods` - Get list of payment methods
* `GetPriceguideIDTransactionsSummary` - Get a summary of transactions for a given price guide
* `GetProductsReviewsID` - View a review
* `GetProductsSlugReviews` - View reviews of a comparison shopping page
* `GetSalesReverb` - View upcoming and live Reverb official sales.
* `GetSalesSeller` - View your created sales.
* `GetSalesSlug`
* `GetShippingProviders` - List of supported shipping providers
* `GetShippingRegions`
* `GetShop` - Get your own shop details
* `GetShopListingConditions` - List of supported product conditions
* `GetShopPaymentMethods` - Get accepted payment methods
* `GetShopVacation` - Returns shop vacation status
* `GetShopsIDStorefronts` - Get storefront details on a shop.
* `GetShopsShopIDShippingProfiles` - List of shipping profiles for your shop
* `GetShopsSlug` - Get details on a shop.
* `GetShopsSlugFeedback` - Get seller's feedback
* `GetShopsSlugFeedbackBuyer` - Get seller's feedback as a buyer
* `GetShopsSlugFeedbackSeller` - Get seller's feedback as a seller
* `GetWants` - A list of wanted items by the user
* `GetWebhooksRegistrations` - Get webhook registrations
* `GetWebhooksRegistrationsID` - Get details of a webhook registration
* `PostConversationsConversationIDOffer` - Make an offer to the other participant in the conversation
* `PostConversationsIDOffer` - Make an offer to the other participant in the conversation
* `PostListings` - Create a listing
* `PostListingsIDOffer` - Make an offer to the seller of a listing
* `PostListingsListingIDBumpBudgetType` - Bump a listing
* `PostListingsListingIDConversations` - Start a conversation with a seller
* `PostListingsSlugFlag` - Flag a listing for inappropriate content or fraud
* `PostListingsSlugReviews` - Create a review for a listing
* `PostMyAddresses` - Create a new address in your address book
* `PostMyConversations` - Start a conversation
* `PostMyConversationsConversationIDMessages` - Send a message
* `PostMyCuratedSetProductProductID`
* `PostMyFollowsArticles` - Set a user's ArticleCategoryFollows
* `PostMyFollowsBrandsSlug` - Follow a brand
* `PostMyFollowsCategoriesCategorySubcategory` - Follow a subcategory
* `PostMyFollowsCategoriesIdentifier` - Follow a category
* `PostMyFollowsCategoriesUUID` - Follow a category
* `PostMyFollowsCollectionsSlug` - Follow a collection
* `PostMyFollowsFollowIDAlert`
* `PostMyFollowsHandpickedSlug` - Follow a handpicked collection
* `PostMyFollowsSearch` - Follow a search
* `PostMyFollowsShopsSlug` - Follow a shop
* `PostMyNegotiationsIDAccept` - Accept an offer
* `PostMyNegotiationsIDCounter` - Counter an offer
* `PostMyNegotiationsIDDecline` - Decline an offer
* `PostMyOrdersBuyingIDMarkReceived` - Marks an order as received by the buyer
* `PostMyOrdersSellingIDMarkPickedUp` - Marks an order as picked up
* `PostMyOrdersSellingIDShip` - Marks an order as shipped
* `PostMyOrdersSellingOrderIDRefundRequests` - Initiate a refund for a sold order
* `PostOrdersOrderIDFeedbackBuyer` - Add feedback about an order's buyer
* `PostOrdersOrderIDFeedbackSeller` - Add feedback about an order's seller
* `PostProductsSlugReviews` - Create a review for a product
* `PostSalesSaleIDListings` - Add listings to a sale
* `PostShopVacation` - Enable vacation mode. All listings will be unavailable until vacation mode is turned off.
* `PostWebhooksRegistrations` - Register a webhook
* `PutListingsSlug` - Update a listing
* `PutMyAccount` - Update account details
* `PutMyAddressesAddressID` - Update an existing address in your address book
* `PutMyConversationsID` - Mark a conversation read/unread
* `PutMyListingsSlugStateEnd` - End a listing
* `PutMyRefundRequestsSellingID` - Update a refund request for a sold order
* `PutMyWishlistID` - Add a listing to your wishlist
* `PutProductsReviewsID` - Update a review
* `PutShop` - Update your shop profile
* `PutWantsID` - Mark an item wanted. Returns 200 on success or 422 on failure.

<!-- End SDK Available Operations -->

### SDK Generated by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
