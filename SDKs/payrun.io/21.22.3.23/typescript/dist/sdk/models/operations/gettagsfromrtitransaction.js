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
var GetTagsFromRtiTransactionPathParams = /** @class */ (function (_super) {
    __extends(GetTagsFromRtiTransactionPathParams, _super);
    function GetTagsFromRtiTransactionPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=EmployerId" }),
        __metadata("design:type", String)
    ], GetTagsFromRtiTransactionPathParams.prototype, "employerId", void 0);
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=RtiTransactionId" }),
        __metadata("design:type", String)
    ], GetTagsFromRtiTransactionPathParams.prototype, "rtiTransactionId", void 0);
    return GetTagsFromRtiTransactionPathParams;
}(SpeakeasyBase));
export { GetTagsFromRtiTransactionPathParams };
var GetTagsFromRtiTransactionHeaders = /** @class */ (function (_super) {
    __extends(GetTagsFromRtiTransactionHeaders, _super);
    function GetTagsFromRtiTransactionHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=Api-Version" }),
        __metadata("design:type", String)
    ], GetTagsFromRtiTransactionHeaders.prototype, "apiVersion", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=Authorization" }),
        __metadata("design:type", String)
    ], GetTagsFromRtiTransactionHeaders.prototype, "authorization", void 0);
    return GetTagsFromRtiTransactionHeaders;
}(SpeakeasyBase));
export { GetTagsFromRtiTransactionHeaders };
var GetTagsFromRtiTransactionRequest = /** @class */ (function (_super) {
    __extends(GetTagsFromRtiTransactionRequest, _super);
    function GetTagsFromRtiTransactionRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", GetTagsFromRtiTransactionPathParams)
    ], GetTagsFromRtiTransactionRequest.prototype, "pathParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", GetTagsFromRtiTransactionHeaders)
    ], GetTagsFromRtiTransactionRequest.prototype, "headers", void 0);
    return GetTagsFromRtiTransactionRequest;
}(SpeakeasyBase));
export { GetTagsFromRtiTransactionRequest };
var GetTagsFromRtiTransactionResponse = /** @class */ (function (_super) {
    __extends(GetTagsFromRtiTransactionResponse, _super);
    function GetTagsFromRtiTransactionResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], GetTagsFromRtiTransactionResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", shared.ErrorModel)
    ], GetTagsFromRtiTransactionResponse.prototype, "errorModel", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", shared.LinkCollection)
    ], GetTagsFromRtiTransactionResponse.prototype, "linkCollection", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], GetTagsFromRtiTransactionResponse.prototype, "statusCode", void 0);
    return GetTagsFromRtiTransactionResponse;
}(SpeakeasyBase));
export { GetTagsFromRtiTransactionResponse };
