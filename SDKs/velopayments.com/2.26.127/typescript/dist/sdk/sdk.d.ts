import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
import { Security } from "./models/shared";
type OptsFunc = (sdk: SDK) => void;
export declare const ServerList: readonly ["https://api.sandbox.velopayments.com/", "https://api.payouts.velopayments.com"];
export declare function WithServerURL(serverURL: string, params?: Map<string, string>): OptsFunc;
export declare function WithClient(client: AxiosInstance): OptsFunc;
export declare function WithSecurity(security: Security): OptsFunc;
export declare class SDK {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _security?: Security;
    _serverURL: string;
    private _language;
    private _sdkVersion;
    private _genVersion;
    constructor(...opts: OptsFunc[]);
    /**
     * postV3PayeesPayeeIdRemoteIdUpdate - Update Payee Remote Id
     *
     * <p>Use v4 instead</p>
     * <p>Update the remote Id for the given Payee Id.</p>
     *
    **/
    postV3PayeesPayeeIdRemoteIdUpdate(req: operations.PostV3PayeesPayeeIdRemoteIdUpdateRequest, config?: AxiosRequestConfig): Promise<operations.PostV3PayeesPayeeIdRemoteIdUpdateResponse>;
    /**
     * postV4PayeesPayeeIdRemoteIdUpdate - Update Payee Remote Id
     *
     * <p>Update the remote Id for the given Payee Id.</p>
     *
    **/
    postV4PayeesPayeeIdRemoteIdUpdate(req: operations.PostV4PayeesPayeeIdRemoteIdUpdateRequest, config?: AxiosRequestConfig): Promise<operations.PostV4PayeesPayeeIdRemoteIdUpdateResponse>;
    /**
     * createAchFundingRequest - Create Funding Request
     *
     * Instruct a funding request to transfer funds from the payor’s funding bank to the payor’s balance held within Velo.
    **/
    createAchFundingRequest(req: operations.CreateAchFundingRequestRequest, config?: AxiosRequestConfig): Promise<operations.CreateAchFundingRequestResponse>;
    /**
     * createFundingAccountV2 - Create Funding Account
     *
     * Create Funding Account
    **/
    createFundingAccountV2(req: operations.CreateFundingAccountV2Request, config?: AxiosRequestConfig): Promise<operations.CreateFundingAccountV2Response>;
    /**
     * createFundingRequest - Create Funding Request
     *
     * Instruct a funding request to transfer funds from the payor’s funding bank to the payor’s balance held within Velo  (202 - accepted, 400 - invalid request body, 404 - source account not found).
    **/
    createFundingRequest(req: operations.CreateFundingRequestRequest, config?: AxiosRequestConfig): Promise<operations.CreateFundingRequestResponse>;
    /**
     * createFundingRequestV3 - Create Funding Request
     *
     * Instruct a funding request to transfer funds from the payor’s funding bank to the payor’s balance held within Velo  (202 - accepted, 400 - invalid request body, 404 - source account not found).
    **/
    createFundingRequestV3(req: operations.CreateFundingRequestV3Request, config?: AxiosRequestConfig): Promise<operations.CreateFundingRequestV3Response>;
    /**
     * createPayorLinks - Create a Payor Link
     *
     * This endpoint allows you to create a payor link.
    **/
    createPayorLinks(req: operations.CreatePayorLinksRequest, config?: AxiosRequestConfig): Promise<operations.CreatePayorLinksResponse>;
    /**
     * createQuoteForPayoutV3 - Create a quote for the payout
     *
     * Create quote for a payout
    **/
    createQuoteForPayoutV3(req: operations.CreateQuoteForPayoutV3Request, config?: AxiosRequestConfig): Promise<operations.CreateQuoteForPayoutV3Response>;
    /**
     * createWebhookV1 - Create Webhook
     *
     * Create Webhook
    **/
    createWebhookV1(req: operations.CreateWebhookV1Request, config?: AxiosRequestConfig): Promise<operations.CreateWebhookV1Response>;
    /**
     * deletePayeeByIdV3 - Delete Payee by Id
     *
     * <p>Use v4 instead</p>
     * <p>This API will delete Payee by Id (UUID). Deletion by ID is not allowed if:</p>
     * <p>* Payee ID is not found</p>
     * <p>* If Payee has not been on-boarded</p>
     * <p>* If Payee is in grace period</p>
     * <p>* If Payee has existing payments</p>
     *
    **/
    deletePayeeByIdV3(req: operations.DeletePayeeByIdV3Request, config?: AxiosRequestConfig): Promise<operations.DeletePayeeByIdV3Response>;
    /**
     * deletePayeeByIdV4 - Delete Payee by Id
     *
     * <p>This API will delete Payee by Id (UUID). Deletion by ID is not allowed if:</p>
     * <p>* Payee ID is not found</p>
     * <p>* If Payee has not been on-boarded</p>
     * <p>* If Payee is in grace period</p>
     * <p>* If Payee has existing payments</p>
     *
    **/
    deletePayeeByIdV4(req: operations.DeletePayeeByIdV4Request, config?: AxiosRequestConfig): Promise<operations.DeletePayeeByIdV4Response>;
    /**
     * deleteSourceAccountV3 - Delete a source account by ID
     *
     * Mark a source account as deleted by ID
    **/
    deleteSourceAccountV3(req: operations.DeleteSourceAccountV3Request, config?: AxiosRequestConfig): Promise<operations.DeleteSourceAccountV3Response>;
    /**
     * deleteUserByIdV2 - Delete a User
     *
     * Delete User by Id.
     *
    **/
    deleteUserByIdV2(req: operations.DeleteUserByIdV2Request, config?: AxiosRequestConfig): Promise<operations.DeleteUserByIdV2Response>;
    /**
     * disableUserV2 - Disable a User
     *
     * <p>If a user is enabled this endpoint will disable them </p>
     * <p>The invoker must have the appropriate permission </p>
     * <p>A user cannot disable themself </p>
     * <p>When a user is disabled any active access tokens will be revoked and the user will not be able to log in</p>
     *
    **/
    disableUserV2(req: operations.DisableUserV2Request, config?: AxiosRequestConfig): Promise<operations.DisableUserV2Response>;
    /**
     * enableUserV2 - Enable a User
     *
     * <p>If a user has been disabled this endpoints will enable them </p>
     * <p>The invoker must have the appropriate permission </p>
     * <p>A user cannot enable themself </p>
     * <p>If the user is a payor user and the payor is disabled this operation is not allowed</p>
     * <p>If enabling a payor user would breach the limit for master admin payor users the request will be rejected </p>
     *
    **/
    enableUserV2(req: operations.EnableUserV2Request, config?: AxiosRequestConfig): Promise<operations.EnableUserV2Response>;
    /**
     * exportTransactionsCsvv3 - V3 Export Transactions
     *
     * Deprecated (use /v4/paymentaudit/transactions instead)
    **/
    exportTransactionsCsvv3(req: operations.ExportTransactionsCsvv3Request, config?: AxiosRequestConfig): Promise<operations.ExportTransactionsCsvv3Response>;
    /**
     * exportTransactionsCsvv4 - Export Transactions
     *
     * Download a CSV file containing payments in a date range. Uses Transfer-Encoding - chunked to stream to the client. Date range is inclusive of both the start and end dates.
    **/
    exportTransactionsCsvv4(req: operations.ExportTransactionsCsvv4Request, config?: AxiosRequestConfig): Promise<operations.ExportTransactionsCsvv4Response>;
    /**
     * getFundingAccount - Get Funding Account
     *
     * Get Funding Account by ID
    **/
    getFundingAccount(req: operations.GetFundingAccountRequest, config?: AxiosRequestConfig): Promise<operations.GetFundingAccountResponse>;
    /**
     * getFundingAccountV2 - Get Funding Account
     *
     * Get Funding Account by ID
    **/
    getFundingAccountV2(req: operations.GetFundingAccountV2Request, config?: AxiosRequestConfig): Promise<operations.GetFundingAccountV2Response>;
    /**
     * getFundingAccounts - Get Funding Accounts
     *
     * Get the funding accounts.
    **/
    getFundingAccounts(req: operations.GetFundingAccountsRequest, config?: AxiosRequestConfig): Promise<operations.GetFundingAccountsResponse>;
    /**
     * getFundingAccountsV2 - Get Funding Accounts
     *
     * Get the funding accounts.
    **/
    getFundingAccountsV2(req: operations.GetFundingAccountsV2Request, config?: AxiosRequestConfig): Promise<operations.GetFundingAccountsV2Response>;
    /**
     * getFundingsV1 - V1 Get Fundings for Payor
     *
     * Deprecated (use /v4/paymentaudit/fundings)
    **/
    getFundingsV1(req: operations.GetFundingsV1Request, config?: AxiosRequestConfig): Promise<operations.GetFundingsV1Response>;
    /**
     * getFundingsV4 - Get Fundings for Payor
     *
     * <p>Get a list of Fundings for a payor.</p>
     *
    **/
    getFundingsV4(req: operations.GetFundingsV4Request, config?: AxiosRequestConfig): Promise<operations.GetFundingsV4Response>;
    /**
     * getPayeeByIdV3 - Get Payee by Id
     *
     * <p>Use v4 instead</p>
     * <p>Get Payee by Id</p>
     *
    **/
    getPayeeByIdV3(req: operations.GetPayeeByIdV3Request, config?: AxiosRequestConfig): Promise<operations.GetPayeeByIdV3Response>;
    /**
     * getPayeeByIdV4 - Get Payee by Id
     *
     * Get Payee by Id
    **/
    getPayeeByIdV4(req: operations.GetPayeeByIdV4Request, config?: AxiosRequestConfig): Promise<operations.GetPayeeByIdV4Response>;
    /**
     * getPayeesInvitationStatusV3 - Get Payee Invitation Status
     *
     * <p>Use v4 instead</p>
     * <p>Returns a filtered, paginated list of payees associated with a payor, along with invitation status and grace period end date.</p>
     *
    **/
    getPayeesInvitationStatusV3(req: operations.GetPayeesInvitationStatusV3Request, config?: AxiosRequestConfig): Promise<operations.GetPayeesInvitationStatusV3Response>;
    /**
     * getPayeesInvitationStatusV4 - Get Payee Invitation Status
     *
     * Returns a filtered, paginated list of payees associated with a payor, along with invitation status and grace period end date.
     *
    **/
    getPayeesInvitationStatusV4(req: operations.GetPayeesInvitationStatusV4Request, config?: AxiosRequestConfig): Promise<operations.GetPayeesInvitationStatusV4Response>;
    /**
     * getPaymentDetailsV3 - V3 Get Payment
     *
     * Deprecated (use /v4/paymentaudit/payments/<paymentId> instead)
    **/
    getPaymentDetailsV3(req: operations.GetPaymentDetailsV3Request, config?: AxiosRequestConfig): Promise<operations.GetPaymentDetailsV3Response>;
    /**
     * getPaymentDetailsV4 - Get Payment
     *
     * Get the payment with the given id. This contains the payment history.
     *
    **/
    getPaymentDetailsV4(req: operations.GetPaymentDetailsV4Request, config?: AxiosRequestConfig): Promise<operations.GetPaymentDetailsV4Response>;
    /**
     * getPaymentsForPayoutV3 - Retrieve payments for a payout
     *
     * Retrieve payments for a payout
    **/
    getPaymentsForPayoutV3(req: operations.GetPaymentsForPayoutV3Request, config?: AxiosRequestConfig): Promise<operations.GetPaymentsForPayoutV3Response>;
    /**
     * getPaymentsForPayoutV4 - Get Payments for Payout
     *
     * Get List of payments for Payout, allowing for RETURNED status
     *
    **/
    getPaymentsForPayoutV4(req: operations.GetPaymentsForPayoutV4Request, config?: AxiosRequestConfig): Promise<operations.GetPaymentsForPayoutV4Response>;
    /**
     * getPaymentsForPayoutPaV3 - V3 Get Payments for Payout
     *
     * Deprecated (use /v4/paymentaudit/payouts/<payoutId> instead)
    **/
    getPaymentsForPayoutPaV3(req: operations.GetPaymentsForPayoutPaV3Request, config?: AxiosRequestConfig): Promise<operations.GetPaymentsForPayoutPaV3Response>;
    /**
     * getPayorById - Get Payor
     *
     * Get a Single Payor by Id.
     *
    **/
    getPayorById(req: operations.GetPayorByIdRequest, config?: AxiosRequestConfig): Promise<operations.GetPayorByIdResponse>;
    /**
     * getPayorByIdV2 - Get Payor
     *
     * Get a Single Payor by Id.
     *
    **/
    getPayorByIdV2(req: operations.GetPayorByIdV2Request, config?: AxiosRequestConfig): Promise<operations.GetPayorByIdV2Response>;
    /**
     * getPayoutStatsV1 - V1 Get Payout Statistics
     *
     * Deprecated (Use /v4/paymentaudit/payoutStatistics)
    **/
    getPayoutStatsV1(req: operations.GetPayoutStatsV1Request, config?: AxiosRequestConfig): Promise<operations.GetPayoutStatsV1Response>;
    /**
     * getPayoutStatsV4 - Get Payout Statistics
     *
     * <p>Get payout statistics for a payor.</p>
     *
    **/
    getPayoutStatsV4(req: operations.GetPayoutStatsV4Request, config?: AxiosRequestConfig): Promise<operations.GetPayoutStatsV4Response>;
    /**
     * getPayoutSummaryV3 - Get Payout Summary
     *
     * Get payout summary - returns the current state of the payout.
    **/
    getPayoutSummaryV3(req: operations.GetPayoutSummaryV3Request, config?: AxiosRequestConfig): Promise<operations.GetPayoutSummaryV3Response>;
    /**
     * getPayoutsForPayorV3 - V3 Get Payouts for Payor
     *
     * Deprecated (use /v4/paymentaudit/payouts instead)
    **/
    getPayoutsForPayorV3(req: operations.GetPayoutsForPayorV3Request, config?: AxiosRequestConfig): Promise<operations.GetPayoutsForPayorV3Response>;
    /**
     * getPayoutsForPayorV4 - Get Payouts for Payor
     *
     * Get List of payouts for payor
     *
    **/
    getPayoutsForPayorV4(req: operations.GetPayoutsForPayorV4Request, config?: AxiosRequestConfig): Promise<operations.GetPayoutsForPayorV4Response>;
    /**
     * getSelf - Get Self
     *
     * Get the user's details
     *
    **/
    getSelf(config?: AxiosRequestConfig): Promise<operations.GetSelfResponse>;
    /**
     * getSourceAccount - Get details about given source account.
     *
     * Get details about given source account.
    **/
    getSourceAccount(req: operations.GetSourceAccountRequest, config?: AxiosRequestConfig): Promise<operations.GetSourceAccountResponse>;
    /**
     * getSourceAccountV2 - Get details about given source account.
     *
     * Get details about given source account.
    **/
    getSourceAccountV2(req: operations.GetSourceAccountV2Request, config?: AxiosRequestConfig): Promise<operations.GetSourceAccountV2Response>;
    /**
     * getSourceAccountV3 - Get details about given source account.
     *
     * Get details about given source account.
    **/
    getSourceAccountV3(req: operations.GetSourceAccountV3Request, config?: AxiosRequestConfig): Promise<operations.GetSourceAccountV3Response>;
    /**
     * getSourceAccounts - Get list of source accounts
     *
     * List source accounts.
    **/
    getSourceAccounts(req: operations.GetSourceAccountsRequest, config?: AxiosRequestConfig): Promise<operations.GetSourceAccountsResponse>;
    /**
     * getSourceAccountsV2 - Get list of source accounts
     *
     * List source accounts.
    **/
    getSourceAccountsV2(req: operations.GetSourceAccountsV2Request, config?: AxiosRequestConfig): Promise<operations.GetSourceAccountsV2Response>;
    /**
     * getSourceAccountsV3 - Get list of source accounts
     *
     * List source accounts.
    **/
    getSourceAccountsV3(req: operations.GetSourceAccountsV3Request, config?: AxiosRequestConfig): Promise<operations.GetSourceAccountsV3Response>;
    /**
     * getUserByIdV2 - Get User
     *
     * Get a Single User by Id.
     *
    **/
    getUserByIdV2(req: operations.GetUserByIdV2Request, config?: AxiosRequestConfig): Promise<operations.GetUserByIdV2Response>;
    /**
     * getWebhookV1 - Get details about the given webhook.
     *
     * Get details about the given webhook.
    **/
    getWebhookV1(req: operations.GetWebhookV1Request, config?: AxiosRequestConfig): Promise<operations.GetWebhookV1Response>;
    /**
     * instructPayoutV3 - Instruct Payout
     *
     * Instruct a payout to be made for the specified payoutId.
    **/
    instructPayoutV3(req: operations.InstructPayoutV3Request, config?: AxiosRequestConfig): Promise<operations.InstructPayoutV3Response>;
    /**
     * inviteUser - Invite a User
     *
     * Create a User and invite them to the system
     *
    **/
    inviteUser(req: operations.InviteUserRequest, config?: AxiosRequestConfig): Promise<operations.InviteUserResponse>;
    /**
     * listFundingAuditDeltas - Get Funding Audit Delta
     *
     * Get funding audit deltas for a payor
    **/
    listFundingAuditDeltas(req: operations.ListFundingAuditDeltasRequest, config?: AxiosRequestConfig): Promise<operations.ListFundingAuditDeltasResponse>;
    /**
     * listPayeeChangesV3 - List Payee Changes
     *
     * <p>Use v4 instead</p>
     * <p>Get a paginated response listing payee changes.</p>
     *
    **/
    listPayeeChangesV3(req: operations.ListPayeeChangesV3Request, config?: AxiosRequestConfig): Promise<operations.ListPayeeChangesV3Response>;
    /**
     * listPayeeChangesV4 - List Payee Changes
     *
     * Get a paginated response listing payee changes (updated since a particular time) to a limited set of fields:
     * - dbaName
     * - displayName
     * - email
     * - onboardedStatus
     * - payeeCountry
     * - payeeId
     * - remoteId
     *
    **/
    listPayeeChangesV4(req: operations.ListPayeeChangesV4Request, config?: AxiosRequestConfig): Promise<operations.ListPayeeChangesV4Response>;
    /**
     * listPayeesV3 - List Payees
     *
     * <p>Use v4 instead</p>
     * Get a paginated response listing the payees for a payor.
     *
    **/
    listPayeesV3(req: operations.ListPayeesV3Request, config?: AxiosRequestConfig): Promise<operations.ListPayeesV3Response>;
    /**
     * listPayeesV4 - List Payees
     *
     * Get a paginated response listing the payees for a payor.
    **/
    listPayeesV4(req: operations.ListPayeesV4Request, config?: AxiosRequestConfig): Promise<operations.ListPayeesV4Response>;
    /**
     * listPaymentChanges - V1 List Payment Changes
     *
     * Deprecated (use /v4/payments/deltas instead)
    **/
    listPaymentChanges(req: operations.ListPaymentChangesRequest, config?: AxiosRequestConfig): Promise<operations.ListPaymentChangesResponse>;
    /**
     * listPaymentChangesV4 - List Payment Changes
     *
     * Get a paginated response listing payment changes.
    **/
    listPaymentChangesV4(req: operations.ListPaymentChangesV4Request, config?: AxiosRequestConfig): Promise<operations.ListPaymentChangesV4Response>;
    /**
     * listPaymentChannelRulesV1 - List Payment Channel Country Rules
     *
     * List the country specific payment channel rules.
    **/
    listPaymentChannelRulesV1(config?: AxiosRequestConfig): Promise<operations.ListPaymentChannelRulesV1Response>;
    /**
     * listPaymentsAuditV3 - V3 Get List of Payments
     *
     * Deprecated (use /v4/paymentaudit/payments instead)
    **/
    listPaymentsAuditV3(req: operations.ListPaymentsAuditV3Request, config?: AxiosRequestConfig): Promise<operations.ListPaymentsAuditV3Response>;
    /**
     * listPaymentsAuditV4 - Get List of Payments
     *
     * Get payments for the given payor Id
    **/
    listPaymentsAuditV4(req: operations.ListPaymentsAuditV4Request, config?: AxiosRequestConfig): Promise<operations.ListPaymentsAuditV4Response>;
    /**
     * listSupportedCountriesV1 - List Supported Countries
     *
     * <p>List the supported countries.</p>
     * <p>This version will be retired in March 2020. Use /v2/supportedCountries</p>
     *
    **/
    listSupportedCountriesV1(config?: AxiosRequestConfig): Promise<operations.ListSupportedCountriesV1Response>;
    /**
     * listSupportedCountriesV2 - List Supported Countries
     *
     * List the supported countries.
    **/
    listSupportedCountriesV2(config?: AxiosRequestConfig): Promise<operations.ListSupportedCountriesV2Response>;
    /**
     * listSupportedCurrenciesV2 - List Supported Currencies
     *
     * List the supported currencies.
    **/
    listSupportedCurrenciesV2(config?: AxiosRequestConfig): Promise<operations.ListSupportedCurrenciesV2Response>;
    /**
     * listUsers - List Users
     *
     * Get a paginated response listing the Users
    **/
    listUsers(req: operations.ListUsersRequest, config?: AxiosRequestConfig): Promise<operations.ListUsersResponse>;
    /**
     * listWebhooksV1 - List the details about the webhooks for the given payor.
     *
     * List the details about the webhooks for the given payor.
    **/
    listWebhooksV1(req: operations.ListWebhooksV1Request, config?: AxiosRequestConfig): Promise<operations.ListWebhooksV1Response>;
    /**
     * logout - Logout
     *
     * <p>Given a valid access token in the header then log out the authenticated user or client </p>
     * <p>Will revoke the token</p>
     *
    **/
    logout(config?: AxiosRequestConfig): Promise<operations.LogoutResponse>;
    /**
     * payeeDetailsUpdateV3 - Update Payee Details
     *
     * <p>Use v4 instead</p>
     * <p>Update payee details for the given Payee Id.<p>
     *
    **/
    payeeDetailsUpdateV3(req: operations.PayeeDetailsUpdateV3Request, config?: AxiosRequestConfig): Promise<operations.PayeeDetailsUpdateV3Response>;
    /**
     * payeeDetailsUpdateV4 - Update Payee Details
     *
     * <p>Update payee details for the given Payee Id.<p>
     *
    **/
    payeeDetailsUpdateV4(req: operations.PayeeDetailsUpdateV4Request, config?: AxiosRequestConfig): Promise<operations.PayeeDetailsUpdateV4Response>;
    /**
     * payorAddPayorLogo - Add Logo
     *
     * Add Payor Logo. Logo file is used in your branding, and emails sent to payees.
    **/
    payorAddPayorLogo(req: operations.PayorAddPayorLogoRequest, config?: AxiosRequestConfig): Promise<operations.PayorAddPayorLogoResponse>;
    /**
     * payorCreateApiKeyRequest - Create API Key
     *
     * Create an an API key for the given payor Id and application Id
    **/
    payorCreateApiKeyRequest(req: operations.PayorCreateApiKeyRequestRequest, config?: AxiosRequestConfig): Promise<operations.PayorCreateApiKeyRequestResponse>;
    /**
     * payorCreateApplicationRequest - Create Application
     *
     * Create an application for the given Payor ID. Applications are programatic users which can be assigned unique keys.
    **/
    payorCreateApplicationRequest(req: operations.PayorCreateApplicationRequestRequest, config?: AxiosRequestConfig): Promise<operations.PayorCreateApplicationRequestResponse>;
    /**
     * payorEmailOptOut - Reminder Email Opt-Out
     *
     * Update the emailRemindersOptOut field for a Payor. This API can be used to opt out
     * or opt into Payor Reminder emails. These emails are typically around payee events
     * such as payees registering and onboarding.
     *
    **/
    payorEmailOptOut(req: operations.PayorEmailOptOutRequest, config?: AxiosRequestConfig): Promise<operations.PayorEmailOptOutResponse>;
    /**
     * payorGetBranding - Get Branding
     *
     * Get the payor branding details.
    **/
    payorGetBranding(req: operations.PayorGetBrandingRequest, config?: AxiosRequestConfig): Promise<operations.PayorGetBrandingResponse>;
    /**
     * payorLinks - List Payor Links
     *
     * This endpoint allows you to list payor links
    **/
    payorLinks(req: operations.PayorLinksRequest, config?: AxiosRequestConfig): Promise<operations.PayorLinksResponse>;
    pingWebhookV1(req: operations.PingWebhookV1Request, config?: AxiosRequestConfig): Promise<operations.PingWebhookV1Response>;
    /**
     * queryBatchStatusV3 - Query Batch Status
     *
     * <p>Use v4 instead</p>
     * Fetch the status of a specific batch of payees. The batch is fully processed when status is ACCEPTED and pendingCount is 0 ( 200 - OK, 404 - batch not found ).
     *
    **/
    queryBatchStatusV3(req: operations.QueryBatchStatusV3Request, config?: AxiosRequestConfig): Promise<operations.QueryBatchStatusV3Response>;
    /**
     * queryBatchStatusV4 - Query Batch Status
     *
     * Fetch the status of a specific batch of payees. The batch is fully processed when status is ACCEPTED and pendingCount is 0 ( 200 - OK, 404 - batch not found ).
     *
    **/
    queryBatchStatusV4(req: operations.QueryBatchStatusV4Request, config?: AxiosRequestConfig): Promise<operations.QueryBatchStatusV4Response>;
    /**
     * registerSms - Register SMS Number
     *
     * <p>Register an Sms number and send an OTP to it </p>
     * <p>Used for manual verification of a user </p>
     * <p>The backoffice user initiates the request to send the OTP to the user's sms </p>
     * <p>The user then reads back the OTP which the backoffice user enters in the verifactionCode property for requests that require it</p>
     *
    **/
    registerSms(req: operations.RegisterSmsRequest, config?: AxiosRequestConfig): Promise<operations.RegisterSmsResponse>;
    /**
     * resendPayeeInviteV3 - Resend Payee Invite
     *
     * <p>Use v4 instead</p>
     * <p>Resend an invite to the Payee The payee must have already been invited by the payor and not yet accepted or declined</p>
     * <p>Any previous invites to the payee by this Payor will be invalidated</p>
     *
    **/
    resendPayeeInviteV3(req: operations.ResendPayeeInviteV3Request, config?: AxiosRequestConfig): Promise<operations.ResendPayeeInviteV3Response>;
    /**
     * resendPayeeInviteV4 - Resend Payee Invite
     *
     * <p>Resend an invite to the Payee The payee must have already been invited by the payor and not yet accepted or declined</p>
     * <p>Any previous invites to the payee by this Payor will be invalidated</p>
     *
    **/
    resendPayeeInviteV4(req: operations.ResendPayeeInviteV4Request, config?: AxiosRequestConfig): Promise<operations.ResendPayeeInviteV4Response>;
    /**
     * resendToken - Resend a token
     *
     * <p>Resend the specified token </p>
     * <p>The token to resend must already exist for the user </p>
     * <p>It will be revoked and a new one issued</p>
     *
    **/
    resendToken(req: operations.ResendTokenRequest, config?: AxiosRequestConfig): Promise<operations.ResendTokenResponse>;
    /**
     * resetPassword - Reset password
     *
     * <p>Reset password </p>
     * <p>An email with an embedded link will be sent to the receipient of the email address </p>
     * <p>The link will contain a token to be used for resetting the password </p>
     *
    **/
    resetPassword(req: operations.ResetPasswordRequest, config?: AxiosRequestConfig): Promise<operations.ResetPasswordResponse>;
    /**
     * roleUpdate - Update User Role
     *
     * <p>Update the user's Role</p>
     *
    **/
    roleUpdate(req: operations.RoleUpdateRequest, config?: AxiosRequestConfig): Promise<operations.RoleUpdateResponse>;
    /**
     * setNotificationsRequest - Set notifications
     *
     * Set notifications for a given source account
    **/
    setNotificationsRequest(req: operations.SetNotificationsRequestRequest, config?: AxiosRequestConfig): Promise<operations.SetNotificationsRequestResponse>;
    /**
     * submitPayoutV3 - Submit Payout
     *
     * <p>Create a new payout and return a location header with a link to get the payout.</p>
     * <p>Basic validation of the payout is performed before returning but more comprehensive validation is done asynchronously.</p>
     * <p>The results can be obtained by issuing a HTTP GET to the URL returned in the location header.</p>
     * <p>**NOTE:** amount values in payments must be in 'minor units' format. E.g. cents for USD, pence for GBP etc.</p>
     *  with no decimal places.
     *
    **/
    submitPayoutV3(req: operations.SubmitPayoutV3Request, config?: AxiosRequestConfig): Promise<operations.SubmitPayoutV3Response>;
    /**
     * transferFunds - Transfer Funds between source accounts
     *
     * Transfer funds between source accounts for a Payor. The 'from' source account is identified in the URL, and is the account which will be debited. The 'to' (destination) source account is in the body, and is the account which will be credited. Both source accounts must belong to the same Payor. There must be sufficient balance in the 'from' source account, otherwise the transfer attempt will fail.
    **/
    transferFunds(req: operations.TransferFundsRequest, config?: AxiosRequestConfig): Promise<operations.TransferFundsResponse>;
    /**
     * transferFundsV3 - Transfer Funds between source accounts
     *
     * Transfer funds between source accounts for a Payor. The 'from' source account is identified in the URL, and is the account which will be debited. The 'to' (destination) source account is in the body, and is the account which will be credited. Both source accounts must belong to the same Payor. There must be sufficient balance in the 'from' source account, otherwise the transfer attempt will fail.
    **/
    transferFundsV3(req: operations.TransferFundsV3Request, config?: AxiosRequestConfig): Promise<operations.TransferFundsV3Response>;
    /**
     * unlockUserV2 - Unlock a User
     *
     * If a user is locked this endpoint will unlock them
     *
    **/
    unlockUserV2(req: operations.UnlockUserV2Request, config?: AxiosRequestConfig): Promise<operations.UnlockUserV2Response>;
    /**
     * unregisterMfa - Unregister MFA for the user
     *
     * <p>Unregister the MFA device for the user </p>
     * <p>If the user does not require further verification then a register new MFA device token will be sent to them via their email address</p>
     *
    **/
    unregisterMfa(req: operations.UnregisterMfaRequest, config?: AxiosRequestConfig): Promise<operations.UnregisterMfaResponse>;
    /**
     * unregisterMfaForSelf - Unregister MFA for Self
     *
     * <p>Unregister the MFA device for the user </p>
     * <p>If the user does not require further verification then a register new MFA device token will be sent to them via their email address</p>
     *
    **/
    unregisterMfaForSelf(req: operations.UnregisterMfaForSelfRequest, config?: AxiosRequestConfig): Promise<operations.UnregisterMfaForSelfResponse>;
    /**
     * updatePasswordSelf - Update Password for self
     *
     * Update password for self
     *
    **/
    updatePasswordSelf(req: operations.UpdatePasswordSelfRequest, config?: AxiosRequestConfig): Promise<operations.UpdatePasswordSelfResponse>;
    /**
     * updateWebhookV1 - Update Webhook
     *
     * Update Webhook
    **/
    updateWebhookV1(req: operations.UpdateWebhookV1Request, config?: AxiosRequestConfig): Promise<operations.UpdateWebhookV1Response>;
    /**
     * userDetailsUpdate - Update User Details
     *
     * <p>Update the profile details for the given user</p>
     * <p>When updating Payor users with the role of payor.master_admin a verificationCode is required</p>
     *
    **/
    userDetailsUpdate(req: operations.UserDetailsUpdateRequest, config?: AxiosRequestConfig): Promise<operations.UserDetailsUpdateResponse>;
    /**
     * userDetailsUpdateForSelf - Update User Details for self
     *
     * <p>Update the profile details for the given user</p>
     * <p>Only Payee user types are supported</p>
     *
    **/
    userDetailsUpdateForSelf(req: operations.UserDetailsUpdateForSelfRequest, config?: AxiosRequestConfig): Promise<operations.UserDetailsUpdateForSelfResponse>;
    /**
     * v3CreatePayee - Initiate Payee Creation
     *
     * <p>Use v4 instead</p>
     * Initiate the process of creating 1 to 2000 payees in a batch Use the response location header to query
     * for status (201 - Created, 400 - invalid request body. In addition to standard semantic validations, a
     * 400 will also result if there is a duplicate remote id within the batch / if there is a duplicate email
     * within the batch, i.e. if there is a conflict between the data provided for one payee within the batch and
     * that provided for another payee within the same batch). The validation at this stage is intra-batch only.
     * Validation against payees who have already been invited occurs subsequently during processing of the batch.
     *
    **/
    v3CreatePayee(req: operations.V3CreatePayeeRequest, config?: AxiosRequestConfig): Promise<operations.V3CreatePayeeResponse>;
    /**
     * v4CreatePayee - Initiate Payee Creation
     *
     * Initiate the process of creating 1 to 2000 payees in a batch Use the response location header to query
     * for status (201 - Created, 400 - invalid request body. In addition to standard semantic validations, a
     * 400 will also result if there is a duplicate remote id within the batch / if there is a duplicate email
     * within the batch, i.e. if there is a conflict between the data provided for one payee within the batch and
     * that provided for another payee within the same batch). The validation at this stage is intra-batch only.
     * Validation against payees who have already been invited occurs subsequently during processing of the batch.
     *
    **/
    v4CreatePayee(req: operations.V4CreatePayeeRequest, config?: AxiosRequestConfig): Promise<operations.V4CreatePayeeResponse>;
    /**
     * validateAccessToken - validate
     *
     * <p>The second part of login involves validating using an MFA device</p>
     * <p>An access token with PRE_AUTH authorities is required</p>
     *
    **/
    validateAccessToken(req: operations.ValidateAccessTokenRequest, config?: AxiosRequestConfig): Promise<operations.ValidateAccessTokenResponse>;
    /**
     * validatePasswordSelf - Validate the proposed password
     *
     * validate the password and return a score
     *
    **/
    validatePasswordSelf(req: operations.ValidatePasswordSelfRequest, config?: AxiosRequestConfig): Promise<operations.ValidatePasswordSelfResponse>;
    /**
     * veloAuth - Authentication endpoint
     *
     * Use this endpoint to obtain an access token for calling Velo Payments APIs. Use HTTP Basic Auth. String value of
     * Basic and a Base64 endcoded string comprising the API key (e.g. 44a9537d-d55d-4b47-8082-14061c2bcdd8) and API
     * secret  (e.g. c396b26b-137a-44fd-87f5-34631f8fd529) with a colon between them. E.g. Basic 44a9537d-d55d-4b47-8082-14061c2bcdd8:c396b26b-137a-44fd-87f5-34631f8fd529
     *
    **/
    veloAuth(req: operations.VeloAuthRequest, config?: AxiosRequestConfig): Promise<operations.VeloAuthResponse>;
    /**
     * withdrawPayment - Withdraw a Payment
     *
     * <p>withdraw a payment </p>
     * <p>There are a variety of reasons why this can fail</p>
     * <ul>
     *     <li>the payment must be in a state of 'accepted' or 'unfunded'</li>
     *     <li>the payout must not be in a state of 'instructed'</li>
     * </ul>
     *
    **/
    withdrawPayment(req: operations.WithdrawPaymentRequest, config?: AxiosRequestConfig): Promise<operations.WithdrawPaymentResponse>;
    /**
     * withdrawPayoutV3 - Withdraw Payout
     *
     * Withdraw Payout will delete payout details from payout service and rails services but will just move the status of the payout to WITHDRAWN in payment audit.
    **/
    withdrawPayoutV3(req: operations.WithdrawPayoutV3Request, config?: AxiosRequestConfig): Promise<operations.WithdrawPayoutV3Response>;
}
export {};
