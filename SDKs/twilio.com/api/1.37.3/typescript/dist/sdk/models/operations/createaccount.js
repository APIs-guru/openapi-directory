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
import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export var CreateAccountServerList = [
    "https://api.twilio.com",
];
var CreateAccountCreateAccountRequest = /** @class */ (function (_super) {
    __extends(CreateAccountCreateAccountRequest, _super);
    function CreateAccountCreateAccountRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "form, name=FriendlyName;" }),
        __metadata("design:type", String)
    ], CreateAccountCreateAccountRequest.prototype, "friendlyName", void 0);
    return CreateAccountCreateAccountRequest;
}(SpeakeasyBase));
export { CreateAccountCreateAccountRequest };
var CreateAccountSecurity = /** @class */ (function (_super) {
    __extends(CreateAccountSecurity, _super);
    function CreateAccountSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=basic" }),
        __metadata("design:type", shared.SchemeAccountSidAuthToken)
    ], CreateAccountSecurity.prototype, "accountSidAuthToken", void 0);
    return CreateAccountSecurity;
}(SpeakeasyBase));
export { CreateAccountSecurity };
var CreateAccountRequest = /** @class */ (function (_super) {
    __extends(CreateAccountRequest, _super);
    function CreateAccountRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], CreateAccountRequest.prototype, "serverUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/x-www-form-urlencoded" }),
        __metadata("design:type", CreateAccountCreateAccountRequest)
    ], CreateAccountRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", CreateAccountSecurity)
    ], CreateAccountRequest.prototype, "security", void 0);
    return CreateAccountRequest;
}(SpeakeasyBase));
export { CreateAccountRequest };
var CreateAccountResponse = /** @class */ (function (_super) {
    __extends(CreateAccountResponse, _super);
    function CreateAccountResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], CreateAccountResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], CreateAccountResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.ApiV2010Account)
    ], CreateAccountResponse.prototype, "apiV2010Account", void 0);
    return CreateAccountResponse;
}(SpeakeasyBase));
export { CreateAccountResponse };
