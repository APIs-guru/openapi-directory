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
import { PostV3PayeesPayeeIdRemoteIdUpdateRequest, PostV3PayeesPayeeIdRemoteIdUpdateResponse } from "openapi/src/sdk/models/operations";
import { AxiosError } from "axios";

const sdk = new SDK(WithSecurity(
  security: {
    oAuth2: {
      authorization: "Bearer YOUR_ACCESS_TOKEN_HERE",
    },
  }
));
    
const req: PostV3PayeesPayeeIdRemoteIdUpdateRequest = {
  pathParams: {
    payeeId: "unde",
  },
  request: {
    payorId: "occaecati",
    remoteId: "laborum",
  },
};

sdk.sdk.postV3PayeesPayeeIdRemoteIdUpdate(req).then((res: PostV3PayeesPayeeIdRemoteIdUpdateResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## SDK Available Operations

### SDK SDK

* `postV3PayeesPayeeIdRemoteIdUpdate` - Update Payee Remote Id
* `postV4PayeesPayeeIdRemoteIdUpdate` - Update Payee Remote Id
* `createAchFundingRequest` - Create Funding Request
* `createFundingAccountV2` - Create Funding Account
* `createFundingRequest` - Create Funding Request
* `createFundingRequestV3` - Create Funding Request
* `createPayorLinks` - Create a Payor Link
* `createQuoteForPayoutV3` - Create a quote for the payout
* `createWebhookV1` - Create Webhook
* `deletePayeeByIdV3` - Delete Payee by Id
* `deletePayeeByIdV4` - Delete Payee by Id
* `deleteSourceAccountV3` - Delete a source account by ID
* `deleteUserByIdV2` - Delete a User
* `disableUserV2` - Disable a User
* `enableUserV2` - Enable a User
* `exportTransactionsCsvv3` - V3 Export Transactions
* `exportTransactionsCsvv4` - Export Transactions
* `getFundingAccount` - Get Funding Account
* `getFundingAccountV2` - Get Funding Account
* `getFundingAccounts` - Get Funding Accounts
* `getFundingAccountsV2` - Get Funding Accounts
* `getFundingsV1` - V1 Get Fundings for Payor
* `getFundingsV4` - Get Fundings for Payor
* `getPayeeByIdV3` - Get Payee by Id
* `getPayeeByIdV4` - Get Payee by Id
* `getPayeesInvitationStatusV3` - Get Payee Invitation Status
* `getPayeesInvitationStatusV4` - Get Payee Invitation Status
* `getPaymentDetailsV3` - V3 Get Payment
* `getPaymentDetailsV4` - Get Payment
* `getPaymentsForPayoutV3` - Retrieve payments for a payout
* `getPaymentsForPayoutV4` - Get Payments for Payout
* `getPaymentsForPayoutPaV3` - V3 Get Payments for Payout
* `getPayorById` - Get Payor
* `getPayorByIdV2` - Get Payor
* `getPayoutStatsV1` - V1 Get Payout Statistics
* `getPayoutStatsV4` - Get Payout Statistics
* `getPayoutSummaryV3` - Get Payout Summary
* `getPayoutsForPayorV3` - V3 Get Payouts for Payor
* `getPayoutsForPayorV4` - Get Payouts for Payor
* `getSelf` - Get Self
* `getSourceAccount` - Get details about given source account.
* `getSourceAccountV2` - Get details about given source account.
* `getSourceAccountV3` - Get details about given source account.
* `getSourceAccounts` - Get list of source accounts
* `getSourceAccountsV2` - Get list of source accounts
* `getSourceAccountsV3` - Get list of source accounts
* `getUserByIdV2` - Get User
* `getWebhookV1` - Get details about the given webhook.
* `instructPayoutV3` - Instruct Payout
* `inviteUser` - Invite a User
* `listFundingAuditDeltas` - Get Funding Audit Delta
* `listPayeeChangesV3` - List Payee Changes
* `listPayeeChangesV4` - List Payee Changes
* `listPayeesV3` - List Payees
* `listPayeesV4` - List Payees
* `listPaymentChanges` - V1 List Payment Changes
* `listPaymentChangesV4` - List Payment Changes
* `listPaymentChannelRulesV1` - List Payment Channel Country Rules
* `listPaymentsAuditV3` - V3 Get List of Payments
* `listPaymentsAuditV4` - Get List of Payments
* `listSupportedCountriesV1` - List Supported Countries
* `listSupportedCountriesV2` - List Supported Countries
* `listSupportedCurrenciesV2` - List Supported Currencies
* `listUsers` - List Users
* `listWebhooksV1` - List the details about the webhooks for the given payor.
* `logout` - Logout
* `payeeDetailsUpdateV3` - Update Payee Details
* `payeeDetailsUpdateV4` - Update Payee Details
* `payorAddPayorLogo` - Add Logo
* `payorCreateApiKeyRequest` - Create API Key
* `payorCreateApplicationRequest` - Create Application
* `payorEmailOptOut` - Reminder Email Opt-Out
* `payorGetBranding` - Get Branding
* `payorLinks` - List Payor Links
* `pingWebhookV1`
* `queryBatchStatusV3` - Query Batch Status
* `queryBatchStatusV4` - Query Batch Status
* `registerSms` - Register SMS Number
* `resendPayeeInviteV3` - Resend Payee Invite
* `resendPayeeInviteV4` - Resend Payee Invite
* `resendToken` - Resend a token
* `resetPassword` - Reset password
* `roleUpdate` - Update User Role
* `setNotificationsRequest` - Set notifications
* `submitPayoutV3` - Submit Payout
* `transferFunds` - Transfer Funds between source accounts
* `transferFundsV3` - Transfer Funds between source accounts
* `unlockUserV2` - Unlock a User
* `unregisterMfa` - Unregister MFA for the user
* `unregisterMfaForSelf` - Unregister MFA for Self
* `updatePasswordSelf` - Update Password for self
* `updateWebhookV1` - Update Webhook
* `userDetailsUpdate` - Update User Details
* `userDetailsUpdateForSelf` - Update User Details for self
* `v3CreatePayee` - Initiate Payee Creation
* `v4CreatePayee` - Initiate Payee Creation
* `validateAccessToken` - validate
* `validatePasswordSelf` - Validate the proposed password
* `veloAuth` - Authentication endpoint
* `withdrawPayment` - Withdraw a Payment
* `withdrawPayoutV3` - Withdraw Payout

<!-- End SDK Available Operations -->

### SDK Generated by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
