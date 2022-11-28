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
    opts := []sdk.SDKOption{
        sdk.WithSecurity(
            shared.Security{
                ClientID: shared.SchemeClientID{
                    APIKey: "YOUR_API_KEY_HERE",
                }
                PlaidVersion: shared.SchemePlaidVersion{
                    APIKey: "YOUR_API_KEY_HERE",
                }
                Secret: shared.SchemeSecret{
                    APIKey: "YOUR_API_KEY_HERE",
                },
            }
        ),
    }

    s := sdk.New(opts...)
    
    req := operations.AccountsBalanceGetRequest{
        Request: shared.AccountsBalanceGetRequest{
            AccessToken: "exercitationem",
            ClientID: "est",
            Options: &shared.AccountsBalanceGetRequestOptions{
                AccountIds: []string{
                    "quos",
                    "voluptate",
                    "nihil",
                },
                MinLastUpdatedDatetime: "2008-07-30T05:03:55Z",
            },
            Secret: "autem",
        },
    }
    
    res, err := s.Plaid.AccountsBalanceGet(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.AccountsGetResponse != nil {
        // handle response
    }
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## SDK Available Operations

### plaid

* `AccountsBalanceGet` - Retrieve real-time balance data
* `AccountsGet` - Retrieve accounts
* `ApplicationGet` - Retrieve information about a Plaid application
* `AssetReportAuditCopyCreate` - Create Asset Report Audit Copy
* `AssetReportAuditCopyGet` - Retrieve an Asset Report Audit Copy
* `AssetReportAuditCopyRemove` - Remove Asset Report Audit Copy
* `AssetReportCreate` - Create an Asset Report
* `AssetReportFilter` - Filter Asset Report
* `AssetReportGet` - Retrieve an Asset Report
* `AssetReportPdfGet` - Retrieve a PDF Asset Report
* `AssetReportRefresh` - Refresh an Asset Report
* `AssetReportRemove` - Delete an Asset Report
* `AuthGet` - Retrieve auth data
* `BankTransferBalanceGet` - Get balance of your Bank Transfer account
* `BankTransferCancel` - Cancel a bank transfer
* `BankTransferCreate` - Create a bank transfer
* `BankTransferEventList` - List bank transfer events
* `BankTransferEventSync` - Sync bank transfer events
* `BankTransferGet` - Retrieve a bank transfer
* `BankTransferList` - List bank transfers
* `BankTransferMigrateAccount` - Migrate account into Bank Transfers
* `CategoriesGet` - Get Categories
* `CreatePaymentToken` - Create payment token
* `DepositSwitchAltCreate` - Create a deposit switch without using Plaid Exchange
* `DepositSwitchCreate` - Create a deposit switch
* `DepositSwitchGet` - Retrieve a deposit switch
* `DepositSwitchTokenCreate` - Create a deposit switch token
* `EmployersSearch` - Search employer database
* `IdentityGet` - Retrieve identity data
* `IncomeVerificationCreate` - Create an income verification instance
* `IncomeVerificationDocumentsDownload` - Download the original documents used for income verification
* `IncomeVerificationPaystubsGet` - Retrieve information from the paystubs used for income verification
* `IncomeVerificationRefresh` - Refresh an income verification
* `IncomeVerificationSummaryGet` - Retrieve a summary of information derived from income verification
* `InstitutionsGet` - Get details of all supported institutions
* `InstitutionsGetByID` - Get details of an institution
* `InstitutionsSearch` - Search institutions
* `InvestmentsHoldingsGet` - Get Investment holdings
* `InvestmentsTransactionsGet` - Get investment transactions
* `ItemAccessTokenInvalidate` - Invalidate access_token
* `ItemApplicationList` - List a user’s connected applications
* `ItemApplicationScopesUpdate` - Update the scopes of access for a particular application
* `ItemCreatePublicToken` - Create public token
* `ItemGet` - Retrieve an Item
* `ItemImport` - Import Item
* `ItemPublicTokenExchange` - Exchange public token for an access token
* `ItemRemove` - Remove an Item
* `ItemWebhookUpdate` - Update Webhook URL
* `LiabilitiesGet` - Retrieve Liabilities data
* `LinkTokenCreate` - Create Link Token
* `LinkTokenGet` - Get Link Token
* `PaymentInitiationPaymentCreate` - Create a payment
* `PaymentInitiationPaymentGet` - Get payment details
* `PaymentInitiationPaymentList` - List payments
* `PaymentInitiationRecipientCreate` - Create payment recipient
* `PaymentInitiationRecipientGet` - Get payment recipient
* `PaymentInitiationRecipientList` - List payment recipients
* `ProcessorApexProcessorTokenCreate` - Create Apex bank account token
* `ProcessorAuthGet` - Retrieve Auth data
* `ProcessorBalanceGet` - Retrieve Balance data
* `ProcessorBankTransferCreate` - Create a bank transfer as a processor
* `ProcessorIdentityGet` - Retrieve Identity data
* `ProcessorStripeBankAccountTokenCreate` - Create Stripe bank account token
* `ProcessorTokenCreate` - Create processor token
* `SandboxBankTransferFireWebhook` - Manually fire a Bank Transfer webhook
* `SandboxBankTransferSimulate` - Simulate a bank transfer event in Sandbox
* `SandboxIncomeFireWebhook` - Manually fire an Income webhook
* `SandboxItemFireWebhook` - Fire a test webhook
* `SandboxItemResetLogin` - Force a Sandbox Item into an error state
* `SandboxItemSetVerificationStatus` - Set verification status for Sandbox account
* `SandboxOauthSelectAccounts` - Save the selected accounts when connecting to the Platypus Oauth institution
* `SandboxProcessorTokenCreate` - Create a test Item and processor token
* `SandboxPublicTokenCreate` - Create a test Item
* `SignalDecisionReport` - Report whether you initiated an ACH transaction
* `SignalEvaluate` - Evaluate a planned ACH transaction
* `SignalReturnReport` - Report a return for an ACH transaction
* `TransactionsGet` - Get transaction data
* `TransactionsRefresh` - Refresh transaction data
* `WebhookVerificationKeyGet` - Get webhook verification key

<!-- End SDK Available Operations -->

### SDK Generated by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
