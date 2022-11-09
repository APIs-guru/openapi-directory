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
import * as shared from "../shared";
export var FETCHBALANCE_SERVERS = [
    "https://api.twilio.com",
];
var FetchBalancePathParams = /** @class */ (function (_super) {
    __extends(FetchBalancePathParams, _super);
    function FetchBalancePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=AccountSid" }),
        __metadata("design:type", String)
    ], FetchBalancePathParams.prototype, "accountSid", void 0);
    return FetchBalancePathParams;
}(SpeakeasyBase));
export { FetchBalancePathParams };
var FetchBalanceSecurity = /** @class */ (function (_super) {
    __extends(FetchBalanceSecurity, _super);
    function FetchBalanceSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, scheme=true;type=http;subtype=basic" }),
        __metadata("design:type", shared.SchemeAccountSidAuthToken)
    ], FetchBalanceSecurity.prototype, "accountSidAuthToken", void 0);
    return FetchBalanceSecurity;
}(SpeakeasyBase));
export { FetchBalanceSecurity };
var FetchBalanceRequest = /** @class */ (function (_super) {
    __extends(FetchBalanceRequest, _super);
    function FetchBalanceRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], FetchBalanceRequest.prototype, "serverUrl", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", FetchBalancePathParams)
    ], FetchBalanceRequest.prototype, "pathParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", FetchBalanceSecurity)
    ], FetchBalanceRequest.prototype, "security", void 0);
    return FetchBalanceRequest;
}(SpeakeasyBase));
export { FetchBalanceRequest };
var FetchBalanceResponse = /** @class */ (function (_super) {
    __extends(FetchBalanceResponse, _super);
    function FetchBalanceResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], FetchBalanceResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], FetchBalanceResponse.prototype, "statusCode", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", shared.ApiV2010AccountBalance)
    ], FetchBalanceResponse.prototype, "apiV2010AccountBalance", void 0);
    return FetchBalanceResponse;
}(SpeakeasyBase));
export { FetchBalanceResponse };
