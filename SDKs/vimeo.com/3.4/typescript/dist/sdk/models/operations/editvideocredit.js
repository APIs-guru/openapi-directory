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
var EditVideoCreditPathParams = /** @class */ (function (_super) {
    __extends(EditVideoCreditPathParams, _super);
    function EditVideoCreditPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=credit_id" }),
        __metadata("design:type", Number)
    ], EditVideoCreditPathParams.prototype, "creditId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=video_id" }),
        __metadata("design:type", Number)
    ], EditVideoCreditPathParams.prototype, "videoId", void 0);
    return EditVideoCreditPathParams;
}(SpeakeasyBase));
export { EditVideoCreditPathParams };
var EditVideoCreditRequestBody = /** @class */ (function (_super) {
    __extends(EditVideoCreditRequestBody, _super);
    function EditVideoCreditRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], EditVideoCreditRequestBody.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=role" }),
        __metadata("design:type", String)
    ], EditVideoCreditRequestBody.prototype, "role", void 0);
    return EditVideoCreditRequestBody;
}(SpeakeasyBase));
export { EditVideoCreditRequestBody };
var EditVideoCreditSecurity = /** @class */ (function (_super) {
    __extends(EditVideoCreditSecurity, _super);
    function EditVideoCreditSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], EditVideoCreditSecurity.prototype, "oauth2", void 0);
    return EditVideoCreditSecurity;
}(SpeakeasyBase));
export { EditVideoCreditSecurity };
var EditVideoCreditRequest = /** @class */ (function (_super) {
    __extends(EditVideoCreditRequest, _super);
    function EditVideoCreditRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", EditVideoCreditPathParams)
    ], EditVideoCreditRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/vnd.vimeo.credit+json" }),
        __metadata("design:type", EditVideoCreditRequestBody)
    ], EditVideoCreditRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", EditVideoCreditSecurity)
    ], EditVideoCreditRequest.prototype, "security", void 0);
    return EditVideoCreditRequest;
}(SpeakeasyBase));
export { EditVideoCreditRequest };
var EditVideoCreditResponse = /** @class */ (function (_super) {
    __extends(EditVideoCreditResponse, _super);
    function EditVideoCreditResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], EditVideoCreditResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], EditVideoCreditResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.Credit)
    ], EditVideoCreditResponse.prototype, "credit", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.LegacyError)
    ], EditVideoCreditResponse.prototype, "legacyError", void 0);
    return EditVideoCreditResponse;
}(SpeakeasyBase));
export { EditVideoCreditResponse };
