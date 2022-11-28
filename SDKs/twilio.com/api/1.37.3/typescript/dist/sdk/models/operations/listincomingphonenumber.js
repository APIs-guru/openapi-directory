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
export var ListIncomingPhoneNumberServerList = [
    "https://api.twilio.com",
];
var ListIncomingPhoneNumberPathParams = /** @class */ (function (_super) {
    __extends(ListIncomingPhoneNumberPathParams, _super);
    function ListIncomingPhoneNumberPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=AccountSid" }),
        __metadata("design:type", String)
    ], ListIncomingPhoneNumberPathParams.prototype, "accountSid", void 0);
    return ListIncomingPhoneNumberPathParams;
}(SpeakeasyBase));
export { ListIncomingPhoneNumberPathParams };
var ListIncomingPhoneNumberQueryParams = /** @class */ (function (_super) {
    __extends(ListIncomingPhoneNumberQueryParams, _super);
    function ListIncomingPhoneNumberQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Beta" }),
        __metadata("design:type", Boolean)
    ], ListIncomingPhoneNumberQueryParams.prototype, "beta", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=FriendlyName" }),
        __metadata("design:type", String)
    ], ListIncomingPhoneNumberQueryParams.prototype, "friendlyName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Origin" }),
        __metadata("design:type", String)
    ], ListIncomingPhoneNumberQueryParams.prototype, "origin", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=PageSize" }),
        __metadata("design:type", Number)
    ], ListIncomingPhoneNumberQueryParams.prototype, "pageSize", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=PhoneNumber" }),
        __metadata("design:type", String)
    ], ListIncomingPhoneNumberQueryParams.prototype, "phoneNumber", void 0);
    return ListIncomingPhoneNumberQueryParams;
}(SpeakeasyBase));
export { ListIncomingPhoneNumberQueryParams };
var ListIncomingPhoneNumberSecurity = /** @class */ (function (_super) {
    __extends(ListIncomingPhoneNumberSecurity, _super);
    function ListIncomingPhoneNumberSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=basic" }),
        __metadata("design:type", shared.SchemeAccountSidAuthToken)
    ], ListIncomingPhoneNumberSecurity.prototype, "accountSidAuthToken", void 0);
    return ListIncomingPhoneNumberSecurity;
}(SpeakeasyBase));
export { ListIncomingPhoneNumberSecurity };
var ListIncomingPhoneNumberListIncomingPhoneNumberResponse = /** @class */ (function (_super) {
    __extends(ListIncomingPhoneNumberListIncomingPhoneNumberResponse, _super);
    function ListIncomingPhoneNumberListIncomingPhoneNumberResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=end" }),
        __metadata("design:type", Number)
    ], ListIncomingPhoneNumberListIncomingPhoneNumberResponse.prototype, "end", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=first_page_uri" }),
        __metadata("design:type", String)
    ], ListIncomingPhoneNumberListIncomingPhoneNumberResponse.prototype, "firstPageUri", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=incoming_phone_numbers", elemType: shared.ApiV2010AccountIncomingPhoneNumber }),
        __metadata("design:type", Array)
    ], ListIncomingPhoneNumberListIncomingPhoneNumberResponse.prototype, "incomingPhoneNumbers", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=next_page_uri" }),
        __metadata("design:type", String)
    ], ListIncomingPhoneNumberListIncomingPhoneNumberResponse.prototype, "nextPageUri", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=page" }),
        __metadata("design:type", Number)
    ], ListIncomingPhoneNumberListIncomingPhoneNumberResponse.prototype, "page", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=page_size" }),
        __metadata("design:type", Number)
    ], ListIncomingPhoneNumberListIncomingPhoneNumberResponse.prototype, "pageSize", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=previous_page_uri" }),
        __metadata("design:type", String)
    ], ListIncomingPhoneNumberListIncomingPhoneNumberResponse.prototype, "previousPageUri", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=start" }),
        __metadata("design:type", Number)
    ], ListIncomingPhoneNumberListIncomingPhoneNumberResponse.prototype, "start", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=uri" }),
        __metadata("design:type", String)
    ], ListIncomingPhoneNumberListIncomingPhoneNumberResponse.prototype, "uri", void 0);
    return ListIncomingPhoneNumberListIncomingPhoneNumberResponse;
}(SpeakeasyBase));
export { ListIncomingPhoneNumberListIncomingPhoneNumberResponse };
var ListIncomingPhoneNumberRequest = /** @class */ (function (_super) {
    __extends(ListIncomingPhoneNumberRequest, _super);
    function ListIncomingPhoneNumberRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], ListIncomingPhoneNumberRequest.prototype, "serverUrl", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ListIncomingPhoneNumberPathParams)
    ], ListIncomingPhoneNumberRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ListIncomingPhoneNumberQueryParams)
    ], ListIncomingPhoneNumberRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ListIncomingPhoneNumberSecurity)
    ], ListIncomingPhoneNumberRequest.prototype, "security", void 0);
    return ListIncomingPhoneNumberRequest;
}(SpeakeasyBase));
export { ListIncomingPhoneNumberRequest };
var ListIncomingPhoneNumberResponse = /** @class */ (function (_super) {
    __extends(ListIncomingPhoneNumberResponse, _super);
    function ListIncomingPhoneNumberResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], ListIncomingPhoneNumberResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ListIncomingPhoneNumberListIncomingPhoneNumberResponse)
    ], ListIncomingPhoneNumberResponse.prototype, "listIncomingPhoneNumberResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], ListIncomingPhoneNumberResponse.prototype, "statusCode", void 0);
    return ListIncomingPhoneNumberResponse;
}(SpeakeasyBase));
export { ListIncomingPhoneNumberResponse };
