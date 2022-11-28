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
var GetUsersUserIdImagePathParams = /** @class */ (function (_super) {
    __extends(GetUsersUserIdImagePathParams, _super);
    function GetUsersUserIdImagePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=userId" }),
        __metadata("design:type", String)
    ], GetUsersUserIdImagePathParams.prototype, "userId", void 0);
    return GetUsersUserIdImagePathParams;
}(SpeakeasyBase));
export { GetUsersUserIdImagePathParams };
var GetUsersUserIdImageQueryParams = /** @class */ (function (_super) {
    __extends(GetUsersUserIdImageQueryParams, _super);
    function GetUsersUserIdImageQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=height" }),
        __metadata("design:type", Number)
    ], GetUsersUserIdImageQueryParams.prototype, "height", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=width" }),
        __metadata("design:type", Number)
    ], GetUsersUserIdImageQueryParams.prototype, "width", void 0);
    return GetUsersUserIdImageQueryParams;
}(SpeakeasyBase));
export { GetUsersUserIdImageQueryParams };
var GetUsersUserIdImageRequest = /** @class */ (function (_super) {
    __extends(GetUsersUserIdImageRequest, _super);
    function GetUsersUserIdImageRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetUsersUserIdImagePathParams)
    ], GetUsersUserIdImageRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetUsersUserIdImageQueryParams)
    ], GetUsersUserIdImageRequest.prototype, "queryParams", void 0);
    return GetUsersUserIdImageRequest;
}(SpeakeasyBase));
export { GetUsersUserIdImageRequest };
var GetUsersUserIdImageResponse = /** @class */ (function (_super) {
    __extends(GetUsersUserIdImageResponse, _super);
    function GetUsersUserIdImageResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Uint8Array)
    ], GetUsersUserIdImageResponse.prototype, "body", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GetUsersUserIdImageResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.ErrorResponseContent)
    ], GetUsersUserIdImageResponse.prototype, "errorResponseContent", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GetUsersUserIdImageResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.UserImage)
    ], GetUsersUserIdImageResponse.prototype, "userImage", void 0);
    return GetUsersUserIdImageResponse;
}(SpeakeasyBase));
export { GetUsersUserIdImageResponse };
