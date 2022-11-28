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
var RootV1ScoringsConsolidatedQueryParams = /** @class */ (function (_super) {
    __extends(RootV1ScoringsConsolidatedQueryParams, _super);
    function RootV1ScoringsConsolidatedQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=AppId" }),
        __metadata("design:type", String)
    ], RootV1ScoringsConsolidatedQueryParams.prototype, "appId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=CompanyId" }),
        __metadata("design:type", String)
    ], RootV1ScoringsConsolidatedQueryParams.prototype, "companyId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=DeviceToken" }),
        __metadata("design:type", String)
    ], RootV1ScoringsConsolidatedQueryParams.prototype, "deviceToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=EndDate" }),
        __metadata("design:type", String)
    ], RootV1ScoringsConsolidatedQueryParams.prototype, "endDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=InstanceId" }),
        __metadata("design:type", String)
    ], RootV1ScoringsConsolidatedQueryParams.prototype, "instanceId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=StartDate" }),
        __metadata("design:type", String)
    ], RootV1ScoringsConsolidatedQueryParams.prototype, "startDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Tag" }),
        __metadata("design:type", String)
    ], RootV1ScoringsConsolidatedQueryParams.prototype, "tag", void 0);
    return RootV1ScoringsConsolidatedQueryParams;
}(SpeakeasyBase));
export { RootV1ScoringsConsolidatedQueryParams };
var RootV1ScoringsConsolidatedRequest = /** @class */ (function (_super) {
    __extends(RootV1ScoringsConsolidatedRequest, _super);
    function RootV1ScoringsConsolidatedRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", RootV1ScoringsConsolidatedQueryParams)
    ], RootV1ScoringsConsolidatedRequest.prototype, "queryParams", void 0);
    return RootV1ScoringsConsolidatedRequest;
}(SpeakeasyBase));
export { RootV1ScoringsConsolidatedRequest };
var RootV1ScoringsConsolidatedResponse = /** @class */ (function (_super) {
    __extends(RootV1ScoringsConsolidatedResponse, _super);
    function RootV1ScoringsConsolidatedResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], RootV1ScoringsConsolidatedResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Map)
    ], RootV1ScoringsConsolidatedResponse.prototype, "headers", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], RootV1ScoringsConsolidatedResponse.prototype, "statusCode", void 0);
    return RootV1ScoringsConsolidatedResponse;
}(SpeakeasyBase));
export { RootV1ScoringsConsolidatedResponse };
