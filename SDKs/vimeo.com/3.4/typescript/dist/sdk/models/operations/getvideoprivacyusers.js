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
var GetVideoPrivacyUsersPathParams = /** @class */ (function (_super) {
    __extends(GetVideoPrivacyUsersPathParams, _super);
    function GetVideoPrivacyUsersPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=video_id" }),
        __metadata("design:type", Number)
    ], GetVideoPrivacyUsersPathParams.prototype, "videoId", void 0);
    return GetVideoPrivacyUsersPathParams;
}(SpeakeasyBase));
export { GetVideoPrivacyUsersPathParams };
var GetVideoPrivacyUsersQueryParams = /** @class */ (function (_super) {
    __extends(GetVideoPrivacyUsersQueryParams, _super);
    function GetVideoPrivacyUsersQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=page" }),
        __metadata("design:type", Number)
    ], GetVideoPrivacyUsersQueryParams.prototype, "page", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=per_page" }),
        __metadata("design:type", Number)
    ], GetVideoPrivacyUsersQueryParams.prototype, "perPage", void 0);
    return GetVideoPrivacyUsersQueryParams;
}(SpeakeasyBase));
export { GetVideoPrivacyUsersQueryParams };
var GetVideoPrivacyUsersRequest = /** @class */ (function (_super) {
    __extends(GetVideoPrivacyUsersRequest, _super);
    function GetVideoPrivacyUsersRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetVideoPrivacyUsersPathParams)
    ], GetVideoPrivacyUsersRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetVideoPrivacyUsersQueryParams)
    ], GetVideoPrivacyUsersRequest.prototype, "queryParams", void 0);
    return GetVideoPrivacyUsersRequest;
}(SpeakeasyBase));
export { GetVideoPrivacyUsersRequest };
var GetVideoPrivacyUsersResponse = /** @class */ (function (_super) {
    __extends(GetVideoPrivacyUsersResponse, _super);
    function GetVideoPrivacyUsersResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GetVideoPrivacyUsersResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GetVideoPrivacyUsersResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.LegacyError)
    ], GetVideoPrivacyUsersResponse.prototype, "legacyError", void 0);
    __decorate([
        SpeakeasyMetadata({ elemType: shared.User }),
        __metadata("design:type", Array)
    ], GetVideoPrivacyUsersResponse.prototype, "users", void 0);
    return GetVideoPrivacyUsersResponse;
}(SpeakeasyBase));
export { GetVideoPrivacyUsersResponse };
