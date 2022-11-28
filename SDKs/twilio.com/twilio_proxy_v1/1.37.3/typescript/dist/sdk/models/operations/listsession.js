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
export var ListSessionServerList = [
    "https://proxy.twilio.com",
];
var ListSessionPathParams = /** @class */ (function (_super) {
    __extends(ListSessionPathParams, _super);
    function ListSessionPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=ServiceSid" }),
        __metadata("design:type", String)
    ], ListSessionPathParams.prototype, "serviceSid", void 0);
    return ListSessionPathParams;
}(SpeakeasyBase));
export { ListSessionPathParams };
var ListSessionQueryParams = /** @class */ (function (_super) {
    __extends(ListSessionQueryParams, _super);
    function ListSessionQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=PageSize" }),
        __metadata("design:type", Number)
    ], ListSessionQueryParams.prototype, "pageSize", void 0);
    return ListSessionQueryParams;
}(SpeakeasyBase));
export { ListSessionQueryParams };
var ListSessionSecurity = /** @class */ (function (_super) {
    __extends(ListSessionSecurity, _super);
    function ListSessionSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=basic" }),
        __metadata("design:type", shared.SchemeAccountSidAuthToken)
    ], ListSessionSecurity.prototype, "accountSidAuthToken", void 0);
    return ListSessionSecurity;
}(SpeakeasyBase));
export { ListSessionSecurity };
var ListSessionListSessionResponseMeta = /** @class */ (function (_super) {
    __extends(ListSessionListSessionResponseMeta, _super);
    function ListSessionListSessionResponseMeta() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=first_page_url" }),
        __metadata("design:type", String)
    ], ListSessionListSessionResponseMeta.prototype, "firstPageUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=key" }),
        __metadata("design:type", String)
    ], ListSessionListSessionResponseMeta.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=next_page_url" }),
        __metadata("design:type", String)
    ], ListSessionListSessionResponseMeta.prototype, "nextPageUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=page" }),
        __metadata("design:type", Number)
    ], ListSessionListSessionResponseMeta.prototype, "page", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=page_size" }),
        __metadata("design:type", Number)
    ], ListSessionListSessionResponseMeta.prototype, "pageSize", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=previous_page_url" }),
        __metadata("design:type", String)
    ], ListSessionListSessionResponseMeta.prototype, "previousPageUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=url" }),
        __metadata("design:type", String)
    ], ListSessionListSessionResponseMeta.prototype, "url", void 0);
    return ListSessionListSessionResponseMeta;
}(SpeakeasyBase));
export { ListSessionListSessionResponseMeta };
var ListSessionListSessionResponse = /** @class */ (function (_super) {
    __extends(ListSessionListSessionResponse, _super);
    function ListSessionListSessionResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=meta" }),
        __metadata("design:type", ListSessionListSessionResponseMeta)
    ], ListSessionListSessionResponse.prototype, "meta", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=sessions", elemType: shared.ProxyV1ServiceSession }),
        __metadata("design:type", Array)
    ], ListSessionListSessionResponse.prototype, "sessions", void 0);
    return ListSessionListSessionResponse;
}(SpeakeasyBase));
export { ListSessionListSessionResponse };
var ListSessionRequest = /** @class */ (function (_super) {
    __extends(ListSessionRequest, _super);
    function ListSessionRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], ListSessionRequest.prototype, "serverUrl", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ListSessionPathParams)
    ], ListSessionRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ListSessionQueryParams)
    ], ListSessionRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ListSessionSecurity)
    ], ListSessionRequest.prototype, "security", void 0);
    return ListSessionRequest;
}(SpeakeasyBase));
export { ListSessionRequest };
var ListSessionResponse = /** @class */ (function (_super) {
    __extends(ListSessionResponse, _super);
    function ListSessionResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], ListSessionResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ListSessionListSessionResponse)
    ], ListSessionResponse.prototype, "listSessionResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], ListSessionResponse.prototype, "statusCode", void 0);
    return ListSessionResponse;
}(SpeakeasyBase));
export { ListSessionResponse };
