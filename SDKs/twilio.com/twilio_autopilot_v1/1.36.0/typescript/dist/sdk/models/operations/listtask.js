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
export var LISTTASK_SERVERS = [
    "https://autopilot.twilio.com",
];
var ListTaskPathParams = /** @class */ (function (_super) {
    __extends(ListTaskPathParams, _super);
    function ListTaskPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=AssistantSid" }),
        __metadata("design:type", String)
    ], ListTaskPathParams.prototype, "assistantSid", void 0);
    return ListTaskPathParams;
}(SpeakeasyBase));
export { ListTaskPathParams };
var ListTaskQueryParams = /** @class */ (function (_super) {
    __extends(ListTaskQueryParams, _super);
    function ListTaskQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=PageSize" }),
        __metadata("design:type", Number)
    ], ListTaskQueryParams.prototype, "pageSize", void 0);
    return ListTaskQueryParams;
}(SpeakeasyBase));
export { ListTaskQueryParams };
var ListTaskSecurity = /** @class */ (function (_super) {
    __extends(ListTaskSecurity, _super);
    function ListTaskSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, scheme=true;type=http;subtype=basic" }),
        __metadata("design:type", shared.SchemeAccountSidAuthToken)
    ], ListTaskSecurity.prototype, "accountSidAuthToken", void 0);
    return ListTaskSecurity;
}(SpeakeasyBase));
export { ListTaskSecurity };
var ListTaskRequest = /** @class */ (function (_super) {
    __extends(ListTaskRequest, _super);
    function ListTaskRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], ListTaskRequest.prototype, "serverUrl", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", ListTaskPathParams)
    ], ListTaskRequest.prototype, "pathParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", ListTaskQueryParams)
    ], ListTaskRequest.prototype, "queryParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", ListTaskSecurity)
    ], ListTaskRequest.prototype, "security", void 0);
    return ListTaskRequest;
}(SpeakeasyBase));
export { ListTaskRequest };
var ListTaskListTaskResponseMeta = /** @class */ (function (_super) {
    __extends(ListTaskListTaskResponseMeta, _super);
    function ListTaskListTaskResponseMeta() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=first_page_url" }),
        __metadata("design:type", String)
    ], ListTaskListTaskResponseMeta.prototype, "firstPageUrl", void 0);
    __decorate([
        Metadata({ data: "json, name=key" }),
        __metadata("design:type", String)
    ], ListTaskListTaskResponseMeta.prototype, "key", void 0);
    __decorate([
        Metadata({ data: "json, name=next_page_url" }),
        __metadata("design:type", String)
    ], ListTaskListTaskResponseMeta.prototype, "nextPageUrl", void 0);
    __decorate([
        Metadata({ data: "json, name=page" }),
        __metadata("design:type", Number)
    ], ListTaskListTaskResponseMeta.prototype, "page", void 0);
    __decorate([
        Metadata({ data: "json, name=page_size" }),
        __metadata("design:type", Number)
    ], ListTaskListTaskResponseMeta.prototype, "pageSize", void 0);
    __decorate([
        Metadata({ data: "json, name=previous_page_url" }),
        __metadata("design:type", String)
    ], ListTaskListTaskResponseMeta.prototype, "previousPageUrl", void 0);
    __decorate([
        Metadata({ data: "json, name=url" }),
        __metadata("design:type", String)
    ], ListTaskListTaskResponseMeta.prototype, "url", void 0);
    return ListTaskListTaskResponseMeta;
}(SpeakeasyBase));
export { ListTaskListTaskResponseMeta };
var ListTaskListTaskResponse = /** @class */ (function (_super) {
    __extends(ListTaskListTaskResponse, _super);
    function ListTaskListTaskResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=meta" }),
        __metadata("design:type", ListTaskListTaskResponseMeta)
    ], ListTaskListTaskResponse.prototype, "meta", void 0);
    __decorate([
        Metadata({ data: "json, name=tasks", elemType: shared.AutopilotV1AssistantTask }),
        __metadata("design:type", Array)
    ], ListTaskListTaskResponse.prototype, "tasks", void 0);
    return ListTaskListTaskResponse;
}(SpeakeasyBase));
export { ListTaskListTaskResponse };
var ListTaskResponse = /** @class */ (function (_super) {
    __extends(ListTaskResponse, _super);
    function ListTaskResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], ListTaskResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", ListTaskListTaskResponse)
    ], ListTaskResponse.prototype, "listTaskResponse", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], ListTaskResponse.prototype, "statusCode", void 0);
    return ListTaskResponse;
}(SpeakeasyBase));
export { ListTaskResponse };
