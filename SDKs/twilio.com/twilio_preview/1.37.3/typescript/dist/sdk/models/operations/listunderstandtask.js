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
export var ListUnderstandTaskServerList = [
    "https://preview.twilio.com",
];
var ListUnderstandTaskPathParams = /** @class */ (function (_super) {
    __extends(ListUnderstandTaskPathParams, _super);
    function ListUnderstandTaskPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=AssistantSid" }),
        __metadata("design:type", String)
    ], ListUnderstandTaskPathParams.prototype, "assistantSid", void 0);
    return ListUnderstandTaskPathParams;
}(SpeakeasyBase));
export { ListUnderstandTaskPathParams };
var ListUnderstandTaskQueryParams = /** @class */ (function (_super) {
    __extends(ListUnderstandTaskQueryParams, _super);
    function ListUnderstandTaskQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=PageSize" }),
        __metadata("design:type", Number)
    ], ListUnderstandTaskQueryParams.prototype, "pageSize", void 0);
    return ListUnderstandTaskQueryParams;
}(SpeakeasyBase));
export { ListUnderstandTaskQueryParams };
var ListUnderstandTaskSecurity = /** @class */ (function (_super) {
    __extends(ListUnderstandTaskSecurity, _super);
    function ListUnderstandTaskSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=basic" }),
        __metadata("design:type", shared.SchemeAccountSidAuthToken)
    ], ListUnderstandTaskSecurity.prototype, "accountSidAuthToken", void 0);
    return ListUnderstandTaskSecurity;
}(SpeakeasyBase));
export { ListUnderstandTaskSecurity };
var ListUnderstandTaskListUnderstandTaskResponseMeta = /** @class */ (function (_super) {
    __extends(ListUnderstandTaskListUnderstandTaskResponseMeta, _super);
    function ListUnderstandTaskListUnderstandTaskResponseMeta() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=first_page_url" }),
        __metadata("design:type", String)
    ], ListUnderstandTaskListUnderstandTaskResponseMeta.prototype, "firstPageUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=key" }),
        __metadata("design:type", String)
    ], ListUnderstandTaskListUnderstandTaskResponseMeta.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=next_page_url" }),
        __metadata("design:type", String)
    ], ListUnderstandTaskListUnderstandTaskResponseMeta.prototype, "nextPageUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=page" }),
        __metadata("design:type", Number)
    ], ListUnderstandTaskListUnderstandTaskResponseMeta.prototype, "page", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=page_size" }),
        __metadata("design:type", Number)
    ], ListUnderstandTaskListUnderstandTaskResponseMeta.prototype, "pageSize", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=previous_page_url" }),
        __metadata("design:type", String)
    ], ListUnderstandTaskListUnderstandTaskResponseMeta.prototype, "previousPageUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=url" }),
        __metadata("design:type", String)
    ], ListUnderstandTaskListUnderstandTaskResponseMeta.prototype, "url", void 0);
    return ListUnderstandTaskListUnderstandTaskResponseMeta;
}(SpeakeasyBase));
export { ListUnderstandTaskListUnderstandTaskResponseMeta };
var ListUnderstandTaskListUnderstandTaskResponse = /** @class */ (function (_super) {
    __extends(ListUnderstandTaskListUnderstandTaskResponse, _super);
    function ListUnderstandTaskListUnderstandTaskResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=meta" }),
        __metadata("design:type", ListUnderstandTaskListUnderstandTaskResponseMeta)
    ], ListUnderstandTaskListUnderstandTaskResponse.prototype, "meta", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=tasks", elemType: shared.PreviewUnderstandAssistantTask }),
        __metadata("design:type", Array)
    ], ListUnderstandTaskListUnderstandTaskResponse.prototype, "tasks", void 0);
    return ListUnderstandTaskListUnderstandTaskResponse;
}(SpeakeasyBase));
export { ListUnderstandTaskListUnderstandTaskResponse };
var ListUnderstandTaskRequest = /** @class */ (function (_super) {
    __extends(ListUnderstandTaskRequest, _super);
    function ListUnderstandTaskRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], ListUnderstandTaskRequest.prototype, "serverUrl", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ListUnderstandTaskPathParams)
    ], ListUnderstandTaskRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ListUnderstandTaskQueryParams)
    ], ListUnderstandTaskRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ListUnderstandTaskSecurity)
    ], ListUnderstandTaskRequest.prototype, "security", void 0);
    return ListUnderstandTaskRequest;
}(SpeakeasyBase));
export { ListUnderstandTaskRequest };
var ListUnderstandTaskResponse = /** @class */ (function (_super) {
    __extends(ListUnderstandTaskResponse, _super);
    function ListUnderstandTaskResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], ListUnderstandTaskResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ListUnderstandTaskListUnderstandTaskResponse)
    ], ListUnderstandTaskResponse.prototype, "listUnderstandTaskResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], ListUnderstandTaskResponse.prototype, "statusCode", void 0);
    return ListUnderstandTaskResponse;
}(SpeakeasyBase));
export { ListUnderstandTaskResponse };
