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
export var LISTNETWORKACCESSPROFILENETWORK_SERVERS = [
    "https://supersim.twilio.com",
];
var ListNetworkAccessProfileNetworkPathParams = /** @class */ (function (_super) {
    __extends(ListNetworkAccessProfileNetworkPathParams, _super);
    function ListNetworkAccessProfileNetworkPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=NetworkAccessProfileSid" }),
        __metadata("design:type", String)
    ], ListNetworkAccessProfileNetworkPathParams.prototype, "networkAccessProfileSid", void 0);
    return ListNetworkAccessProfileNetworkPathParams;
}(SpeakeasyBase));
export { ListNetworkAccessProfileNetworkPathParams };
var ListNetworkAccessProfileNetworkQueryParams = /** @class */ (function (_super) {
    __extends(ListNetworkAccessProfileNetworkQueryParams, _super);
    function ListNetworkAccessProfileNetworkQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=PageSize" }),
        __metadata("design:type", Number)
    ], ListNetworkAccessProfileNetworkQueryParams.prototype, "pageSize", void 0);
    return ListNetworkAccessProfileNetworkQueryParams;
}(SpeakeasyBase));
export { ListNetworkAccessProfileNetworkQueryParams };
var ListNetworkAccessProfileNetworkSecurity = /** @class */ (function (_super) {
    __extends(ListNetworkAccessProfileNetworkSecurity, _super);
    function ListNetworkAccessProfileNetworkSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, scheme=true;type=http;subtype=basic" }),
        __metadata("design:type", shared.SchemeAccountSidAuthToken)
    ], ListNetworkAccessProfileNetworkSecurity.prototype, "accountSidAuthToken", void 0);
    return ListNetworkAccessProfileNetworkSecurity;
}(SpeakeasyBase));
export { ListNetworkAccessProfileNetworkSecurity };
var ListNetworkAccessProfileNetworkRequest = /** @class */ (function (_super) {
    __extends(ListNetworkAccessProfileNetworkRequest, _super);
    function ListNetworkAccessProfileNetworkRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], ListNetworkAccessProfileNetworkRequest.prototype, "serverUrl", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", ListNetworkAccessProfileNetworkPathParams)
    ], ListNetworkAccessProfileNetworkRequest.prototype, "pathParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", ListNetworkAccessProfileNetworkQueryParams)
    ], ListNetworkAccessProfileNetworkRequest.prototype, "queryParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", ListNetworkAccessProfileNetworkSecurity)
    ], ListNetworkAccessProfileNetworkRequest.prototype, "security", void 0);
    return ListNetworkAccessProfileNetworkRequest;
}(SpeakeasyBase));
export { ListNetworkAccessProfileNetworkRequest };
var ListNetworkAccessProfileNetworkListNetworkAccessProfileNetworkResponseMeta = /** @class */ (function (_super) {
    __extends(ListNetworkAccessProfileNetworkListNetworkAccessProfileNetworkResponseMeta, _super);
    function ListNetworkAccessProfileNetworkListNetworkAccessProfileNetworkResponseMeta() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=first_page_url" }),
        __metadata("design:type", String)
    ], ListNetworkAccessProfileNetworkListNetworkAccessProfileNetworkResponseMeta.prototype, "firstPageUrl", void 0);
    __decorate([
        Metadata({ data: "json, name=key" }),
        __metadata("design:type", String)
    ], ListNetworkAccessProfileNetworkListNetworkAccessProfileNetworkResponseMeta.prototype, "key", void 0);
    __decorate([
        Metadata({ data: "json, name=next_page_url" }),
        __metadata("design:type", String)
    ], ListNetworkAccessProfileNetworkListNetworkAccessProfileNetworkResponseMeta.prototype, "nextPageUrl", void 0);
    __decorate([
        Metadata({ data: "json, name=page" }),
        __metadata("design:type", Number)
    ], ListNetworkAccessProfileNetworkListNetworkAccessProfileNetworkResponseMeta.prototype, "page", void 0);
    __decorate([
        Metadata({ data: "json, name=page_size" }),
        __metadata("design:type", Number)
    ], ListNetworkAccessProfileNetworkListNetworkAccessProfileNetworkResponseMeta.prototype, "pageSize", void 0);
    __decorate([
        Metadata({ data: "json, name=previous_page_url" }),
        __metadata("design:type", String)
    ], ListNetworkAccessProfileNetworkListNetworkAccessProfileNetworkResponseMeta.prototype, "previousPageUrl", void 0);
    __decorate([
        Metadata({ data: "json, name=url" }),
        __metadata("design:type", String)
    ], ListNetworkAccessProfileNetworkListNetworkAccessProfileNetworkResponseMeta.prototype, "url", void 0);
    return ListNetworkAccessProfileNetworkListNetworkAccessProfileNetworkResponseMeta;
}(SpeakeasyBase));
export { ListNetworkAccessProfileNetworkListNetworkAccessProfileNetworkResponseMeta };
var ListNetworkAccessProfileNetworkListNetworkAccessProfileNetworkResponse = /** @class */ (function (_super) {
    __extends(ListNetworkAccessProfileNetworkListNetworkAccessProfileNetworkResponse, _super);
    function ListNetworkAccessProfileNetworkListNetworkAccessProfileNetworkResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=meta" }),
        __metadata("design:type", ListNetworkAccessProfileNetworkListNetworkAccessProfileNetworkResponseMeta)
    ], ListNetworkAccessProfileNetworkListNetworkAccessProfileNetworkResponse.prototype, "meta", void 0);
    __decorate([
        Metadata({ data: "json, name=networks", elemType: shared.SupersimV1NetworkAccessProfileNetworkAccessProfileNetwork }),
        __metadata("design:type", Array)
    ], ListNetworkAccessProfileNetworkListNetworkAccessProfileNetworkResponse.prototype, "networks", void 0);
    return ListNetworkAccessProfileNetworkListNetworkAccessProfileNetworkResponse;
}(SpeakeasyBase));
export { ListNetworkAccessProfileNetworkListNetworkAccessProfileNetworkResponse };
var ListNetworkAccessProfileNetworkResponse = /** @class */ (function (_super) {
    __extends(ListNetworkAccessProfileNetworkResponse, _super);
    function ListNetworkAccessProfileNetworkResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], ListNetworkAccessProfileNetworkResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", ListNetworkAccessProfileNetworkListNetworkAccessProfileNetworkResponse)
    ], ListNetworkAccessProfileNetworkResponse.prototype, "listNetworkAccessProfileNetworkResponse", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], ListNetworkAccessProfileNetworkResponse.prototype, "statusCode", void 0);
    return ListNetworkAccessProfileNetworkResponse;
}(SpeakeasyBase));
export { ListNetworkAccessProfileNetworkResponse };
