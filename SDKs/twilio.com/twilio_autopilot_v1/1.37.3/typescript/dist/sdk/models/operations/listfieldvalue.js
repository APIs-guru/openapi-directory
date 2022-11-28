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
export var ListFieldValueServerList = [
    "https://autopilot.twilio.com",
];
var ListFieldValuePathParams = /** @class */ (function (_super) {
    __extends(ListFieldValuePathParams, _super);
    function ListFieldValuePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=AssistantSid" }),
        __metadata("design:type", String)
    ], ListFieldValuePathParams.prototype, "assistantSid", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=FieldTypeSid" }),
        __metadata("design:type", String)
    ], ListFieldValuePathParams.prototype, "fieldTypeSid", void 0);
    return ListFieldValuePathParams;
}(SpeakeasyBase));
export { ListFieldValuePathParams };
var ListFieldValueQueryParams = /** @class */ (function (_super) {
    __extends(ListFieldValueQueryParams, _super);
    function ListFieldValueQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Language" }),
        __metadata("design:type", String)
    ], ListFieldValueQueryParams.prototype, "language", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=PageSize" }),
        __metadata("design:type", Number)
    ], ListFieldValueQueryParams.prototype, "pageSize", void 0);
    return ListFieldValueQueryParams;
}(SpeakeasyBase));
export { ListFieldValueQueryParams };
var ListFieldValueSecurity = /** @class */ (function (_super) {
    __extends(ListFieldValueSecurity, _super);
    function ListFieldValueSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=basic" }),
        __metadata("design:type", shared.SchemeAccountSidAuthToken)
    ], ListFieldValueSecurity.prototype, "accountSidAuthToken", void 0);
    return ListFieldValueSecurity;
}(SpeakeasyBase));
export { ListFieldValueSecurity };
var ListFieldValueListFieldValueResponseMeta = /** @class */ (function (_super) {
    __extends(ListFieldValueListFieldValueResponseMeta, _super);
    function ListFieldValueListFieldValueResponseMeta() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=first_page_url" }),
        __metadata("design:type", String)
    ], ListFieldValueListFieldValueResponseMeta.prototype, "firstPageUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=key" }),
        __metadata("design:type", String)
    ], ListFieldValueListFieldValueResponseMeta.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=next_page_url" }),
        __metadata("design:type", String)
    ], ListFieldValueListFieldValueResponseMeta.prototype, "nextPageUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=page" }),
        __metadata("design:type", Number)
    ], ListFieldValueListFieldValueResponseMeta.prototype, "page", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=page_size" }),
        __metadata("design:type", Number)
    ], ListFieldValueListFieldValueResponseMeta.prototype, "pageSize", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=previous_page_url" }),
        __metadata("design:type", String)
    ], ListFieldValueListFieldValueResponseMeta.prototype, "previousPageUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=url" }),
        __metadata("design:type", String)
    ], ListFieldValueListFieldValueResponseMeta.prototype, "url", void 0);
    return ListFieldValueListFieldValueResponseMeta;
}(SpeakeasyBase));
export { ListFieldValueListFieldValueResponseMeta };
var ListFieldValueListFieldValueResponse = /** @class */ (function (_super) {
    __extends(ListFieldValueListFieldValueResponse, _super);
    function ListFieldValueListFieldValueResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=field_values", elemType: shared.AutopilotV1AssistantFieldTypeFieldValue }),
        __metadata("design:type", Array)
    ], ListFieldValueListFieldValueResponse.prototype, "fieldValues", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=meta" }),
        __metadata("design:type", ListFieldValueListFieldValueResponseMeta)
    ], ListFieldValueListFieldValueResponse.prototype, "meta", void 0);
    return ListFieldValueListFieldValueResponse;
}(SpeakeasyBase));
export { ListFieldValueListFieldValueResponse };
var ListFieldValueRequest = /** @class */ (function (_super) {
    __extends(ListFieldValueRequest, _super);
    function ListFieldValueRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], ListFieldValueRequest.prototype, "serverUrl", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ListFieldValuePathParams)
    ], ListFieldValueRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ListFieldValueQueryParams)
    ], ListFieldValueRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ListFieldValueSecurity)
    ], ListFieldValueRequest.prototype, "security", void 0);
    return ListFieldValueRequest;
}(SpeakeasyBase));
export { ListFieldValueRequest };
var ListFieldValueResponse = /** @class */ (function (_super) {
    __extends(ListFieldValueResponse, _super);
    function ListFieldValueResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], ListFieldValueResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ListFieldValueListFieldValueResponse)
    ], ListFieldValueResponse.prototype, "listFieldValueResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], ListFieldValueResponse.prototype, "statusCode", void 0);
    return ListFieldValueResponse;
}(SpeakeasyBase));
export { ListFieldValueResponse };
