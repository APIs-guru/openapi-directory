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
var PatchApiV1EnvironmentsEnvironmentIdRestorePathParams = /** @class */ (function (_super) {
    __extends(PatchApiV1EnvironmentsEnvironmentIdRestorePathParams, _super);
    function PatchApiV1EnvironmentsEnvironmentIdRestorePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=environmentId" }),
        __metadata("design:type", String)
    ], PatchApiV1EnvironmentsEnvironmentIdRestorePathParams.prototype, "environmentId", void 0);
    return PatchApiV1EnvironmentsEnvironmentIdRestorePathParams;
}(SpeakeasyBase));
export { PatchApiV1EnvironmentsEnvironmentIdRestorePathParams };
var PatchApiV1EnvironmentsEnvironmentIdRestoreRequest = /** @class */ (function (_super) {
    __extends(PatchApiV1EnvironmentsEnvironmentIdRestoreRequest, _super);
    function PatchApiV1EnvironmentsEnvironmentIdRestoreRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", PatchApiV1EnvironmentsEnvironmentIdRestorePathParams)
    ], PatchApiV1EnvironmentsEnvironmentIdRestoreRequest.prototype, "pathParams", void 0);
    return PatchApiV1EnvironmentsEnvironmentIdRestoreRequest;
}(SpeakeasyBase));
export { PatchApiV1EnvironmentsEnvironmentIdRestoreRequest };
var PatchApiV1EnvironmentsEnvironmentIdRestoreResponse = /** @class */ (function (_super) {
    __extends(PatchApiV1EnvironmentsEnvironmentIdRestoreResponse, _super);
    function PatchApiV1EnvironmentsEnvironmentIdRestoreResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Uint8Array)
    ], PatchApiV1EnvironmentsEnvironmentIdRestoreResponse.prototype, "body", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], PatchApiV1EnvironmentsEnvironmentIdRestoreResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Map)
    ], PatchApiV1EnvironmentsEnvironmentIdRestoreResponse.prototype, "problemDetails", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], PatchApiV1EnvironmentsEnvironmentIdRestoreResponse.prototype, "statusCode", void 0);
    return PatchApiV1EnvironmentsEnvironmentIdRestoreResponse;
}(SpeakeasyBase));
export { PatchApiV1EnvironmentsEnvironmentIdRestoreResponse };
