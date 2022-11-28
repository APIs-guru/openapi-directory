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
export var ListPoliciesServerList = [
    "https://trusthub.twilio.com",
];
var ListPoliciesQueryParams = /** @class */ (function (_super) {
    __extends(ListPoliciesQueryParams, _super);
    function ListPoliciesQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=PageSize" }),
        __metadata("design:type", Number)
    ], ListPoliciesQueryParams.prototype, "pageSize", void 0);
    return ListPoliciesQueryParams;
}(SpeakeasyBase));
export { ListPoliciesQueryParams };
var ListPoliciesSecurity = /** @class */ (function (_super) {
    __extends(ListPoliciesSecurity, _super);
    function ListPoliciesSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=basic" }),
        __metadata("design:type", shared.SchemeAccountSidAuthToken)
    ], ListPoliciesSecurity.prototype, "accountSidAuthToken", void 0);
    return ListPoliciesSecurity;
}(SpeakeasyBase));
export { ListPoliciesSecurity };
var ListPoliciesListPoliciesResponseMeta = /** @class */ (function (_super) {
    __extends(ListPoliciesListPoliciesResponseMeta, _super);
    function ListPoliciesListPoliciesResponseMeta() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=first_page_url" }),
        __metadata("design:type", String)
    ], ListPoliciesListPoliciesResponseMeta.prototype, "firstPageUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=key" }),
        __metadata("design:type", String)
    ], ListPoliciesListPoliciesResponseMeta.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=next_page_url" }),
        __metadata("design:type", String)
    ], ListPoliciesListPoliciesResponseMeta.prototype, "nextPageUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=page" }),
        __metadata("design:type", Number)
    ], ListPoliciesListPoliciesResponseMeta.prototype, "page", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=page_size" }),
        __metadata("design:type", Number)
    ], ListPoliciesListPoliciesResponseMeta.prototype, "pageSize", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=previous_page_url" }),
        __metadata("design:type", String)
    ], ListPoliciesListPoliciesResponseMeta.prototype, "previousPageUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=url" }),
        __metadata("design:type", String)
    ], ListPoliciesListPoliciesResponseMeta.prototype, "url", void 0);
    return ListPoliciesListPoliciesResponseMeta;
}(SpeakeasyBase));
export { ListPoliciesListPoliciesResponseMeta };
var ListPoliciesListPoliciesResponse = /** @class */ (function (_super) {
    __extends(ListPoliciesListPoliciesResponse, _super);
    function ListPoliciesListPoliciesResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=meta" }),
        __metadata("design:type", ListPoliciesListPoliciesResponseMeta)
    ], ListPoliciesListPoliciesResponse.prototype, "meta", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=results", elemType: shared.TrusthubV1Policies }),
        __metadata("design:type", Array)
    ], ListPoliciesListPoliciesResponse.prototype, "results", void 0);
    return ListPoliciesListPoliciesResponse;
}(SpeakeasyBase));
export { ListPoliciesListPoliciesResponse };
var ListPoliciesRequest = /** @class */ (function (_super) {
    __extends(ListPoliciesRequest, _super);
    function ListPoliciesRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], ListPoliciesRequest.prototype, "serverUrl", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ListPoliciesQueryParams)
    ], ListPoliciesRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ListPoliciesSecurity)
    ], ListPoliciesRequest.prototype, "security", void 0);
    return ListPoliciesRequest;
}(SpeakeasyBase));
export { ListPoliciesRequest };
var ListPoliciesResponse = /** @class */ (function (_super) {
    __extends(ListPoliciesResponse, _super);
    function ListPoliciesResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], ListPoliciesResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ListPoliciesListPoliciesResponse)
    ], ListPoliciesResponse.prototype, "listPoliciesResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], ListPoliciesResponse.prototype, "statusCode", void 0);
    return ListPoliciesResponse;
}(SpeakeasyBase));
export { ListPoliciesResponse };
