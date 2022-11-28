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
export var ListIncomingPhoneNumberLocalServerList = [
    "https://api.twilio.com",
];
var ListIncomingPhoneNumberLocalPathParams = /** @class */ (function (_super) {
    __extends(ListIncomingPhoneNumberLocalPathParams, _super);
    function ListIncomingPhoneNumberLocalPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=AccountSid" }),
        __metadata("design:type", String)
    ], ListIncomingPhoneNumberLocalPathParams.prototype, "accountSid", void 0);
    return ListIncomingPhoneNumberLocalPathParams;
}(SpeakeasyBase));
export { ListIncomingPhoneNumberLocalPathParams };
var ListIncomingPhoneNumberLocalQueryParams = /** @class */ (function (_super) {
    __extends(ListIncomingPhoneNumberLocalQueryParams, _super);
    function ListIncomingPhoneNumberLocalQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Beta" }),
        __metadata("design:type", Boolean)
    ], ListIncomingPhoneNumberLocalQueryParams.prototype, "beta", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=FriendlyName" }),
        __metadata("design:type", String)
    ], ListIncomingPhoneNumberLocalQueryParams.prototype, "friendlyName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Origin" }),
        __metadata("design:type", String)
    ], ListIncomingPhoneNumberLocalQueryParams.prototype, "origin", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=PageSize" }),
        __metadata("design:type", Number)
    ], ListIncomingPhoneNumberLocalQueryParams.prototype, "pageSize", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=PhoneNumber" }),
        __metadata("design:type", String)
    ], ListIncomingPhoneNumberLocalQueryParams.prototype, "phoneNumber", void 0);
    return ListIncomingPhoneNumberLocalQueryParams;
}(SpeakeasyBase));
export { ListIncomingPhoneNumberLocalQueryParams };
var ListIncomingPhoneNumberLocalSecurity = /** @class */ (function (_super) {
    __extends(ListIncomingPhoneNumberLocalSecurity, _super);
    function ListIncomingPhoneNumberLocalSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=basic" }),
        __metadata("design:type", shared.SchemeAccountSidAuthToken)
    ], ListIncomingPhoneNumberLocalSecurity.prototype, "accountSidAuthToken", void 0);
    return ListIncomingPhoneNumberLocalSecurity;
}(SpeakeasyBase));
export { ListIncomingPhoneNumberLocalSecurity };
var ListIncomingPhoneNumberLocalListIncomingPhoneNumberLocalResponse = /** @class */ (function (_super) {
    __extends(ListIncomingPhoneNumberLocalListIncomingPhoneNumberLocalResponse, _super);
    function ListIncomingPhoneNumberLocalListIncomingPhoneNumberLocalResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=end" }),
        __metadata("design:type", Number)
    ], ListIncomingPhoneNumberLocalListIncomingPhoneNumberLocalResponse.prototype, "end", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=first_page_uri" }),
        __metadata("design:type", String)
    ], ListIncomingPhoneNumberLocalListIncomingPhoneNumberLocalResponse.prototype, "firstPageUri", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=incoming_phone_numbers", elemType: shared.ApiV2010AccountIncomingPhoneNumberIncomingPhoneNumberLocal }),
        __metadata("design:type", Array)
    ], ListIncomingPhoneNumberLocalListIncomingPhoneNumberLocalResponse.prototype, "incomingPhoneNumbers", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=next_page_uri" }),
        __metadata("design:type", String)
    ], ListIncomingPhoneNumberLocalListIncomingPhoneNumberLocalResponse.prototype, "nextPageUri", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=page" }),
        __metadata("design:type", Number)
    ], ListIncomingPhoneNumberLocalListIncomingPhoneNumberLocalResponse.prototype, "page", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=page_size" }),
        __metadata("design:type", Number)
    ], ListIncomingPhoneNumberLocalListIncomingPhoneNumberLocalResponse.prototype, "pageSize", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=previous_page_uri" }),
        __metadata("design:type", String)
    ], ListIncomingPhoneNumberLocalListIncomingPhoneNumberLocalResponse.prototype, "previousPageUri", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=start" }),
        __metadata("design:type", Number)
    ], ListIncomingPhoneNumberLocalListIncomingPhoneNumberLocalResponse.prototype, "start", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=uri" }),
        __metadata("design:type", String)
    ], ListIncomingPhoneNumberLocalListIncomingPhoneNumberLocalResponse.prototype, "uri", void 0);
    return ListIncomingPhoneNumberLocalListIncomingPhoneNumberLocalResponse;
}(SpeakeasyBase));
export { ListIncomingPhoneNumberLocalListIncomingPhoneNumberLocalResponse };
var ListIncomingPhoneNumberLocalRequest = /** @class */ (function (_super) {
    __extends(ListIncomingPhoneNumberLocalRequest, _super);
    function ListIncomingPhoneNumberLocalRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], ListIncomingPhoneNumberLocalRequest.prototype, "serverUrl", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ListIncomingPhoneNumberLocalPathParams)
    ], ListIncomingPhoneNumberLocalRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ListIncomingPhoneNumberLocalQueryParams)
    ], ListIncomingPhoneNumberLocalRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ListIncomingPhoneNumberLocalSecurity)
    ], ListIncomingPhoneNumberLocalRequest.prototype, "security", void 0);
    return ListIncomingPhoneNumberLocalRequest;
}(SpeakeasyBase));
export { ListIncomingPhoneNumberLocalRequest };
var ListIncomingPhoneNumberLocalResponse = /** @class */ (function (_super) {
    __extends(ListIncomingPhoneNumberLocalResponse, _super);
    function ListIncomingPhoneNumberLocalResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], ListIncomingPhoneNumberLocalResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ListIncomingPhoneNumberLocalListIncomingPhoneNumberLocalResponse)
    ], ListIncomingPhoneNumberLocalResponse.prototype, "listIncomingPhoneNumberLocalResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], ListIncomingPhoneNumberLocalResponse.prototype, "statusCode", void 0);
    return ListIncomingPhoneNumberLocalResponse;
}(SpeakeasyBase));
export { ListIncomingPhoneNumberLocalResponse };
