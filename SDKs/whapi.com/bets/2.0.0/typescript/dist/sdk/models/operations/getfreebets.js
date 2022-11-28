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
var GetFreeBetsQueryParams = /** @class */ (function (_super) {
    __extends(GetFreeBetsQueryParams, _super);
    function GetFreeBetsQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=false;name=exclude" }),
        __metadata("design:type", Array)
    ], GetFreeBetsQueryParams.prototype, "exclude", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=false;name=fields" }),
        __metadata("design:type", Array)
    ], GetFreeBetsQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=false;name=include" }),
        __metadata("design:type", Array)
    ], GetFreeBetsQueryParams.prototype, "include", void 0);
    return GetFreeBetsQueryParams;
}(SpeakeasyBase));
export { GetFreeBetsQueryParams };
var GetFreeBetsHeaders = /** @class */ (function (_super) {
    __extends(GetFreeBetsHeaders, _super);
    function GetFreeBetsHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=apiKey" }),
        __metadata("design:type", String)
    ], GetFreeBetsHeaders.prototype, "apiKey", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=apiSecret" }),
        __metadata("design:type", String)
    ], GetFreeBetsHeaders.prototype, "apiSecret", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=apiTicket" }),
        __metadata("design:type", String)
    ], GetFreeBetsHeaders.prototype, "apiTicket", void 0);
    return GetFreeBetsHeaders;
}(SpeakeasyBase));
export { GetFreeBetsHeaders };
var GetFreeBetsRequest = /** @class */ (function (_super) {
    __extends(GetFreeBetsRequest, _super);
    function GetFreeBetsRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetFreeBetsQueryParams)
    ], GetFreeBetsRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetFreeBetsHeaders)
    ], GetFreeBetsRequest.prototype, "headers", void 0);
    return GetFreeBetsRequest;
}(SpeakeasyBase));
export { GetFreeBetsRequest };
var GetFreeBetsResponse = /** @class */ (function (_super) {
    __extends(GetFreeBetsResponse, _super);
    function GetFreeBetsResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GetFreeBetsResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GetFreeBetsResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata({ elemType: shared.FreeBetDetail }),
        __metadata("design:type", Array)
    ], GetFreeBetsResponse.prototype, "freeBet", void 0);
    return GetFreeBetsResponse;
}(SpeakeasyBase));
export { GetFreeBetsResponse };
