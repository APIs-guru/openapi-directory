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
export var ListSipDomainServerList = [
    "https://api.twilio.com",
];
var ListSipDomainPathParams = /** @class */ (function (_super) {
    __extends(ListSipDomainPathParams, _super);
    function ListSipDomainPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=AccountSid" }),
        __metadata("design:type", String)
    ], ListSipDomainPathParams.prototype, "accountSid", void 0);
    return ListSipDomainPathParams;
}(SpeakeasyBase));
export { ListSipDomainPathParams };
var ListSipDomainQueryParams = /** @class */ (function (_super) {
    __extends(ListSipDomainQueryParams, _super);
    function ListSipDomainQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=PageSize" }),
        __metadata("design:type", Number)
    ], ListSipDomainQueryParams.prototype, "pageSize", void 0);
    return ListSipDomainQueryParams;
}(SpeakeasyBase));
export { ListSipDomainQueryParams };
var ListSipDomainSecurity = /** @class */ (function (_super) {
    __extends(ListSipDomainSecurity, _super);
    function ListSipDomainSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=basic" }),
        __metadata("design:type", shared.SchemeAccountSidAuthToken)
    ], ListSipDomainSecurity.prototype, "accountSidAuthToken", void 0);
    return ListSipDomainSecurity;
}(SpeakeasyBase));
export { ListSipDomainSecurity };
var ListSipDomainListSipDomainResponse = /** @class */ (function (_super) {
    __extends(ListSipDomainListSipDomainResponse, _super);
    function ListSipDomainListSipDomainResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=domains", elemType: shared.ApiV2010AccountSipSipDomain }),
        __metadata("design:type", Array)
    ], ListSipDomainListSipDomainResponse.prototype, "domains", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=end" }),
        __metadata("design:type", Number)
    ], ListSipDomainListSipDomainResponse.prototype, "end", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=first_page_uri" }),
        __metadata("design:type", String)
    ], ListSipDomainListSipDomainResponse.prototype, "firstPageUri", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=next_page_uri" }),
        __metadata("design:type", String)
    ], ListSipDomainListSipDomainResponse.prototype, "nextPageUri", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=page" }),
        __metadata("design:type", Number)
    ], ListSipDomainListSipDomainResponse.prototype, "page", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=page_size" }),
        __metadata("design:type", Number)
    ], ListSipDomainListSipDomainResponse.prototype, "pageSize", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=previous_page_uri" }),
        __metadata("design:type", String)
    ], ListSipDomainListSipDomainResponse.prototype, "previousPageUri", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=start" }),
        __metadata("design:type", Number)
    ], ListSipDomainListSipDomainResponse.prototype, "start", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=uri" }),
        __metadata("design:type", String)
    ], ListSipDomainListSipDomainResponse.prototype, "uri", void 0);
    return ListSipDomainListSipDomainResponse;
}(SpeakeasyBase));
export { ListSipDomainListSipDomainResponse };
var ListSipDomainRequest = /** @class */ (function (_super) {
    __extends(ListSipDomainRequest, _super);
    function ListSipDomainRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], ListSipDomainRequest.prototype, "serverUrl", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ListSipDomainPathParams)
    ], ListSipDomainRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ListSipDomainQueryParams)
    ], ListSipDomainRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ListSipDomainSecurity)
    ], ListSipDomainRequest.prototype, "security", void 0);
    return ListSipDomainRequest;
}(SpeakeasyBase));
export { ListSipDomainRequest };
var ListSipDomainResponse = /** @class */ (function (_super) {
    __extends(ListSipDomainResponse, _super);
    function ListSipDomainResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], ListSipDomainResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ListSipDomainListSipDomainResponse)
    ], ListSipDomainResponse.prototype, "listSipDomainResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], ListSipDomainResponse.prototype, "statusCode", void 0);
    return ListSipDomainResponse;
}(SpeakeasyBase));
export { ListSipDomainResponse };
