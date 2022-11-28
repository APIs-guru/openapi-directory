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
export var ListFieldTypeServerList = [
    "https://autopilot.twilio.com",
];
var ListFieldTypePathParams = /** @class */ (function (_super) {
    __extends(ListFieldTypePathParams, _super);
    function ListFieldTypePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=AssistantSid" }),
        __metadata("design:type", String)
    ], ListFieldTypePathParams.prototype, "assistantSid", void 0);
    return ListFieldTypePathParams;
}(SpeakeasyBase));
export { ListFieldTypePathParams };
var ListFieldTypeQueryParams = /** @class */ (function (_super) {
    __extends(ListFieldTypeQueryParams, _super);
    function ListFieldTypeQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=PageSize" }),
        __metadata("design:type", Number)
    ], ListFieldTypeQueryParams.prototype, "pageSize", void 0);
    return ListFieldTypeQueryParams;
}(SpeakeasyBase));
export { ListFieldTypeQueryParams };
var ListFieldTypeSecurity = /** @class */ (function (_super) {
    __extends(ListFieldTypeSecurity, _super);
    function ListFieldTypeSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=basic" }),
        __metadata("design:type", shared.SchemeAccountSidAuthToken)
    ], ListFieldTypeSecurity.prototype, "accountSidAuthToken", void 0);
    return ListFieldTypeSecurity;
}(SpeakeasyBase));
export { ListFieldTypeSecurity };
var ListFieldTypeListFieldTypeResponseMeta = /** @class */ (function (_super) {
    __extends(ListFieldTypeListFieldTypeResponseMeta, _super);
    function ListFieldTypeListFieldTypeResponseMeta() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=first_page_url" }),
        __metadata("design:type", String)
    ], ListFieldTypeListFieldTypeResponseMeta.prototype, "firstPageUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=key" }),
        __metadata("design:type", String)
    ], ListFieldTypeListFieldTypeResponseMeta.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=next_page_url" }),
        __metadata("design:type", String)
    ], ListFieldTypeListFieldTypeResponseMeta.prototype, "nextPageUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=page" }),
        __metadata("design:type", Number)
    ], ListFieldTypeListFieldTypeResponseMeta.prototype, "page", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=page_size" }),
        __metadata("design:type", Number)
    ], ListFieldTypeListFieldTypeResponseMeta.prototype, "pageSize", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=previous_page_url" }),
        __metadata("design:type", String)
    ], ListFieldTypeListFieldTypeResponseMeta.prototype, "previousPageUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=url" }),
        __metadata("design:type", String)
    ], ListFieldTypeListFieldTypeResponseMeta.prototype, "url", void 0);
    return ListFieldTypeListFieldTypeResponseMeta;
}(SpeakeasyBase));
export { ListFieldTypeListFieldTypeResponseMeta };
var ListFieldTypeListFieldTypeResponse = /** @class */ (function (_super) {
    __extends(ListFieldTypeListFieldTypeResponse, _super);
    function ListFieldTypeListFieldTypeResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=field_types", elemType: shared.AutopilotV1AssistantFieldType }),
        __metadata("design:type", Array)
    ], ListFieldTypeListFieldTypeResponse.prototype, "fieldTypes", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=meta" }),
        __metadata("design:type", ListFieldTypeListFieldTypeResponseMeta)
    ], ListFieldTypeListFieldTypeResponse.prototype, "meta", void 0);
    return ListFieldTypeListFieldTypeResponse;
}(SpeakeasyBase));
export { ListFieldTypeListFieldTypeResponse };
var ListFieldTypeRequest = /** @class */ (function (_super) {
    __extends(ListFieldTypeRequest, _super);
    function ListFieldTypeRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], ListFieldTypeRequest.prototype, "serverUrl", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ListFieldTypePathParams)
    ], ListFieldTypeRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ListFieldTypeQueryParams)
    ], ListFieldTypeRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ListFieldTypeSecurity)
    ], ListFieldTypeRequest.prototype, "security", void 0);
    return ListFieldTypeRequest;
}(SpeakeasyBase));
export { ListFieldTypeRequest };
var ListFieldTypeResponse = /** @class */ (function (_super) {
    __extends(ListFieldTypeResponse, _super);
    function ListFieldTypeResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], ListFieldTypeResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ListFieldTypeListFieldTypeResponse)
    ], ListFieldTypeResponse.prototype, "listFieldTypeResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], ListFieldTypeResponse.prototype, "statusCode", void 0);
    return ListFieldTypeResponse;
}(SpeakeasyBase));
export { ListFieldTypeResponse };
