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
var PutThirdPartyTransactionTagPathParams = /** @class */ (function (_super) {
    __extends(PutThirdPartyTransactionTagPathParams, _super);
    function PutThirdPartyTransactionTagPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=EmployerId" }),
        __metadata("design:type", String)
    ], PutThirdPartyTransactionTagPathParams.prototype, "employerId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=TagId" }),
        __metadata("design:type", String)
    ], PutThirdPartyTransactionTagPathParams.prototype, "tagId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=ThirdPartyTransactionId" }),
        __metadata("design:type", String)
    ], PutThirdPartyTransactionTagPathParams.prototype, "thirdPartyTransactionId", void 0);
    return PutThirdPartyTransactionTagPathParams;
}(SpeakeasyBase));
export { PutThirdPartyTransactionTagPathParams };
var PutThirdPartyTransactionTagHeaders = /** @class */ (function (_super) {
    __extends(PutThirdPartyTransactionTagHeaders, _super);
    function PutThirdPartyTransactionTagHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=Api-Version" }),
        __metadata("design:type", String)
    ], PutThirdPartyTransactionTagHeaders.prototype, "apiVersion", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=Authorization" }),
        __metadata("design:type", String)
    ], PutThirdPartyTransactionTagHeaders.prototype, "authorization", void 0);
    return PutThirdPartyTransactionTagHeaders;
}(SpeakeasyBase));
export { PutThirdPartyTransactionTagHeaders };
var PutThirdPartyTransactionTagRequest = /** @class */ (function (_super) {
    __extends(PutThirdPartyTransactionTagRequest, _super);
    function PutThirdPartyTransactionTagRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", PutThirdPartyTransactionTagPathParams)
    ], PutThirdPartyTransactionTagRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", PutThirdPartyTransactionTagHeaders)
    ], PutThirdPartyTransactionTagRequest.prototype, "headers", void 0);
    return PutThirdPartyTransactionTagRequest;
}(SpeakeasyBase));
export { PutThirdPartyTransactionTagRequest };
var PutThirdPartyTransactionTagResponse = /** @class */ (function (_super) {
    __extends(PutThirdPartyTransactionTagResponse, _super);
    function PutThirdPartyTransactionTagResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], PutThirdPartyTransactionTagResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.ErrorModel)
    ], PutThirdPartyTransactionTagResponse.prototype, "errorModel", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], PutThirdPartyTransactionTagResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.Tag)
    ], PutThirdPartyTransactionTagResponse.prototype, "tag", void 0);
    return PutThirdPartyTransactionTagResponse;
}(SpeakeasyBase));
export { PutThirdPartyTransactionTagResponse };
