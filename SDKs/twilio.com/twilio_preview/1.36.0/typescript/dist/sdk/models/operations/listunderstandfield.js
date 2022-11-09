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
export var LISTUNDERSTANDFIELD_SERVERS = [
    "https://preview.twilio.com",
];
var ListUnderstandFieldPathParams = /** @class */ (function (_super) {
    __extends(ListUnderstandFieldPathParams, _super);
    function ListUnderstandFieldPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=AssistantSid" }),
        __metadata("design:type", String)
    ], ListUnderstandFieldPathParams.prototype, "assistantSid", void 0);
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=TaskSid" }),
        __metadata("design:type", String)
    ], ListUnderstandFieldPathParams.prototype, "taskSid", void 0);
    return ListUnderstandFieldPathParams;
}(SpeakeasyBase));
export { ListUnderstandFieldPathParams };
var ListUnderstandFieldQueryParams = /** @class */ (function (_super) {
    __extends(ListUnderstandFieldQueryParams, _super);
    function ListUnderstandFieldQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=PageSize" }),
        __metadata("design:type", Number)
    ], ListUnderstandFieldQueryParams.prototype, "pageSize", void 0);
    return ListUnderstandFieldQueryParams;
}(SpeakeasyBase));
export { ListUnderstandFieldQueryParams };
var ListUnderstandFieldSecurity = /** @class */ (function (_super) {
    __extends(ListUnderstandFieldSecurity, _super);
    function ListUnderstandFieldSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, scheme=true;type=http;subtype=basic" }),
        __metadata("design:type", shared.SchemeAccountSidAuthToken)
    ], ListUnderstandFieldSecurity.prototype, "accountSidAuthToken", void 0);
    return ListUnderstandFieldSecurity;
}(SpeakeasyBase));
export { ListUnderstandFieldSecurity };
var ListUnderstandFieldRequest = /** @class */ (function (_super) {
    __extends(ListUnderstandFieldRequest, _super);
    function ListUnderstandFieldRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], ListUnderstandFieldRequest.prototype, "serverUrl", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", ListUnderstandFieldPathParams)
    ], ListUnderstandFieldRequest.prototype, "pathParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", ListUnderstandFieldQueryParams)
    ], ListUnderstandFieldRequest.prototype, "queryParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", ListUnderstandFieldSecurity)
    ], ListUnderstandFieldRequest.prototype, "security", void 0);
    return ListUnderstandFieldRequest;
}(SpeakeasyBase));
export { ListUnderstandFieldRequest };
var ListUnderstandFieldListUnderstandFieldResponseMeta = /** @class */ (function (_super) {
    __extends(ListUnderstandFieldListUnderstandFieldResponseMeta, _super);
    function ListUnderstandFieldListUnderstandFieldResponseMeta() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=first_page_url" }),
        __metadata("design:type", String)
    ], ListUnderstandFieldListUnderstandFieldResponseMeta.prototype, "firstPageUrl", void 0);
    __decorate([
        Metadata({ data: "json, name=key" }),
        __metadata("design:type", String)
    ], ListUnderstandFieldListUnderstandFieldResponseMeta.prototype, "key", void 0);
    __decorate([
        Metadata({ data: "json, name=next_page_url" }),
        __metadata("design:type", String)
    ], ListUnderstandFieldListUnderstandFieldResponseMeta.prototype, "nextPageUrl", void 0);
    __decorate([
        Metadata({ data: "json, name=page" }),
        __metadata("design:type", Number)
    ], ListUnderstandFieldListUnderstandFieldResponseMeta.prototype, "page", void 0);
    __decorate([
        Metadata({ data: "json, name=page_size" }),
        __metadata("design:type", Number)
    ], ListUnderstandFieldListUnderstandFieldResponseMeta.prototype, "pageSize", void 0);
    __decorate([
        Metadata({ data: "json, name=previous_page_url" }),
        __metadata("design:type", String)
    ], ListUnderstandFieldListUnderstandFieldResponseMeta.prototype, "previousPageUrl", void 0);
    __decorate([
        Metadata({ data: "json, name=url" }),
        __metadata("design:type", String)
    ], ListUnderstandFieldListUnderstandFieldResponseMeta.prototype, "url", void 0);
    return ListUnderstandFieldListUnderstandFieldResponseMeta;
}(SpeakeasyBase));
export { ListUnderstandFieldListUnderstandFieldResponseMeta };
var ListUnderstandFieldListUnderstandFieldResponse = /** @class */ (function (_super) {
    __extends(ListUnderstandFieldListUnderstandFieldResponse, _super);
    function ListUnderstandFieldListUnderstandFieldResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=fields", elemType: shared.PreviewUnderstandAssistantTaskField }),
        __metadata("design:type", Array)
    ], ListUnderstandFieldListUnderstandFieldResponse.prototype, "fields", void 0);
    __decorate([
        Metadata({ data: "json, name=meta" }),
        __metadata("design:type", ListUnderstandFieldListUnderstandFieldResponseMeta)
    ], ListUnderstandFieldListUnderstandFieldResponse.prototype, "meta", void 0);
    return ListUnderstandFieldListUnderstandFieldResponse;
}(SpeakeasyBase));
export { ListUnderstandFieldListUnderstandFieldResponse };
var ListUnderstandFieldResponse = /** @class */ (function (_super) {
    __extends(ListUnderstandFieldResponse, _super);
    function ListUnderstandFieldResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], ListUnderstandFieldResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", ListUnderstandFieldListUnderstandFieldResponse)
    ], ListUnderstandFieldResponse.prototype, "listUnderstandFieldResponse", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], ListUnderstandFieldResponse.prototype, "statusCode", void 0);
    return ListUnderstandFieldResponse;
}(SpeakeasyBase));
export { ListUnderstandFieldResponse };
