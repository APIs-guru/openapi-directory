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
var GetTagFromCisLinePathParams = /** @class */ (function (_super) {
    __extends(GetTagFromCisLinePathParams, _super);
    function GetTagFromCisLinePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=CisLineId" }),
        __metadata("design:type", String)
    ], GetTagFromCisLinePathParams.prototype, "cisLineId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=EmployerId" }),
        __metadata("design:type", String)
    ], GetTagFromCisLinePathParams.prototype, "employerId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=SubContractorId" }),
        __metadata("design:type", String)
    ], GetTagFromCisLinePathParams.prototype, "subContractorId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=TagId" }),
        __metadata("design:type", String)
    ], GetTagFromCisLinePathParams.prototype, "tagId", void 0);
    return GetTagFromCisLinePathParams;
}(SpeakeasyBase));
export { GetTagFromCisLinePathParams };
var GetTagFromCisLineHeaders = /** @class */ (function (_super) {
    __extends(GetTagFromCisLineHeaders, _super);
    function GetTagFromCisLineHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=Api-Version" }),
        __metadata("design:type", String)
    ], GetTagFromCisLineHeaders.prototype, "apiVersion", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=Authorization" }),
        __metadata("design:type", String)
    ], GetTagFromCisLineHeaders.prototype, "authorization", void 0);
    return GetTagFromCisLineHeaders;
}(SpeakeasyBase));
export { GetTagFromCisLineHeaders };
var GetTagFromCisLineRequest = /** @class */ (function (_super) {
    __extends(GetTagFromCisLineRequest, _super);
    function GetTagFromCisLineRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetTagFromCisLinePathParams)
    ], GetTagFromCisLineRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetTagFromCisLineHeaders)
    ], GetTagFromCisLineRequest.prototype, "headers", void 0);
    return GetTagFromCisLineRequest;
}(SpeakeasyBase));
export { GetTagFromCisLineRequest };
var GetTagFromCisLineResponse = /** @class */ (function (_super) {
    __extends(GetTagFromCisLineResponse, _super);
    function GetTagFromCisLineResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GetTagFromCisLineResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.ErrorModel)
    ], GetTagFromCisLineResponse.prototype, "errorModel", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GetTagFromCisLineResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.Tag)
    ], GetTagFromCisLineResponse.prototype, "tag", void 0);
    return GetTagFromCisLineResponse;
}(SpeakeasyBase));
export { GetTagFromCisLineResponse };
