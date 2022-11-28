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
var RootV1StatisticsConsolidatedQueryParams = /** @class */ (function (_super) {
    __extends(RootV1StatisticsConsolidatedQueryParams, _super);
    function RootV1StatisticsConsolidatedQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=AppId" }),
        __metadata("design:type", String)
    ], RootV1StatisticsConsolidatedQueryParams.prototype, "appId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=CompanyId" }),
        __metadata("design:type", String)
    ], RootV1StatisticsConsolidatedQueryParams.prototype, "companyId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=DeviceToken" }),
        __metadata("design:type", String)
    ], RootV1StatisticsConsolidatedQueryParams.prototype, "deviceToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=EndDate" }),
        __metadata("design:type", String)
    ], RootV1StatisticsConsolidatedQueryParams.prototype, "endDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=InstanceId" }),
        __metadata("design:type", String)
    ], RootV1StatisticsConsolidatedQueryParams.prototype, "instanceId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=StartDate" }),
        __metadata("design:type", String)
    ], RootV1StatisticsConsolidatedQueryParams.prototype, "startDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Tag" }),
        __metadata("design:type", String)
    ], RootV1StatisticsConsolidatedQueryParams.prototype, "tag", void 0);
    return RootV1StatisticsConsolidatedQueryParams;
}(SpeakeasyBase));
export { RootV1StatisticsConsolidatedQueryParams };
var RootV1StatisticsConsolidatedRequest = /** @class */ (function (_super) {
    __extends(RootV1StatisticsConsolidatedRequest, _super);
    function RootV1StatisticsConsolidatedRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", RootV1StatisticsConsolidatedQueryParams)
    ], RootV1StatisticsConsolidatedRequest.prototype, "queryParams", void 0);
    return RootV1StatisticsConsolidatedRequest;
}(SpeakeasyBase));
export { RootV1StatisticsConsolidatedRequest };
var RootV1StatisticsConsolidatedResponse = /** @class */ (function (_super) {
    __extends(RootV1StatisticsConsolidatedResponse, _super);
    function RootV1StatisticsConsolidatedResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], RootV1StatisticsConsolidatedResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Map)
    ], RootV1StatisticsConsolidatedResponse.prototype, "headers", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], RootV1StatisticsConsolidatedResponse.prototype, "statusCode", void 0);
    return RootV1StatisticsConsolidatedResponse;
}(SpeakeasyBase));
export { RootV1StatisticsConsolidatedResponse };
