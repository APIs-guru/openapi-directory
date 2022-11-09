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
var DeletePayCodeTagPathParams = /** @class */ (function (_super) {
    __extends(DeletePayCodeTagPathParams, _super);
    function DeletePayCodeTagPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=EmployerId" }),
        __metadata("design:type", String)
    ], DeletePayCodeTagPathParams.prototype, "employerId", void 0);
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=PayCodeId" }),
        __metadata("design:type", String)
    ], DeletePayCodeTagPathParams.prototype, "payCodeId", void 0);
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=TagId" }),
        __metadata("design:type", String)
    ], DeletePayCodeTagPathParams.prototype, "tagId", void 0);
    return DeletePayCodeTagPathParams;
}(SpeakeasyBase));
export { DeletePayCodeTagPathParams };
var DeletePayCodeTagHeaders = /** @class */ (function (_super) {
    __extends(DeletePayCodeTagHeaders, _super);
    function DeletePayCodeTagHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=Api-Version" }),
        __metadata("design:type", String)
    ], DeletePayCodeTagHeaders.prototype, "apiVersion", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=Authorization" }),
        __metadata("design:type", String)
    ], DeletePayCodeTagHeaders.prototype, "authorization", void 0);
    return DeletePayCodeTagHeaders;
}(SpeakeasyBase));
export { DeletePayCodeTagHeaders };
var DeletePayCodeTagRequest = /** @class */ (function (_super) {
    __extends(DeletePayCodeTagRequest, _super);
    function DeletePayCodeTagRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", DeletePayCodeTagPathParams)
    ], DeletePayCodeTagRequest.prototype, "pathParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", DeletePayCodeTagHeaders)
    ], DeletePayCodeTagRequest.prototype, "headers", void 0);
    return DeletePayCodeTagRequest;
}(SpeakeasyBase));
export { DeletePayCodeTagRequest };
var DeletePayCodeTagResponse = /** @class */ (function (_super) {
    __extends(DeletePayCodeTagResponse, _super);
    function DeletePayCodeTagResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], DeletePayCodeTagResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", shared.ErrorModel)
    ], DeletePayCodeTagResponse.prototype, "errorModel", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], DeletePayCodeTagResponse.prototype, "statusCode", void 0);
    return DeletePayCodeTagResponse;
}(SpeakeasyBase));
export { DeletePayCodeTagResponse };
