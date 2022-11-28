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
var LineStatusPathParams = /** @class */ (function (_super) {
    __extends(LineStatusPathParams, _super);
    function LineStatusPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=EndDate" }),
        __metadata("design:type", String)
    ], LineStatusPathParams.prototype, "endDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=StartDate" }),
        __metadata("design:type", String)
    ], LineStatusPathParams.prototype, "startDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=ids" }),
        __metadata("design:type", Array)
    ], LineStatusPathParams.prototype, "ids", void 0);
    return LineStatusPathParams;
}(SpeakeasyBase));
export { LineStatusPathParams };
var LineStatusQueryParams = /** @class */ (function (_super) {
    __extends(LineStatusQueryParams, _super);
    function LineStatusQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=dateRange.endDate" }),
        __metadata("design:type", Date)
    ], LineStatusQueryParams.prototype, "dateRangeEndDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=dateRange.startDate" }),
        __metadata("design:type", Date)
    ], LineStatusQueryParams.prototype, "dateRangeStartDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=detail" }),
        __metadata("design:type", Boolean)
    ], LineStatusQueryParams.prototype, "detail", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=endDate" }),
        __metadata("design:type", String)
    ], LineStatusQueryParams.prototype, "endDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=startDate" }),
        __metadata("design:type", String)
    ], LineStatusQueryParams.prototype, "startDate", void 0);
    return LineStatusQueryParams;
}(SpeakeasyBase));
export { LineStatusQueryParams };
var LineStatusRequest = /** @class */ (function (_super) {
    __extends(LineStatusRequest, _super);
    function LineStatusRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", LineStatusPathParams)
    ], LineStatusRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", LineStatusQueryParams)
    ], LineStatusRequest.prototype, "queryParams", void 0);
    return LineStatusRequest;
}(SpeakeasyBase));
export { LineStatusRequest };
var LineStatusResponse = /** @class */ (function (_super) {
    __extends(LineStatusResponse, _super);
    function LineStatusResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Uint8Array)
    ], LineStatusResponse.prototype, "body", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], LineStatusResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], LineStatusResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata({ elemType: shared.TflApiPresentationEntitiesLine }),
        __metadata("design:type", Array)
    ], LineStatusResponse.prototype, "tflApiPresentationEntitiesLines", void 0);
    return LineStatusResponse;
}(SpeakeasyBase));
export { LineStatusResponse };
