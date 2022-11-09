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
export var UPDATEAUTHTOKENPROMOTION_SERVERS = [
    "https://accounts.twilio.com",
];
var UpdateAuthTokenPromotionSecurity = /** @class */ (function (_super) {
    __extends(UpdateAuthTokenPromotionSecurity, _super);
    function UpdateAuthTokenPromotionSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, scheme=true;type=http;subtype=basic" }),
        __metadata("design:type", shared.SchemeAccountSidAuthToken)
    ], UpdateAuthTokenPromotionSecurity.prototype, "accountSidAuthToken", void 0);
    return UpdateAuthTokenPromotionSecurity;
}(SpeakeasyBase));
export { UpdateAuthTokenPromotionSecurity };
var UpdateAuthTokenPromotionRequest = /** @class */ (function (_super) {
    __extends(UpdateAuthTokenPromotionRequest, _super);
    function UpdateAuthTokenPromotionRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], UpdateAuthTokenPromotionRequest.prototype, "serverUrl", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", UpdateAuthTokenPromotionSecurity)
    ], UpdateAuthTokenPromotionRequest.prototype, "security", void 0);
    return UpdateAuthTokenPromotionRequest;
}(SpeakeasyBase));
export { UpdateAuthTokenPromotionRequest };
var UpdateAuthTokenPromotionResponse = /** @class */ (function (_super) {
    __extends(UpdateAuthTokenPromotionResponse, _super);
    function UpdateAuthTokenPromotionResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], UpdateAuthTokenPromotionResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], UpdateAuthTokenPromotionResponse.prototype, "statusCode", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", shared.AccountsV1AuthTokenPromotion)
    ], UpdateAuthTokenPromotionResponse.prototype, "accountsV1AuthTokenPromotion", void 0);
    return UpdateAuthTokenPromotionResponse;
}(SpeakeasyBase));
export { UpdateAuthTokenPromotionResponse };
