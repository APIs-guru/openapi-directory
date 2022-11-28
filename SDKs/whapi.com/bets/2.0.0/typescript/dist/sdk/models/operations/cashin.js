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
var CashinPathParams = /** @class */ (function (_super) {
    __extends(CashinPathParams, _super);
    function CashinPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=betId" }),
        __metadata("design:type", String)
    ], CashinPathParams.prototype, "betId", void 0);
    return CashinPathParams;
}(SpeakeasyBase));
export { CashinPathParams };
var CashinQueryParams = /** @class */ (function (_super) {
    __extends(CashinQueryParams, _super);
    function CashinQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=cashInValue" }),
        __metadata("design:type", Number)
    ], CashinQueryParams.prototype, "cashInValue", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=cashinBetDelayId" }),
        __metadata("design:type", String)
    ], CashinQueryParams.prototype, "cashinBetDelayId", void 0);
    return CashinQueryParams;
}(SpeakeasyBase));
export { CashinQueryParams };
var CashinHeaders = /** @class */ (function (_super) {
    __extends(CashinHeaders, _super);
    function CashinHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=apiKey" }),
        __metadata("design:type", String)
    ], CashinHeaders.prototype, "apiKey", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=apiSecret" }),
        __metadata("design:type", String)
    ], CashinHeaders.prototype, "apiSecret", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=apiTicket" }),
        __metadata("design:type", String)
    ], CashinHeaders.prototype, "apiTicket", void 0);
    return CashinHeaders;
}(SpeakeasyBase));
export { CashinHeaders };
var CashinRequest = /** @class */ (function (_super) {
    __extends(CashinRequest, _super);
    function CashinRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", CashinPathParams)
    ], CashinRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", CashinQueryParams)
    ], CashinRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", CashinHeaders)
    ], CashinRequest.prototype, "headers", void 0);
    return CashinRequest;
}(SpeakeasyBase));
export { CashinRequest };
var CashinResponse = /** @class */ (function (_super) {
    __extends(CashinResponse, _super);
    function CashinResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], CashinResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], CashinResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.CashInResponse)
    ], CashinResponse.prototype, "cashInResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.Errors)
    ], CashinResponse.prototype, "errors", void 0);
    return CashinResponse;
}(SpeakeasyBase));
export { CashinResponse };
