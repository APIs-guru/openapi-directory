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
var PostApiV1EnvironmentsEnvironmentIdStartPathParams = /** @class */ (function (_super) {
    __extends(PostApiV1EnvironmentsEnvironmentIdStartPathParams, _super);
    function PostApiV1EnvironmentsEnvironmentIdStartPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=environmentId" }),
        __metadata("design:type", String)
    ], PostApiV1EnvironmentsEnvironmentIdStartPathParams.prototype, "environmentId", void 0);
    return PostApiV1EnvironmentsEnvironmentIdStartPathParams;
}(SpeakeasyBase));
export { PostApiV1EnvironmentsEnvironmentIdStartPathParams };
var PostApiV1EnvironmentsEnvironmentIdStartQueryParams = /** @class */ (function (_super) {
    __extends(PostApiV1EnvironmentsEnvironmentIdStartQueryParams, _super);
    function PostApiV1EnvironmentsEnvironmentIdStartQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access" }),
        __metadata("design:type", Boolean)
    ], PostApiV1EnvironmentsEnvironmentIdStartQueryParams.prototype, "access", void 0);
    return PostApiV1EnvironmentsEnvironmentIdStartQueryParams;
}(SpeakeasyBase));
export { PostApiV1EnvironmentsEnvironmentIdStartQueryParams };
var PostApiV1EnvironmentsEnvironmentIdStartRequest = /** @class */ (function (_super) {
    __extends(PostApiV1EnvironmentsEnvironmentIdStartRequest, _super);
    function PostApiV1EnvironmentsEnvironmentIdStartRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", PostApiV1EnvironmentsEnvironmentIdStartPathParams)
    ], PostApiV1EnvironmentsEnvironmentIdStartRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", PostApiV1EnvironmentsEnvironmentIdStartQueryParams)
    ], PostApiV1EnvironmentsEnvironmentIdStartRequest.prototype, "queryParams", void 0);
    return PostApiV1EnvironmentsEnvironmentIdStartRequest;
}(SpeakeasyBase));
export { PostApiV1EnvironmentsEnvironmentIdStartRequest };
var PostApiV1EnvironmentsEnvironmentIdStartResponse = /** @class */ (function (_super) {
    __extends(PostApiV1EnvironmentsEnvironmentIdStartResponse, _super);
    function PostApiV1EnvironmentsEnvironmentIdStartResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Uint8Array)
    ], PostApiV1EnvironmentsEnvironmentIdStartResponse.prototype, "body", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.CloudEnvironmentResult)
    ], PostApiV1EnvironmentsEnvironmentIdStartResponse.prototype, "cloudEnvironmentResult", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], PostApiV1EnvironmentsEnvironmentIdStartResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], PostApiV1EnvironmentsEnvironmentIdStartResponse.prototype, "messageCodes", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Map)
    ], PostApiV1EnvironmentsEnvironmentIdStartResponse.prototype, "problemDetails", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], PostApiV1EnvironmentsEnvironmentIdStartResponse.prototype, "statusCode", void 0);
    return PostApiV1EnvironmentsEnvironmentIdStartResponse;
}(SpeakeasyBase));
export { PostApiV1EnvironmentsEnvironmentIdStartResponse };
