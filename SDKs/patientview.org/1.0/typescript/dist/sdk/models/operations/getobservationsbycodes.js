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
var GetObservationsByCodesPathParams = /** @class */ (function (_super) {
    __extends(GetObservationsByCodesPathParams, _super);
    function GetObservationsByCodesPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=userId" }),
        __metadata("design:type", Number)
    ], GetObservationsByCodesPathParams.prototype, "userId", void 0);
    return GetObservationsByCodesPathParams;
}(SpeakeasyBase));
export { GetObservationsByCodesPathParams };
var GetObservationsByCodesQueryParams = /** @class */ (function (_super) {
    __extends(GetObservationsByCodesQueryParams, _super);
    function GetObservationsByCodesQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=code" }),
        __metadata("design:type", Array)
    ], GetObservationsByCodesQueryParams.prototype, "code", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=limit" }),
        __metadata("design:type", Number)
    ], GetObservationsByCodesQueryParams.prototype, "limit", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=offset" }),
        __metadata("design:type", Number)
    ], GetObservationsByCodesQueryParams.prototype, "offset", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=orderDirection" }),
        __metadata("design:type", String)
    ], GetObservationsByCodesQueryParams.prototype, "orderDirection", void 0);
    return GetObservationsByCodesQueryParams;
}(SpeakeasyBase));
export { GetObservationsByCodesQueryParams };
var GetObservationsByCodesRequest = /** @class */ (function (_super) {
    __extends(GetObservationsByCodesRequest, _super);
    function GetObservationsByCodesRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetObservationsByCodesPathParams)
    ], GetObservationsByCodesRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetObservationsByCodesQueryParams)
    ], GetObservationsByCodesRequest.prototype, "queryParams", void 0);
    return GetObservationsByCodesRequest;
}(SpeakeasyBase));
export { GetObservationsByCodesRequest };
var GetObservationsByCodesResponse = /** @class */ (function (_super) {
    __extends(GetObservationsByCodesResponse, _super);
    function GetObservationsByCodesResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Uint8Array)
    ], GetObservationsByCodesResponse.prototype, "body", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GetObservationsByCodesResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GetObservationsByCodesResponse.prototype, "statusCode", void 0);
    return GetObservationsByCodesResponse;
}(SpeakeasyBase));
export { GetObservationsByCodesResponse };
