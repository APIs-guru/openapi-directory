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
var PostApiV1PrebuildsPoolsPoolIdInstancesPathParams = /** @class */ (function (_super) {
    __extends(PostApiV1PrebuildsPoolsPoolIdInstancesPathParams, _super);
    function PostApiV1PrebuildsPoolsPoolIdInstancesPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=poolId" }),
        __metadata("design:type", String)
    ], PostApiV1PrebuildsPoolsPoolIdInstancesPathParams.prototype, "poolId", void 0);
    return PostApiV1PrebuildsPoolsPoolIdInstancesPathParams;
}(SpeakeasyBase));
export { PostApiV1PrebuildsPoolsPoolIdInstancesPathParams };
var PostApiV1PrebuildsPoolsPoolIdInstancesRequests = /** @class */ (function (_super) {
    __extends(PostApiV1PrebuildsPoolsPoolIdInstancesRequests, _super);
    function PostApiV1PrebuildsPoolsPoolIdInstancesRequests() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/*+json" }),
        __metadata("design:type", shared.CreateEnvironmentPoolResourceBody)
    ], PostApiV1PrebuildsPoolsPoolIdInstancesRequests.prototype, "createEnvironmentPoolResourceBody", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.CreateEnvironmentPoolResourceBody)
    ], PostApiV1PrebuildsPoolsPoolIdInstancesRequests.prototype, "createEnvironmentPoolResourceBody1", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json-patch+json" }),
        __metadata("design:type", shared.CreateEnvironmentPoolResourceBody)
    ], PostApiV1PrebuildsPoolsPoolIdInstancesRequests.prototype, "createEnvironmentPoolResourceBody2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=text/json" }),
        __metadata("design:type", shared.CreateEnvironmentPoolResourceBody)
    ], PostApiV1PrebuildsPoolsPoolIdInstancesRequests.prototype, "createEnvironmentPoolResourceBody3", void 0);
    return PostApiV1PrebuildsPoolsPoolIdInstancesRequests;
}(SpeakeasyBase));
export { PostApiV1PrebuildsPoolsPoolIdInstancesRequests };
var PostApiV1PrebuildsPoolsPoolIdInstancesRequest = /** @class */ (function (_super) {
    __extends(PostApiV1PrebuildsPoolsPoolIdInstancesRequest, _super);
    function PostApiV1PrebuildsPoolsPoolIdInstancesRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", PostApiV1PrebuildsPoolsPoolIdInstancesPathParams)
    ], PostApiV1PrebuildsPoolsPoolIdInstancesRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", PostApiV1PrebuildsPoolsPoolIdInstancesRequests)
    ], PostApiV1PrebuildsPoolsPoolIdInstancesRequest.prototype, "request", void 0);
    return PostApiV1PrebuildsPoolsPoolIdInstancesRequest;
}(SpeakeasyBase));
export { PostApiV1PrebuildsPoolsPoolIdInstancesRequest };
var PostApiV1PrebuildsPoolsPoolIdInstancesResponse = /** @class */ (function (_super) {
    __extends(PostApiV1PrebuildsPoolsPoolIdInstancesResponse, _super);
    function PostApiV1PrebuildsPoolsPoolIdInstancesResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Uint8Array)
    ], PostApiV1PrebuildsPoolsPoolIdInstancesResponse.prototype, "body", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], PostApiV1PrebuildsPoolsPoolIdInstancesResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Map)
    ], PostApiV1PrebuildsPoolsPoolIdInstancesResponse.prototype, "problemDetails", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], PostApiV1PrebuildsPoolsPoolIdInstancesResponse.prototype, "statusCode", void 0);
    return PostApiV1PrebuildsPoolsPoolIdInstancesResponse;
}(SpeakeasyBase));
export { PostApiV1PrebuildsPoolsPoolIdInstancesResponse };
