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
var PatchApiV1EnvironmentsEnvironmentIdFolderPathParams = /** @class */ (function (_super) {
    __extends(PatchApiV1EnvironmentsEnvironmentIdFolderPathParams, _super);
    function PatchApiV1EnvironmentsEnvironmentIdFolderPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=environmentId" }),
        __metadata("design:type", String)
    ], PatchApiV1EnvironmentsEnvironmentIdFolderPathParams.prototype, "environmentId", void 0);
    return PatchApiV1EnvironmentsEnvironmentIdFolderPathParams;
}(SpeakeasyBase));
export { PatchApiV1EnvironmentsEnvironmentIdFolderPathParams };
var PatchApiV1EnvironmentsEnvironmentIdFolderRequests = /** @class */ (function (_super) {
    __extends(PatchApiV1EnvironmentsEnvironmentIdFolderRequests, _super);
    function PatchApiV1EnvironmentsEnvironmentIdFolderRequests() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/*+json" }),
        __metadata("design:type", shared.CloudEnvironmentFolderBody)
    ], PatchApiV1EnvironmentsEnvironmentIdFolderRequests.prototype, "cloudEnvironmentFolderBody", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.CloudEnvironmentFolderBody)
    ], PatchApiV1EnvironmentsEnvironmentIdFolderRequests.prototype, "cloudEnvironmentFolderBody1", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json-patch+json" }),
        __metadata("design:type", shared.CloudEnvironmentFolderBody)
    ], PatchApiV1EnvironmentsEnvironmentIdFolderRequests.prototype, "cloudEnvironmentFolderBody2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=text/json" }),
        __metadata("design:type", shared.CloudEnvironmentFolderBody)
    ], PatchApiV1EnvironmentsEnvironmentIdFolderRequests.prototype, "cloudEnvironmentFolderBody3", void 0);
    return PatchApiV1EnvironmentsEnvironmentIdFolderRequests;
}(SpeakeasyBase));
export { PatchApiV1EnvironmentsEnvironmentIdFolderRequests };
var PatchApiV1EnvironmentsEnvironmentIdFolderRequest = /** @class */ (function (_super) {
    __extends(PatchApiV1EnvironmentsEnvironmentIdFolderRequest, _super);
    function PatchApiV1EnvironmentsEnvironmentIdFolderRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", PatchApiV1EnvironmentsEnvironmentIdFolderPathParams)
    ], PatchApiV1EnvironmentsEnvironmentIdFolderRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", PatchApiV1EnvironmentsEnvironmentIdFolderRequests)
    ], PatchApiV1EnvironmentsEnvironmentIdFolderRequest.prototype, "request", void 0);
    return PatchApiV1EnvironmentsEnvironmentIdFolderRequest;
}(SpeakeasyBase));
export { PatchApiV1EnvironmentsEnvironmentIdFolderRequest };
var PatchApiV1EnvironmentsEnvironmentIdFolderResponse = /** @class */ (function (_super) {
    __extends(PatchApiV1EnvironmentsEnvironmentIdFolderResponse, _super);
    function PatchApiV1EnvironmentsEnvironmentIdFolderResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Uint8Array)
    ], PatchApiV1EnvironmentsEnvironmentIdFolderResponse.prototype, "body", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.CloudEnvironmentResult)
    ], PatchApiV1EnvironmentsEnvironmentIdFolderResponse.prototype, "cloudEnvironmentResult", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], PatchApiV1EnvironmentsEnvironmentIdFolderResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Array)
    ], PatchApiV1EnvironmentsEnvironmentIdFolderResponse.prototype, "messageCodes", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Map)
    ], PatchApiV1EnvironmentsEnvironmentIdFolderResponse.prototype, "problemDetails", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], PatchApiV1EnvironmentsEnvironmentIdFolderResponse.prototype, "statusCode", void 0);
    return PatchApiV1EnvironmentsEnvironmentIdFolderResponse;
}(SpeakeasyBase));
export { PatchApiV1EnvironmentsEnvironmentIdFolderResponse };
