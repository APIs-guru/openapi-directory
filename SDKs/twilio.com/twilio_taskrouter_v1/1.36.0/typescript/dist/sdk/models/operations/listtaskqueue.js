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
export var LISTTASKQUEUE_SERVERS = [
    "https://taskrouter.twilio.com",
];
var ListTaskQueuePathParams = /** @class */ (function (_super) {
    __extends(ListTaskQueuePathParams, _super);
    function ListTaskQueuePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=WorkspaceSid" }),
        __metadata("design:type", String)
    ], ListTaskQueuePathParams.prototype, "workspaceSid", void 0);
    return ListTaskQueuePathParams;
}(SpeakeasyBase));
export { ListTaskQueuePathParams };
var ListTaskQueueQueryParams = /** @class */ (function (_super) {
    __extends(ListTaskQueueQueryParams, _super);
    function ListTaskQueueQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=EvaluateWorkerAttributes" }),
        __metadata("design:type", String)
    ], ListTaskQueueQueryParams.prototype, "evaluateWorkerAttributes", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=FriendlyName" }),
        __metadata("design:type", String)
    ], ListTaskQueueQueryParams.prototype, "friendlyName", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=PageSize" }),
        __metadata("design:type", Number)
    ], ListTaskQueueQueryParams.prototype, "pageSize", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=WorkerSid" }),
        __metadata("design:type", String)
    ], ListTaskQueueQueryParams.prototype, "workerSid", void 0);
    return ListTaskQueueQueryParams;
}(SpeakeasyBase));
export { ListTaskQueueQueryParams };
var ListTaskQueueSecurity = /** @class */ (function (_super) {
    __extends(ListTaskQueueSecurity, _super);
    function ListTaskQueueSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, scheme=true;type=http;subtype=basic" }),
        __metadata("design:type", shared.SchemeAccountSidAuthToken)
    ], ListTaskQueueSecurity.prototype, "accountSidAuthToken", void 0);
    return ListTaskQueueSecurity;
}(SpeakeasyBase));
export { ListTaskQueueSecurity };
var ListTaskQueueRequest = /** @class */ (function (_super) {
    __extends(ListTaskQueueRequest, _super);
    function ListTaskQueueRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], ListTaskQueueRequest.prototype, "serverUrl", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", ListTaskQueuePathParams)
    ], ListTaskQueueRequest.prototype, "pathParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", ListTaskQueueQueryParams)
    ], ListTaskQueueRequest.prototype, "queryParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", ListTaskQueueSecurity)
    ], ListTaskQueueRequest.prototype, "security", void 0);
    return ListTaskQueueRequest;
}(SpeakeasyBase));
export { ListTaskQueueRequest };
var ListTaskQueueListTaskQueueResponseMeta = /** @class */ (function (_super) {
    __extends(ListTaskQueueListTaskQueueResponseMeta, _super);
    function ListTaskQueueListTaskQueueResponseMeta() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=first_page_url" }),
        __metadata("design:type", String)
    ], ListTaskQueueListTaskQueueResponseMeta.prototype, "firstPageUrl", void 0);
    __decorate([
        Metadata({ data: "json, name=key" }),
        __metadata("design:type", String)
    ], ListTaskQueueListTaskQueueResponseMeta.prototype, "key", void 0);
    __decorate([
        Metadata({ data: "json, name=next_page_url" }),
        __metadata("design:type", String)
    ], ListTaskQueueListTaskQueueResponseMeta.prototype, "nextPageUrl", void 0);
    __decorate([
        Metadata({ data: "json, name=page" }),
        __metadata("design:type", Number)
    ], ListTaskQueueListTaskQueueResponseMeta.prototype, "page", void 0);
    __decorate([
        Metadata({ data: "json, name=page_size" }),
        __metadata("design:type", Number)
    ], ListTaskQueueListTaskQueueResponseMeta.prototype, "pageSize", void 0);
    __decorate([
        Metadata({ data: "json, name=previous_page_url" }),
        __metadata("design:type", String)
    ], ListTaskQueueListTaskQueueResponseMeta.prototype, "previousPageUrl", void 0);
    __decorate([
        Metadata({ data: "json, name=url" }),
        __metadata("design:type", String)
    ], ListTaskQueueListTaskQueueResponseMeta.prototype, "url", void 0);
    return ListTaskQueueListTaskQueueResponseMeta;
}(SpeakeasyBase));
export { ListTaskQueueListTaskQueueResponseMeta };
var ListTaskQueueListTaskQueueResponse = /** @class */ (function (_super) {
    __extends(ListTaskQueueListTaskQueueResponse, _super);
    function ListTaskQueueListTaskQueueResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=meta" }),
        __metadata("design:type", ListTaskQueueListTaskQueueResponseMeta)
    ], ListTaskQueueListTaskQueueResponse.prototype, "meta", void 0);
    __decorate([
        Metadata({ data: "json, name=task_queues", elemType: shared.TaskrouterV1WorkspaceTaskQueue }),
        __metadata("design:type", Array)
    ], ListTaskQueueListTaskQueueResponse.prototype, "taskQueues", void 0);
    return ListTaskQueueListTaskQueueResponse;
}(SpeakeasyBase));
export { ListTaskQueueListTaskQueueResponse };
var ListTaskQueueResponse = /** @class */ (function (_super) {
    __extends(ListTaskQueueResponse, _super);
    function ListTaskQueueResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], ListTaskQueueResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", ListTaskQueueListTaskQueueResponse)
    ], ListTaskQueueResponse.prototype, "listTaskQueueResponse", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], ListTaskQueueResponse.prototype, "statusCode", void 0);
    return ListTaskQueueResponse;
}(SpeakeasyBase));
export { ListTaskQueueResponse };
