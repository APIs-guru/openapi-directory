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
var DeleteDpsJobPathParams = /** @class */ (function (_super) {
    __extends(DeleteDpsJobPathParams, _super);
    function DeleteDpsJobPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=JobId" }),
        __metadata("design:type", String)
    ], DeleteDpsJobPathParams.prototype, "jobId", void 0);
    return DeleteDpsJobPathParams;
}(SpeakeasyBase));
export { DeleteDpsJobPathParams };
var DeleteDpsJobHeaders = /** @class */ (function (_super) {
    __extends(DeleteDpsJobHeaders, _super);
    function DeleteDpsJobHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=Api-Version" }),
        __metadata("design:type", String)
    ], DeleteDpsJobHeaders.prototype, "apiVersion", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=Authorization" }),
        __metadata("design:type", String)
    ], DeleteDpsJobHeaders.prototype, "authorization", void 0);
    return DeleteDpsJobHeaders;
}(SpeakeasyBase));
export { DeleteDpsJobHeaders };
var DeleteDpsJobRequest = /** @class */ (function (_super) {
    __extends(DeleteDpsJobRequest, _super);
    function DeleteDpsJobRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", DeleteDpsJobPathParams)
    ], DeleteDpsJobRequest.prototype, "pathParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", DeleteDpsJobHeaders)
    ], DeleteDpsJobRequest.prototype, "headers", void 0);
    return DeleteDpsJobRequest;
}(SpeakeasyBase));
export { DeleteDpsJobRequest };
var DeleteDpsJobResponse = /** @class */ (function (_super) {
    __extends(DeleteDpsJobResponse, _super);
    function DeleteDpsJobResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], DeleteDpsJobResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", shared.ErrorModel)
    ], DeleteDpsJobResponse.prototype, "errorModel", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], DeleteDpsJobResponse.prototype, "statusCode", void 0);
    return DeleteDpsJobResponse;
}(SpeakeasyBase));
export { DeleteDpsJobResponse };
