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
var PostReportSecurity = /** @class */ (function (_super) {
    __extends(PostReportSecurity, _super);
    function PostReportSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=bearer" }),
        __metadata("design:type", shared.SchemeJwt)
    ], PostReportSecurity.prototype, "jwt", void 0);
    return PostReportSecurity;
}(SpeakeasyBase));
export { PostReportSecurity };
var PostReport201ApplicationJson = /** @class */ (function (_super) {
    __extends(PostReport201ApplicationJson, _super);
    function PostReport201ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=id" }),
        __metadata("design:type", Number)
    ], PostReport201ApplicationJson.prototype, "id", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=result" }),
        __metadata("design:type", shared.ReportScheduleRestApiPost)
    ], PostReport201ApplicationJson.prototype, "result", void 0);
    return PostReport201ApplicationJson;
}(SpeakeasyBase));
export { PostReport201ApplicationJson };
var PostReport400ApplicationJson = /** @class */ (function (_super) {
    __extends(PostReport400ApplicationJson, _super);
    function PostReport400ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=message" }),
        __metadata("design:type", String)
    ], PostReport400ApplicationJson.prototype, "message", void 0);
    return PostReport400ApplicationJson;
}(SpeakeasyBase));
export { PostReport400ApplicationJson };
var PostReport401ApplicationJson = /** @class */ (function (_super) {
    __extends(PostReport401ApplicationJson, _super);
    function PostReport401ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=message" }),
        __metadata("design:type", String)
    ], PostReport401ApplicationJson.prototype, "message", void 0);
    return PostReport401ApplicationJson;
}(SpeakeasyBase));
export { PostReport401ApplicationJson };
var PostReport404ApplicationJson = /** @class */ (function (_super) {
    __extends(PostReport404ApplicationJson, _super);
    function PostReport404ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=message" }),
        __metadata("design:type", String)
    ], PostReport404ApplicationJson.prototype, "message", void 0);
    return PostReport404ApplicationJson;
}(SpeakeasyBase));
export { PostReport404ApplicationJson };
var PostReport500ApplicationJson = /** @class */ (function (_super) {
    __extends(PostReport500ApplicationJson, _super);
    function PostReport500ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=message" }),
        __metadata("design:type", String)
    ], PostReport500ApplicationJson.prototype, "message", void 0);
    return PostReport500ApplicationJson;
}(SpeakeasyBase));
export { PostReport500ApplicationJson };
var PostReportRequest = /** @class */ (function (_super) {
    __extends(PostReportRequest, _super);
    function PostReportRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.ReportScheduleRestApiPost)
    ], PostReportRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", PostReportSecurity)
    ], PostReportRequest.prototype, "security", void 0);
    return PostReportRequest;
}(SpeakeasyBase));
export { PostReportRequest };
var PostReportResponse = /** @class */ (function (_super) {
    __extends(PostReportResponse, _super);
    function PostReportResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], PostReportResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", PostReport201ApplicationJson)
    ], PostReportResponse.prototype, "postReport201ApplicationJsonObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", PostReport400ApplicationJson)
    ], PostReportResponse.prototype, "postReport400ApplicationJsonObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", PostReport401ApplicationJson)
    ], PostReportResponse.prototype, "postReport401ApplicationJsonObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", PostReport404ApplicationJson)
    ], PostReportResponse.prototype, "postReport404ApplicationJsonObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", PostReport500ApplicationJson)
    ], PostReportResponse.prototype, "postReport500ApplicationJsonObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], PostReportResponse.prototype, "statusCode", void 0);
    return PostReportResponse;
}(SpeakeasyBase));
export { PostReportResponse };
