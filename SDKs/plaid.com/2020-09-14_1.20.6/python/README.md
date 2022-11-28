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
s.config_security(
    security=shared.Security(
        client_id=shared.SchemeClientID(
            api_key="YOUR_API_KEY_HERE",
        )
        plaid_version=shared.SchemePlaidVersion(
            api_key="YOUR_API_KEY_HERE",
        )
        secret=shared.SchemeSecret(
            api_key="YOUR_API_KEY_HERE",
        ),
    )
)
    
req = operations.AccountsBalanceGetRequest(
    request=shared.AccountsBalanceGetRequest(
        access_token="exercitationem",
        client_id="est",
        options=shared.AccountsBalanceGetRequestOptions(
            account_ids=[
                "quos",
                "voluptate",
                "nihil",
            ],
            min_last_updated_datetime="2008-07-30T06:26:29Z",
        ),
        secret="autem",
    ),
)
    
res = s.plaid.accounts_balance_get(req)

if res.accounts_get_response is not None:
    # handle response
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## SDK Available Operations

### plaid

* `accounts_balance_get` - Retrieve real-time balance data
* `accounts_get` - Retrieve accounts
* `application_get` - Retrieve information about a Plaid application
* `asset_report_audit_copy_create` - Create Asset Report Audit Copy
* `asset_report_audit_copy_get` - Retrieve an Asset Report Audit Copy
* `asset_report_audit_copy_remove` - Remove Asset Report Audit Copy
* `asset_report_create` - Create an Asset Report
* `asset_report_filter` - Filter Asset Report
* `asset_report_get` - Retrieve an Asset Report
* `asset_report_pdf_get` - Retrieve a PDF Asset Report
* `asset_report_refresh` - Refresh an Asset Report
* `asset_report_remove` - Delete an Asset Report
* `auth_get` - Retrieve auth data
* `bank_transfer_balance_get` - Get balance of your Bank Transfer account
* `bank_transfer_cancel` - Cancel a bank transfer
* `bank_transfer_create` - Create a bank transfer
* `bank_transfer_event_list` - List bank transfer events
* `bank_transfer_event_sync` - Sync bank transfer events
* `bank_transfer_get` - Retrieve a bank transfer
* `bank_transfer_list` - List bank transfers
* `bank_transfer_migrate_account` - Migrate account into Bank Transfers
* `categories_get` - Get Categories
* `create_payment_token` - Create payment token
* `deposit_switch_alt_create` - Create a deposit switch without using Plaid Exchange
* `deposit_switch_create` - Create a deposit switch
* `deposit_switch_get` - Retrieve a deposit switch
* `deposit_switch_token_create` - Create a deposit switch token
* `employers_search` - Search employer database
* `identity_get` - Retrieve identity data
* `income_verification_create` - Create an income verification instance
* `income_verification_documents_download` - Download the original documents used for income verification
* `income_verification_paystubs_get` - Retrieve information from the paystubs used for income verification
* `income_verification_refresh` - Refresh an income verification
* `income_verification_summary_get` - Retrieve a summary of information derived from income verification
* `institutions_get` - Get details of all supported institutions
* `institutions_get_by_id` - Get details of an institution
* `institutions_search` - Search institutions
* `investments_holdings_get` - Get Investment holdings
* `investments_transactions_get` - Get investment transactions
* `item_access_token_invalidate` - Invalidate access_token
* `item_application_list` - List a user’s connected applications
* `item_application_scopes_update` - Update the scopes of access for a particular application
* `item_create_public_token` - Create public token
* `item_get` - Retrieve an Item
* `item_import` - Import Item
* `item_public_token_exchange` - Exchange public token for an access token
* `item_remove` - Remove an Item
* `item_webhook_update` - Update Webhook URL
* `liabilities_get` - Retrieve Liabilities data
* `link_token_create` - Create Link Token
* `link_token_get` - Get Link Token
* `payment_initiation_payment_create` - Create a payment
* `payment_initiation_payment_get` - Get payment details
* `payment_initiation_payment_list` - List payments
* `payment_initiation_recipient_create` - Create payment recipient
* `payment_initiation_recipient_get` - Get payment recipient
* `payment_initiation_recipient_list` - List payment recipients
* `processor_apex_processor_token_create` - Create Apex bank account token
* `processor_auth_get` - Retrieve Auth data
* `processor_balance_get` - Retrieve Balance data
* `processor_bank_transfer_create` - Create a bank transfer as a processor
* `processor_identity_get` - Retrieve Identity data
* `processor_stripe_bank_account_token_create` - Create Stripe bank account token
* `processor_token_create` - Create processor token
* `sandbox_bank_transfer_fire_webhook` - Manually fire a Bank Transfer webhook
* `sandbox_bank_transfer_simulate` - Simulate a bank transfer event in Sandbox
* `sandbox_income_fire_webhook` - Manually fire an Income webhook
* `sandbox_item_fire_webhook` - Fire a test webhook
* `sandbox_item_reset_login` - Force a Sandbox Item into an error state
* `sandbox_item_set_verification_status` - Set verification status for Sandbox account
* `sandbox_oauth_select_accounts` - Save the selected accounts when connecting to the Platypus Oauth institution
* `sandbox_processor_token_create` - Create a test Item and processor token
* `sandbox_public_token_create` - Create a test Item
* `signal_decision_report` - Report whether you initiated an ACH transaction
* `signal_evaluate` - Evaluate a planned ACH transaction
* `signal_return_report` - Report a return for an ACH transaction
* `transactions_get` - Get transaction data
* `transactions_refresh` - Refresh transaction data
* `webhook_verification_key_get` - Get webhook verification key

<!-- End SDK Available Operations -->

### SDK Generated by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
