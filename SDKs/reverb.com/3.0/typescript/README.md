# openapi

<!-- Start SDK Installation -->
## SDK Installation

### NPM

```bash
npm add openapi
```

### Yarn

```bash
yarn add openapi
```
<!-- End SDK Installation -->

<!-- Start SDK Example Usage -->
## SDK Example Usage

```typescript
import { SDK, WithSecurity} from "openapi";
import { DeleteListingsListingIdImagesImageIdRequest, DeleteListingsListingIdImagesImageIdResponse } from "openapi/src/sdk/models/operations";
import { AxiosError } from "axios";


const sdk = new SDK();
    
const req: DeleteListingsListingIdImagesImageIdRequest = {
  security: {
    oauth2: {
      authorization: "Bearer YOUR_ACCESS_TOKEN_HERE",
    },
  },
  pathParams: {
    imageId: "qui",
    listingId: "in",
  },
};

sdk.sdk.deleteListingsListingIdImagesImageId(req).then((res: DeleteListingsListingIdImagesImageIdResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## SDK Available Operations

### SDK SDK

* `deleteListingsListingIdImagesImageId` - Delete an image from a listing
* `deleteListingsSlug` - Delete a draft listing. Cannot be used on non-drafts.
* `deleteMyAddressesAddressId` - Delete an existing address in your address book
* `deleteMyCuratedSetProductProductId`
* `deleteMyFollowsBrandsSlug` - Unfollow a brand
* `deleteMyFollowsCategoriesCategorySubcategory` - Unfollow a subcategory
* `deleteMyFollowsCategoriesIdentifier` - Unfollow a category
* `deleteMyFollowsCollectionsSlug` - Unfollow a collection
* `deleteMyFollowsFollowId` - Delete a follow
* `deleteMyFollowsFollowIdAlert`
* `deleteMyFollowsHandpickedSlug` - Unfollow a handpicked collection
* `deleteMyFollowsShopsSlug` - Unfollow a shop
* `deleteMyWishlistId` - Remove a listing from your wishlist
* `deleteSalesSaleIdListings` - Remove a listing from a sale
* `deleteShopVacation` - Disable vacation mode. All listings will be re-enabled.
* `deleteWantsId` - Unmark an item wanted.
* `deleteWebhooksRegistrationsId` - Remove a webhook
* `getArticles`
* `getArticlesCategories` - List of all article categories
* `getCategories` - List of supported product categories
* `getCategoriesFlat`
* `getCategoriesProductTypeCategory` - Get subcategory details
* `getCategoriesTaxonomy` - Full taxonomy tree of categories including middle categories
* `getCategoriesUuid` - Get category details
* `getComparisonShoppingPages` - Returns a set of comparison shopping pages based on the current params
* `getComparisonShoppingPagesFind` - Show comparison shopping page
* `getComparisonShoppingPagesId`
* `getComparisonShoppingPagesIdListings` - Return new or used listings for a comparison shopping page
* `getComparisonShoppingPagesIdReviews` - View reviews of a comparison shopping page
* `getCountries` - Retrieve a list of country codes with corresponding subregions
* `getCsps` - Returns a set of comparison shopping pages based on the current params
* `getCspsCategories`
* `getCspsFind` - Show comparison shopping page
* `getCspsId`
* `getCuratedSetsSlug`
* `getCurrenciesDisplay` - List of supported display currencies for browsing listings
* `getCurrenciesListing` - List of supported listing currencies for shops
* `getFeedbackFeedbackId` - Feedback details
* `getHandpickedSlug` - Get results from a handpicked collection
* `getListingConditions` - List of supported product conditions
* `getListings` - Default search of listings includes only used & handmade. Add a filter to view all listings or use the /listings/all endpoint.
* `getListingsAll` - All listings including used, handmade, and brand new
* `getListingsFacetsSellerLocation` - Individual facets
* `getListingsIdNegotiation` - Returns the latest negotiation for the requesting user given a listing id
* `getListingsListingIdBump` - View available bump tiers and stats for a listing
* `getListingsListingIdImages` - View the images associated with a particular listing
* `getListingsListingIdSales` - See all sales that include a listing.
* `getListingsSlug` - Listing details
* `getListingsSlugEdit` - Edit listing.
* `getListingsSlugReviews` - View reviews of a listing
* `getListingsSlugSimilarListings` - Listing details
* `getMyAccount` - Get account details
* `getMyAddresses` - See all addresses in your address book
* `getMyConversations` - Get a list of your conversations
* `getMyConversationsId` - Display conversation details with messages in natural time order (oldest to newest)
* `getMyCounts` - Get your actionable status counts
* `getMyFeed` - Get listings from your feed
* `getMyFeedCustomize` - get your feed customization options
* `getMyFeedGrid` - get your feed
* `getMyFeedbackReceived` - List of received feedback
* `getMyFeedbackSent` - List of sent feedback
* `getMyFollows` - See what the user is following
* `getMyFollowsArticles` - Returns a user's ArticleCategoryFollows
* `getMyFollowsBrandsSlug` - Follow status for a brand
* `getMyFollowsCategoriesCategorySubcategory` - Follow status for a subcategory
* `getMyFollowsCategoriesIdentifier` - Follow status for a category
* `getMyFollowsCollectionsSlug` - Follow status for a collection
* `getMyFollowsHandpickedSlug` - Follow status for a handpicked collection
* `getMyFollowsSearch` - Follow status for a search
* `getMyFollowsShopsSlug` - Follow status for a shop
* `getMyListings` - Retrieve a list of live listings for the seller. To search all listings specify state=all
* `getMyListingsDrafts` - Retrieve a list your draft listings
* `getMyListingsNegotiations` - Get a list of active negotiations as a seller
* `getMyLists` - Get a list of your lists (wishlist, watch list, etc)
* `getMyNegotiationsBuying` - Get a list of active negotiations as a buyer
* `getMyNegotiationsId` - Get offer details
* `getMyOrdersAwaitingFeedback` - List of orders that need feedback
* `getMyOrdersBuyingAll` - Returns all orders, newest first.
* `getMyOrdersBuyingByUuidUuid`
* `getMyOrdersBuyingId` - Returns order details for a buyer
* `getMyOrdersBuyingUnpaid` - Returns unpaid orders, newest first.
* `getMyOrdersSellingAll` - Get all seller orders, newest first.
* `getMyOrdersSellingAwaitingShipment` - Get unpaid seller orders, newest first.
* `getMyOrdersSellingBuyerHistoryBuyerId` - See previous orders from buyer
* `getMyOrdersSellingByUuidUuid`
* `getMyOrdersSellingId` - Returns order details for a seller
* `getMyOrdersSellingUnpaid` - Get unpaid seller orders, newest first.
* `getMyPaymentsSelling` - Get payments
* `getMyPaymentsSellingId` - Get payment
* `getMyPayouts` - Get a list of payouts
* `getMyPayoutsIdLineItems` - Read the line items of a payout
* `getMyRefundRequestsSelling` - Get a list of refund requests as a seller
* `getMyViewedListings` - Get a list of your recently viewed listings.
* `getMyWishlist` - Get a list of wishlisted items
* `getOrdersOrderIdFeedbackBuyer` - Feedback details for an order's buyer
* `getOrdersOrderIdFeedbackSeller` - Feedback details for an order's seller
* `getPaymentMethods` - Get list of payment methods
* `getPriceguideIdTransactionsSummary` - Get a summary of transactions for a given price guide
* `getProductsReviewsId` - View a review
* `getProductsSlugReviews` - View reviews of a comparison shopping page
* `getSalesReverb` - View upcoming and live Reverb official sales.
* `getSalesSeller` - View your created sales.
* `getSalesSlug`
* `getShippingProviders` - List of supported shipping providers
* `getShippingRegions`
* `getShop` - Get your own shop details
* `getShopListingConditions` - List of supported product conditions
* `getShopPaymentMethods` - Get accepted payment methods
* `getShopVacation` - Returns shop vacation status
* `getShopsIdStorefronts` - Get storefront details on a shop.
* `getShopsShopIdShippingProfiles` - List of shipping profiles for your shop
* `getShopsSlug` - Get details on a shop.
* `getShopsSlugFeedback` - Get seller's feedback
* `getShopsSlugFeedbackBuyer` - Get seller's feedback as a buyer
* `getShopsSlugFeedbackSeller` - Get seller's feedback as a seller
* `getWants` - A list of wanted items by the user
* `getWebhooksRegistrations` - Get webhook registrations
* `getWebhooksRegistrationsId` - Get details of a webhook registration
* `postConversationsConversationIdOffer` - Make an offer to the other participant in the conversation
* `postConversationsIdOffer` - Make an offer to the other participant in the conversation
* `postListings` - Create a listing
* `postListingsIdOffer` - Make an offer to the seller of a listing
* `postListingsListingIdBumpBudgetType` - Bump a listing
* `postListingsListingIdConversations` - Start a conversation with a seller
* `postListingsSlugFlag` - Flag a listing for inappropriate content or fraud
* `postListingsSlugReviews` - Create a review for a listing
* `postMyAddresses` - Create a new address in your address book
* `postMyConversations` - Start a conversation
* `postMyConversationsConversationIdMessages` - Send a message
* `postMyCuratedSetProductProductId`
* `postMyFollowsArticles` - Set a user's ArticleCategoryFollows
* `postMyFollowsBrandsSlug` - Follow a brand
* `postMyFollowsCategoriesCategorySubcategory` - Follow a subcategory
* `postMyFollowsCategoriesIdentifier` - Follow a category
* `postMyFollowsCategoriesUuid` - Follow a category
* `postMyFollowsCollectionsSlug` - Follow a collection
* `postMyFollowsFollowIdAlert`
* `postMyFollowsHandpickedSlug` - Follow a handpicked collection
* `postMyFollowsSearch` - Follow a search
* `postMyFollowsShopsSlug` - Follow a shop
* `postMyNegotiationsIdAccept` - Accept an offer
* `postMyNegotiationsIdCounter` - Counter an offer
* `postMyNegotiationsIdDecline` - Decline an offer
* `postMyOrdersBuyingIdMarkReceived` - Marks an order as received by the buyer
* `postMyOrdersSellingIdMarkPickedUp` - Marks an order as picked up
* `postMyOrdersSellingIdShip` - Marks an order as shipped
* `postMyOrdersSellingOrderIdRefundRequests` - Initiate a refund for a sold order
* `postOrdersOrderIdFeedbackBuyer` - Add feedback about an order's buyer
* `postOrdersOrderIdFeedbackSeller` - Add feedback about an order's seller
* `postProductsSlugReviews` - Create a review for a product
* `postSalesSaleIdListings` - Add listings to a sale
* `postShopVacation` - Enable vacation mode. All listings will be unavailable until vacation mode is turned off.
* `postWebhooksRegistrations` - Register a webhook
* `putListingsSlug` - Update a listing
* `putMyAccount` - Update account details
* `putMyAddressesAddressId` - Update an existing address in your address book
* `putMyConversationsId` - Mark a conversation read/unread
* `putMyListingsSlugStateEnd` - End a listing
* `putMyRefundRequestsSellingId` - Update a refund request for a sold order
* `putMyWishlistId` - Add a listing to your wishlist
* `putProductsReviewsId` - Update a review
* `putShop` - Update your shop profile
* `putWantsId` - Mark an item wanted. Returns 200 on success or 422 on failure.

<!-- End SDK Available Operations -->

### SDK Generated by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
