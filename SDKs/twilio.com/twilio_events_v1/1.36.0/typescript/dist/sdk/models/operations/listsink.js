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
export var LISTSINK_SERVERS = [
    "https://events.twilio.com",
];
var ListSinkQueryParams = /** @class */ (function (_super) {
    __extends(ListSinkQueryParams, _super);
    function ListSinkQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=InUse" }),
        __metadata("design:type", Boolean)
    ], ListSinkQueryParams.prototype, "inUse", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=PageSize" }),
        __metadata("design:type", Number)
    ], ListSinkQueryParams.prototype, "pageSize", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=Status" }),
        __metadata("design:type", String)
    ], ListSinkQueryParams.prototype, "status", void 0);
    return ListSinkQueryParams;
}(SpeakeasyBase));
export { ListSinkQueryParams };
var ListSinkSecurity = /** @class */ (function (_super) {
    __extends(ListSinkSecurity, _super);
    function ListSinkSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, scheme=true;type=http;subtype=basic" }),
        __metadata("design:type", shared.SchemeAccountSidAuthToken)
    ], ListSinkSecurity.prototype, "accountSidAuthToken", void 0);
    return ListSinkSecurity;
}(SpeakeasyBase));
export { ListSinkSecurity };
var ListSinkRequest = /** @class */ (function (_super) {
    __extends(ListSinkRequest, _super);
    function ListSinkRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], ListSinkRequest.prototype, "serverUrl", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", ListSinkQueryParams)
    ], ListSinkRequest.prototype, "queryParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", ListSinkSecurity)
    ], ListSinkRequest.prototype, "security", void 0);
    return ListSinkRequest;
}(SpeakeasyBase));
export { ListSinkRequest };
var ListSinkListSinkResponseMeta = /** @class */ (function (_super) {
    __extends(ListSinkListSinkResponseMeta, _super);
    function ListSinkListSinkResponseMeta() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=first_page_url" }),
        __metadata("design:type", String)
    ], ListSinkListSinkResponseMeta.prototype, "firstPageUrl", void 0);
    __decorate([
        Metadata({ data: "json, name=key" }),
        __metadata("design:type", String)
    ], ListSinkListSinkResponseMeta.prototype, "key", void 0);
    __decorate([
        Metadata({ data: "json, name=next_page_url" }),
        __metadata("design:type", String)
    ], ListSinkListSinkResponseMeta.prototype, "nextPageUrl", void 0);
    __decorate([
        Metadata({ data: "json, name=page" }),
        __metadata("design:type", Number)
    ], ListSinkListSinkResponseMeta.prototype, "page", void 0);
    __decorate([
        Metadata({ data: "json, name=page_size" }),
        __metadata("design:type", Number)
    ], ListSinkListSinkResponseMeta.prototype, "pageSize", void 0);
    __decorate([
        Metadata({ data: "json, name=previous_page_url" }),
        __metadata("design:type", String)
    ], ListSinkListSinkResponseMeta.prototype, "previousPageUrl", void 0);
    __decorate([
        Metadata({ data: "json, name=url" }),
        __metadata("design:type", String)
    ], ListSinkListSinkResponseMeta.prototype, "url", void 0);
    return ListSinkListSinkResponseMeta;
}(SpeakeasyBase));
export { ListSinkListSinkResponseMeta };
var ListSinkListSinkResponse = /** @class */ (function (_super) {
    __extends(ListSinkListSinkResponse, _super);
    function ListSinkListSinkResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=meta" }),
        __metadata("design:type", ListSinkListSinkResponseMeta)
    ], ListSinkListSinkResponse.prototype, "meta", void 0);
    __decorate([
        Metadata({ data: "json, name=sinks", elemType: shared.EventsV1Sink }),
        __metadata("design:type", Array)
    ], ListSinkListSinkResponse.prototype, "sinks", void 0);
    return ListSinkListSinkResponse;
}(SpeakeasyBase));
export { ListSinkListSinkResponse };
var ListSinkResponse = /** @class */ (function (_super) {
    __extends(ListSinkResponse, _super);
    function ListSinkResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], ListSinkResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", ListSinkListSinkResponse)
    ], ListSinkResponse.prototype, "listSinkResponse", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], ListSinkResponse.prototype, "statusCode", void 0);
    return ListSinkResponse;
}(SpeakeasyBase));
export { ListSinkResponse };
