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
export var LISTDAY_SERVERS = [
    "https://bulkexports.twilio.com",
];
var ListDayPathParams = /** @class */ (function (_super) {
    __extends(ListDayPathParams, _super);
    function ListDayPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=ResourceType" }),
        __metadata("design:type", String)
    ], ListDayPathParams.prototype, "resourceType", void 0);
    return ListDayPathParams;
}(SpeakeasyBase));
export { ListDayPathParams };
var ListDayQueryParams = /** @class */ (function (_super) {
    __extends(ListDayQueryParams, _super);
    function ListDayQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=PageSize" }),
        __metadata("design:type", Number)
    ], ListDayQueryParams.prototype, "pageSize", void 0);
    return ListDayQueryParams;
}(SpeakeasyBase));
export { ListDayQueryParams };
var ListDaySecurity = /** @class */ (function (_super) {
    __extends(ListDaySecurity, _super);
    function ListDaySecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, scheme=true;type=http;subtype=basic" }),
        __metadata("design:type", shared.SchemeAccountSidAuthToken)
    ], ListDaySecurity.prototype, "accountSidAuthToken", void 0);
    return ListDaySecurity;
}(SpeakeasyBase));
export { ListDaySecurity };
var ListDayRequest = /** @class */ (function (_super) {
    __extends(ListDayRequest, _super);
    function ListDayRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], ListDayRequest.prototype, "serverUrl", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", ListDayPathParams)
    ], ListDayRequest.prototype, "pathParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", ListDayQueryParams)
    ], ListDayRequest.prototype, "queryParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", ListDaySecurity)
    ], ListDayRequest.prototype, "security", void 0);
    return ListDayRequest;
}(SpeakeasyBase));
export { ListDayRequest };
var ListDayListDayResponseMeta = /** @class */ (function (_super) {
    __extends(ListDayListDayResponseMeta, _super);
    function ListDayListDayResponseMeta() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=first_page_url" }),
        __metadata("design:type", String)
    ], ListDayListDayResponseMeta.prototype, "firstPageUrl", void 0);
    __decorate([
        Metadata({ data: "json, name=key" }),
        __metadata("design:type", String)
    ], ListDayListDayResponseMeta.prototype, "key", void 0);
    __decorate([
        Metadata({ data: "json, name=next_page_url" }),
        __metadata("design:type", String)
    ], ListDayListDayResponseMeta.prototype, "nextPageUrl", void 0);
    __decorate([
        Metadata({ data: "json, name=page" }),
        __metadata("design:type", Number)
    ], ListDayListDayResponseMeta.prototype, "page", void 0);
    __decorate([
        Metadata({ data: "json, name=page_size" }),
        __metadata("design:type", Number)
    ], ListDayListDayResponseMeta.prototype, "pageSize", void 0);
    __decorate([
        Metadata({ data: "json, name=previous_page_url" }),
        __metadata("design:type", String)
    ], ListDayListDayResponseMeta.prototype, "previousPageUrl", void 0);
    __decorate([
        Metadata({ data: "json, name=url" }),
        __metadata("design:type", String)
    ], ListDayListDayResponseMeta.prototype, "url", void 0);
    return ListDayListDayResponseMeta;
}(SpeakeasyBase));
export { ListDayListDayResponseMeta };
var ListDayListDayResponse = /** @class */ (function (_super) {
    __extends(ListDayListDayResponse, _super);
    function ListDayListDayResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=days", elemType: shared.BulkexportsV1ExportDay }),
        __metadata("design:type", Array)
    ], ListDayListDayResponse.prototype, "days", void 0);
    __decorate([
        Metadata({ data: "json, name=meta" }),
        __metadata("design:type", ListDayListDayResponseMeta)
    ], ListDayListDayResponse.prototype, "meta", void 0);
    return ListDayListDayResponse;
}(SpeakeasyBase));
export { ListDayListDayResponse };
var ListDayResponse = /** @class */ (function (_super) {
    __extends(ListDayResponse, _super);
    function ListDayResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], ListDayResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", ListDayListDayResponse)
    ], ListDayResponse.prototype, "listDayResponse", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], ListDayResponse.prototype, "statusCode", void 0);
    return ListDayResponse;
}(SpeakeasyBase));
export { ListDayResponse };
