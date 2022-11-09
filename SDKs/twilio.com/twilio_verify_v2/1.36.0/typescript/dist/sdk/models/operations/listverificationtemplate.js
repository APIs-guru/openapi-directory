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
export var LISTVERIFICATIONTEMPLATE_SERVERS = [
    "https://verify.twilio.com",
];
var ListVerificationTemplateQueryParams = /** @class */ (function (_super) {
    __extends(ListVerificationTemplateQueryParams, _super);
    function ListVerificationTemplateQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=FriendlyName" }),
        __metadata("design:type", String)
    ], ListVerificationTemplateQueryParams.prototype, "friendlyName", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=PageSize" }),
        __metadata("design:type", Number)
    ], ListVerificationTemplateQueryParams.prototype, "pageSize", void 0);
    return ListVerificationTemplateQueryParams;
}(SpeakeasyBase));
export { ListVerificationTemplateQueryParams };
var ListVerificationTemplateSecurity = /** @class */ (function (_super) {
    __extends(ListVerificationTemplateSecurity, _super);
    function ListVerificationTemplateSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, scheme=true;type=http;subtype=basic" }),
        __metadata("design:type", shared.SchemeAccountSidAuthToken)
    ], ListVerificationTemplateSecurity.prototype, "accountSidAuthToken", void 0);
    return ListVerificationTemplateSecurity;
}(SpeakeasyBase));
export { ListVerificationTemplateSecurity };
var ListVerificationTemplateRequest = /** @class */ (function (_super) {
    __extends(ListVerificationTemplateRequest, _super);
    function ListVerificationTemplateRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], ListVerificationTemplateRequest.prototype, "serverUrl", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", ListVerificationTemplateQueryParams)
    ], ListVerificationTemplateRequest.prototype, "queryParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", ListVerificationTemplateSecurity)
    ], ListVerificationTemplateRequest.prototype, "security", void 0);
    return ListVerificationTemplateRequest;
}(SpeakeasyBase));
export { ListVerificationTemplateRequest };
var ListVerificationTemplateListVerificationTemplateResponseMeta = /** @class */ (function (_super) {
    __extends(ListVerificationTemplateListVerificationTemplateResponseMeta, _super);
    function ListVerificationTemplateListVerificationTemplateResponseMeta() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=first_page_url" }),
        __metadata("design:type", String)
    ], ListVerificationTemplateListVerificationTemplateResponseMeta.prototype, "firstPageUrl", void 0);
    __decorate([
        Metadata({ data: "json, name=key" }),
        __metadata("design:type", String)
    ], ListVerificationTemplateListVerificationTemplateResponseMeta.prototype, "key", void 0);
    __decorate([
        Metadata({ data: "json, name=next_page_url" }),
        __metadata("design:type", String)
    ], ListVerificationTemplateListVerificationTemplateResponseMeta.prototype, "nextPageUrl", void 0);
    __decorate([
        Metadata({ data: "json, name=page" }),
        __metadata("design:type", Number)
    ], ListVerificationTemplateListVerificationTemplateResponseMeta.prototype, "page", void 0);
    __decorate([
        Metadata({ data: "json, name=page_size" }),
        __metadata("design:type", Number)
    ], ListVerificationTemplateListVerificationTemplateResponseMeta.prototype, "pageSize", void 0);
    __decorate([
        Metadata({ data: "json, name=previous_page_url" }),
        __metadata("design:type", String)
    ], ListVerificationTemplateListVerificationTemplateResponseMeta.prototype, "previousPageUrl", void 0);
    __decorate([
        Metadata({ data: "json, name=url" }),
        __metadata("design:type", String)
    ], ListVerificationTemplateListVerificationTemplateResponseMeta.prototype, "url", void 0);
    return ListVerificationTemplateListVerificationTemplateResponseMeta;
}(SpeakeasyBase));
export { ListVerificationTemplateListVerificationTemplateResponseMeta };
var ListVerificationTemplateListVerificationTemplateResponse = /** @class */ (function (_super) {
    __extends(ListVerificationTemplateListVerificationTemplateResponse, _super);
    function ListVerificationTemplateListVerificationTemplateResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=meta" }),
        __metadata("design:type", ListVerificationTemplateListVerificationTemplateResponseMeta)
    ], ListVerificationTemplateListVerificationTemplateResponse.prototype, "meta", void 0);
    __decorate([
        Metadata({ data: "json, name=templates", elemType: shared.VerifyV2VerificationTemplate }),
        __metadata("design:type", Array)
    ], ListVerificationTemplateListVerificationTemplateResponse.prototype, "templates", void 0);
    return ListVerificationTemplateListVerificationTemplateResponse;
}(SpeakeasyBase));
export { ListVerificationTemplateListVerificationTemplateResponse };
var ListVerificationTemplateResponse = /** @class */ (function (_super) {
    __extends(ListVerificationTemplateResponse, _super);
    function ListVerificationTemplateResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], ListVerificationTemplateResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", ListVerificationTemplateListVerificationTemplateResponse)
    ], ListVerificationTemplateResponse.prototype, "listVerificationTemplateResponse", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], ListVerificationTemplateResponse.prototype, "statusCode", void 0);
    return ListVerificationTemplateResponse;
}(SpeakeasyBase));
export { ListVerificationTemplateResponse };
