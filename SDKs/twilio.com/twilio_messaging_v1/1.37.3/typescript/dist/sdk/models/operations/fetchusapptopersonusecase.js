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
export var FetchUsAppToPersonUsecaseServerList = [
    "https://messaging.twilio.com",
];
var FetchUsAppToPersonUsecasePathParams = /** @class */ (function (_super) {
    __extends(FetchUsAppToPersonUsecasePathParams, _super);
    function FetchUsAppToPersonUsecasePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=MessagingServiceSid" }),
        __metadata("design:type", String)
    ], FetchUsAppToPersonUsecasePathParams.prototype, "messagingServiceSid", void 0);
    return FetchUsAppToPersonUsecasePathParams;
}(SpeakeasyBase));
export { FetchUsAppToPersonUsecasePathParams };
var FetchUsAppToPersonUsecaseQueryParams = /** @class */ (function (_super) {
    __extends(FetchUsAppToPersonUsecaseQueryParams, _super);
    function FetchUsAppToPersonUsecaseQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=BrandRegistrationSid" }),
        __metadata("design:type", String)
    ], FetchUsAppToPersonUsecaseQueryParams.prototype, "brandRegistrationSid", void 0);
    return FetchUsAppToPersonUsecaseQueryParams;
}(SpeakeasyBase));
export { FetchUsAppToPersonUsecaseQueryParams };
var FetchUsAppToPersonUsecaseSecurity = /** @class */ (function (_super) {
    __extends(FetchUsAppToPersonUsecaseSecurity, _super);
    function FetchUsAppToPersonUsecaseSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=basic" }),
        __metadata("design:type", shared.SchemeAccountSidAuthToken)
    ], FetchUsAppToPersonUsecaseSecurity.prototype, "accountSidAuthToken", void 0);
    return FetchUsAppToPersonUsecaseSecurity;
}(SpeakeasyBase));
export { FetchUsAppToPersonUsecaseSecurity };
var FetchUsAppToPersonUsecaseRequest = /** @class */ (function (_super) {
    __extends(FetchUsAppToPersonUsecaseRequest, _super);
    function FetchUsAppToPersonUsecaseRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], FetchUsAppToPersonUsecaseRequest.prototype, "serverUrl", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", FetchUsAppToPersonUsecasePathParams)
    ], FetchUsAppToPersonUsecaseRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", FetchUsAppToPersonUsecaseQueryParams)
    ], FetchUsAppToPersonUsecaseRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", FetchUsAppToPersonUsecaseSecurity)
    ], FetchUsAppToPersonUsecaseRequest.prototype, "security", void 0);
    return FetchUsAppToPersonUsecaseRequest;
}(SpeakeasyBase));
export { FetchUsAppToPersonUsecaseRequest };
var FetchUsAppToPersonUsecaseResponse = /** @class */ (function (_super) {
    __extends(FetchUsAppToPersonUsecaseResponse, _super);
    function FetchUsAppToPersonUsecaseResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], FetchUsAppToPersonUsecaseResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], FetchUsAppToPersonUsecaseResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.MessagingV1ServiceUsAppToPersonUsecase)
    ], FetchUsAppToPersonUsecaseResponse.prototype, "messagingV1ServiceUsAppToPersonUsecase", void 0);
    return FetchUsAppToPersonUsecaseResponse;
}(SpeakeasyBase));
export { FetchUsAppToPersonUsecaseResponse };
