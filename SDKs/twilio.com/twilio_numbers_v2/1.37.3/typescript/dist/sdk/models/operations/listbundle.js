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
export var ListBundleServerList = [
    "https://numbers.twilio.com",
];
var ListBundleQueryParams = /** @class */ (function (_super) {
    __extends(ListBundleQueryParams, _super);
    function ListBundleQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=FriendlyName" }),
        __metadata("design:type", String)
    ], ListBundleQueryParams.prototype, "friendlyName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=HasValidUntilDate" }),
        __metadata("design:type", Boolean)
    ], ListBundleQueryParams.prototype, "hasValidUntilDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=IsoCountry" }),
        __metadata("design:type", String)
    ], ListBundleQueryParams.prototype, "isoCountry", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=NumberType" }),
        __metadata("design:type", String)
    ], ListBundleQueryParams.prototype, "numberType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=PageSize" }),
        __metadata("design:type", Number)
    ], ListBundleQueryParams.prototype, "pageSize", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=RegulationSid" }),
        __metadata("design:type", String)
    ], ListBundleQueryParams.prototype, "regulationSid", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=SortBy" }),
        __metadata("design:type", String)
    ], ListBundleQueryParams.prototype, "sortBy", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=SortDirection" }),
        __metadata("design:type", String)
    ], ListBundleQueryParams.prototype, "sortDirection", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Status" }),
        __metadata("design:type", String)
    ], ListBundleQueryParams.prototype, "status", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=ValidUntilDate" }),
        __metadata("design:type", Date)
    ], ListBundleQueryParams.prototype, "validUntilDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=ValidUntilDate<" }),
        __metadata("design:type", Date)
    ], ListBundleQueryParams.prototype, "validUntilDateLessThan", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=ValidUntilDate>" }),
        __metadata("design:type", Date)
    ], ListBundleQueryParams.prototype, "validUntilDateGreaterThan", void 0);
    return ListBundleQueryParams;
}(SpeakeasyBase));
export { ListBundleQueryParams };
var ListBundleSecurity = /** @class */ (function (_super) {
    __extends(ListBundleSecurity, _super);
    function ListBundleSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=basic" }),
        __metadata("design:type", shared.SchemeAccountSidAuthToken)
    ], ListBundleSecurity.prototype, "accountSidAuthToken", void 0);
    return ListBundleSecurity;
}(SpeakeasyBase));
export { ListBundleSecurity };
var ListBundleListBundleResponseMeta = /** @class */ (function (_super) {
    __extends(ListBundleListBundleResponseMeta, _super);
    function ListBundleListBundleResponseMeta() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=first_page_url" }),
        __metadata("design:type", String)
    ], ListBundleListBundleResponseMeta.prototype, "firstPageUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=key" }),
        __metadata("design:type", String)
    ], ListBundleListBundleResponseMeta.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=next_page_url" }),
        __metadata("design:type", String)
    ], ListBundleListBundleResponseMeta.prototype, "nextPageUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=page" }),
        __metadata("design:type", Number)
    ], ListBundleListBundleResponseMeta.prototype, "page", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=page_size" }),
        __metadata("design:type", Number)
    ], ListBundleListBundleResponseMeta.prototype, "pageSize", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=previous_page_url" }),
        __metadata("design:type", String)
    ], ListBundleListBundleResponseMeta.prototype, "previousPageUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=url" }),
        __metadata("design:type", String)
    ], ListBundleListBundleResponseMeta.prototype, "url", void 0);
    return ListBundleListBundleResponseMeta;
}(SpeakeasyBase));
export { ListBundleListBundleResponseMeta };
var ListBundleListBundleResponse = /** @class */ (function (_super) {
    __extends(ListBundleListBundleResponse, _super);
    function ListBundleListBundleResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=meta" }),
        __metadata("design:type", ListBundleListBundleResponseMeta)
    ], ListBundleListBundleResponse.prototype, "meta", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=results", elemType: shared.NumbersV2RegulatoryComplianceBundle }),
        __metadata("design:type", Array)
    ], ListBundleListBundleResponse.prototype, "results", void 0);
    return ListBundleListBundleResponse;
}(SpeakeasyBase));
export { ListBundleListBundleResponse };
var ListBundleRequest = /** @class */ (function (_super) {
    __extends(ListBundleRequest, _super);
    function ListBundleRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], ListBundleRequest.prototype, "serverUrl", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ListBundleQueryParams)
    ], ListBundleRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ListBundleSecurity)
    ], ListBundleRequest.prototype, "security", void 0);
    return ListBundleRequest;
}(SpeakeasyBase));
export { ListBundleRequest };
var ListBundleResponse = /** @class */ (function (_super) {
    __extends(ListBundleResponse, _super);
    function ListBundleResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], ListBundleResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ListBundleListBundleResponse)
    ], ListBundleResponse.prototype, "listBundleResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], ListBundleResponse.prototype, "statusCode", void 0);
    return ListBundleResponse;
}(SpeakeasyBase));
export { ListBundleResponse };
