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
var RoadStatusPathParams = /** @class */ (function (_super) {
    __extends(RoadStatusPathParams, _super);
    function RoadStatusPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=ids" }),
        __metadata("design:type", Array)
    ], RoadStatusPathParams.prototype, "ids", void 0);
    return RoadStatusPathParams;
}(SpeakeasyBase));
export { RoadStatusPathParams };
var RoadStatusQueryParams = /** @class */ (function (_super) {
    __extends(RoadStatusQueryParams, _super);
    function RoadStatusQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=dateRangeNullable.endDate" }),
        __metadata("design:type", Date)
    ], RoadStatusQueryParams.prototype, "dateRangeNullableEndDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=dateRangeNullable.startDate" }),
        __metadata("design:type", Date)
    ], RoadStatusQueryParams.prototype, "dateRangeNullableStartDate", void 0);
    return RoadStatusQueryParams;
}(SpeakeasyBase));
export { RoadStatusQueryParams };
var RoadStatusRequest = /** @class */ (function (_super) {
    __extends(RoadStatusRequest, _super);
    function RoadStatusRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", RoadStatusPathParams)
    ], RoadStatusRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", RoadStatusQueryParams)
    ], RoadStatusRequest.prototype, "queryParams", void 0);
    return RoadStatusRequest;
}(SpeakeasyBase));
export { RoadStatusRequest };
var RoadStatusResponse = /** @class */ (function (_super) {
    __extends(RoadStatusResponse, _super);
    function RoadStatusResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Uint8Array)
    ], RoadStatusResponse.prototype, "body", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], RoadStatusResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], RoadStatusResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata({ elemType: shared.TflApiPresentationEntitiesRoadCorridor }),
        __metadata("design:type", Array)
    ], RoadStatusResponse.prototype, "tflApiPresentationEntitiesRoadCorridors", void 0);
    return RoadStatusResponse;
}(SpeakeasyBase));
export { RoadStatusResponse };
