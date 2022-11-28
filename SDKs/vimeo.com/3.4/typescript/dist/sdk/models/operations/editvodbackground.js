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
var EditVodBackgroundPathParams = /** @class */ (function (_super) {
    __extends(EditVodBackgroundPathParams, _super);
    function EditVodBackgroundPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=background_id" }),
        __metadata("design:type", Number)
    ], EditVodBackgroundPathParams.prototype, "backgroundId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=ondemand_id" }),
        __metadata("design:type", Number)
    ], EditVodBackgroundPathParams.prototype, "ondemandId", void 0);
    return EditVodBackgroundPathParams;
}(SpeakeasyBase));
export { EditVodBackgroundPathParams };
var EditVodBackgroundRequestBody = /** @class */ (function (_super) {
    __extends(EditVodBackgroundRequestBody, _super);
    function EditVodBackgroundRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=active" }),
        __metadata("design:type", Boolean)
    ], EditVodBackgroundRequestBody.prototype, "active", void 0);
    return EditVodBackgroundRequestBody;
}(SpeakeasyBase));
export { EditVodBackgroundRequestBody };
var EditVodBackgroundSecurity = /** @class */ (function (_super) {
    __extends(EditVodBackgroundSecurity, _super);
    function EditVodBackgroundSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], EditVodBackgroundSecurity.prototype, "oauth2", void 0);
    return EditVodBackgroundSecurity;
}(SpeakeasyBase));
export { EditVodBackgroundSecurity };
var EditVodBackgroundRequest = /** @class */ (function (_super) {
    __extends(EditVodBackgroundRequest, _super);
    function EditVodBackgroundRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", EditVodBackgroundPathParams)
    ], EditVodBackgroundRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/vnd.vimeo.picture+json" }),
        __metadata("design:type", EditVodBackgroundRequestBody)
    ], EditVodBackgroundRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", EditVodBackgroundSecurity)
    ], EditVodBackgroundRequest.prototype, "security", void 0);
    return EditVodBackgroundRequest;
}(SpeakeasyBase));
export { EditVodBackgroundRequest };
var EditVodBackgroundResponse = /** @class */ (function (_super) {
    __extends(EditVodBackgroundResponse, _super);
    function EditVodBackgroundResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], EditVodBackgroundResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], EditVodBackgroundResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.LegacyError)
    ], EditVodBackgroundResponse.prototype, "legacyError", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.Picture)
    ], EditVodBackgroundResponse.prototype, "picture", void 0);
    return EditVodBackgroundResponse;
}(SpeakeasyBase));
export { EditVodBackgroundResponse };
