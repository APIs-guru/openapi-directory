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
export var ListAlertServerList = [
    "https://monitor.twilio.com",
];
var ListAlertQueryParams = /** @class */ (function (_super) {
    __extends(ListAlertQueryParams, _super);
    function ListAlertQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=EndDate" }),
        __metadata("design:type", Date)
    ], ListAlertQueryParams.prototype, "endDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=LogLevel" }),
        __metadata("design:type", String)
    ], ListAlertQueryParams.prototype, "logLevel", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=PageSize" }),
        __metadata("design:type", Number)
    ], ListAlertQueryParams.prototype, "pageSize", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=StartDate" }),
        __metadata("design:type", Date)
    ], ListAlertQueryParams.prototype, "startDate", void 0);
    return ListAlertQueryParams;
}(SpeakeasyBase));
export { ListAlertQueryParams };
var ListAlertSecurity = /** @class */ (function (_super) {
    __extends(ListAlertSecurity, _super);
    function ListAlertSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=basic" }),
        __metadata("design:type", shared.SchemeAccountSidAuthToken)
    ], ListAlertSecurity.prototype, "accountSidAuthToken", void 0);
    return ListAlertSecurity;
}(SpeakeasyBase));
export { ListAlertSecurity };
var ListAlertListAlertResponseMeta = /** @class */ (function (_super) {
    __extends(ListAlertListAlertResponseMeta, _super);
    function ListAlertListAlertResponseMeta() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=first_page_url" }),
        __metadata("design:type", String)
    ], ListAlertListAlertResponseMeta.prototype, "firstPageUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=key" }),
        __metadata("design:type", String)
    ], ListAlertListAlertResponseMeta.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=next_page_url" }),
        __metadata("design:type", String)
    ], ListAlertListAlertResponseMeta.prototype, "nextPageUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=page" }),
        __metadata("design:type", Number)
    ], ListAlertListAlertResponseMeta.prototype, "page", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=page_size" }),
        __metadata("design:type", Number)
    ], ListAlertListAlertResponseMeta.prototype, "pageSize", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=previous_page_url" }),
        __metadata("design:type", String)
    ], ListAlertListAlertResponseMeta.prototype, "previousPageUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=url" }),
        __metadata("design:type", String)
    ], ListAlertListAlertResponseMeta.prototype, "url", void 0);
    return ListAlertListAlertResponseMeta;
}(SpeakeasyBase));
export { ListAlertListAlertResponseMeta };
var ListAlertListAlertResponse = /** @class */ (function (_super) {
    __extends(ListAlertListAlertResponse, _super);
    function ListAlertListAlertResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=alerts", elemType: shared.MonitorV1Alert }),
        __metadata("design:type", Array)
    ], ListAlertListAlertResponse.prototype, "alerts", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=meta" }),
        __metadata("design:type", ListAlertListAlertResponseMeta)
    ], ListAlertListAlertResponse.prototype, "meta", void 0);
    return ListAlertListAlertResponse;
}(SpeakeasyBase));
export { ListAlertListAlertResponse };
var ListAlertRequest = /** @class */ (function (_super) {
    __extends(ListAlertRequest, _super);
    function ListAlertRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], ListAlertRequest.prototype, "serverUrl", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ListAlertQueryParams)
    ], ListAlertRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ListAlertSecurity)
    ], ListAlertRequest.prototype, "security", void 0);
    return ListAlertRequest;
}(SpeakeasyBase));
export { ListAlertRequest };
var ListAlertResponse = /** @class */ (function (_super) {
    __extends(ListAlertResponse, _super);
    function ListAlertResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], ListAlertResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ListAlertListAlertResponse)
    ], ListAlertResponse.prototype, "listAlertResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], ListAlertResponse.prototype, "statusCode", void 0);
    return ListAlertResponse;
}(SpeakeasyBase));
export { ListAlertResponse };
