var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
export var ErrorTypeEnum;
(function (ErrorTypeEnum) {
    ErrorTypeEnum["InvalidRequest"] = "invalid-request";
    ErrorTypeEnum["InvalidApplication"] = "invalid-application";
    ErrorTypeEnum["InvalidFeedConnection"] = "invalid-feed-connection";
    ErrorTypeEnum["DuplicateStatement"] = "duplicate-statement";
    ErrorTypeEnum["InvalidEndBalance"] = "invalid-end-balance";
    ErrorTypeEnum["InvalidStartAndEndDate"] = "invalid-start-and-end-date";
    ErrorTypeEnum["InvalidStartDate"] = "invalid-start-date";
    ErrorTypeEnum["InternalError"] = "internal-error";
    ErrorTypeEnum["FeedAlreadyConnectedInCurrentOrganisation"] = "feed-already-connected-in-current-organisation";
    ErrorTypeEnum["InvalidEndDate"] = "invalid-end-date";
    ErrorTypeEnum["StatementNotFound"] = "statement-not-found";
    ErrorTypeEnum["FeedConnectedInDifferentOrganisation"] = "feed-connected-in-different-organisation";
    ErrorTypeEnum["FeedAlreadyConnectedInDifferentOrganisation"] = "feed-already-connected-in-different-organisation";
    ErrorTypeEnum["BankFeedNotFound"] = "bank-feed-not-found";
    ErrorTypeEnum["InvalidCountrySpecified"] = "invalid-country-specified";
    ErrorTypeEnum["InvalidOrganisationBankFeeds"] = "invalid-organisation-bank-feeds";
    ErrorTypeEnum["InvalidOrganisationMultiCurrency"] = "invalid-organisation-multi-currency";
    ErrorTypeEnum["InvalidFeedConnectionForOrganisation"] = "invalid-feed-connection-for-organisation";
    ErrorTypeEnum["InvalidUserRole"] = "invalid-user-role";
    ErrorTypeEnum["AccountNotValid"] = "account-not-valid";
})(ErrorTypeEnum || (ErrorTypeEnum = {}));
// Error
/**
 * On error, the API consumer will receive an HTTP response with a HTTP Status Code of 4xx or 5xx and a Content-Type of application/problem+json.
**/
var Error = /** @class */ (function (_super) {
    __extends(Error, _super);
    function Error() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=detail" }),
        __metadata("design:type", String)
    ], Error.prototype, "detail", void 0);
    __decorate([
        Metadata({ data: "json, name=status" }),
        __metadata("design:type", Number)
    ], Error.prototype, "status", void 0);
    __decorate([
        Metadata({ data: "json, name=title" }),
        __metadata("design:type", String)
    ], Error.prototype, "title", void 0);
    __decorate([
        Metadata({ data: "json, name=type" }),
        __metadata("design:type", String)
    ], Error.prototype, "type", void 0);
    return Error;
}(SpeakeasyBase));
export { Error };
