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
var AddVideosToProjectPathParams = /** @class */ (function (_super) {
    __extends(AddVideosToProjectPathParams, _super);
    function AddVideosToProjectPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=project_id" }),
        __metadata("design:type", Number)
    ], AddVideosToProjectPathParams.prototype, "projectId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=user_id" }),
        __metadata("design:type", Number)
    ], AddVideosToProjectPathParams.prototype, "userId", void 0);
    return AddVideosToProjectPathParams;
}(SpeakeasyBase));
export { AddVideosToProjectPathParams };
var AddVideosToProjectQueryParams = /** @class */ (function (_super) {
    __extends(AddVideosToProjectQueryParams, _super);
    function AddVideosToProjectQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uris" }),
        __metadata("design:type", String)
    ], AddVideosToProjectQueryParams.prototype, "uris", void 0);
    return AddVideosToProjectQueryParams;
}(SpeakeasyBase));
export { AddVideosToProjectQueryParams };
var AddVideosToProjectSecurity = /** @class */ (function (_super) {
    __extends(AddVideosToProjectSecurity, _super);
    function AddVideosToProjectSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], AddVideosToProjectSecurity.prototype, "oauth2", void 0);
    return AddVideosToProjectSecurity;
}(SpeakeasyBase));
export { AddVideosToProjectSecurity };
var AddVideosToProjectRequest = /** @class */ (function (_super) {
    __extends(AddVideosToProjectRequest, _super);
    function AddVideosToProjectRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", AddVideosToProjectPathParams)
    ], AddVideosToProjectRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", AddVideosToProjectQueryParams)
    ], AddVideosToProjectRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", AddVideosToProjectSecurity)
    ], AddVideosToProjectRequest.prototype, "security", void 0);
    return AddVideosToProjectRequest;
}(SpeakeasyBase));
export { AddVideosToProjectRequest };
var AddVideosToProjectResponse = /** @class */ (function (_super) {
    __extends(AddVideosToProjectResponse, _super);
    function AddVideosToProjectResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], AddVideosToProjectResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], AddVideosToProjectResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.Error)
    ], AddVideosToProjectResponse.prototype, "error", void 0);
    return AddVideosToProjectResponse;
}(SpeakeasyBase));
export { AddVideosToProjectResponse };
