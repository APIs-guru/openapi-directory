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
export var DELETESAFELIST_SERVERS = [
    "https://verify.twilio.com",
];
var DeleteSafelistPathParams = /** @class */ (function (_super) {
    __extends(DeleteSafelistPathParams, _super);
    function DeleteSafelistPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=PhoneNumber" }),
        __metadata("design:type", String)
    ], DeleteSafelistPathParams.prototype, "phoneNumber", void 0);
    return DeleteSafelistPathParams;
}(SpeakeasyBase));
export { DeleteSafelistPathParams };
var DeleteSafelistSecurity = /** @class */ (function (_super) {
    __extends(DeleteSafelistSecurity, _super);
    function DeleteSafelistSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, scheme=true;type=http;subtype=basic" }),
        __metadata("design:type", shared.SchemeAccountSidAuthToken)
    ], DeleteSafelistSecurity.prototype, "accountSidAuthToken", void 0);
    return DeleteSafelistSecurity;
}(SpeakeasyBase));
export { DeleteSafelistSecurity };
var DeleteSafelistRequest = /** @class */ (function (_super) {
    __extends(DeleteSafelistRequest, _super);
    function DeleteSafelistRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], DeleteSafelistRequest.prototype, "serverUrl", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", DeleteSafelistPathParams)
    ], DeleteSafelistRequest.prototype, "pathParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", DeleteSafelistSecurity)
    ], DeleteSafelistRequest.prototype, "security", void 0);
    return DeleteSafelistRequest;
}(SpeakeasyBase));
export { DeleteSafelistRequest };
var DeleteSafelistResponse = /** @class */ (function (_super) {
    __extends(DeleteSafelistResponse, _super);
    function DeleteSafelistResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], DeleteSafelistResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], DeleteSafelistResponse.prototype, "statusCode", void 0);
    return DeleteSafelistResponse;
}(SpeakeasyBase));
export { DeleteSafelistResponse };
