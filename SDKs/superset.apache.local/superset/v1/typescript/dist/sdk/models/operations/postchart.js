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
var PostChartSecurity = /** @class */ (function (_super) {
    __extends(PostChartSecurity, _super);
    function PostChartSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=bearer" }),
        __metadata("design:type", shared.SchemeJwt)
    ], PostChartSecurity.prototype, "jwt", void 0);
    return PostChartSecurity;
}(SpeakeasyBase));
export { PostChartSecurity };
var PostChart201ApplicationJson = /** @class */ (function (_super) {
    __extends(PostChart201ApplicationJson, _super);
    function PostChart201ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=id" }),
        __metadata("design:type", Number)
    ], PostChart201ApplicationJson.prototype, "id", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=result" }),
        __metadata("design:type", shared.ChartRestApiPost)
    ], PostChart201ApplicationJson.prototype, "result", void 0);
    return PostChart201ApplicationJson;
}(SpeakeasyBase));
export { PostChart201ApplicationJson };
var PostChart400ApplicationJson = /** @class */ (function (_super) {
    __extends(PostChart400ApplicationJson, _super);
    function PostChart400ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=message" }),
        __metadata("design:type", String)
    ], PostChart400ApplicationJson.prototype, "message", void 0);
    return PostChart400ApplicationJson;
}(SpeakeasyBase));
export { PostChart400ApplicationJson };
var PostChart401ApplicationJson = /** @class */ (function (_super) {
    __extends(PostChart401ApplicationJson, _super);
    function PostChart401ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=message" }),
        __metadata("design:type", String)
    ], PostChart401ApplicationJson.prototype, "message", void 0);
    return PostChart401ApplicationJson;
}(SpeakeasyBase));
export { PostChart401ApplicationJson };
var PostChart422ApplicationJson = /** @class */ (function (_super) {
    __extends(PostChart422ApplicationJson, _super);
    function PostChart422ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=message" }),
        __metadata("design:type", String)
    ], PostChart422ApplicationJson.prototype, "message", void 0);
    return PostChart422ApplicationJson;
}(SpeakeasyBase));
export { PostChart422ApplicationJson };
var PostChart500ApplicationJson = /** @class */ (function (_super) {
    __extends(PostChart500ApplicationJson, _super);
    function PostChart500ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=message" }),
        __metadata("design:type", String)
    ], PostChart500ApplicationJson.prototype, "message", void 0);
    return PostChart500ApplicationJson;
}(SpeakeasyBase));
export { PostChart500ApplicationJson };
var PostChartRequest = /** @class */ (function (_super) {
    __extends(PostChartRequest, _super);
    function PostChartRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.ChartRestApiPost)
    ], PostChartRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", PostChartSecurity)
    ], PostChartRequest.prototype, "security", void 0);
    return PostChartRequest;
}(SpeakeasyBase));
export { PostChartRequest };
var PostChartResponse = /** @class */ (function (_super) {
    __extends(PostChartResponse, _super);
    function PostChartResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], PostChartResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", PostChart201ApplicationJson)
    ], PostChartResponse.prototype, "postChart201ApplicationJsonObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", PostChart400ApplicationJson)
    ], PostChartResponse.prototype, "postChart400ApplicationJsonObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", PostChart401ApplicationJson)
    ], PostChartResponse.prototype, "postChart401ApplicationJsonObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", PostChart422ApplicationJson)
    ], PostChartResponse.prototype, "postChart422ApplicationJsonObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", PostChart500ApplicationJson)
    ], PostChartResponse.prototype, "postChart500ApplicationJsonObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], PostChartResponse.prototype, "statusCode", void 0);
    return PostChartResponse;
}(SpeakeasyBase));
export { PostChartResponse };
