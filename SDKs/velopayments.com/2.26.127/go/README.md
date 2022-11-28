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
                OAuth2: shared.SchemeOAuth2{
                    Authorization: "Bearer YOUR_ACCESS_TOKEN_HERE",
                },
            }
        ),
    }

    s := sdk.New(opts...)
    
    req := operations.PostV3PayeesPayeeIDRemoteIDUpdateRequest{
        PathParams: operations.PostV3PayeesPayeeIDRemoteIDUpdatePathParams{
            PayeeID: "unde",
        },
        Request: shared.UpdateRemoteIDRequest{
            PayorID: "occaecati",
            RemoteID: "laborum",
        },
    }
    
    res, err := s.Sdk.PostV3PayeesPayeeIDRemoteIDUpdate(ctx, req)
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

* `PostV3PayeesPayeeIDRemoteIDUpdate` - Update Payee Remote Id
* `PostV4PayeesPayeeIDRemoteIDUpdate` - Update Payee Remote Id
* `CreateAchFundingRequest` - Create Funding Request
* `CreateFundingAccountV2` - Create Funding Account
* `CreateFundingRequest` - Create Funding Request
* `CreateFundingRequestV3` - Create Funding Request
* `CreatePayorLinks` - Create a Payor Link
* `CreateQuoteForPayoutV3` - Create a quote for the payout
* `CreateWebhookV1` - Create Webhook
* `DeletePayeeByIDV3` - Delete Payee by Id
* `DeletePayeeByIDV4` - Delete Payee by Id
* `DeleteSourceAccountV3` - Delete a source account by ID
* `DeleteUserByIDV2` - Delete a User
* `DisableUserV2` - Disable a User
* `EnableUserV2` - Enable a User
* `ExportTransactionsCsvv3` - V3 Export Transactions
* `ExportTransactionsCsvv4` - Export Transactions
* `GetFundingAccount` - Get Funding Account
* `GetFundingAccountV2` - Get Funding Account
* `GetFundingAccounts` - Get Funding Accounts
* `GetFundingAccountsV2` - Get Funding Accounts
* `GetFundingsV1` - V1 Get Fundings for Payor
* `GetFundingsV4` - Get Fundings for Payor
* `GetPayeeByIDV3` - Get Payee by Id
* `GetPayeeByIDV4` - Get Payee by Id
* `GetPayeesInvitationStatusV3` - Get Payee Invitation Status
* `GetPayeesInvitationStatusV4` - Get Payee Invitation Status
* `GetPaymentDetailsV3` - V3 Get Payment
* `GetPaymentDetailsV4` - Get Payment
* `GetPaymentsForPayoutV3` - Retrieve payments for a payout
* `GetPaymentsForPayoutV4` - Get Payments for Payout
* `GetPaymentsForPayoutPaV3` - V3 Get Payments for Payout
* `GetPayorByID` - Get Payor
* `GetPayorByIDV2` - Get Payor
* `GetPayoutStatsV1` - V1 Get Payout Statistics
* `GetPayoutStatsV4` - Get Payout Statistics
* `GetPayoutSummaryV3` - Get Payout Summary
* `GetPayoutsForPayorV3` - V3 Get Payouts for Payor
* `GetPayoutsForPayorV4` - Get Payouts for Payor
* `GetSelf` - Get Self
* `GetSourceAccount` - Get details about given source account.
* `GetSourceAccountV2` - Get details about given source account.
* `GetSourceAccountV3` - Get details about given source account.
* `GetSourceAccounts` - Get list of source accounts
* `GetSourceAccountsV2` - Get list of source accounts
* `GetSourceAccountsV3` - Get list of source accounts
* `GetUserByIDV2` - Get User
* `GetWebhookV1` - Get details about the given webhook.
* `InstructPayoutV3` - Instruct Payout
* `InviteUser` - Invite a User
* `ListFundingAuditDeltas` - Get Funding Audit Delta
* `ListPayeeChangesV3` - List Payee Changes
* `ListPayeeChangesV4` - List Payee Changes
* `ListPayeesV3` - List Payees
* `ListPayeesV4` - List Payees
* `ListPaymentChanges` - V1 List Payment Changes
* `ListPaymentChangesV4` - List Payment Changes
* `ListPaymentChannelRulesV1` - List Payment Channel Country Rules
* `ListPaymentsAuditV3` - V3 Get List of Payments
* `ListPaymentsAuditV4` - Get List of Payments
* `ListSupportedCountriesV1` - List Supported Countries
* `ListSupportedCountriesV2` - List Supported Countries
* `ListSupportedCurrenciesV2` - List Supported Currencies
* `ListUsers` - List Users
* `ListWebhooksV1` - List the details about the webhooks for the given payor.
* `Logout` - Logout
* `PayeeDetailsUpdateV3` - Update Payee Details
* `PayeeDetailsUpdateV4` - Update Payee Details
* `PayorAddPayorLogo` - Add Logo
* `PayorCreateAPIKeyRequest` - Create API Key
* `PayorCreateApplicationRequest` - Create Application
* `PayorEmailOptOut` - Reminder Email Opt-Out
* `PayorGetBranding` - Get Branding
* `PayorLinks` - List Payor Links
* `PingWebhookV1`
* `QueryBatchStatusV3` - Query Batch Status
* `QueryBatchStatusV4` - Query Batch Status
* `RegisterSms` - Register SMS Number
* `ResendPayeeInviteV3` - Resend Payee Invite
* `ResendPayeeInviteV4` - Resend Payee Invite
* `ResendToken` - Resend a token
* `ResetPassword` - Reset password
* `RoleUpdate` - Update User Role
* `SetNotificationsRequest` - Set notifications
* `SubmitPayoutV3` - Submit Payout
* `TransferFunds` - Transfer Funds between source accounts
* `TransferFundsV3` - Transfer Funds between source accounts
* `UnlockUserV2` - Unlock a User
* `UnregisterMfa` - Unregister MFA for the user
* `UnregisterMfaForSelf` - Unregister MFA for Self
* `UpdatePasswordSelf` - Update Password for self
* `UpdateWebhookV1` - Update Webhook
* `UserDetailsUpdate` - Update User Details
* `UserDetailsUpdateForSelf` - Update User Details for self
* `V3CreatePayee` - Initiate Payee Creation
* `V4CreatePayee` - Initiate Payee Creation
* `ValidateAccessToken` - validate
* `ValidatePasswordSelf` - Validate the proposed password
* `VeloAuth` - Authentication endpoint
* `WithdrawPayment` - Withdraw a Payment
* `WithdrawPayoutV3` - Withdraw Payout

<!-- End SDK Available Operations -->

### SDK Generated by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
