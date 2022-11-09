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
export var LISTALPHASENDER_SERVERS = [
    "https://messaging.twilio.com",
];
var ListAlphaSenderPathParams = /** @class */ (function (_super) {
    __extends(ListAlphaSenderPathParams, _super);
    function ListAlphaSenderPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=ServiceSid" }),
        __metadata("design:type", String)
    ], ListAlphaSenderPathParams.prototype, "serviceSid", void 0);
    return ListAlphaSenderPathParams;
}(SpeakeasyBase));
export { ListAlphaSenderPathParams };
var ListAlphaSenderQueryParams = /** @class */ (function (_super) {
    __extends(ListAlphaSenderQueryParams, _super);
    function ListAlphaSenderQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=PageSize" }),
        __metadata("design:type", Number)
    ], ListAlphaSenderQueryParams.prototype, "pageSize", void 0);
    return ListAlphaSenderQueryParams;
}(SpeakeasyBase));
export { ListAlphaSenderQueryParams };
var ListAlphaSenderSecurity = /** @class */ (function (_super) {
    __extends(ListAlphaSenderSecurity, _super);
    function ListAlphaSenderSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, scheme=true;type=http;subtype=basic" }),
        __metadata("design:type", shared.SchemeAccountSidAuthToken)
    ], ListAlphaSenderSecurity.prototype, "accountSidAuthToken", void 0);
    return ListAlphaSenderSecurity;
}(SpeakeasyBase));
export { ListAlphaSenderSecurity };
var ListAlphaSenderRequest = /** @class */ (function (_super) {
    __extends(ListAlphaSenderRequest, _super);
    function ListAlphaSenderRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], ListAlphaSenderRequest.prototype, "serverUrl", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", ListAlphaSenderPathParams)
    ], ListAlphaSenderRequest.prototype, "pathParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", ListAlphaSenderQueryParams)
    ], ListAlphaSenderRequest.prototype, "queryParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", ListAlphaSenderSecurity)
    ], ListAlphaSenderRequest.prototype, "security", void 0);
    return ListAlphaSenderRequest;
}(SpeakeasyBase));
export { ListAlphaSenderRequest };
var ListAlphaSenderListAlphaSenderResponseMeta = /** @class */ (function (_super) {
    __extends(ListAlphaSenderListAlphaSenderResponseMeta, _super);
    function ListAlphaSenderListAlphaSenderResponseMeta() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=first_page_url" }),
        __metadata("design:type", String)
    ], ListAlphaSenderListAlphaSenderResponseMeta.prototype, "firstPageUrl", void 0);
    __decorate([
        Metadata({ data: "json, name=key" }),
        __metadata("design:type", String)
    ], ListAlphaSenderListAlphaSenderResponseMeta.prototype, "key", void 0);
    __decorate([
        Metadata({ data: "json, name=next_page_url" }),
        __metadata("design:type", String)
    ], ListAlphaSenderListAlphaSenderResponseMeta.prototype, "nextPageUrl", void 0);
    __decorate([
        Metadata({ data: "json, name=page" }),
        __metadata("design:type", Number)
    ], ListAlphaSenderListAlphaSenderResponseMeta.prototype, "page", void 0);
    __decorate([
        Metadata({ data: "json, name=page_size" }),
        __metadata("design:type", Number)
    ], ListAlphaSenderListAlphaSenderResponseMeta.prototype, "pageSize", void 0);
    __decorate([
        Metadata({ data: "json, name=previous_page_url" }),
        __metadata("design:type", String)
    ], ListAlphaSenderListAlphaSenderResponseMeta.prototype, "previousPageUrl", void 0);
    __decorate([
        Metadata({ data: "json, name=url" }),
        __metadata("design:type", String)
    ], ListAlphaSenderListAlphaSenderResponseMeta.prototype, "url", void 0);
    return ListAlphaSenderListAlphaSenderResponseMeta;
}(SpeakeasyBase));
export { ListAlphaSenderListAlphaSenderResponseMeta };
var ListAlphaSenderListAlphaSenderResponse = /** @class */ (function (_super) {
    __extends(ListAlphaSenderListAlphaSenderResponse, _super);
    function ListAlphaSenderListAlphaSenderResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=alpha_senders", elemType: shared.MessagingV1ServiceAlphaSender }),
        __metadata("design:type", Array)
    ], ListAlphaSenderListAlphaSenderResponse.prototype, "alphaSenders", void 0);
    __decorate([
        Metadata({ data: "json, name=meta" }),
        __metadata("design:type", ListAlphaSenderListAlphaSenderResponseMeta)
    ], ListAlphaSenderListAlphaSenderResponse.prototype, "meta", void 0);
    return ListAlphaSenderListAlphaSenderResponse;
}(SpeakeasyBase));
export { ListAlphaSenderListAlphaSenderResponse };
var ListAlphaSenderResponse = /** @class */ (function (_super) {
    __extends(ListAlphaSenderResponse, _super);
    function ListAlphaSenderResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], ListAlphaSenderResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", ListAlphaSenderListAlphaSenderResponse)
    ], ListAlphaSenderResponse.prototype, "listAlphaSenderResponse", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], ListAlphaSenderResponse.prototype, "statusCode", void 0);
    return ListAlphaSenderResponse;
}(SpeakeasyBase));
export { ListAlphaSenderResponse };
