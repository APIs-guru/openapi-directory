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
export var LISTFIELD_SERVERS = [
    "https://autopilot.twilio.com",
];
var ListFieldPathParams = /** @class */ (function (_super) {
    __extends(ListFieldPathParams, _super);
    function ListFieldPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=AssistantSid" }),
        __metadata("design:type", String)
    ], ListFieldPathParams.prototype, "assistantSid", void 0);
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=TaskSid" }),
        __metadata("design:type", String)
    ], ListFieldPathParams.prototype, "taskSid", void 0);
    return ListFieldPathParams;
}(SpeakeasyBase));
export { ListFieldPathParams };
var ListFieldQueryParams = /** @class */ (function (_super) {
    __extends(ListFieldQueryParams, _super);
    function ListFieldQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=PageSize" }),
        __metadata("design:type", Number)
    ], ListFieldQueryParams.prototype, "pageSize", void 0);
    return ListFieldQueryParams;
}(SpeakeasyBase));
export { ListFieldQueryParams };
var ListFieldSecurity = /** @class */ (function (_super) {
    __extends(ListFieldSecurity, _super);
    function ListFieldSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, scheme=true;type=http;subtype=basic" }),
        __metadata("design:type", shared.SchemeAccountSidAuthToken)
    ], ListFieldSecurity.prototype, "accountSidAuthToken", void 0);
    return ListFieldSecurity;
}(SpeakeasyBase));
export { ListFieldSecurity };
var ListFieldRequest = /** @class */ (function (_super) {
    __extends(ListFieldRequest, _super);
    function ListFieldRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], ListFieldRequest.prototype, "serverUrl", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", ListFieldPathParams)
    ], ListFieldRequest.prototype, "pathParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", ListFieldQueryParams)
    ], ListFieldRequest.prototype, "queryParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", ListFieldSecurity)
    ], ListFieldRequest.prototype, "security", void 0);
    return ListFieldRequest;
}(SpeakeasyBase));
export { ListFieldRequest };
var ListFieldListFieldResponseMeta = /** @class */ (function (_super) {
    __extends(ListFieldListFieldResponseMeta, _super);
    function ListFieldListFieldResponseMeta() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=first_page_url" }),
        __metadata("design:type", String)
    ], ListFieldListFieldResponseMeta.prototype, "firstPageUrl", void 0);
    __decorate([
        Metadata({ data: "json, name=key" }),
        __metadata("design:type", String)
    ], ListFieldListFieldResponseMeta.prototype, "key", void 0);
    __decorate([
        Metadata({ data: "json, name=next_page_url" }),
        __metadata("design:type", String)
    ], ListFieldListFieldResponseMeta.prototype, "nextPageUrl", void 0);
    __decorate([
        Metadata({ data: "json, name=page" }),
        __metadata("design:type", Number)
    ], ListFieldListFieldResponseMeta.prototype, "page", void 0);
    __decorate([
        Metadata({ data: "json, name=page_size" }),
        __metadata("design:type", Number)
    ], ListFieldListFieldResponseMeta.prototype, "pageSize", void 0);
    __decorate([
        Metadata({ data: "json, name=previous_page_url" }),
        __metadata("design:type", String)
    ], ListFieldListFieldResponseMeta.prototype, "previousPageUrl", void 0);
    __decorate([
        Metadata({ data: "json, name=url" }),
        __metadata("design:type", String)
    ], ListFieldListFieldResponseMeta.prototype, "url", void 0);
    return ListFieldListFieldResponseMeta;
}(SpeakeasyBase));
export { ListFieldListFieldResponseMeta };
var ListFieldListFieldResponse = /** @class */ (function (_super) {
    __extends(ListFieldListFieldResponse, _super);
    function ListFieldListFieldResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=fields", elemType: shared.AutopilotV1AssistantTaskField }),
        __metadata("design:type", Array)
    ], ListFieldListFieldResponse.prototype, "fields", void 0);
    __decorate([
        Metadata({ data: "json, name=meta" }),
        __metadata("design:type", ListFieldListFieldResponseMeta)
    ], ListFieldListFieldResponse.prototype, "meta", void 0);
    return ListFieldListFieldResponse;
}(SpeakeasyBase));
export { ListFieldListFieldResponse };
var ListFieldResponse = /** @class */ (function (_super) {
    __extends(ListFieldResponse, _super);
    function ListFieldResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], ListFieldResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", ListFieldListFieldResponse)
    ], ListFieldResponse.prototype, "listFieldResponse", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], ListFieldResponse.prototype, "statusCode", void 0);
    return ListFieldResponse;
}(SpeakeasyBase));
export { ListFieldResponse };
