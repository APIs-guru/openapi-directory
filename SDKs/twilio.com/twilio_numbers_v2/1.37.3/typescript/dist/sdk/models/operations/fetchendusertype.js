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
export var FetchEndUserTypeServerList = [
    "https://numbers.twilio.com",
];
var FetchEndUserTypePathParams = /** @class */ (function (_super) {
    __extends(FetchEndUserTypePathParams, _super);
    function FetchEndUserTypePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=Sid" }),
        __metadata("design:type", String)
    ], FetchEndUserTypePathParams.prototype, "sid", void 0);
    return FetchEndUserTypePathParams;
}(SpeakeasyBase));
export { FetchEndUserTypePathParams };
var FetchEndUserTypeSecurity = /** @class */ (function (_super) {
    __extends(FetchEndUserTypeSecurity, _super);
    function FetchEndUserTypeSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=basic" }),
        __metadata("design:type", shared.SchemeAccountSidAuthToken)
    ], FetchEndUserTypeSecurity.prototype, "accountSidAuthToken", void 0);
    return FetchEndUserTypeSecurity;
}(SpeakeasyBase));
export { FetchEndUserTypeSecurity };
var FetchEndUserTypeRequest = /** @class */ (function (_super) {
    __extends(FetchEndUserTypeRequest, _super);
    function FetchEndUserTypeRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], FetchEndUserTypeRequest.prototype, "serverUrl", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", FetchEndUserTypePathParams)
    ], FetchEndUserTypeRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", FetchEndUserTypeSecurity)
    ], FetchEndUserTypeRequest.prototype, "security", void 0);
    return FetchEndUserTypeRequest;
}(SpeakeasyBase));
export { FetchEndUserTypeRequest };
var FetchEndUserTypeResponse = /** @class */ (function (_super) {
    __extends(FetchEndUserTypeResponse, _super);
    function FetchEndUserTypeResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], FetchEndUserTypeResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], FetchEndUserTypeResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.NumbersV2RegulatoryComplianceEndUserType)
    ], FetchEndUserTypeResponse.prototype, "numbersV2RegulatoryComplianceEndUserType", void 0);
    return FetchEndUserTypeResponse;
}(SpeakeasyBase));
export { FetchEndUserTypeResponse };
