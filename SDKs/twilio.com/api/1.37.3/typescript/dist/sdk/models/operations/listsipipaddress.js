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
export var ListSipIpAddressServerList = [
    "https://api.twilio.com",
];
var ListSipIpAddressPathParams = /** @class */ (function (_super) {
    __extends(ListSipIpAddressPathParams, _super);
    function ListSipIpAddressPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=AccountSid" }),
        __metadata("design:type", String)
    ], ListSipIpAddressPathParams.prototype, "accountSid", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=IpAccessControlListSid" }),
        __metadata("design:type", String)
    ], ListSipIpAddressPathParams.prototype, "ipAccessControlListSid", void 0);
    return ListSipIpAddressPathParams;
}(SpeakeasyBase));
export { ListSipIpAddressPathParams };
var ListSipIpAddressQueryParams = /** @class */ (function (_super) {
    __extends(ListSipIpAddressQueryParams, _super);
    function ListSipIpAddressQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=PageSize" }),
        __metadata("design:type", Number)
    ], ListSipIpAddressQueryParams.prototype, "pageSize", void 0);
    return ListSipIpAddressQueryParams;
}(SpeakeasyBase));
export { ListSipIpAddressQueryParams };
var ListSipIpAddressSecurity = /** @class */ (function (_super) {
    __extends(ListSipIpAddressSecurity, _super);
    function ListSipIpAddressSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=basic" }),
        __metadata("design:type", shared.SchemeAccountSidAuthToken)
    ], ListSipIpAddressSecurity.prototype, "accountSidAuthToken", void 0);
    return ListSipIpAddressSecurity;
}(SpeakeasyBase));
export { ListSipIpAddressSecurity };
var ListSipIpAddressListSipIpAddressResponse = /** @class */ (function (_super) {
    __extends(ListSipIpAddressListSipIpAddressResponse, _super);
    function ListSipIpAddressListSipIpAddressResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=end" }),
        __metadata("design:type", Number)
    ], ListSipIpAddressListSipIpAddressResponse.prototype, "end", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=first_page_uri" }),
        __metadata("design:type", String)
    ], ListSipIpAddressListSipIpAddressResponse.prototype, "firstPageUri", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ip_addresses", elemType: shared.ApiV2010AccountSipSipIpAccessControlListSipIpAddress }),
        __metadata("design:type", Array)
    ], ListSipIpAddressListSipIpAddressResponse.prototype, "ipAddresses", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=next_page_uri" }),
        __metadata("design:type", String)
    ], ListSipIpAddressListSipIpAddressResponse.prototype, "nextPageUri", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=page" }),
        __metadata("design:type", Number)
    ], ListSipIpAddressListSipIpAddressResponse.prototype, "page", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=page_size" }),
        __metadata("design:type", Number)
    ], ListSipIpAddressListSipIpAddressResponse.prototype, "pageSize", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=previous_page_uri" }),
        __metadata("design:type", String)
    ], ListSipIpAddressListSipIpAddressResponse.prototype, "previousPageUri", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=start" }),
        __metadata("design:type", Number)
    ], ListSipIpAddressListSipIpAddressResponse.prototype, "start", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=uri" }),
        __metadata("design:type", String)
    ], ListSipIpAddressListSipIpAddressResponse.prototype, "uri", void 0);
    return ListSipIpAddressListSipIpAddressResponse;
}(SpeakeasyBase));
export { ListSipIpAddressListSipIpAddressResponse };
var ListSipIpAddressRequest = /** @class */ (function (_super) {
    __extends(ListSipIpAddressRequest, _super);
    function ListSipIpAddressRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], ListSipIpAddressRequest.prototype, "serverUrl", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ListSipIpAddressPathParams)
    ], ListSipIpAddressRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ListSipIpAddressQueryParams)
    ], ListSipIpAddressRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ListSipIpAddressSecurity)
    ], ListSipIpAddressRequest.prototype, "security", void 0);
    return ListSipIpAddressRequest;
}(SpeakeasyBase));
export { ListSipIpAddressRequest };
var ListSipIpAddressResponse = /** @class */ (function (_super) {
    __extends(ListSipIpAddressResponse, _super);
    function ListSipIpAddressResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], ListSipIpAddressResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ListSipIpAddressListSipIpAddressResponse)
    ], ListSipIpAddressResponse.prototype, "listSipIpAddressResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], ListSipIpAddressResponse.prototype, "statusCode", void 0);
    return ListSipIpAddressResponse;
}(SpeakeasyBase));
export { ListSipIpAddressResponse };
