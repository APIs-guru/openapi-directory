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
var DeletePayRunJobPathParams = /** @class */ (function (_super) {
    __extends(DeletePayRunJobPathParams, _super);
    function DeletePayRunJobPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=JobId" }),
        __metadata("design:type", String)
    ], DeletePayRunJobPathParams.prototype, "jobId", void 0);
    return DeletePayRunJobPathParams;
}(SpeakeasyBase));
export { DeletePayRunJobPathParams };
var DeletePayRunJobHeaders = /** @class */ (function (_super) {
    __extends(DeletePayRunJobHeaders, _super);
    function DeletePayRunJobHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=Api-Version" }),
        __metadata("design:type", String)
    ], DeletePayRunJobHeaders.prototype, "apiVersion", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=Authorization" }),
        __metadata("design:type", String)
    ], DeletePayRunJobHeaders.prototype, "authorization", void 0);
    return DeletePayRunJobHeaders;
}(SpeakeasyBase));
export { DeletePayRunJobHeaders };
var DeletePayRunJobRequest = /** @class */ (function (_super) {
    __extends(DeletePayRunJobRequest, _super);
    function DeletePayRunJobRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DeletePayRunJobPathParams)
    ], DeletePayRunJobRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DeletePayRunJobHeaders)
    ], DeletePayRunJobRequest.prototype, "headers", void 0);
    return DeletePayRunJobRequest;
}(SpeakeasyBase));
export { DeletePayRunJobRequest };
var DeletePayRunJobResponse = /** @class */ (function (_super) {
    __extends(DeletePayRunJobResponse, _super);
    function DeletePayRunJobResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], DeletePayRunJobResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.ErrorModel)
    ], DeletePayRunJobResponse.prototype, "errorModel", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], DeletePayRunJobResponse.prototype, "statusCode", void 0);
    return DeletePayRunJobResponse;
}(SpeakeasyBase));
export { DeletePayRunJobResponse };
