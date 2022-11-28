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
var GetFundingAccountPathParams = /** @class */ (function (_super) {
    __extends(GetFundingAccountPathParams, _super);
    function GetFundingAccountPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=fundingAccountId" }),
        __metadata("design:type", String)
    ], GetFundingAccountPathParams.prototype, "fundingAccountId", void 0);
    return GetFundingAccountPathParams;
}(SpeakeasyBase));
export { GetFundingAccountPathParams };
var GetFundingAccountQueryParams = /** @class */ (function (_super) {
    __extends(GetFundingAccountQueryParams, _super);
    function GetFundingAccountQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=sensitive" }),
        __metadata("design:type", Boolean)
    ], GetFundingAccountQueryParams.prototype, "sensitive", void 0);
    return GetFundingAccountQueryParams;
}(SpeakeasyBase));
export { GetFundingAccountQueryParams };
var GetFundingAccountRequest = /** @class */ (function (_super) {
    __extends(GetFundingAccountRequest, _super);
    function GetFundingAccountRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetFundingAccountPathParams)
    ], GetFundingAccountRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetFundingAccountQueryParams)
    ], GetFundingAccountRequest.prototype, "queryParams", void 0);
    return GetFundingAccountRequest;
}(SpeakeasyBase));
export { GetFundingAccountRequest };
var GetFundingAccountResponse = /** @class */ (function (_super) {
    __extends(GetFundingAccountResponse, _super);
    function GetFundingAccountResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GetFundingAccountResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.FundingAccountResponse)
    ], GetFundingAccountResponse.prototype, "fundingAccountResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GetFundingAccountResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], GetFundingAccountResponse.prototype, "inlineResponse401", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], GetFundingAccountResponse.prototype, "inlineResponse403", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], GetFundingAccountResponse.prototype, "inlineResponse404", void 0);
    return GetFundingAccountResponse;
}(SpeakeasyBase));
export { GetFundingAccountResponse };
