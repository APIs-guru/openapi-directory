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
export var LISTSYNCSYNCMAP_SERVERS = [
    "https://preview.twilio.com",
];
var ListSyncSyncMapPathParams = /** @class */ (function (_super) {
    __extends(ListSyncSyncMapPathParams, _super);
    function ListSyncSyncMapPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=ServiceSid" }),
        __metadata("design:type", String)
    ], ListSyncSyncMapPathParams.prototype, "serviceSid", void 0);
    return ListSyncSyncMapPathParams;
}(SpeakeasyBase));
export { ListSyncSyncMapPathParams };
var ListSyncSyncMapQueryParams = /** @class */ (function (_super) {
    __extends(ListSyncSyncMapQueryParams, _super);
    function ListSyncSyncMapQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=PageSize" }),
        __metadata("design:type", Number)
    ], ListSyncSyncMapQueryParams.prototype, "pageSize", void 0);
    return ListSyncSyncMapQueryParams;
}(SpeakeasyBase));
export { ListSyncSyncMapQueryParams };
var ListSyncSyncMapSecurity = /** @class */ (function (_super) {
    __extends(ListSyncSyncMapSecurity, _super);
    function ListSyncSyncMapSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, scheme=true;type=http;subtype=basic" }),
        __metadata("design:type", shared.SchemeAccountSidAuthToken)
    ], ListSyncSyncMapSecurity.prototype, "accountSidAuthToken", void 0);
    return ListSyncSyncMapSecurity;
}(SpeakeasyBase));
export { ListSyncSyncMapSecurity };
var ListSyncSyncMapRequest = /** @class */ (function (_super) {
    __extends(ListSyncSyncMapRequest, _super);
    function ListSyncSyncMapRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], ListSyncSyncMapRequest.prototype, "serverUrl", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", ListSyncSyncMapPathParams)
    ], ListSyncSyncMapRequest.prototype, "pathParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", ListSyncSyncMapQueryParams)
    ], ListSyncSyncMapRequest.prototype, "queryParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", ListSyncSyncMapSecurity)
    ], ListSyncSyncMapRequest.prototype, "security", void 0);
    return ListSyncSyncMapRequest;
}(SpeakeasyBase));
export { ListSyncSyncMapRequest };
var ListSyncSyncMapListSyncSyncMapResponseMeta = /** @class */ (function (_super) {
    __extends(ListSyncSyncMapListSyncSyncMapResponseMeta, _super);
    function ListSyncSyncMapListSyncSyncMapResponseMeta() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=first_page_url" }),
        __metadata("design:type", String)
    ], ListSyncSyncMapListSyncSyncMapResponseMeta.prototype, "firstPageUrl", void 0);
    __decorate([
        Metadata({ data: "json, name=key" }),
        __metadata("design:type", String)
    ], ListSyncSyncMapListSyncSyncMapResponseMeta.prototype, "key", void 0);
    __decorate([
        Metadata({ data: "json, name=next_page_url" }),
        __metadata("design:type", String)
    ], ListSyncSyncMapListSyncSyncMapResponseMeta.prototype, "nextPageUrl", void 0);
    __decorate([
        Metadata({ data: "json, name=page" }),
        __metadata("design:type", Number)
    ], ListSyncSyncMapListSyncSyncMapResponseMeta.prototype, "page", void 0);
    __decorate([
        Metadata({ data: "json, name=page_size" }),
        __metadata("design:type", Number)
    ], ListSyncSyncMapListSyncSyncMapResponseMeta.prototype, "pageSize", void 0);
    __decorate([
        Metadata({ data: "json, name=previous_page_url" }),
        __metadata("design:type", String)
    ], ListSyncSyncMapListSyncSyncMapResponseMeta.prototype, "previousPageUrl", void 0);
    __decorate([
        Metadata({ data: "json, name=url" }),
        __metadata("design:type", String)
    ], ListSyncSyncMapListSyncSyncMapResponseMeta.prototype, "url", void 0);
    return ListSyncSyncMapListSyncSyncMapResponseMeta;
}(SpeakeasyBase));
export { ListSyncSyncMapListSyncSyncMapResponseMeta };
var ListSyncSyncMapListSyncSyncMapResponse = /** @class */ (function (_super) {
    __extends(ListSyncSyncMapListSyncSyncMapResponse, _super);
    function ListSyncSyncMapListSyncSyncMapResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=maps", elemType: shared.PreviewSyncServiceSyncMap }),
        __metadata("design:type", Array)
    ], ListSyncSyncMapListSyncSyncMapResponse.prototype, "maps", void 0);
    __decorate([
        Metadata({ data: "json, name=meta" }),
        __metadata("design:type", ListSyncSyncMapListSyncSyncMapResponseMeta)
    ], ListSyncSyncMapListSyncSyncMapResponse.prototype, "meta", void 0);
    return ListSyncSyncMapListSyncSyncMapResponse;
}(SpeakeasyBase));
export { ListSyncSyncMapListSyncSyncMapResponse };
var ListSyncSyncMapResponse = /** @class */ (function (_super) {
    __extends(ListSyncSyncMapResponse, _super);
    function ListSyncSyncMapResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], ListSyncSyncMapResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", ListSyncSyncMapListSyncSyncMapResponse)
    ], ListSyncSyncMapResponse.prototype, "listSyncSyncMapResponse", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], ListSyncSyncMapResponse.prototype, "statusCode", void 0);
    return ListSyncSyncMapResponse;
}(SpeakeasyBase));
export { ListSyncSyncMapResponse };
