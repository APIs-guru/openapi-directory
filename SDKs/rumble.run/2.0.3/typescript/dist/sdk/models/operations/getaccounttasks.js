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
var GetAccountTasksQueryParams = /** @class */ (function (_super) {
    __extends(GetAccountTasksQueryParams, _super);
    function GetAccountTasksQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=search" }),
        __metadata("design:type", String)
    ], GetAccountTasksQueryParams.prototype, "search", void 0);
    return GetAccountTasksQueryParams;
}(SpeakeasyBase));
export { GetAccountTasksQueryParams };
var GetAccountTasksSecurity = /** @class */ (function (_super) {
    __extends(GetAccountTasksSecurity, _super);
    function GetAccountTasksSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, scheme=true;type=http;subtype=bearer" }),
        __metadata("design:type", shared.SchemeBearerAuth)
    ], GetAccountTasksSecurity.prototype, "bearerAuth", void 0);
    return GetAccountTasksSecurity;
}(SpeakeasyBase));
export { GetAccountTasksSecurity };
var GetAccountTasksRequest = /** @class */ (function (_super) {
    __extends(GetAccountTasksRequest, _super);
    function GetAccountTasksRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", GetAccountTasksQueryParams)
    ], GetAccountTasksRequest.prototype, "queryParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", GetAccountTasksSecurity)
    ], GetAccountTasksRequest.prototype, "security", void 0);
    return GetAccountTasksRequest;
}(SpeakeasyBase));
export { GetAccountTasksRequest };
var GetAccountTasksResponse = /** @class */ (function (_super) {
    __extends(GetAccountTasksResponse, _super);
    function GetAccountTasksResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], GetAccountTasksResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], GetAccountTasksResponse.prototype, "statusCode", void 0);
    __decorate([
        Metadata({ elemType: shared.Task }),
        __metadata("design:type", Array)
    ], GetAccountTasksResponse.prototype, "tasks", void 0);
    return GetAccountTasksResponse;
}(SpeakeasyBase));
export { GetAccountTasksResponse };
