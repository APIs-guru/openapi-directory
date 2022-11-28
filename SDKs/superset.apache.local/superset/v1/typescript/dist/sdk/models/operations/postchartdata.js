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
var PostChartDataSecurity = /** @class */ (function (_super) {
    __extends(PostChartDataSecurity, _super);
    function PostChartDataSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=bearer" }),
        __metadata("design:type", shared.SchemeJwt)
    ], PostChartDataSecurity.prototype, "jwt", void 0);
    return PostChartDataSecurity;
}(SpeakeasyBase));
export { PostChartDataSecurity };
var PostChartData400ApplicationJson = /** @class */ (function (_super) {
    __extends(PostChartData400ApplicationJson, _super);
    function PostChartData400ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=message" }),
        __metadata("design:type", String)
    ], PostChartData400ApplicationJson.prototype, "message", void 0);
    return PostChartData400ApplicationJson;
}(SpeakeasyBase));
export { PostChartData400ApplicationJson };
var PostChartData401ApplicationJson = /** @class */ (function (_super) {
    __extends(PostChartData401ApplicationJson, _super);
    function PostChartData401ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=message" }),
        __metadata("design:type", String)
    ], PostChartData401ApplicationJson.prototype, "message", void 0);
    return PostChartData401ApplicationJson;
}(SpeakeasyBase));
export { PostChartData401ApplicationJson };
var PostChartData500ApplicationJson = /** @class */ (function (_super) {
    __extends(PostChartData500ApplicationJson, _super);
    function PostChartData500ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=message" }),
        __metadata("design:type", String)
    ], PostChartData500ApplicationJson.prototype, "message", void 0);
    return PostChartData500ApplicationJson;
}(SpeakeasyBase));
export { PostChartData500ApplicationJson };
var PostChartDataRequest = /** @class */ (function (_super) {
    __extends(PostChartDataRequest, _super);
    function PostChartDataRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.ChartDataQueryContextSchema)
    ], PostChartDataRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", PostChartDataSecurity)
    ], PostChartDataRequest.prototype, "security", void 0);
    return PostChartDataRequest;
}(SpeakeasyBase));
export { PostChartDataRequest };
var PostChartDataResponse = /** @class */ (function (_super) {
    __extends(PostChartDataResponse, _super);
    function PostChartDataResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.ChartDataAsyncResponseSchema)
    ], PostChartDataResponse.prototype, "chartDataAsyncResponseSchema", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.ChartDataResponseSchema)
    ], PostChartDataResponse.prototype, "chartDataResponseSchema", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], PostChartDataResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", PostChartData400ApplicationJson)
    ], PostChartDataResponse.prototype, "postChartData400ApplicationJsonObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", PostChartData401ApplicationJson)
    ], PostChartDataResponse.prototype, "postChartData401ApplicationJsonObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", PostChartData500ApplicationJson)
    ], PostChartDataResponse.prototype, "postChartData500ApplicationJsonObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], PostChartDataResponse.prototype, "statusCode", void 0);
    return PostChartDataResponse;
}(SpeakeasyBase));
export { PostChartDataResponse };
