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
import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
var FindPrivateTweetMetricsByIdQueryParams = /** @class */ (function (_super) {
    __extends(FindPrivateTweetMetricsByIdQueryParams, _super);
    function FindPrivateTweetMetricsByIdQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=false;name=ids" }),
        __metadata("design:type", Array)
    ], FindPrivateTweetMetricsByIdQueryParams.prototype, "ids", void 0);
    return FindPrivateTweetMetricsByIdQueryParams;
}(SpeakeasyBase));
export { FindPrivateTweetMetricsByIdQueryParams };
var FindPrivateTweetMetricsByIdRequest = /** @class */ (function (_super) {
    __extends(FindPrivateTweetMetricsByIdRequest, _super);
    function FindPrivateTweetMetricsByIdRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", FindPrivateTweetMetricsByIdQueryParams)
    ], FindPrivateTweetMetricsByIdRequest.prototype, "queryParams", void 0);
    return FindPrivateTweetMetricsByIdRequest;
}(SpeakeasyBase));
export { FindPrivateTweetMetricsByIdRequest };
var FindPrivateTweetMetricsByIdResponse = /** @class */ (function (_super) {
    __extends(FindPrivateTweetMetricsByIdResponse, _super);
    function FindPrivateTweetMetricsByIdResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], FindPrivateTweetMetricsByIdResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], FindPrivateTweetMetricsByIdResponse.prototype, "error", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], FindPrivateTweetMetricsByIdResponse.prototype, "problem", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], FindPrivateTweetMetricsByIdResponse.prototype, "statusCode", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", shared.TweetMetricsResponse)
    ], FindPrivateTweetMetricsByIdResponse.prototype, "tweetMetricsResponse", void 0);
    return FindPrivateTweetMetricsByIdResponse;
}(SpeakeasyBase));
export { FindPrivateTweetMetricsByIdResponse };
