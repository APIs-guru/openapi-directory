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
export var LISTSAMPLE_SERVERS = [
    "https://autopilot.twilio.com",
];
var ListSamplePathParams = /** @class */ (function (_super) {
    __extends(ListSamplePathParams, _super);
    function ListSamplePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=AssistantSid" }),
        __metadata("design:type", String)
    ], ListSamplePathParams.prototype, "assistantSid", void 0);
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=TaskSid" }),
        __metadata("design:type", String)
    ], ListSamplePathParams.prototype, "taskSid", void 0);
    return ListSamplePathParams;
}(SpeakeasyBase));
export { ListSamplePathParams };
var ListSampleQueryParams = /** @class */ (function (_super) {
    __extends(ListSampleQueryParams, _super);
    function ListSampleQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=Language" }),
        __metadata("design:type", String)
    ], ListSampleQueryParams.prototype, "language", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=PageSize" }),
        __metadata("design:type", Number)
    ], ListSampleQueryParams.prototype, "pageSize", void 0);
    return ListSampleQueryParams;
}(SpeakeasyBase));
export { ListSampleQueryParams };
var ListSampleSecurity = /** @class */ (function (_super) {
    __extends(ListSampleSecurity, _super);
    function ListSampleSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, scheme=true;type=http;subtype=basic" }),
        __metadata("design:type", shared.SchemeAccountSidAuthToken)
    ], ListSampleSecurity.prototype, "accountSidAuthToken", void 0);
    return ListSampleSecurity;
}(SpeakeasyBase));
export { ListSampleSecurity };
var ListSampleRequest = /** @class */ (function (_super) {
    __extends(ListSampleRequest, _super);
    function ListSampleRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], ListSampleRequest.prototype, "serverUrl", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", ListSamplePathParams)
    ], ListSampleRequest.prototype, "pathParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", ListSampleQueryParams)
    ], ListSampleRequest.prototype, "queryParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", ListSampleSecurity)
    ], ListSampleRequest.prototype, "security", void 0);
    return ListSampleRequest;
}(SpeakeasyBase));
export { ListSampleRequest };
var ListSampleListSampleResponseMeta = /** @class */ (function (_super) {
    __extends(ListSampleListSampleResponseMeta, _super);
    function ListSampleListSampleResponseMeta() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=first_page_url" }),
        __metadata("design:type", String)
    ], ListSampleListSampleResponseMeta.prototype, "firstPageUrl", void 0);
    __decorate([
        Metadata({ data: "json, name=key" }),
        __metadata("design:type", String)
    ], ListSampleListSampleResponseMeta.prototype, "key", void 0);
    __decorate([
        Metadata({ data: "json, name=next_page_url" }),
        __metadata("design:type", String)
    ], ListSampleListSampleResponseMeta.prototype, "nextPageUrl", void 0);
    __decorate([
        Metadata({ data: "json, name=page" }),
        __metadata("design:type", Number)
    ], ListSampleListSampleResponseMeta.prototype, "page", void 0);
    __decorate([
        Metadata({ data: "json, name=page_size" }),
        __metadata("design:type", Number)
    ], ListSampleListSampleResponseMeta.prototype, "pageSize", void 0);
    __decorate([
        Metadata({ data: "json, name=previous_page_url" }),
        __metadata("design:type", String)
    ], ListSampleListSampleResponseMeta.prototype, "previousPageUrl", void 0);
    __decorate([
        Metadata({ data: "json, name=url" }),
        __metadata("design:type", String)
    ], ListSampleListSampleResponseMeta.prototype, "url", void 0);
    return ListSampleListSampleResponseMeta;
}(SpeakeasyBase));
export { ListSampleListSampleResponseMeta };
var ListSampleListSampleResponse = /** @class */ (function (_super) {
    __extends(ListSampleListSampleResponse, _super);
    function ListSampleListSampleResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=meta" }),
        __metadata("design:type", ListSampleListSampleResponseMeta)
    ], ListSampleListSampleResponse.prototype, "meta", void 0);
    __decorate([
        Metadata({ data: "json, name=samples", elemType: shared.AutopilotV1AssistantTaskSample }),
        __metadata("design:type", Array)
    ], ListSampleListSampleResponse.prototype, "samples", void 0);
    return ListSampleListSampleResponse;
}(SpeakeasyBase));
export { ListSampleListSampleResponse };
var ListSampleResponse = /** @class */ (function (_super) {
    __extends(ListSampleResponse, _super);
    function ListSampleResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], ListSampleResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", ListSampleListSampleResponse)
    ], ListSampleResponse.prototype, "listSampleResponse", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], ListSampleResponse.prototype, "statusCode", void 0);
    return ListSampleResponse;
}(SpeakeasyBase));
export { ListSampleResponse };
