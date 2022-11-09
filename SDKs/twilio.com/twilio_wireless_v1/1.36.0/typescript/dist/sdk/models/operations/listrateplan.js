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
export var LISTRATEPLAN_SERVERS = [
    "https://wireless.twilio.com",
];
var ListRatePlanQueryParams = /** @class */ (function (_super) {
    __extends(ListRatePlanQueryParams, _super);
    function ListRatePlanQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=PageSize" }),
        __metadata("design:type", Number)
    ], ListRatePlanQueryParams.prototype, "pageSize", void 0);
    return ListRatePlanQueryParams;
}(SpeakeasyBase));
export { ListRatePlanQueryParams };
var ListRatePlanSecurity = /** @class */ (function (_super) {
    __extends(ListRatePlanSecurity, _super);
    function ListRatePlanSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, scheme=true;type=http;subtype=basic" }),
        __metadata("design:type", shared.SchemeAccountSidAuthToken)
    ], ListRatePlanSecurity.prototype, "accountSidAuthToken", void 0);
    return ListRatePlanSecurity;
}(SpeakeasyBase));
export { ListRatePlanSecurity };
var ListRatePlanRequest = /** @class */ (function (_super) {
    __extends(ListRatePlanRequest, _super);
    function ListRatePlanRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], ListRatePlanRequest.prototype, "serverUrl", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", ListRatePlanQueryParams)
    ], ListRatePlanRequest.prototype, "queryParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", ListRatePlanSecurity)
    ], ListRatePlanRequest.prototype, "security", void 0);
    return ListRatePlanRequest;
}(SpeakeasyBase));
export { ListRatePlanRequest };
var ListRatePlanListRatePlanResponseMeta = /** @class */ (function (_super) {
    __extends(ListRatePlanListRatePlanResponseMeta, _super);
    function ListRatePlanListRatePlanResponseMeta() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=first_page_url" }),
        __metadata("design:type", String)
    ], ListRatePlanListRatePlanResponseMeta.prototype, "firstPageUrl", void 0);
    __decorate([
        Metadata({ data: "json, name=key" }),
        __metadata("design:type", String)
    ], ListRatePlanListRatePlanResponseMeta.prototype, "key", void 0);
    __decorate([
        Metadata({ data: "json, name=next_page_url" }),
        __metadata("design:type", String)
    ], ListRatePlanListRatePlanResponseMeta.prototype, "nextPageUrl", void 0);
    __decorate([
        Metadata({ data: "json, name=page" }),
        __metadata("design:type", Number)
    ], ListRatePlanListRatePlanResponseMeta.prototype, "page", void 0);
    __decorate([
        Metadata({ data: "json, name=page_size" }),
        __metadata("design:type", Number)
    ], ListRatePlanListRatePlanResponseMeta.prototype, "pageSize", void 0);
    __decorate([
        Metadata({ data: "json, name=previous_page_url" }),
        __metadata("design:type", String)
    ], ListRatePlanListRatePlanResponseMeta.prototype, "previousPageUrl", void 0);
    __decorate([
        Metadata({ data: "json, name=url" }),
        __metadata("design:type", String)
    ], ListRatePlanListRatePlanResponseMeta.prototype, "url", void 0);
    return ListRatePlanListRatePlanResponseMeta;
}(SpeakeasyBase));
export { ListRatePlanListRatePlanResponseMeta };
var ListRatePlanListRatePlanResponse = /** @class */ (function (_super) {
    __extends(ListRatePlanListRatePlanResponse, _super);
    function ListRatePlanListRatePlanResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=meta" }),
        __metadata("design:type", ListRatePlanListRatePlanResponseMeta)
    ], ListRatePlanListRatePlanResponse.prototype, "meta", void 0);
    __decorate([
        Metadata({ data: "json, name=rate_plans", elemType: shared.WirelessV1RatePlan }),
        __metadata("design:type", Array)
    ], ListRatePlanListRatePlanResponse.prototype, "ratePlans", void 0);
    return ListRatePlanListRatePlanResponse;
}(SpeakeasyBase));
export { ListRatePlanListRatePlanResponse };
var ListRatePlanResponse = /** @class */ (function (_super) {
    __extends(ListRatePlanResponse, _super);
    function ListRatePlanResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], ListRatePlanResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", ListRatePlanListRatePlanResponse)
    ], ListRatePlanResponse.prototype, "listRatePlanResponse", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], ListRatePlanResponse.prototype, "statusCode", void 0);
    return ListRatePlanResponse;
}(SpeakeasyBase));
export { ListRatePlanResponse };
