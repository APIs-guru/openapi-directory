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
var RemoveVideoFromProjectPathParams = /** @class */ (function (_super) {
    __extends(RemoveVideoFromProjectPathParams, _super);
    function RemoveVideoFromProjectPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=project_id" }),
        __metadata("design:type", Number)
    ], RemoveVideoFromProjectPathParams.prototype, "projectId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=user_id" }),
        __metadata("design:type", Number)
    ], RemoveVideoFromProjectPathParams.prototype, "userId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=video_id" }),
        __metadata("design:type", Number)
    ], RemoveVideoFromProjectPathParams.prototype, "videoId", void 0);
    return RemoveVideoFromProjectPathParams;
}(SpeakeasyBase));
export { RemoveVideoFromProjectPathParams };
var RemoveVideoFromProjectSecurity = /** @class */ (function (_super) {
    __extends(RemoveVideoFromProjectSecurity, _super);
    function RemoveVideoFromProjectSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], RemoveVideoFromProjectSecurity.prototype, "oauth2", void 0);
    return RemoveVideoFromProjectSecurity;
}(SpeakeasyBase));
export { RemoveVideoFromProjectSecurity };
var RemoveVideoFromProjectRequest = /** @class */ (function (_super) {
    __extends(RemoveVideoFromProjectRequest, _super);
    function RemoveVideoFromProjectRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", RemoveVideoFromProjectPathParams)
    ], RemoveVideoFromProjectRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", RemoveVideoFromProjectSecurity)
    ], RemoveVideoFromProjectRequest.prototype, "security", void 0);
    return RemoveVideoFromProjectRequest;
}(SpeakeasyBase));
export { RemoveVideoFromProjectRequest };
var RemoveVideoFromProjectResponse = /** @class */ (function (_super) {
    __extends(RemoveVideoFromProjectResponse, _super);
    function RemoveVideoFromProjectResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], RemoveVideoFromProjectResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], RemoveVideoFromProjectResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.Error)
    ], RemoveVideoFromProjectResponse.prototype, "error", void 0);
    return RemoveVideoFromProjectResponse;
}(SpeakeasyBase));
export { RemoveVideoFromProjectResponse };
