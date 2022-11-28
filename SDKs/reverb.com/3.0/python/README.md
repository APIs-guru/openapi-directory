# openapi

<!-- Start SDK Installation -->
## SDK Installation

```bash
pip install openapi
```
<!-- End SDK Installation -->

<!-- Start SDK Example Usage -->
## SDK Example Usage

```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK()
    
req = operations.DeleteListingsListingIDImagesImageIDRequest(
    security=operations.DeleteListingsListingIDImagesImageIDSecurity(
        oauth2=shared.SchemeOauth2(
            authorization="Bearer YOUR_ACCESS_TOKEN_HERE",
        ),
    ),
    path_params=operations.DeleteListingsListingIDImagesImageIDPathParams(
        image_id="qui",
        listing_id="in",
    ),
)
    
res = s.sdk.delete_listings_listing_id_images_image_id_(req)

if res.status_code == 200:
    # handle response
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## SDK Available Operations

### SDK SDK

* `delete_listings_listing_id_images_image_id_` - Delete an image from a listing
* `delete_listings_slug_` - Delete a draft listing. Cannot be used on non-drafts.
* `delete_my_addresses_address_id_` - Delete an existing address in your address book
* `delete_my_curated_set_product_product_id_`
* `delete_my_follows_brands_slug_` - Unfollow a brand
* `delete_my_follows_categories_category_subcategory_` - Unfollow a subcategory
* `delete_my_follows_categories_identifier_` - Unfollow a category
* `delete_my_follows_collections_slug_` - Unfollow a collection
* `delete_my_follows_follow_id_` - Delete a follow
* `delete_my_follows_follow_id_alert`
* `delete_my_follows_handpicked_slug_` - Unfollow a handpicked collection
* `delete_my_follows_shops_slug_` - Unfollow a shop
* `delete_my_wishlist_id_` - Remove a listing from your wishlist
* `delete_sales_sale_id_listings` - Remove a listing from a sale
* `delete_shop_vacation` - Disable vacation mode. All listings will be re-enabled.
* `delete_wants_id_` - Unmark an item wanted.
* `delete_webhooks_registrations_id_` - Remove a webhook
* `get_articles`
* `get_articles_categories` - List of all article categories
* `get_categories` - List of supported product categories
* `get_categories_flat`
* `get_categories_product_type_category_` - Get subcategory details
* `get_categories_taxonomy` - Full taxonomy tree of categories including middle categories
* `get_categories_uuid_` - Get category details
* `get_comparison_shopping_pages` - Returns a set of comparison shopping pages based on the current params
* `get_comparison_shopping_pages_find` - Show comparison shopping page
* `get_comparison_shopping_pages_id_`
* `get_comparison_shopping_pages_id_listings` - Return new or used listings for a comparison shopping page
* `get_comparison_shopping_pages_id_reviews` - View reviews of a comparison shopping page
* `get_countries` - Retrieve a list of country codes with corresponding subregions
* `get_csps` - Returns a set of comparison shopping pages based on the current params
* `get_csps_categories`
* `get_csps_find` - Show comparison shopping page
* `get_csps_id_`
* `get_curated_sets_slug_`
* `get_currencies_display` - List of supported display currencies for browsing listings
* `get_currencies_listing` - List of supported listing currencies for shops
* `get_feedback_feedback_id_` - Feedback details
* `get_handpicked_slug_` - Get results from a handpicked collection
* `get_listing_conditions` - List of supported product conditions
* `get_listings` - Default search of listings includes only used & handmade. Add a filter to view all listings or use the /listings/all endpoint.
* `get_listings_all` - All listings including used, handmade, and brand new
* `get_listings_facets_seller_location` - Individual facets
* `get_listings_id_negotiation` - Returns the latest negotiation for the requesting user given a listing id
* `get_listings_listing_id_bump` - View available bump tiers and stats for a listing
* `get_listings_listing_id_images` - View the images associated with a particular listing
* `get_listings_listing_id_sales` - See all sales that include a listing.
* `get_listings_slug_` - Listing details
* `get_listings_slug_edit` - Edit listing.
* `get_listings_slug_reviews` - View reviews of a listing
* `get_listings_slug_similar_listings` - Listing details
* `get_my_account` - Get account details
* `get_my_addresses` - See all addresses in your address book
* `get_my_conversations` - Get a list of your conversations
* `get_my_conversations_id_` - Display conversation details with messages in natural time order (oldest to newest)
* `get_my_counts` - Get your actionable status counts
* `get_my_feed` - Get listings from your feed
* `get_my_feed_customize` - get your feed customization options
* `get_my_feed_grid` - get your feed
* `get_my_feedback_received` - List of received feedback
* `get_my_feedback_sent` - List of sent feedback
* `get_my_follows` - See what the user is following
* `get_my_follows_articles` - Returns a user's ArticleCategoryFollows
* `get_my_follows_brands_slug_` - Follow status for a brand
* `get_my_follows_categories_category_subcategory_` - Follow status for a subcategory
* `get_my_follows_categories_identifier_` - Follow status for a category
* `get_my_follows_collections_slug_` - Follow status for a collection
* `get_my_follows_handpicked_slug_` - Follow status for a handpicked collection
* `get_my_follows_search` - Follow status for a search
* `get_my_follows_shops_slug_` - Follow status for a shop
* `get_my_listings` - Retrieve a list of live listings for the seller. To search all listings specify state=all
* `get_my_listings_drafts` - Retrieve a list your draft listings
* `get_my_listings_negotiations` - Get a list of active negotiations as a seller
* `get_my_lists` - Get a list of your lists (wishlist, watch list, etc)
* `get_my_negotiations_buying` - Get a list of active negotiations as a buyer
* `get_my_negotiations_id_` - Get offer details
* `get_my_orders_awaiting_feedback` - List of orders that need feedback
* `get_my_orders_buying_all` - Returns all orders, newest first.
* `get_my_orders_buying_by_uuid_uuid_`
* `get_my_orders_buying_id_` - Returns order details for a buyer
* `get_my_orders_buying_unpaid` - Returns unpaid orders, newest first.
* `get_my_orders_selling_all` - Get all seller orders, newest first.
* `get_my_orders_selling_awaiting_shipment` - Get unpaid seller orders, newest first.
* `get_my_orders_selling_buyer_history_buyer_id_` - See previous orders from buyer
* `get_my_orders_selling_by_uuid_uuid_`
* `get_my_orders_selling_id_` - Returns order details for a seller
* `get_my_orders_selling_unpaid` - Get unpaid seller orders, newest first.
* `get_my_payments_selling` - Get payments
* `get_my_payments_selling_id_` - Get payment
* `get_my_payouts` - Get a list of payouts
* `get_my_payouts_id_line_items` - Read the line items of a payout
* `get_my_refund_requests_selling` - Get a list of refund requests as a seller
* `get_my_viewed_listings` - Get a list of your recently viewed listings.
* `get_my_wishlist` - Get a list of wishlisted items
* `get_orders_order_id_feedback_buyer` - Feedback details for an order's buyer
* `get_orders_order_id_feedback_seller` - Feedback details for an order's seller
* `get_payment_methods` - Get list of payment methods
* `get_priceguide_id_transactions_summary` - Get a summary of transactions for a given price guide
* `get_products_reviews_id_` - View a review
* `get_products_slug_reviews` - View reviews of a comparison shopping page
* `get_sales_reverb` - View upcoming and live Reverb official sales.
* `get_sales_seller` - View your created sales.
* `get_sales_slug_`
* `get_shipping_providers` - List of supported shipping providers
* `get_shipping_regions`
* `get_shop` - Get your own shop details
* `get_shop_listing_conditions` - List of supported product conditions
* `get_shop_payment_methods` - Get accepted payment methods
* `get_shop_vacation` - Returns shop vacation status
* `get_shops_id_storefronts` - Get storefront details on a shop.
* `get_shops_shop_id_shipping_profiles` - List of shipping profiles for your shop
* `get_shops_slug_` - Get details on a shop.
* `get_shops_slug_feedback` - Get seller's feedback
* `get_shops_slug_feedback_buyer` - Get seller's feedback as a buyer
* `get_shops_slug_feedback_seller` - Get seller's feedback as a seller
* `get_wants` - A list of wanted items by the user
* `get_webhooks_registrations` - Get webhook registrations
* `get_webhooks_registrations_id_` - Get details of a webhook registration
* `post_conversations_conversation_id_offer` - Make an offer to the other participant in the conversation
* `post_conversations_id_offer` - Make an offer to the other participant in the conversation
* `post_listings` - Create a listing
* `post_listings_id_offer` - Make an offer to the seller of a listing
* `post_listings_listing_id_bump_budget_type_` - Bump a listing
* `post_listings_listing_id_conversations` - Start a conversation with a seller
* `post_listings_slug_flag` - Flag a listing for inappropriate content or fraud
* `post_listings_slug_reviews` - Create a review for a listing
* `post_my_addresses` - Create a new address in your address book
* `post_my_conversations` - Start a conversation
* `post_my_conversations_conversation_id_messages` - Send a message
* `post_my_curated_set_product_product_id_`
* `post_my_follows_articles` - Set a user's ArticleCategoryFollows
* `post_my_follows_brands_slug_` - Follow a brand
* `post_my_follows_categories_category_subcategory_` - Follow a subcategory
* `post_my_follows_categories_identifier_` - Follow a category
* `post_my_follows_categories_uuid_` - Follow a category
* `post_my_follows_collections_slug_` - Follow a collection
* `post_my_follows_follow_id_alert`
* `post_my_follows_handpicked_slug_` - Follow a handpicked collection
* `post_my_follows_search` - Follow a search
* `post_my_follows_shops_slug_` - Follow a shop
* `post_my_negotiations_id_accept` - Accept an offer
* `post_my_negotiations_id_counter` - Counter an offer
* `post_my_negotiations_id_decline` - Decline an offer
* `post_my_orders_buying_id_mark_received` - Marks an order as received by the buyer
* `post_my_orders_selling_id_mark_picked_up` - Marks an order as picked up
* `post_my_orders_selling_id_ship` - Marks an order as shipped
* `post_my_orders_selling_order_id_refund_requests` - Initiate a refund for a sold order
* `post_orders_order_id_feedback_buyer` - Add feedback about an order's buyer
* `post_orders_order_id_feedback_seller` - Add feedback about an order's seller
* `post_products_slug_reviews` - Create a review for a product
* `post_sales_sale_id_listings` - Add listings to a sale
* `post_shop_vacation` - Enable vacation mode. All listings will be unavailable until vacation mode is turned off.
* `post_webhooks_registrations` - Register a webhook
* `put_listings_slug_` - Update a listing
* `put_my_account` - Update account details
* `put_my_addresses_address_id_` - Update an existing address in your address book
* `put_my_conversations_id_` - Mark a conversation read/unread
* `put_my_listings_slug_state_end` - End a listing
* `put_my_refund_requests_selling_id_` - Update a refund request for a sold order
* `put_my_wishlist_id_` - Add a listing to your wishlist
* `put_products_reviews_id_` - Update a review
* `put_shop` - Update your shop profile
* `put_wants_id_` - Mark an item wanted. Returns 200 on success or 422 on failure.

<!-- End SDK Available Operations -->

### SDK Generated by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
