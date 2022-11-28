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
var GetApiV1GenevaActionsBillingEnvironmentIdPathParams = /** @class */ (function (_super) {
    __extends(GetApiV1GenevaActionsBillingEnvironmentIdPathParams, _super);
    function GetApiV1GenevaActionsBillingEnvironmentIdPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=environmentId" }),
        __metadata("design:type", String)
    ], GetApiV1GenevaActionsBillingEnvironmentIdPathParams.prototype, "environmentId", void 0);
    return GetApiV1GenevaActionsBillingEnvironmentIdPathParams;
}(SpeakeasyBase));
export { GetApiV1GenevaActionsBillingEnvironmentIdPathParams };
var GetApiV1GenevaActionsBillingEnvironmentIdQueryParams = /** @class */ (function (_super) {
    __extends(GetApiV1GenevaActionsBillingEnvironmentIdQueryParams, _super);
    function GetApiV1GenevaActionsBillingEnvironmentIdQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=endTime" }),
        __metadata("design:type", String)
    ], GetApiV1GenevaActionsBillingEnvironmentIdQueryParams.prototype, "endTime", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=startTime" }),
        __metadata("design:type", String)
    ], GetApiV1GenevaActionsBillingEnvironmentIdQueryParams.prototype, "startTime", void 0);
    return GetApiV1GenevaActionsBillingEnvironmentIdQueryParams;
}(SpeakeasyBase));
export { GetApiV1GenevaActionsBillingEnvironmentIdQueryParams };
var GetApiV1GenevaActionsBillingEnvironmentIdRequest = /** @class */ (function (_super) {
    __extends(GetApiV1GenevaActionsBillingEnvironmentIdRequest, _super);
    function GetApiV1GenevaActionsBillingEnvironmentIdRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetApiV1GenevaActionsBillingEnvironmentIdPathParams)
    ], GetApiV1GenevaActionsBillingEnvironmentIdRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetApiV1GenevaActionsBillingEnvironmentIdQueryParams)
    ], GetApiV1GenevaActionsBillingEnvironmentIdRequest.prototype, "queryParams", void 0);
    return GetApiV1GenevaActionsBillingEnvironmentIdRequest;
}(SpeakeasyBase));
export { GetApiV1GenevaActionsBillingEnvironmentIdRequest };
var GetApiV1GenevaActionsBillingEnvironmentIdResponse = /** @class */ (function (_super) {
    __extends(GetApiV1GenevaActionsBillingEnvironmentIdResponse, _super);
    function GetApiV1GenevaActionsBillingEnvironmentIdResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.BillSummary)
    ], GetApiV1GenevaActionsBillingEnvironmentIdResponse.prototype, "billSummary", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Uint8Array)
    ], GetApiV1GenevaActionsBillingEnvironmentIdResponse.prototype, "body", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GetApiV1GenevaActionsBillingEnvironmentIdResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Map)
    ], GetApiV1GenevaActionsBillingEnvironmentIdResponse.prototype, "problemDetails", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GetApiV1GenevaActionsBillingEnvironmentIdResponse.prototype, "statusCode", void 0);
    return GetApiV1GenevaActionsBillingEnvironmentIdResponse;
}(SpeakeasyBase));
export { GetApiV1GenevaActionsBillingEnvironmentIdResponse };
