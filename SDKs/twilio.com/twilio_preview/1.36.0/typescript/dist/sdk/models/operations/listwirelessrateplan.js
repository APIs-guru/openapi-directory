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
export var LISTWIRELESSRATEPLAN_SERVERS = [
    "https://preview.twilio.com",
];
var ListWirelessRatePlanQueryParams = /** @class */ (function (_super) {
    __extends(ListWirelessRatePlanQueryParams, _super);
    function ListWirelessRatePlanQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=PageSize" }),
        __metadata("design:type", Number)
    ], ListWirelessRatePlanQueryParams.prototype, "pageSize", void 0);
    return ListWirelessRatePlanQueryParams;
}(SpeakeasyBase));
export { ListWirelessRatePlanQueryParams };
var ListWirelessRatePlanSecurity = /** @class */ (function (_super) {
    __extends(ListWirelessRatePlanSecurity, _super);
    function ListWirelessRatePlanSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, scheme=true;type=http;subtype=basic" }),
        __metadata("design:type", shared.SchemeAccountSidAuthToken)
    ], ListWirelessRatePlanSecurity.prototype, "accountSidAuthToken", void 0);
    return ListWirelessRatePlanSecurity;
}(SpeakeasyBase));
export { ListWirelessRatePlanSecurity };
var ListWirelessRatePlanRequest = /** @class */ (function (_super) {
    __extends(ListWirelessRatePlanRequest, _super);
    function ListWirelessRatePlanRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], ListWirelessRatePlanRequest.prototype, "serverUrl", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", ListWirelessRatePlanQueryParams)
    ], ListWirelessRatePlanRequest.prototype, "queryParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", ListWirelessRatePlanSecurity)
    ], ListWirelessRatePlanRequest.prototype, "security", void 0);
    return ListWirelessRatePlanRequest;
}(SpeakeasyBase));
export { ListWirelessRatePlanRequest };
var ListWirelessRatePlanListWirelessRatePlanResponseMeta = /** @class */ (function (_super) {
    __extends(ListWirelessRatePlanListWirelessRatePlanResponseMeta, _super);
    function ListWirelessRatePlanListWirelessRatePlanResponseMeta() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=first_page_url" }),
        __metadata("design:type", String)
    ], ListWirelessRatePlanListWirelessRatePlanResponseMeta.prototype, "firstPageUrl", void 0);
    __decorate([
        Metadata({ data: "json, name=key" }),
        __metadata("design:type", String)
    ], ListWirelessRatePlanListWirelessRatePlanResponseMeta.prototype, "key", void 0);
    __decorate([
        Metadata({ data: "json, name=next_page_url" }),
        __metadata("design:type", String)
    ], ListWirelessRatePlanListWirelessRatePlanResponseMeta.prototype, "nextPageUrl", void 0);
    __decorate([
        Metadata({ data: "json, name=page" }),
        __metadata("design:type", Number)
    ], ListWirelessRatePlanListWirelessRatePlanResponseMeta.prototype, "page", void 0);
    __decorate([
        Metadata({ data: "json, name=page_size" }),
        __metadata("design:type", Number)
    ], ListWirelessRatePlanListWirelessRatePlanResponseMeta.prototype, "pageSize", void 0);
    __decorate([
        Metadata({ data: "json, name=previous_page_url" }),
        __metadata("design:type", String)
    ], ListWirelessRatePlanListWirelessRatePlanResponseMeta.prototype, "previousPageUrl", void 0);
    __decorate([
        Metadata({ data: "json, name=url" }),
        __metadata("design:type", String)
    ], ListWirelessRatePlanListWirelessRatePlanResponseMeta.prototype, "url", void 0);
    return ListWirelessRatePlanListWirelessRatePlanResponseMeta;
}(SpeakeasyBase));
export { ListWirelessRatePlanListWirelessRatePlanResponseMeta };
var ListWirelessRatePlanListWirelessRatePlanResponse = /** @class */ (function (_super) {
    __extends(ListWirelessRatePlanListWirelessRatePlanResponse, _super);
    function ListWirelessRatePlanListWirelessRatePlanResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=meta" }),
        __metadata("design:type", ListWirelessRatePlanListWirelessRatePlanResponseMeta)
    ], ListWirelessRatePlanListWirelessRatePlanResponse.prototype, "meta", void 0);
    __decorate([
        Metadata({ data: "json, name=rate_plans", elemType: shared.PreviewWirelessRatePlan }),
        __metadata("design:type", Array)
    ], ListWirelessRatePlanListWirelessRatePlanResponse.prototype, "ratePlans", void 0);
    return ListWirelessRatePlanListWirelessRatePlanResponse;
}(SpeakeasyBase));
export { ListWirelessRatePlanListWirelessRatePlanResponse };
var ListWirelessRatePlanResponse = /** @class */ (function (_super) {
    __extends(ListWirelessRatePlanResponse, _super);
    function ListWirelessRatePlanResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], ListWirelessRatePlanResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", ListWirelessRatePlanListWirelessRatePlanResponse)
    ], ListWirelessRatePlanResponse.prototype, "listWirelessRatePlanResponse", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], ListWirelessRatePlanResponse.prototype, "statusCode", void 0);
    return ListWirelessRatePlanResponse;
}(SpeakeasyBase));
export { ListWirelessRatePlanResponse };
