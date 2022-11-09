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
export var LISTINCOMINGPHONENUMBERMOBILE_SERVERS = [
    "https://api.twilio.com",
];
var ListIncomingPhoneNumberMobilePathParams = /** @class */ (function (_super) {
    __extends(ListIncomingPhoneNumberMobilePathParams, _super);
    function ListIncomingPhoneNumberMobilePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=AccountSid" }),
        __metadata("design:type", String)
    ], ListIncomingPhoneNumberMobilePathParams.prototype, "accountSid", void 0);
    return ListIncomingPhoneNumberMobilePathParams;
}(SpeakeasyBase));
export { ListIncomingPhoneNumberMobilePathParams };
var ListIncomingPhoneNumberMobileQueryParams = /** @class */ (function (_super) {
    __extends(ListIncomingPhoneNumberMobileQueryParams, _super);
    function ListIncomingPhoneNumberMobileQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=Beta" }),
        __metadata("design:type", Boolean)
    ], ListIncomingPhoneNumberMobileQueryParams.prototype, "beta", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=FriendlyName" }),
        __metadata("design:type", String)
    ], ListIncomingPhoneNumberMobileQueryParams.prototype, "friendlyName", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=Origin" }),
        __metadata("design:type", String)
    ], ListIncomingPhoneNumberMobileQueryParams.prototype, "origin", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=PageSize" }),
        __metadata("design:type", Number)
    ], ListIncomingPhoneNumberMobileQueryParams.prototype, "pageSize", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=PhoneNumber" }),
        __metadata("design:type", String)
    ], ListIncomingPhoneNumberMobileQueryParams.prototype, "phoneNumber", void 0);
    return ListIncomingPhoneNumberMobileQueryParams;
}(SpeakeasyBase));
export { ListIncomingPhoneNumberMobileQueryParams };
var ListIncomingPhoneNumberMobileSecurity = /** @class */ (function (_super) {
    __extends(ListIncomingPhoneNumberMobileSecurity, _super);
    function ListIncomingPhoneNumberMobileSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, scheme=true;type=http;subtype=basic" }),
        __metadata("design:type", shared.SchemeAccountSidAuthToken)
    ], ListIncomingPhoneNumberMobileSecurity.prototype, "accountSidAuthToken", void 0);
    return ListIncomingPhoneNumberMobileSecurity;
}(SpeakeasyBase));
export { ListIncomingPhoneNumberMobileSecurity };
var ListIncomingPhoneNumberMobileRequest = /** @class */ (function (_super) {
    __extends(ListIncomingPhoneNumberMobileRequest, _super);
    function ListIncomingPhoneNumberMobileRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], ListIncomingPhoneNumberMobileRequest.prototype, "serverUrl", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", ListIncomingPhoneNumberMobilePathParams)
    ], ListIncomingPhoneNumberMobileRequest.prototype, "pathParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", ListIncomingPhoneNumberMobileQueryParams)
    ], ListIncomingPhoneNumberMobileRequest.prototype, "queryParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", ListIncomingPhoneNumberMobileSecurity)
    ], ListIncomingPhoneNumberMobileRequest.prototype, "security", void 0);
    return ListIncomingPhoneNumberMobileRequest;
}(SpeakeasyBase));
export { ListIncomingPhoneNumberMobileRequest };
var ListIncomingPhoneNumberMobileListIncomingPhoneNumberMobileResponse = /** @class */ (function (_super) {
    __extends(ListIncomingPhoneNumberMobileListIncomingPhoneNumberMobileResponse, _super);
    function ListIncomingPhoneNumberMobileListIncomingPhoneNumberMobileResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=end" }),
        __metadata("design:type", Number)
    ], ListIncomingPhoneNumberMobileListIncomingPhoneNumberMobileResponse.prototype, "end", void 0);
    __decorate([
        Metadata({ data: "json, name=first_page_uri" }),
        __metadata("design:type", String)
    ], ListIncomingPhoneNumberMobileListIncomingPhoneNumberMobileResponse.prototype, "firstPageUri", void 0);
    __decorate([
        Metadata({ data: "json, name=incoming_phone_numbers", elemType: shared.ApiV2010AccountIncomingPhoneNumberIncomingPhoneNumberMobile }),
        __metadata("design:type", Array)
    ], ListIncomingPhoneNumberMobileListIncomingPhoneNumberMobileResponse.prototype, "incomingPhoneNumbers", void 0);
    __decorate([
        Metadata({ data: "json, name=next_page_uri" }),
        __metadata("design:type", String)
    ], ListIncomingPhoneNumberMobileListIncomingPhoneNumberMobileResponse.prototype, "nextPageUri", void 0);
    __decorate([
        Metadata({ data: "json, name=page" }),
        __metadata("design:type", Number)
    ], ListIncomingPhoneNumberMobileListIncomingPhoneNumberMobileResponse.prototype, "page", void 0);
    __decorate([
        Metadata({ data: "json, name=page_size" }),
        __metadata("design:type", Number)
    ], ListIncomingPhoneNumberMobileListIncomingPhoneNumberMobileResponse.prototype, "pageSize", void 0);
    __decorate([
        Metadata({ data: "json, name=previous_page_uri" }),
        __metadata("design:type", String)
    ], ListIncomingPhoneNumberMobileListIncomingPhoneNumberMobileResponse.prototype, "previousPageUri", void 0);
    __decorate([
        Metadata({ data: "json, name=start" }),
        __metadata("design:type", Number)
    ], ListIncomingPhoneNumberMobileListIncomingPhoneNumberMobileResponse.prototype, "start", void 0);
    __decorate([
        Metadata({ data: "json, name=uri" }),
        __metadata("design:type", String)
    ], ListIncomingPhoneNumberMobileListIncomingPhoneNumberMobileResponse.prototype, "uri", void 0);
    return ListIncomingPhoneNumberMobileListIncomingPhoneNumberMobileResponse;
}(SpeakeasyBase));
export { ListIncomingPhoneNumberMobileListIncomingPhoneNumberMobileResponse };
var ListIncomingPhoneNumberMobileResponse = /** @class */ (function (_super) {
    __extends(ListIncomingPhoneNumberMobileResponse, _super);
    function ListIncomingPhoneNumberMobileResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], ListIncomingPhoneNumberMobileResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", ListIncomingPhoneNumberMobileListIncomingPhoneNumberMobileResponse)
    ], ListIncomingPhoneNumberMobileResponse.prototype, "listIncomingPhoneNumberMobileResponse", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], ListIncomingPhoneNumberMobileResponse.prototype, "statusCode", void 0);
    return ListIncomingPhoneNumberMobileResponse;
}(SpeakeasyBase));
export { ListIncomingPhoneNumberMobileResponse };
