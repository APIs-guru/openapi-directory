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
export var ListIncomingPhoneNumberTollFreeServerList = [
    "https://api.twilio.com",
];
var ListIncomingPhoneNumberTollFreePathParams = /** @class */ (function (_super) {
    __extends(ListIncomingPhoneNumberTollFreePathParams, _super);
    function ListIncomingPhoneNumberTollFreePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=AccountSid" }),
        __metadata("design:type", String)
    ], ListIncomingPhoneNumberTollFreePathParams.prototype, "accountSid", void 0);
    return ListIncomingPhoneNumberTollFreePathParams;
}(SpeakeasyBase));
export { ListIncomingPhoneNumberTollFreePathParams };
var ListIncomingPhoneNumberTollFreeQueryParams = /** @class */ (function (_super) {
    __extends(ListIncomingPhoneNumberTollFreeQueryParams, _super);
    function ListIncomingPhoneNumberTollFreeQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Beta" }),
        __metadata("design:type", Boolean)
    ], ListIncomingPhoneNumberTollFreeQueryParams.prototype, "beta", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=FriendlyName" }),
        __metadata("design:type", String)
    ], ListIncomingPhoneNumberTollFreeQueryParams.prototype, "friendlyName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Origin" }),
        __metadata("design:type", String)
    ], ListIncomingPhoneNumberTollFreeQueryParams.prototype, "origin", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=PageSize" }),
        __metadata("design:type", Number)
    ], ListIncomingPhoneNumberTollFreeQueryParams.prototype, "pageSize", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=PhoneNumber" }),
        __metadata("design:type", String)
    ], ListIncomingPhoneNumberTollFreeQueryParams.prototype, "phoneNumber", void 0);
    return ListIncomingPhoneNumberTollFreeQueryParams;
}(SpeakeasyBase));
export { ListIncomingPhoneNumberTollFreeQueryParams };
var ListIncomingPhoneNumberTollFreeSecurity = /** @class */ (function (_super) {
    __extends(ListIncomingPhoneNumberTollFreeSecurity, _super);
    function ListIncomingPhoneNumberTollFreeSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=basic" }),
        __metadata("design:type", shared.SchemeAccountSidAuthToken)
    ], ListIncomingPhoneNumberTollFreeSecurity.prototype, "accountSidAuthToken", void 0);
    return ListIncomingPhoneNumberTollFreeSecurity;
}(SpeakeasyBase));
export { ListIncomingPhoneNumberTollFreeSecurity };
var ListIncomingPhoneNumberTollFreeListIncomingPhoneNumberTollFreeResponse = /** @class */ (function (_super) {
    __extends(ListIncomingPhoneNumberTollFreeListIncomingPhoneNumberTollFreeResponse, _super);
    function ListIncomingPhoneNumberTollFreeListIncomingPhoneNumberTollFreeResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=end" }),
        __metadata("design:type", Number)
    ], ListIncomingPhoneNumberTollFreeListIncomingPhoneNumberTollFreeResponse.prototype, "end", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=first_page_uri" }),
        __metadata("design:type", String)
    ], ListIncomingPhoneNumberTollFreeListIncomingPhoneNumberTollFreeResponse.prototype, "firstPageUri", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=incoming_phone_numbers", elemType: shared.ApiV2010AccountIncomingPhoneNumberIncomingPhoneNumberTollFree }),
        __metadata("design:type", Array)
    ], ListIncomingPhoneNumberTollFreeListIncomingPhoneNumberTollFreeResponse.prototype, "incomingPhoneNumbers", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=next_page_uri" }),
        __metadata("design:type", String)
    ], ListIncomingPhoneNumberTollFreeListIncomingPhoneNumberTollFreeResponse.prototype, "nextPageUri", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=page" }),
        __metadata("design:type", Number)
    ], ListIncomingPhoneNumberTollFreeListIncomingPhoneNumberTollFreeResponse.prototype, "page", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=page_size" }),
        __metadata("design:type", Number)
    ], ListIncomingPhoneNumberTollFreeListIncomingPhoneNumberTollFreeResponse.prototype, "pageSize", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=previous_page_uri" }),
        __metadata("design:type", String)
    ], ListIncomingPhoneNumberTollFreeListIncomingPhoneNumberTollFreeResponse.prototype, "previousPageUri", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=start" }),
        __metadata("design:type", Number)
    ], ListIncomingPhoneNumberTollFreeListIncomingPhoneNumberTollFreeResponse.prototype, "start", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=uri" }),
        __metadata("design:type", String)
    ], ListIncomingPhoneNumberTollFreeListIncomingPhoneNumberTollFreeResponse.prototype, "uri", void 0);
    return ListIncomingPhoneNumberTollFreeListIncomingPhoneNumberTollFreeResponse;
}(SpeakeasyBase));
export { ListIncomingPhoneNumberTollFreeListIncomingPhoneNumberTollFreeResponse };
var ListIncomingPhoneNumberTollFreeRequest = /** @class */ (function (_super) {
    __extends(ListIncomingPhoneNumberTollFreeRequest, _super);
    function ListIncomingPhoneNumberTollFreeRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], ListIncomingPhoneNumberTollFreeRequest.prototype, "serverUrl", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ListIncomingPhoneNumberTollFreePathParams)
    ], ListIncomingPhoneNumberTollFreeRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ListIncomingPhoneNumberTollFreeQueryParams)
    ], ListIncomingPhoneNumberTollFreeRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ListIncomingPhoneNumberTollFreeSecurity)
    ], ListIncomingPhoneNumberTollFreeRequest.prototype, "security", void 0);
    return ListIncomingPhoneNumberTollFreeRequest;
}(SpeakeasyBase));
export { ListIncomingPhoneNumberTollFreeRequest };
var ListIncomingPhoneNumberTollFreeResponse = /** @class */ (function (_super) {
    __extends(ListIncomingPhoneNumberTollFreeResponse, _super);
    function ListIncomingPhoneNumberTollFreeResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], ListIncomingPhoneNumberTollFreeResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ListIncomingPhoneNumberTollFreeListIncomingPhoneNumberTollFreeResponse)
    ], ListIncomingPhoneNumberTollFreeResponse.prototype, "listIncomingPhoneNumberTollFreeResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], ListIncomingPhoneNumberTollFreeResponse.prototype, "statusCode", void 0);
    return ListIncomingPhoneNumberTollFreeResponse;
}(SpeakeasyBase));
export { ListIncomingPhoneNumberTollFreeResponse };
