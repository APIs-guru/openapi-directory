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
var ListSourceTasksPathParams = /** @class */ (function (_super) {
    __extends(ListSourceTasksPathParams, _super);
    function ListSourceTasksPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=id" }),
        __metadata("design:type", String)
    ], ListSourceTasksPathParams.prototype, "id", void 0);
    return ListSourceTasksPathParams;
}(SpeakeasyBase));
export { ListSourceTasksPathParams };
var ListSourceTasksQueryParams = /** @class */ (function (_super) {
    __extends(ListSourceTasksQueryParams, _super);
    function ListSourceTasksQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "queryParam, style=deepObject;explode=true;name=filter" }),
        __metadata("design:type", Map)
    ], ListSourceTasksQueryParams.prototype, "filter", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=limit" }),
        __metadata("design:type", Number)
    ], ListSourceTasksQueryParams.prototype, "limit", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=offset" }),
        __metadata("design:type", Number)
    ], ListSourceTasksQueryParams.prototype, "offset", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=deepObject;explode=true;name=sort_by" }),
        __metadata("design:type", Map)
    ], ListSourceTasksQueryParams.prototype, "sortBy", void 0);
    return ListSourceTasksQueryParams;
}(SpeakeasyBase));
export { ListSourceTasksQueryParams };
var ListSourceTasksRequest = /** @class */ (function (_super) {
    __extends(ListSourceTasksRequest, _super);
    function ListSourceTasksRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", ListSourceTasksPathParams)
    ], ListSourceTasksRequest.prototype, "pathParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", ListSourceTasksQueryParams)
    ], ListSourceTasksRequest.prototype, "queryParams", void 0);
    return ListSourceTasksRequest;
}(SpeakeasyBase));
export { ListSourceTasksRequest };
var ListSourceTasksResponse = /** @class */ (function (_super) {
    __extends(ListSourceTasksResponse, _super);
    function ListSourceTasksResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], ListSourceTasksResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", shared.ErrorNotFound)
    ], ListSourceTasksResponse.prototype, "errorNotFound", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], ListSourceTasksResponse.prototype, "statusCode", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", shared.TasksCollection)
    ], ListSourceTasksResponse.prototype, "tasksCollection", void 0);
    return ListSourceTasksResponse;
}(SpeakeasyBase));
export { ListSourceTasksResponse };
