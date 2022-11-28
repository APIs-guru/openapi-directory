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
var DeleteVideoFromVodPathParams = /** @class */ (function (_super) {
    __extends(DeleteVideoFromVodPathParams, _super);
    function DeleteVideoFromVodPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=ondemand_id" }),
        __metadata("design:type", Number)
    ], DeleteVideoFromVodPathParams.prototype, "ondemandId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=video_id" }),
        __metadata("design:type", Number)
    ], DeleteVideoFromVodPathParams.prototype, "videoId", void 0);
    return DeleteVideoFromVodPathParams;
}(SpeakeasyBase));
export { DeleteVideoFromVodPathParams };
var DeleteVideoFromVodSecurity = /** @class */ (function (_super) {
    __extends(DeleteVideoFromVodSecurity, _super);
    function DeleteVideoFromVodSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], DeleteVideoFromVodSecurity.prototype, "oauth2", void 0);
    return DeleteVideoFromVodSecurity;
}(SpeakeasyBase));
export { DeleteVideoFromVodSecurity };
var DeleteVideoFromVodRequest = /** @class */ (function (_super) {
    __extends(DeleteVideoFromVodRequest, _super);
    function DeleteVideoFromVodRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DeleteVideoFromVodPathParams)
    ], DeleteVideoFromVodRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DeleteVideoFromVodSecurity)
    ], DeleteVideoFromVodRequest.prototype, "security", void 0);
    return DeleteVideoFromVodRequest;
}(SpeakeasyBase));
export { DeleteVideoFromVodRequest };
var DeleteVideoFromVodResponse = /** @class */ (function (_super) {
    __extends(DeleteVideoFromVodResponse, _super);
    function DeleteVideoFromVodResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], DeleteVideoFromVodResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], DeleteVideoFromVodResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.LegacyError)
    ], DeleteVideoFromVodResponse.prototype, "legacyError", void 0);
    return DeleteVideoFromVodResponse;
}(SpeakeasyBase));
export { DeleteVideoFromVodResponse };
