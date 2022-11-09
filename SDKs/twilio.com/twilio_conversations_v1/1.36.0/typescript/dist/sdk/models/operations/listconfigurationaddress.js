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
export var LISTCONFIGURATIONADDRESS_SERVERS = [
    "https://conversations.twilio.com",
];
var ListConfigurationAddressQueryParams = /** @class */ (function (_super) {
    __extends(ListConfigurationAddressQueryParams, _super);
    function ListConfigurationAddressQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=PageSize" }),
        __metadata("design:type", Number)
    ], ListConfigurationAddressQueryParams.prototype, "pageSize", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=Type" }),
        __metadata("design:type", String)
    ], ListConfigurationAddressQueryParams.prototype, "type", void 0);
    return ListConfigurationAddressQueryParams;
}(SpeakeasyBase));
export { ListConfigurationAddressQueryParams };
var ListConfigurationAddressSecurity = /** @class */ (function (_super) {
    __extends(ListConfigurationAddressSecurity, _super);
    function ListConfigurationAddressSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, scheme=true;type=http;subtype=basic" }),
        __metadata("design:type", shared.SchemeAccountSidAuthToken)
    ], ListConfigurationAddressSecurity.prototype, "accountSidAuthToken", void 0);
    return ListConfigurationAddressSecurity;
}(SpeakeasyBase));
export { ListConfigurationAddressSecurity };
var ListConfigurationAddressRequest = /** @class */ (function (_super) {
    __extends(ListConfigurationAddressRequest, _super);
    function ListConfigurationAddressRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], ListConfigurationAddressRequest.prototype, "serverUrl", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", ListConfigurationAddressQueryParams)
    ], ListConfigurationAddressRequest.prototype, "queryParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", ListConfigurationAddressSecurity)
    ], ListConfigurationAddressRequest.prototype, "security", void 0);
    return ListConfigurationAddressRequest;
}(SpeakeasyBase));
export { ListConfigurationAddressRequest };
var ListConfigurationAddressListConfigurationAddressResponseMeta = /** @class */ (function (_super) {
    __extends(ListConfigurationAddressListConfigurationAddressResponseMeta, _super);
    function ListConfigurationAddressListConfigurationAddressResponseMeta() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=first_page_url" }),
        __metadata("design:type", String)
    ], ListConfigurationAddressListConfigurationAddressResponseMeta.prototype, "firstPageUrl", void 0);
    __decorate([
        Metadata({ data: "json, name=key" }),
        __metadata("design:type", String)
    ], ListConfigurationAddressListConfigurationAddressResponseMeta.prototype, "key", void 0);
    __decorate([
        Metadata({ data: "json, name=next_page_url" }),
        __metadata("design:type", String)
    ], ListConfigurationAddressListConfigurationAddressResponseMeta.prototype, "nextPageUrl", void 0);
    __decorate([
        Metadata({ data: "json, name=page" }),
        __metadata("design:type", Number)
    ], ListConfigurationAddressListConfigurationAddressResponseMeta.prototype, "page", void 0);
    __decorate([
        Metadata({ data: "json, name=page_size" }),
        __metadata("design:type", Number)
    ], ListConfigurationAddressListConfigurationAddressResponseMeta.prototype, "pageSize", void 0);
    __decorate([
        Metadata({ data: "json, name=previous_page_url" }),
        __metadata("design:type", String)
    ], ListConfigurationAddressListConfigurationAddressResponseMeta.prototype, "previousPageUrl", void 0);
    __decorate([
        Metadata({ data: "json, name=url" }),
        __metadata("design:type", String)
    ], ListConfigurationAddressListConfigurationAddressResponseMeta.prototype, "url", void 0);
    return ListConfigurationAddressListConfigurationAddressResponseMeta;
}(SpeakeasyBase));
export { ListConfigurationAddressListConfigurationAddressResponseMeta };
var ListConfigurationAddressListConfigurationAddressResponse = /** @class */ (function (_super) {
    __extends(ListConfigurationAddressListConfigurationAddressResponse, _super);
    function ListConfigurationAddressListConfigurationAddressResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=address_configurations", elemType: shared.ConversationsV1ConfigurationAddress }),
        __metadata("design:type", Array)
    ], ListConfigurationAddressListConfigurationAddressResponse.prototype, "addressConfigurations", void 0);
    __decorate([
        Metadata({ data: "json, name=meta" }),
        __metadata("design:type", ListConfigurationAddressListConfigurationAddressResponseMeta)
    ], ListConfigurationAddressListConfigurationAddressResponse.prototype, "meta", void 0);
    return ListConfigurationAddressListConfigurationAddressResponse;
}(SpeakeasyBase));
export { ListConfigurationAddressListConfigurationAddressResponse };
var ListConfigurationAddressResponse = /** @class */ (function (_super) {
    __extends(ListConfigurationAddressResponse, _super);
    function ListConfigurationAddressResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], ListConfigurationAddressResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", ListConfigurationAddressListConfigurationAddressResponse)
    ], ListConfigurationAddressResponse.prototype, "listConfigurationAddressResponse", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], ListConfigurationAddressResponse.prototype, "statusCode", void 0);
    return ListConfigurationAddressResponse;
}(SpeakeasyBase));
export { ListConfigurationAddressResponse };
