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
var GetAllRtiTransactionTagsPathParams = /** @class */ (function (_super) {
    __extends(GetAllRtiTransactionTagsPathParams, _super);
    function GetAllRtiTransactionTagsPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=EmployerId" }),
        __metadata("design:type", String)
    ], GetAllRtiTransactionTagsPathParams.prototype, "employerId", void 0);
    return GetAllRtiTransactionTagsPathParams;
}(SpeakeasyBase));
export { GetAllRtiTransactionTagsPathParams };
var GetAllRtiTransactionTagsHeaders = /** @class */ (function (_super) {
    __extends(GetAllRtiTransactionTagsHeaders, _super);
    function GetAllRtiTransactionTagsHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=Api-Version" }),
        __metadata("design:type", String)
    ], GetAllRtiTransactionTagsHeaders.prototype, "apiVersion", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=Authorization" }),
        __metadata("design:type", String)
    ], GetAllRtiTransactionTagsHeaders.prototype, "authorization", void 0);
    return GetAllRtiTransactionTagsHeaders;
}(SpeakeasyBase));
export { GetAllRtiTransactionTagsHeaders };
var GetAllRtiTransactionTagsRequest = /** @class */ (function (_super) {
    __extends(GetAllRtiTransactionTagsRequest, _super);
    function GetAllRtiTransactionTagsRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetAllRtiTransactionTagsPathParams)
    ], GetAllRtiTransactionTagsRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetAllRtiTransactionTagsHeaders)
    ], GetAllRtiTransactionTagsRequest.prototype, "headers", void 0);
    return GetAllRtiTransactionTagsRequest;
}(SpeakeasyBase));
export { GetAllRtiTransactionTagsRequest };
var GetAllRtiTransactionTagsResponse = /** @class */ (function (_super) {
    __extends(GetAllRtiTransactionTagsResponse, _super);
    function GetAllRtiTransactionTagsResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GetAllRtiTransactionTagsResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.ErrorModel)
    ], GetAllRtiTransactionTagsResponse.prototype, "errorModel", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.LinkCollection)
    ], GetAllRtiTransactionTagsResponse.prototype, "linkCollection", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GetAllRtiTransactionTagsResponse.prototype, "statusCode", void 0);
    return GetAllRtiTransactionTagsResponse;
}(SpeakeasyBase));
export { GetAllRtiTransactionTagsResponse };
