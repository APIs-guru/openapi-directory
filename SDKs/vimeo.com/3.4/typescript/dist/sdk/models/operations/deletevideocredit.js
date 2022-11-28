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
var DeleteVideoCreditPathParams = /** @class */ (function (_super) {
    __extends(DeleteVideoCreditPathParams, _super);
    function DeleteVideoCreditPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=credit_id" }),
        __metadata("design:type", Number)
    ], DeleteVideoCreditPathParams.prototype, "creditId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=video_id" }),
        __metadata("design:type", Number)
    ], DeleteVideoCreditPathParams.prototype, "videoId", void 0);
    return DeleteVideoCreditPathParams;
}(SpeakeasyBase));
export { DeleteVideoCreditPathParams };
var DeleteVideoCreditSecurity = /** @class */ (function (_super) {
    __extends(DeleteVideoCreditSecurity, _super);
    function DeleteVideoCreditSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], DeleteVideoCreditSecurity.prototype, "oauth2", void 0);
    return DeleteVideoCreditSecurity;
}(SpeakeasyBase));
export { DeleteVideoCreditSecurity };
var DeleteVideoCreditRequest = /** @class */ (function (_super) {
    __extends(DeleteVideoCreditRequest, _super);
    function DeleteVideoCreditRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DeleteVideoCreditPathParams)
    ], DeleteVideoCreditRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DeleteVideoCreditSecurity)
    ], DeleteVideoCreditRequest.prototype, "security", void 0);
    return DeleteVideoCreditRequest;
}(SpeakeasyBase));
export { DeleteVideoCreditRequest };
var DeleteVideoCreditResponse = /** @class */ (function (_super) {
    __extends(DeleteVideoCreditResponse, _super);
    function DeleteVideoCreditResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], DeleteVideoCreditResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], DeleteVideoCreditResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.LegacyError)
    ], DeleteVideoCreditResponse.prototype, "legacyError", void 0);
    return DeleteVideoCreditResponse;
}(SpeakeasyBase));
export { DeleteVideoCreditResponse };
