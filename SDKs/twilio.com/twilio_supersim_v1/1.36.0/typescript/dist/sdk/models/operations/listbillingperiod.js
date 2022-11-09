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
export var LISTBILLINGPERIOD_SERVERS = [
    "https://supersim.twilio.com",
];
var ListBillingPeriodPathParams = /** @class */ (function (_super) {
    __extends(ListBillingPeriodPathParams, _super);
    function ListBillingPeriodPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=SimSid" }),
        __metadata("design:type", String)
    ], ListBillingPeriodPathParams.prototype, "simSid", void 0);
    return ListBillingPeriodPathParams;
}(SpeakeasyBase));
export { ListBillingPeriodPathParams };
var ListBillingPeriodQueryParams = /** @class */ (function (_super) {
    __extends(ListBillingPeriodQueryParams, _super);
    function ListBillingPeriodQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=PageSize" }),
        __metadata("design:type", Number)
    ], ListBillingPeriodQueryParams.prototype, "pageSize", void 0);
    return ListBillingPeriodQueryParams;
}(SpeakeasyBase));
export { ListBillingPeriodQueryParams };
var ListBillingPeriodSecurity = /** @class */ (function (_super) {
    __extends(ListBillingPeriodSecurity, _super);
    function ListBillingPeriodSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, scheme=true;type=http;subtype=basic" }),
        __metadata("design:type", shared.SchemeAccountSidAuthToken)
    ], ListBillingPeriodSecurity.prototype, "accountSidAuthToken", void 0);
    return ListBillingPeriodSecurity;
}(SpeakeasyBase));
export { ListBillingPeriodSecurity };
var ListBillingPeriodRequest = /** @class */ (function (_super) {
    __extends(ListBillingPeriodRequest, _super);
    function ListBillingPeriodRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], ListBillingPeriodRequest.prototype, "serverUrl", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", ListBillingPeriodPathParams)
    ], ListBillingPeriodRequest.prototype, "pathParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", ListBillingPeriodQueryParams)
    ], ListBillingPeriodRequest.prototype, "queryParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", ListBillingPeriodSecurity)
    ], ListBillingPeriodRequest.prototype, "security", void 0);
    return ListBillingPeriodRequest;
}(SpeakeasyBase));
export { ListBillingPeriodRequest };
var ListBillingPeriodListBillingPeriodResponseMeta = /** @class */ (function (_super) {
    __extends(ListBillingPeriodListBillingPeriodResponseMeta, _super);
    function ListBillingPeriodListBillingPeriodResponseMeta() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=first_page_url" }),
        __metadata("design:type", String)
    ], ListBillingPeriodListBillingPeriodResponseMeta.prototype, "firstPageUrl", void 0);
    __decorate([
        Metadata({ data: "json, name=key" }),
        __metadata("design:type", String)
    ], ListBillingPeriodListBillingPeriodResponseMeta.prototype, "key", void 0);
    __decorate([
        Metadata({ data: "json, name=next_page_url" }),
        __metadata("design:type", String)
    ], ListBillingPeriodListBillingPeriodResponseMeta.prototype, "nextPageUrl", void 0);
    __decorate([
        Metadata({ data: "json, name=page" }),
        __metadata("design:type", Number)
    ], ListBillingPeriodListBillingPeriodResponseMeta.prototype, "page", void 0);
    __decorate([
        Metadata({ data: "json, name=page_size" }),
        __metadata("design:type", Number)
    ], ListBillingPeriodListBillingPeriodResponseMeta.prototype, "pageSize", void 0);
    __decorate([
        Metadata({ data: "json, name=previous_page_url" }),
        __metadata("design:type", String)
    ], ListBillingPeriodListBillingPeriodResponseMeta.prototype, "previousPageUrl", void 0);
    __decorate([
        Metadata({ data: "json, name=url" }),
        __metadata("design:type", String)
    ], ListBillingPeriodListBillingPeriodResponseMeta.prototype, "url", void 0);
    return ListBillingPeriodListBillingPeriodResponseMeta;
}(SpeakeasyBase));
export { ListBillingPeriodListBillingPeriodResponseMeta };
var ListBillingPeriodListBillingPeriodResponse = /** @class */ (function (_super) {
    __extends(ListBillingPeriodListBillingPeriodResponse, _super);
    function ListBillingPeriodListBillingPeriodResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=billing_periods", elemType: shared.SupersimV1SimBillingPeriod }),
        __metadata("design:type", Array)
    ], ListBillingPeriodListBillingPeriodResponse.prototype, "billingPeriods", void 0);
    __decorate([
        Metadata({ data: "json, name=meta" }),
        __metadata("design:type", ListBillingPeriodListBillingPeriodResponseMeta)
    ], ListBillingPeriodListBillingPeriodResponse.prototype, "meta", void 0);
    return ListBillingPeriodListBillingPeriodResponse;
}(SpeakeasyBase));
export { ListBillingPeriodListBillingPeriodResponse };
var ListBillingPeriodResponse = /** @class */ (function (_super) {
    __extends(ListBillingPeriodResponse, _super);
    function ListBillingPeriodResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], ListBillingPeriodResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", ListBillingPeriodListBillingPeriodResponse)
    ], ListBillingPeriodResponse.prototype, "listBillingPeriodResponse", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], ListBillingPeriodResponse.prototype, "statusCode", void 0);
    return ListBillingPeriodResponse;
}(SpeakeasyBase));
export { ListBillingPeriodResponse };
