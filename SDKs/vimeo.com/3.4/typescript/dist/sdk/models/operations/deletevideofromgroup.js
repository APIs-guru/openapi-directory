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
var DeleteVideoFromGroupPathParams = /** @class */ (function (_super) {
    __extends(DeleteVideoFromGroupPathParams, _super);
    function DeleteVideoFromGroupPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=group_id" }),
        __metadata("design:type", Number)
    ], DeleteVideoFromGroupPathParams.prototype, "groupId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=video_id" }),
        __metadata("design:type", Number)
    ], DeleteVideoFromGroupPathParams.prototype, "videoId", void 0);
    return DeleteVideoFromGroupPathParams;
}(SpeakeasyBase));
export { DeleteVideoFromGroupPathParams };
var DeleteVideoFromGroupSecurity = /** @class */ (function (_super) {
    __extends(DeleteVideoFromGroupSecurity, _super);
    function DeleteVideoFromGroupSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], DeleteVideoFromGroupSecurity.prototype, "oauth2", void 0);
    return DeleteVideoFromGroupSecurity;
}(SpeakeasyBase));
export { DeleteVideoFromGroupSecurity };
var DeleteVideoFromGroupRequest = /** @class */ (function (_super) {
    __extends(DeleteVideoFromGroupRequest, _super);
    function DeleteVideoFromGroupRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DeleteVideoFromGroupPathParams)
    ], DeleteVideoFromGroupRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DeleteVideoFromGroupSecurity)
    ], DeleteVideoFromGroupRequest.prototype, "security", void 0);
    return DeleteVideoFromGroupRequest;
}(SpeakeasyBase));
export { DeleteVideoFromGroupRequest };
var DeleteVideoFromGroupResponse = /** @class */ (function (_super) {
    __extends(DeleteVideoFromGroupResponse, _super);
    function DeleteVideoFromGroupResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], DeleteVideoFromGroupResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], DeleteVideoFromGroupResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.LegacyError)
    ], DeleteVideoFromGroupResponse.prototype, "legacyError", void 0);
    return DeleteVideoFromGroupResponse;
}(SpeakeasyBase));
export { DeleteVideoFromGroupResponse };
