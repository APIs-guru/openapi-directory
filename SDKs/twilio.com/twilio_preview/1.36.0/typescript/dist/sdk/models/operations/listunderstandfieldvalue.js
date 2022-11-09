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
export var LISTUNDERSTANDFIELDVALUE_SERVERS = [
    "https://preview.twilio.com",
];
var ListUnderstandFieldValuePathParams = /** @class */ (function (_super) {
    __extends(ListUnderstandFieldValuePathParams, _super);
    function ListUnderstandFieldValuePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=AssistantSid" }),
        __metadata("design:type", String)
    ], ListUnderstandFieldValuePathParams.prototype, "assistantSid", void 0);
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=FieldTypeSid" }),
        __metadata("design:type", String)
    ], ListUnderstandFieldValuePathParams.prototype, "fieldTypeSid", void 0);
    return ListUnderstandFieldValuePathParams;
}(SpeakeasyBase));
export { ListUnderstandFieldValuePathParams };
var ListUnderstandFieldValueQueryParams = /** @class */ (function (_super) {
    __extends(ListUnderstandFieldValueQueryParams, _super);
    function ListUnderstandFieldValueQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=Language" }),
        __metadata("design:type", String)
    ], ListUnderstandFieldValueQueryParams.prototype, "language", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=PageSize" }),
        __metadata("design:type", Number)
    ], ListUnderstandFieldValueQueryParams.prototype, "pageSize", void 0);
    return ListUnderstandFieldValueQueryParams;
}(SpeakeasyBase));
export { ListUnderstandFieldValueQueryParams };
var ListUnderstandFieldValueSecurity = /** @class */ (function (_super) {
    __extends(ListUnderstandFieldValueSecurity, _super);
    function ListUnderstandFieldValueSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, scheme=true;type=http;subtype=basic" }),
        __metadata("design:type", shared.SchemeAccountSidAuthToken)
    ], ListUnderstandFieldValueSecurity.prototype, "accountSidAuthToken", void 0);
    return ListUnderstandFieldValueSecurity;
}(SpeakeasyBase));
export { ListUnderstandFieldValueSecurity };
var ListUnderstandFieldValueRequest = /** @class */ (function (_super) {
    __extends(ListUnderstandFieldValueRequest, _super);
    function ListUnderstandFieldValueRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], ListUnderstandFieldValueRequest.prototype, "serverUrl", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", ListUnderstandFieldValuePathParams)
    ], ListUnderstandFieldValueRequest.prototype, "pathParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", ListUnderstandFieldValueQueryParams)
    ], ListUnderstandFieldValueRequest.prototype, "queryParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", ListUnderstandFieldValueSecurity)
    ], ListUnderstandFieldValueRequest.prototype, "security", void 0);
    return ListUnderstandFieldValueRequest;
}(SpeakeasyBase));
export { ListUnderstandFieldValueRequest };
var ListUnderstandFieldValueListUnderstandFieldValueResponseMeta = /** @class */ (function (_super) {
    __extends(ListUnderstandFieldValueListUnderstandFieldValueResponseMeta, _super);
    function ListUnderstandFieldValueListUnderstandFieldValueResponseMeta() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=first_page_url" }),
        __metadata("design:type", String)
    ], ListUnderstandFieldValueListUnderstandFieldValueResponseMeta.prototype, "firstPageUrl", void 0);
    __decorate([
        Metadata({ data: "json, name=key" }),
        __metadata("design:type", String)
    ], ListUnderstandFieldValueListUnderstandFieldValueResponseMeta.prototype, "key", void 0);
    __decorate([
        Metadata({ data: "json, name=next_page_url" }),
        __metadata("design:type", String)
    ], ListUnderstandFieldValueListUnderstandFieldValueResponseMeta.prototype, "nextPageUrl", void 0);
    __decorate([
        Metadata({ data: "json, name=page" }),
        __metadata("design:type", Number)
    ], ListUnderstandFieldValueListUnderstandFieldValueResponseMeta.prototype, "page", void 0);
    __decorate([
        Metadata({ data: "json, name=page_size" }),
        __metadata("design:type", Number)
    ], ListUnderstandFieldValueListUnderstandFieldValueResponseMeta.prototype, "pageSize", void 0);
    __decorate([
        Metadata({ data: "json, name=previous_page_url" }),
        __metadata("design:type", String)
    ], ListUnderstandFieldValueListUnderstandFieldValueResponseMeta.prototype, "previousPageUrl", void 0);
    __decorate([
        Metadata({ data: "json, name=url" }),
        __metadata("design:type", String)
    ], ListUnderstandFieldValueListUnderstandFieldValueResponseMeta.prototype, "url", void 0);
    return ListUnderstandFieldValueListUnderstandFieldValueResponseMeta;
}(SpeakeasyBase));
export { ListUnderstandFieldValueListUnderstandFieldValueResponseMeta };
var ListUnderstandFieldValueListUnderstandFieldValueResponse = /** @class */ (function (_super) {
    __extends(ListUnderstandFieldValueListUnderstandFieldValueResponse, _super);
    function ListUnderstandFieldValueListUnderstandFieldValueResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=field_values", elemType: shared.PreviewUnderstandAssistantFieldTypeFieldValue }),
        __metadata("design:type", Array)
    ], ListUnderstandFieldValueListUnderstandFieldValueResponse.prototype, "fieldValues", void 0);
    __decorate([
        Metadata({ data: "json, name=meta" }),
        __metadata("design:type", ListUnderstandFieldValueListUnderstandFieldValueResponseMeta)
    ], ListUnderstandFieldValueListUnderstandFieldValueResponse.prototype, "meta", void 0);
    return ListUnderstandFieldValueListUnderstandFieldValueResponse;
}(SpeakeasyBase));
export { ListUnderstandFieldValueListUnderstandFieldValueResponse };
var ListUnderstandFieldValueResponse = /** @class */ (function (_super) {
    __extends(ListUnderstandFieldValueResponse, _super);
    function ListUnderstandFieldValueResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], ListUnderstandFieldValueResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", ListUnderstandFieldValueListUnderstandFieldValueResponse)
    ], ListUnderstandFieldValueResponse.prototype, "listUnderstandFieldValueResponse", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], ListUnderstandFieldValueResponse.prototype, "statusCode", void 0);
    return ListUnderstandFieldValueResponse;
}(SpeakeasyBase));
export { ListUnderstandFieldValueResponse };
