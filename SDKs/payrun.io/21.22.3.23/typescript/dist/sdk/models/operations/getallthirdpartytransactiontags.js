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
var GetAllThirdPartyTransactionTagsPathParams = /** @class */ (function (_super) {
    __extends(GetAllThirdPartyTransactionTagsPathParams, _super);
    function GetAllThirdPartyTransactionTagsPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=EmployerId" }),
        __metadata("design:type", String)
    ], GetAllThirdPartyTransactionTagsPathParams.prototype, "employerId", void 0);
    return GetAllThirdPartyTransactionTagsPathParams;
}(SpeakeasyBase));
export { GetAllThirdPartyTransactionTagsPathParams };
var GetAllThirdPartyTransactionTagsHeaders = /** @class */ (function (_super) {
    __extends(GetAllThirdPartyTransactionTagsHeaders, _super);
    function GetAllThirdPartyTransactionTagsHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=Api-Version" }),
        __metadata("design:type", String)
    ], GetAllThirdPartyTransactionTagsHeaders.prototype, "apiVersion", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=Authorization" }),
        __metadata("design:type", String)
    ], GetAllThirdPartyTransactionTagsHeaders.prototype, "authorization", void 0);
    return GetAllThirdPartyTransactionTagsHeaders;
}(SpeakeasyBase));
export { GetAllThirdPartyTransactionTagsHeaders };
var GetAllThirdPartyTransactionTagsRequest = /** @class */ (function (_super) {
    __extends(GetAllThirdPartyTransactionTagsRequest, _super);
    function GetAllThirdPartyTransactionTagsRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", GetAllThirdPartyTransactionTagsPathParams)
    ], GetAllThirdPartyTransactionTagsRequest.prototype, "pathParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", GetAllThirdPartyTransactionTagsHeaders)
    ], GetAllThirdPartyTransactionTagsRequest.prototype, "headers", void 0);
    return GetAllThirdPartyTransactionTagsRequest;
}(SpeakeasyBase));
export { GetAllThirdPartyTransactionTagsRequest };
var GetAllThirdPartyTransactionTagsResponse = /** @class */ (function (_super) {
    __extends(GetAllThirdPartyTransactionTagsResponse, _super);
    function GetAllThirdPartyTransactionTagsResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], GetAllThirdPartyTransactionTagsResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", shared.ErrorModel)
    ], GetAllThirdPartyTransactionTagsResponse.prototype, "errorModel", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", shared.LinkCollection)
    ], GetAllThirdPartyTransactionTagsResponse.prototype, "linkCollection", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], GetAllThirdPartyTransactionTagsResponse.prototype, "statusCode", void 0);
    return GetAllThirdPartyTransactionTagsResponse;
}(SpeakeasyBase));
export { GetAllThirdPartyTransactionTagsResponse };
