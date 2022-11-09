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
export var LISTUNDERSTANDFIELDTYPE_SERVERS = [
    "https://preview.twilio.com",
];
var ListUnderstandFieldTypePathParams = /** @class */ (function (_super) {
    __extends(ListUnderstandFieldTypePathParams, _super);
    function ListUnderstandFieldTypePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=AssistantSid" }),
        __metadata("design:type", String)
    ], ListUnderstandFieldTypePathParams.prototype, "assistantSid", void 0);
    return ListUnderstandFieldTypePathParams;
}(SpeakeasyBase));
export { ListUnderstandFieldTypePathParams };
var ListUnderstandFieldTypeQueryParams = /** @class */ (function (_super) {
    __extends(ListUnderstandFieldTypeQueryParams, _super);
    function ListUnderstandFieldTypeQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=PageSize" }),
        __metadata("design:type", Number)
    ], ListUnderstandFieldTypeQueryParams.prototype, "pageSize", void 0);
    return ListUnderstandFieldTypeQueryParams;
}(SpeakeasyBase));
export { ListUnderstandFieldTypeQueryParams };
var ListUnderstandFieldTypeSecurity = /** @class */ (function (_super) {
    __extends(ListUnderstandFieldTypeSecurity, _super);
    function ListUnderstandFieldTypeSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, scheme=true;type=http;subtype=basic" }),
        __metadata("design:type", shared.SchemeAccountSidAuthToken)
    ], ListUnderstandFieldTypeSecurity.prototype, "accountSidAuthToken", void 0);
    return ListUnderstandFieldTypeSecurity;
}(SpeakeasyBase));
export { ListUnderstandFieldTypeSecurity };
var ListUnderstandFieldTypeRequest = /** @class */ (function (_super) {
    __extends(ListUnderstandFieldTypeRequest, _super);
    function ListUnderstandFieldTypeRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], ListUnderstandFieldTypeRequest.prototype, "serverUrl", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", ListUnderstandFieldTypePathParams)
    ], ListUnderstandFieldTypeRequest.prototype, "pathParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", ListUnderstandFieldTypeQueryParams)
    ], ListUnderstandFieldTypeRequest.prototype, "queryParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", ListUnderstandFieldTypeSecurity)
    ], ListUnderstandFieldTypeRequest.prototype, "security", void 0);
    return ListUnderstandFieldTypeRequest;
}(SpeakeasyBase));
export { ListUnderstandFieldTypeRequest };
var ListUnderstandFieldTypeListUnderstandFieldTypeResponseMeta = /** @class */ (function (_super) {
    __extends(ListUnderstandFieldTypeListUnderstandFieldTypeResponseMeta, _super);
    function ListUnderstandFieldTypeListUnderstandFieldTypeResponseMeta() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=first_page_url" }),
        __metadata("design:type", String)
    ], ListUnderstandFieldTypeListUnderstandFieldTypeResponseMeta.prototype, "firstPageUrl", void 0);
    __decorate([
        Metadata({ data: "json, name=key" }),
        __metadata("design:type", String)
    ], ListUnderstandFieldTypeListUnderstandFieldTypeResponseMeta.prototype, "key", void 0);
    __decorate([
        Metadata({ data: "json, name=next_page_url" }),
        __metadata("design:type", String)
    ], ListUnderstandFieldTypeListUnderstandFieldTypeResponseMeta.prototype, "nextPageUrl", void 0);
    __decorate([
        Metadata({ data: "json, name=page" }),
        __metadata("design:type", Number)
    ], ListUnderstandFieldTypeListUnderstandFieldTypeResponseMeta.prototype, "page", void 0);
    __decorate([
        Metadata({ data: "json, name=page_size" }),
        __metadata("design:type", Number)
    ], ListUnderstandFieldTypeListUnderstandFieldTypeResponseMeta.prototype, "pageSize", void 0);
    __decorate([
        Metadata({ data: "json, name=previous_page_url" }),
        __metadata("design:type", String)
    ], ListUnderstandFieldTypeListUnderstandFieldTypeResponseMeta.prototype, "previousPageUrl", void 0);
    __decorate([
        Metadata({ data: "json, name=url" }),
        __metadata("design:type", String)
    ], ListUnderstandFieldTypeListUnderstandFieldTypeResponseMeta.prototype, "url", void 0);
    return ListUnderstandFieldTypeListUnderstandFieldTypeResponseMeta;
}(SpeakeasyBase));
export { ListUnderstandFieldTypeListUnderstandFieldTypeResponseMeta };
var ListUnderstandFieldTypeListUnderstandFieldTypeResponse = /** @class */ (function (_super) {
    __extends(ListUnderstandFieldTypeListUnderstandFieldTypeResponse, _super);
    function ListUnderstandFieldTypeListUnderstandFieldTypeResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=field_types", elemType: shared.PreviewUnderstandAssistantFieldType }),
        __metadata("design:type", Array)
    ], ListUnderstandFieldTypeListUnderstandFieldTypeResponse.prototype, "fieldTypes", void 0);
    __decorate([
        Metadata({ data: "json, name=meta" }),
        __metadata("design:type", ListUnderstandFieldTypeListUnderstandFieldTypeResponseMeta)
    ], ListUnderstandFieldTypeListUnderstandFieldTypeResponse.prototype, "meta", void 0);
    return ListUnderstandFieldTypeListUnderstandFieldTypeResponse;
}(SpeakeasyBase));
export { ListUnderstandFieldTypeListUnderstandFieldTypeResponse };
var ListUnderstandFieldTypeResponse = /** @class */ (function (_super) {
    __extends(ListUnderstandFieldTypeResponse, _super);
    function ListUnderstandFieldTypeResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], ListUnderstandFieldTypeResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", ListUnderstandFieldTypeListUnderstandFieldTypeResponse)
    ], ListUnderstandFieldTypeResponse.prototype, "listUnderstandFieldTypeResponse", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], ListUnderstandFieldTypeResponse.prototype, "statusCode", void 0);
    return ListUnderstandFieldTypeResponse;
}(SpeakeasyBase));
export { ListUnderstandFieldTypeResponse };
