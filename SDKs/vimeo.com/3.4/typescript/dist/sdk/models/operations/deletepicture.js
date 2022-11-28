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
var DeletePicturePathParams = /** @class */ (function (_super) {
    __extends(DeletePicturePathParams, _super);
    function DeletePicturePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=portraitset_id" }),
        __metadata("design:type", Number)
    ], DeletePicturePathParams.prototype, "portraitsetId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=user_id" }),
        __metadata("design:type", Number)
    ], DeletePicturePathParams.prototype, "userId", void 0);
    return DeletePicturePathParams;
}(SpeakeasyBase));
export { DeletePicturePathParams };
var DeletePictureSecurity = /** @class */ (function (_super) {
    __extends(DeletePictureSecurity, _super);
    function DeletePictureSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], DeletePictureSecurity.prototype, "oauth2", void 0);
    return DeletePictureSecurity;
}(SpeakeasyBase));
export { DeletePictureSecurity };
var DeletePictureRequest = /** @class */ (function (_super) {
    __extends(DeletePictureRequest, _super);
    function DeletePictureRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DeletePicturePathParams)
    ], DeletePictureRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DeletePictureSecurity)
    ], DeletePictureRequest.prototype, "security", void 0);
    return DeletePictureRequest;
}(SpeakeasyBase));
export { DeletePictureRequest };
var DeletePictureResponse = /** @class */ (function (_super) {
    __extends(DeletePictureResponse, _super);
    function DeletePictureResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], DeletePictureResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], DeletePictureResponse.prototype, "statusCode", void 0);
    return DeletePictureResponse;
}(SpeakeasyBase));
export { DeletePictureResponse };
