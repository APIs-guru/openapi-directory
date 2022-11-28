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
var DeletePayCodeRevisionPathParams = /** @class */ (function (_super) {
    __extends(DeletePayCodeRevisionPathParams, _super);
    function DeletePayCodeRevisionPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=EffectiveDate" }),
        __metadata("design:type", Date)
    ], DeletePayCodeRevisionPathParams.prototype, "effectiveDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=EmployerId" }),
        __metadata("design:type", String)
    ], DeletePayCodeRevisionPathParams.prototype, "employerId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=PayCodeId" }),
        __metadata("design:type", String)
    ], DeletePayCodeRevisionPathParams.prototype, "payCodeId", void 0);
    return DeletePayCodeRevisionPathParams;
}(SpeakeasyBase));
export { DeletePayCodeRevisionPathParams };
var DeletePayCodeRevisionHeaders = /** @class */ (function (_super) {
    __extends(DeletePayCodeRevisionHeaders, _super);
    function DeletePayCodeRevisionHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=Api-Version" }),
        __metadata("design:type", String)
    ], DeletePayCodeRevisionHeaders.prototype, "apiVersion", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=Authorization" }),
        __metadata("design:type", String)
    ], DeletePayCodeRevisionHeaders.prototype, "authorization", void 0);
    return DeletePayCodeRevisionHeaders;
}(SpeakeasyBase));
export { DeletePayCodeRevisionHeaders };
var DeletePayCodeRevisionRequest = /** @class */ (function (_super) {
    __extends(DeletePayCodeRevisionRequest, _super);
    function DeletePayCodeRevisionRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DeletePayCodeRevisionPathParams)
    ], DeletePayCodeRevisionRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DeletePayCodeRevisionHeaders)
    ], DeletePayCodeRevisionRequest.prototype, "headers", void 0);
    return DeletePayCodeRevisionRequest;
}(SpeakeasyBase));
export { DeletePayCodeRevisionRequest };
var DeletePayCodeRevisionResponse = /** @class */ (function (_super) {
    __extends(DeletePayCodeRevisionResponse, _super);
    function DeletePayCodeRevisionResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], DeletePayCodeRevisionResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.ErrorModel)
    ], DeletePayCodeRevisionResponse.prototype, "errorModel", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], DeletePayCodeRevisionResponse.prototype, "statusCode", void 0);
    return DeletePayCodeRevisionResponse;
}(SpeakeasyBase));
export { DeletePayCodeRevisionResponse };
