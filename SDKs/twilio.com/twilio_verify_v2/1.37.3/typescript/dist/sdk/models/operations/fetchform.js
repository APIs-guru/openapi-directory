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
export var FetchFormServerList = [
    "https://verify.twilio.com",
];
var FetchFormPathParams = /** @class */ (function (_super) {
    __extends(FetchFormPathParams, _super);
    function FetchFormPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=FormType" }),
        __metadata("design:type", String)
    ], FetchFormPathParams.prototype, "formType", void 0);
    return FetchFormPathParams;
}(SpeakeasyBase));
export { FetchFormPathParams };
var FetchFormSecurity = /** @class */ (function (_super) {
    __extends(FetchFormSecurity, _super);
    function FetchFormSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=basic" }),
        __metadata("design:type", shared.SchemeAccountSidAuthToken)
    ], FetchFormSecurity.prototype, "accountSidAuthToken", void 0);
    return FetchFormSecurity;
}(SpeakeasyBase));
export { FetchFormSecurity };
var FetchFormRequest = /** @class */ (function (_super) {
    __extends(FetchFormRequest, _super);
    function FetchFormRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], FetchFormRequest.prototype, "serverUrl", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", FetchFormPathParams)
    ], FetchFormRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", FetchFormSecurity)
    ], FetchFormRequest.prototype, "security", void 0);
    return FetchFormRequest;
}(SpeakeasyBase));
export { FetchFormRequest };
var FetchFormResponse = /** @class */ (function (_super) {
    __extends(FetchFormResponse, _super);
    function FetchFormResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], FetchFormResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], FetchFormResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.VerifyV2Form)
    ], FetchFormResponse.prototype, "verifyV2Form", void 0);
    return FetchFormResponse;
}(SpeakeasyBase));
export { FetchFormResponse };
