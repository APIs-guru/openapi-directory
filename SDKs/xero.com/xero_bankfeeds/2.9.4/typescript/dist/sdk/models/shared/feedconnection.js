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
import { CountryCodeEnum } from "./countrycodeenum";
import { CurrencyCodeEnum } from "./currencycodeenum";
import { Error } from "./error";
export var FeedConnectionStatusEnum;
(function (FeedConnectionStatusEnum) {
    FeedConnectionStatusEnum["Pending"] = "PENDING";
    FeedConnectionStatusEnum["Rejected"] = "REJECTED";
})(FeedConnectionStatusEnum || (FeedConnectionStatusEnum = {}));
// FeedConnection
/**
 * https://developer.xero.com/documentation/bank-feeds-api/feed-connections
**/
var FeedConnection = /** @class */ (function (_super) {
    __extends(FeedConnection, _super);
    function FeedConnection() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=accountId" }),
        __metadata("design:type", String)
    ], FeedConnection.prototype, "accountId", void 0);
    __decorate([
        Metadata({ data: "json, name=accountName" }),
        __metadata("design:type", String)
    ], FeedConnection.prototype, "accountName", void 0);
    __decorate([
        Metadata({ data: "json, name=accountNumber" }),
        __metadata("design:type", String)
    ], FeedConnection.prototype, "accountNumber", void 0);
    __decorate([
        Metadata({ data: "json, name=accountToken" }),
        __metadata("design:type", String)
    ], FeedConnection.prototype, "accountToken", void 0);
    __decorate([
        Metadata({ data: "json, name=accountType" }),
        __metadata("design:type", Object)
    ], FeedConnection.prototype, "accountType", void 0);
    __decorate([
        Metadata({ data: "json, name=country" }),
        __metadata("design:type", String)
    ], FeedConnection.prototype, "country", void 0);
    __decorate([
        Metadata({ data: "json, name=currency" }),
        __metadata("design:type", String)
    ], FeedConnection.prototype, "currency", void 0);
    __decorate([
        Metadata({ data: "json, name=error" }),
        __metadata("design:type", Error)
    ], FeedConnection.prototype, "error", void 0);
    __decorate([
        Metadata({ data: "json, name=id" }),
        __metadata("design:type", String)
    ], FeedConnection.prototype, "id", void 0);
    __decorate([
        Metadata({ data: "json, name=status" }),
        __metadata("design:type", String)
    ], FeedConnection.prototype, "status", void 0);
    return FeedConnection;
}(SpeakeasyBase));
export { FeedConnection };
