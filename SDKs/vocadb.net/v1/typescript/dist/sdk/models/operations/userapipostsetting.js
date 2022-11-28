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
var UserApiPostSettingPathParams = /** @class */ (function (_super) {
    __extends(UserApiPostSettingPathParams, _super);
    function UserApiPostSettingPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" }),
        __metadata("design:type", Number)
    ], UserApiPostSettingPathParams.prototype, "id", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=settingName" }),
        __metadata("design:type", String)
    ], UserApiPostSettingPathParams.prototype, "settingName", void 0);
    return UserApiPostSettingPathParams;
}(SpeakeasyBase));
export { UserApiPostSettingPathParams };
var UserApiPostSettingRequests = /** @class */ (function (_super) {
    __extends(UserApiPostSettingRequests, _super);
    function UserApiPostSettingRequests() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", String)
    ], UserApiPostSettingRequests.prototype, "string", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/x-www-form-urlencoded" }),
        __metadata("design:type", String)
    ], UserApiPostSettingRequests.prototype, "string1", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/xml" }),
        __metadata("design:type", String)
    ], UserApiPostSettingRequests.prototype, "string2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=text/json" }),
        __metadata("design:type", String)
    ], UserApiPostSettingRequests.prototype, "string3", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=text/xml" }),
        __metadata("design:type", String)
    ], UserApiPostSettingRequests.prototype, "string4", void 0);
    return UserApiPostSettingRequests;
}(SpeakeasyBase));
export { UserApiPostSettingRequests };
var UserApiPostSettingRequest = /** @class */ (function (_super) {
    __extends(UserApiPostSettingRequest, _super);
    function UserApiPostSettingRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", UserApiPostSettingPathParams)
    ], UserApiPostSettingRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", UserApiPostSettingRequests)
    ], UserApiPostSettingRequest.prototype, "request", void 0);
    return UserApiPostSettingRequest;
}(SpeakeasyBase));
export { UserApiPostSettingRequest };
var UserApiPostSettingResponse = /** @class */ (function (_super) {
    __extends(UserApiPostSettingResponse, _super);
    function UserApiPostSettingResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], UserApiPostSettingResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], UserApiPostSettingResponse.prototype, "statusCode", void 0);
    return UserApiPostSettingResponse;
}(SpeakeasyBase));
export { UserApiPostSettingResponse };
