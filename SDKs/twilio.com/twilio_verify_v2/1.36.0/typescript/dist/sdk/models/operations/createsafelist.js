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
export var CREATESAFELIST_SERVERS = [
    "https://verify.twilio.com",
];
var CreateSafelistCreateSafelistRequest = /** @class */ (function (_super) {
    __extends(CreateSafelistCreateSafelistRequest, _super);
    function CreateSafelistCreateSafelistRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "form, name=PhoneNumber;" }),
        __metadata("design:type", String)
    ], CreateSafelistCreateSafelistRequest.prototype, "phoneNumber", void 0);
    return CreateSafelistCreateSafelistRequest;
}(SpeakeasyBase));
export { CreateSafelistCreateSafelistRequest };
var CreateSafelistSecurity = /** @class */ (function (_super) {
    __extends(CreateSafelistSecurity, _super);
    function CreateSafelistSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, scheme=true;type=http;subtype=basic" }),
        __metadata("design:type", shared.SchemeAccountSidAuthToken)
    ], CreateSafelistSecurity.prototype, "accountSidAuthToken", void 0);
    return CreateSafelistSecurity;
}(SpeakeasyBase));
export { CreateSafelistSecurity };
var CreateSafelistRequest = /** @class */ (function (_super) {
    __extends(CreateSafelistRequest, _super);
    function CreateSafelistRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], CreateSafelistRequest.prototype, "serverUrl", void 0);
    __decorate([
        Metadata({ data: "request, media_type=application/x-www-form-urlencoded" }),
        __metadata("design:type", CreateSafelistCreateSafelistRequest)
    ], CreateSafelistRequest.prototype, "request", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", CreateSafelistSecurity)
    ], CreateSafelistRequest.prototype, "security", void 0);
    return CreateSafelistRequest;
}(SpeakeasyBase));
export { CreateSafelistRequest };
var CreateSafelistResponse = /** @class */ (function (_super) {
    __extends(CreateSafelistResponse, _super);
    function CreateSafelistResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], CreateSafelistResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], CreateSafelistResponse.prototype, "statusCode", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", shared.VerifyV2Safelist)
    ], CreateSafelistResponse.prototype, "verifyV2Safelist", void 0);
    return CreateSafelistResponse;
}(SpeakeasyBase));
export { CreateSafelistResponse };
