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
var GetSourceAccountsV3QueryParams = /** @class */ (function (_super) {
    __extends(GetSourceAccountsV3QueryParams, _super);
    function GetSourceAccountsV3QueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fundingAccountId" }),
        __metadata("design:type", String)
    ], GetSourceAccountsV3QueryParams.prototype, "fundingAccountId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=includeUserDeleted" }),
        __metadata("design:type", String)
    ], GetSourceAccountsV3QueryParams.prototype, "includeUserDeleted", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=page" }),
        __metadata("design:type", Number)
    ], GetSourceAccountsV3QueryParams.prototype, "page", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=pageSize" }),
        __metadata("design:type", Number)
    ], GetSourceAccountsV3QueryParams.prototype, "pageSize", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=payorId" }),
        __metadata("design:type", String)
    ], GetSourceAccountsV3QueryParams.prototype, "payorId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=physicalAccountId" }),
        __metadata("design:type", String)
    ], GetSourceAccountsV3QueryParams.prototype, "physicalAccountId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=physicalAccountName" }),
        __metadata("design:type", String)
    ], GetSourceAccountsV3QueryParams.prototype, "physicalAccountName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=sort" }),
        __metadata("design:type", String)
    ], GetSourceAccountsV3QueryParams.prototype, "sort", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=type" }),
        __metadata("design:type", String)
    ], GetSourceAccountsV3QueryParams.prototype, "type", void 0);
    return GetSourceAccountsV3QueryParams;
}(SpeakeasyBase));
export { GetSourceAccountsV3QueryParams };
var GetSourceAccountsV3Request = /** @class */ (function (_super) {
    __extends(GetSourceAccountsV3Request, _super);
    function GetSourceAccountsV3Request() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetSourceAccountsV3QueryParams)
    ], GetSourceAccountsV3Request.prototype, "queryParams", void 0);
    return GetSourceAccountsV3Request;
}(SpeakeasyBase));
export { GetSourceAccountsV3Request };
var GetSourceAccountsV3Response = /** @class */ (function (_super) {
    __extends(GetSourceAccountsV3Response, _super);
    function GetSourceAccountsV3Response() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GetSourceAccountsV3Response.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.ListSourceAccountResponseV3)
    ], GetSourceAccountsV3Response.prototype, "listSourceAccountResponseV3", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GetSourceAccountsV3Response.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], GetSourceAccountsV3Response.prototype, "inlineResponse400", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], GetSourceAccountsV3Response.prototype, "inlineResponse401", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], GetSourceAccountsV3Response.prototype, "inlineResponse403", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], GetSourceAccountsV3Response.prototype, "inlineResponse404", void 0);
    return GetSourceAccountsV3Response;
}(SpeakeasyBase));
export { GetSourceAccountsV3Response };
