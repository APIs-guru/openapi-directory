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
var TaskListSubtasksPathParams = /** @class */ (function (_super) {
    __extends(TaskListSubtasksPathParams, _super);
    function TaskListSubtasksPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=jobId" }),
        __metadata("design:type", String)
    ], TaskListSubtasksPathParams.prototype, "jobId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=taskId" }),
        __metadata("design:type", String)
    ], TaskListSubtasksPathParams.prototype, "taskId", void 0);
    return TaskListSubtasksPathParams;
}(SpeakeasyBase));
export { TaskListSubtasksPathParams };
var TaskListSubtasksQueryParams = /** @class */ (function (_super) {
    __extends(TaskListSubtasksQueryParams, _super);
    function TaskListSubtasksQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$select" }),
        __metadata("design:type", String)
    ], TaskListSubtasksQueryParams.prototype, "dollarSelect", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=api-version" }),
        __metadata("design:type", String)
    ], TaskListSubtasksQueryParams.prototype, "apiVersion", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=timeout" }),
        __metadata("design:type", Number)
    ], TaskListSubtasksQueryParams.prototype, "timeout", void 0);
    return TaskListSubtasksQueryParams;
}(SpeakeasyBase));
export { TaskListSubtasksQueryParams };
var TaskListSubtasksHeaders = /** @class */ (function (_super) {
    __extends(TaskListSubtasksHeaders, _super);
    function TaskListSubtasksHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=client-request-id" }),
        __metadata("design:type", String)
    ], TaskListSubtasksHeaders.prototype, "clientRequestId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=ocp-date" }),
        __metadata("design:type", String)
    ], TaskListSubtasksHeaders.prototype, "ocpDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=return-client-request-id" }),
        __metadata("design:type", Boolean)
    ], TaskListSubtasksHeaders.prototype, "returnClientRequestId", void 0);
    return TaskListSubtasksHeaders;
}(SpeakeasyBase));
export { TaskListSubtasksHeaders };
var TaskListSubtasksRequest = /** @class */ (function (_super) {
    __extends(TaskListSubtasksRequest, _super);
    function TaskListSubtasksRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", TaskListSubtasksPathParams)
    ], TaskListSubtasksRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", TaskListSubtasksQueryParams)
    ], TaskListSubtasksRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", TaskListSubtasksHeaders)
    ], TaskListSubtasksRequest.prototype, "headers", void 0);
    return TaskListSubtasksRequest;
}(SpeakeasyBase));
export { TaskListSubtasksRequest };
var TaskListSubtasksResponse = /** @class */ (function (_super) {
    __extends(TaskListSubtasksResponse, _super);
    function TaskListSubtasksResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], TaskListSubtasksResponse.prototype, "batchError", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], TaskListSubtasksResponse.prototype, "cloudTaskListSubtasksResult", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], TaskListSubtasksResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Map)
    ], TaskListSubtasksResponse.prototype, "headers", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], TaskListSubtasksResponse.prototype, "statusCode", void 0);
    return TaskListSubtasksResponse;
}(SpeakeasyBase));
export { TaskListSubtasksResponse };
