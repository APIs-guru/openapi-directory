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
var DeleteRtiTransactionTagPathParams = /** @class */ (function (_super) {
    __extends(DeleteRtiTransactionTagPathParams, _super);
    function DeleteRtiTransactionTagPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=EmployerId" }),
        __metadata("design:type", String)
    ], DeleteRtiTransactionTagPathParams.prototype, "employerId", void 0);
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=RtiTransactionId" }),
        __metadata("design:type", String)
    ], DeleteRtiTransactionTagPathParams.prototype, "rtiTransactionId", void 0);
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=TagId" }),
        __metadata("design:type", String)
    ], DeleteRtiTransactionTagPathParams.prototype, "tagId", void 0);
    return DeleteRtiTransactionTagPathParams;
}(SpeakeasyBase));
export { DeleteRtiTransactionTagPathParams };
var DeleteRtiTransactionTagHeaders = /** @class */ (function (_super) {
    __extends(DeleteRtiTransactionTagHeaders, _super);
    function DeleteRtiTransactionTagHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=Api-Version" }),
        __metadata("design:type", String)
    ], DeleteRtiTransactionTagHeaders.prototype, "apiVersion", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=Authorization" }),
        __metadata("design:type", String)
    ], DeleteRtiTransactionTagHeaders.prototype, "authorization", void 0);
    return DeleteRtiTransactionTagHeaders;
}(SpeakeasyBase));
export { DeleteRtiTransactionTagHeaders };
var DeleteRtiTransactionTagRequest = /** @class */ (function (_super) {
    __extends(DeleteRtiTransactionTagRequest, _super);
    function DeleteRtiTransactionTagRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", DeleteRtiTransactionTagPathParams)
    ], DeleteRtiTransactionTagRequest.prototype, "pathParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", DeleteRtiTransactionTagHeaders)
    ], DeleteRtiTransactionTagRequest.prototype, "headers", void 0);
    return DeleteRtiTransactionTagRequest;
}(SpeakeasyBase));
export { DeleteRtiTransactionTagRequest };
var DeleteRtiTransactionTagResponse = /** @class */ (function (_super) {
    __extends(DeleteRtiTransactionTagResponse, _super);
    function DeleteRtiTransactionTagResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], DeleteRtiTransactionTagResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", shared.ErrorModel)
    ], DeleteRtiTransactionTagResponse.prototype, "errorModel", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], DeleteRtiTransactionTagResponse.prototype, "statusCode", void 0);
    return DeleteRtiTransactionTagResponse;
}(SpeakeasyBase));
export { DeleteRtiTransactionTagResponse };
