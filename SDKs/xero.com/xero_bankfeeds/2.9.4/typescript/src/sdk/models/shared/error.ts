import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum ErrorTypeEnum {
    InvalidRequest = "invalid-request",
    InvalidApplication = "invalid-application",
    InvalidFeedConnection = "invalid-feed-connection",
    DuplicateStatement = "duplicate-statement",
    InvalidEndBalance = "invalid-end-balance",
    InvalidStartAndEndDate = "invalid-start-and-end-date",
    InvalidStartDate = "invalid-start-date",
    InternalError = "internal-error",
    FeedAlreadyConnectedInCurrentOrganisation = "feed-already-connected-in-current-organisation",
    InvalidEndDate = "invalid-end-date",
    StatementNotFound = "statement-not-found",
    FeedConnectedInDifferentOrganisation = "feed-connected-in-different-organisation",
    FeedAlreadyConnectedInDifferentOrganisation = "feed-already-connected-in-different-organisation",
    BankFeedNotFound = "bank-feed-not-found",
    InvalidCountrySpecified = "invalid-country-specified",
    InvalidOrganisationBankFeeds = "invalid-organisation-bank-feeds",
    InvalidOrganisationMultiCurrency = "invalid-organisation-multi-currency",
    InvalidFeedConnectionForOrganisation = "invalid-feed-connection-for-organisation",
    InvalidUserRole = "invalid-user-role",
    AccountNotValid = "account-not-valid"
}


// Error
/** 
 * On error, the API consumer will receive an HTTP response with a HTTP Status Code of 4xx or 5xx and a Content-Type of application/problem+json.
**/
export class Error extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=detail" })
  detail?: string;

  @SpeakeasyMetadata({ data: "json, name=status" })
  status?: number;

  @SpeakeasyMetadata({ data: "json, name=title" })
  title?: string;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type?: ErrorTypeEnum;
}
