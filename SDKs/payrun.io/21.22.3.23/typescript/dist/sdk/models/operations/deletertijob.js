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
var DeleteRtiJobPathParams = /** @class */ (function (_super) {
    __extends(DeleteRtiJobPathParams, _super);
    function DeleteRtiJobPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=JobId" }),
        __metadata("design:type", String)
    ], DeleteRtiJobPathParams.prototype, "jobId", void 0);
    return DeleteRtiJobPathParams;
}(SpeakeasyBase));
export { DeleteRtiJobPathParams };
var DeleteRtiJobHeaders = /** @class */ (function (_super) {
    __extends(DeleteRtiJobHeaders, _super);
    function DeleteRtiJobHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=Api-Version" }),
        __metadata("design:type", String)
    ], DeleteRtiJobHeaders.prototype, "apiVersion", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=Authorization" }),
        __metadata("design:type", String)
    ], DeleteRtiJobHeaders.prototype, "authorization", void 0);
    return DeleteRtiJobHeaders;
}(SpeakeasyBase));
export { DeleteRtiJobHeaders };
var DeleteRtiJobRequest = /** @class */ (function (_super) {
    __extends(DeleteRtiJobRequest, _super);
    function DeleteRtiJobRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", DeleteRtiJobPathParams)
    ], DeleteRtiJobRequest.prototype, "pathParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", DeleteRtiJobHeaders)
    ], DeleteRtiJobRequest.prototype, "headers", void 0);
    return DeleteRtiJobRequest;
}(SpeakeasyBase));
export { DeleteRtiJobRequest };
var DeleteRtiJobResponse = /** @class */ (function (_super) {
    __extends(DeleteRtiJobResponse, _super);
    function DeleteRtiJobResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], DeleteRtiJobResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", shared.ErrorModel)
    ], DeleteRtiJobResponse.prototype, "errorModel", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], DeleteRtiJobResponse.prototype, "statusCode", void 0);
    return DeleteRtiJobResponse;
}(SpeakeasyBase));
export { DeleteRtiJobResponse };
