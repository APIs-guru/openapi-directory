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
var GetProfileImageFilePathParams = /** @class */ (function (_super) {
    __extends(GetProfileImageFilePathParams, _super);
    function GetProfileImageFilePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=user_id" }),
        __metadata("design:type", String)
    ], GetProfileImageFilePathParams.prototype, "userId", void 0);
    return GetProfileImageFilePathParams;
}(SpeakeasyBase));
export { GetProfileImageFilePathParams };
var GetProfileImageFileQueryParams = /** @class */ (function (_super) {
    __extends(GetProfileImageFileQueryParams, _super);
    function GetProfileImageFileQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=default" }),
        __metadata("design:type", String)
    ], GetProfileImageFileQueryParams.prototype, "default", void 0);
    return GetProfileImageFileQueryParams;
}(SpeakeasyBase));
export { GetProfileImageFileQueryParams };
var GetProfileImageFileRequest = /** @class */ (function (_super) {
    __extends(GetProfileImageFileRequest, _super);
    function GetProfileImageFileRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetProfileImageFilePathParams)
    ], GetProfileImageFileRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetProfileImageFileQueryParams)
    ], GetProfileImageFileRequest.prototype, "queryParams", void 0);
    return GetProfileImageFileRequest;
}(SpeakeasyBase));
export { GetProfileImageFileRequest };
var GetProfileImageFileResponse = /** @class */ (function (_super) {
    __extends(GetProfileImageFileResponse, _super);
    function GetProfileImageFileResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GetProfileImageFileResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GetProfileImageFileResponse.prototype, "statusCode", void 0);
    return GetProfileImageFileResponse;
}(SpeakeasyBase));
export { GetProfileImageFileResponse };
