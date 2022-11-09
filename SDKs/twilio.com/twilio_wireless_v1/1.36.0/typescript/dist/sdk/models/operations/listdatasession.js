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
export var LISTDATASESSION_SERVERS = [
    "https://wireless.twilio.com",
];
var ListDataSessionPathParams = /** @class */ (function (_super) {
    __extends(ListDataSessionPathParams, _super);
    function ListDataSessionPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=SimSid" }),
        __metadata("design:type", String)
    ], ListDataSessionPathParams.prototype, "simSid", void 0);
    return ListDataSessionPathParams;
}(SpeakeasyBase));
export { ListDataSessionPathParams };
var ListDataSessionQueryParams = /** @class */ (function (_super) {
    __extends(ListDataSessionQueryParams, _super);
    function ListDataSessionQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=PageSize" }),
        __metadata("design:type", Number)
    ], ListDataSessionQueryParams.prototype, "pageSize", void 0);
    return ListDataSessionQueryParams;
}(SpeakeasyBase));
export { ListDataSessionQueryParams };
var ListDataSessionSecurity = /** @class */ (function (_super) {
    __extends(ListDataSessionSecurity, _super);
    function ListDataSessionSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, scheme=true;type=http;subtype=basic" }),
        __metadata("design:type", shared.SchemeAccountSidAuthToken)
    ], ListDataSessionSecurity.prototype, "accountSidAuthToken", void 0);
    return ListDataSessionSecurity;
}(SpeakeasyBase));
export { ListDataSessionSecurity };
var ListDataSessionRequest = /** @class */ (function (_super) {
    __extends(ListDataSessionRequest, _super);
    function ListDataSessionRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], ListDataSessionRequest.prototype, "serverUrl", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", ListDataSessionPathParams)
    ], ListDataSessionRequest.prototype, "pathParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", ListDataSessionQueryParams)
    ], ListDataSessionRequest.prototype, "queryParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", ListDataSessionSecurity)
    ], ListDataSessionRequest.prototype, "security", void 0);
    return ListDataSessionRequest;
}(SpeakeasyBase));
export { ListDataSessionRequest };
var ListDataSessionListDataSessionResponseMeta = /** @class */ (function (_super) {
    __extends(ListDataSessionListDataSessionResponseMeta, _super);
    function ListDataSessionListDataSessionResponseMeta() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=first_page_url" }),
        __metadata("design:type", String)
    ], ListDataSessionListDataSessionResponseMeta.prototype, "firstPageUrl", void 0);
    __decorate([
        Metadata({ data: "json, name=key" }),
        __metadata("design:type", String)
    ], ListDataSessionListDataSessionResponseMeta.prototype, "key", void 0);
    __decorate([
        Metadata({ data: "json, name=next_page_url" }),
        __metadata("design:type", String)
    ], ListDataSessionListDataSessionResponseMeta.prototype, "nextPageUrl", void 0);
    __decorate([
        Metadata({ data: "json, name=page" }),
        __metadata("design:type", Number)
    ], ListDataSessionListDataSessionResponseMeta.prototype, "page", void 0);
    __decorate([
        Metadata({ data: "json, name=page_size" }),
        __metadata("design:type", Number)
    ], ListDataSessionListDataSessionResponseMeta.prototype, "pageSize", void 0);
    __decorate([
        Metadata({ data: "json, name=previous_page_url" }),
        __metadata("design:type", String)
    ], ListDataSessionListDataSessionResponseMeta.prototype, "previousPageUrl", void 0);
    __decorate([
        Metadata({ data: "json, name=url" }),
        __metadata("design:type", String)
    ], ListDataSessionListDataSessionResponseMeta.prototype, "url", void 0);
    return ListDataSessionListDataSessionResponseMeta;
}(SpeakeasyBase));
export { ListDataSessionListDataSessionResponseMeta };
var ListDataSessionListDataSessionResponse = /** @class */ (function (_super) {
    __extends(ListDataSessionListDataSessionResponse, _super);
    function ListDataSessionListDataSessionResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=data_sessions", elemType: shared.WirelessV1SimDataSession }),
        __metadata("design:type", Array)
    ], ListDataSessionListDataSessionResponse.prototype, "dataSessions", void 0);
    __decorate([
        Metadata({ data: "json, name=meta" }),
        __metadata("design:type", ListDataSessionListDataSessionResponseMeta)
    ], ListDataSessionListDataSessionResponse.prototype, "meta", void 0);
    return ListDataSessionListDataSessionResponse;
}(SpeakeasyBase));
export { ListDataSessionListDataSessionResponse };
var ListDataSessionResponse = /** @class */ (function (_super) {
    __extends(ListDataSessionResponse, _super);
    function ListDataSessionResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], ListDataSessionResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", ListDataSessionListDataSessionResponse)
    ], ListDataSessionResponse.prototype, "listDataSessionResponse", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], ListDataSessionResponse.prototype, "statusCode", void 0);
    return ListDataSessionResponse;
}(SpeakeasyBase));
export { ListDataSessionResponse };
