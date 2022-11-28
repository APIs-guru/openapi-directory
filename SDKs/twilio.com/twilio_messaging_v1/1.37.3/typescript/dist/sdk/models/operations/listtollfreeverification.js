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
export var ListTollfreeVerificationServerList = [
    "https://messaging.twilio.com",
];
var ListTollfreeVerificationQueryParams = /** @class */ (function (_super) {
    __extends(ListTollfreeVerificationQueryParams, _super);
    function ListTollfreeVerificationQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=PageSize" }),
        __metadata("design:type", Number)
    ], ListTollfreeVerificationQueryParams.prototype, "pageSize", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Status" }),
        __metadata("design:type", String)
    ], ListTollfreeVerificationQueryParams.prototype, "status", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=TollfreePhoneNumberSid" }),
        __metadata("design:type", String)
    ], ListTollfreeVerificationQueryParams.prototype, "tollfreePhoneNumberSid", void 0);
    return ListTollfreeVerificationQueryParams;
}(SpeakeasyBase));
export { ListTollfreeVerificationQueryParams };
var ListTollfreeVerificationSecurity = /** @class */ (function (_super) {
    __extends(ListTollfreeVerificationSecurity, _super);
    function ListTollfreeVerificationSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=basic" }),
        __metadata("design:type", shared.SchemeAccountSidAuthToken)
    ], ListTollfreeVerificationSecurity.prototype, "accountSidAuthToken", void 0);
    return ListTollfreeVerificationSecurity;
}(SpeakeasyBase));
export { ListTollfreeVerificationSecurity };
var ListTollfreeVerificationListTollfreeVerificationResponseMeta = /** @class */ (function (_super) {
    __extends(ListTollfreeVerificationListTollfreeVerificationResponseMeta, _super);
    function ListTollfreeVerificationListTollfreeVerificationResponseMeta() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=first_page_url" }),
        __metadata("design:type", String)
    ], ListTollfreeVerificationListTollfreeVerificationResponseMeta.prototype, "firstPageUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=key" }),
        __metadata("design:type", String)
    ], ListTollfreeVerificationListTollfreeVerificationResponseMeta.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=next_page_url" }),
        __metadata("design:type", String)
    ], ListTollfreeVerificationListTollfreeVerificationResponseMeta.prototype, "nextPageUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=page" }),
        __metadata("design:type", Number)
    ], ListTollfreeVerificationListTollfreeVerificationResponseMeta.prototype, "page", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=page_size" }),
        __metadata("design:type", Number)
    ], ListTollfreeVerificationListTollfreeVerificationResponseMeta.prototype, "pageSize", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=previous_page_url" }),
        __metadata("design:type", String)
    ], ListTollfreeVerificationListTollfreeVerificationResponseMeta.prototype, "previousPageUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=url" }),
        __metadata("design:type", String)
    ], ListTollfreeVerificationListTollfreeVerificationResponseMeta.prototype, "url", void 0);
    return ListTollfreeVerificationListTollfreeVerificationResponseMeta;
}(SpeakeasyBase));
export { ListTollfreeVerificationListTollfreeVerificationResponseMeta };
var ListTollfreeVerificationListTollfreeVerificationResponse = /** @class */ (function (_super) {
    __extends(ListTollfreeVerificationListTollfreeVerificationResponse, _super);
    function ListTollfreeVerificationListTollfreeVerificationResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=meta" }),
        __metadata("design:type", ListTollfreeVerificationListTollfreeVerificationResponseMeta)
    ], ListTollfreeVerificationListTollfreeVerificationResponse.prototype, "meta", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=verifications", elemType: shared.MessagingV1TollfreeVerification }),
        __metadata("design:type", Array)
    ], ListTollfreeVerificationListTollfreeVerificationResponse.prototype, "verifications", void 0);
    return ListTollfreeVerificationListTollfreeVerificationResponse;
}(SpeakeasyBase));
export { ListTollfreeVerificationListTollfreeVerificationResponse };
var ListTollfreeVerificationRequest = /** @class */ (function (_super) {
    __extends(ListTollfreeVerificationRequest, _super);
    function ListTollfreeVerificationRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], ListTollfreeVerificationRequest.prototype, "serverUrl", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ListTollfreeVerificationQueryParams)
    ], ListTollfreeVerificationRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ListTollfreeVerificationSecurity)
    ], ListTollfreeVerificationRequest.prototype, "security", void 0);
    return ListTollfreeVerificationRequest;
}(SpeakeasyBase));
export { ListTollfreeVerificationRequest };
var ListTollfreeVerificationResponse = /** @class */ (function (_super) {
    __extends(ListTollfreeVerificationResponse, _super);
    function ListTollfreeVerificationResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], ListTollfreeVerificationResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ListTollfreeVerificationListTollfreeVerificationResponse)
    ], ListTollfreeVerificationResponse.prototype, "listTollfreeVerificationResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], ListTollfreeVerificationResponse.prototype, "statusCode", void 0);
    return ListTollfreeVerificationResponse;
}(SpeakeasyBase));
export { ListTollfreeVerificationResponse };
