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
var EditVodPosterPathParams = /** @class */ (function (_super) {
    __extends(EditVodPosterPathParams, _super);
    function EditVodPosterPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=ondemand_id" }),
        __metadata("design:type", Number)
    ], EditVodPosterPathParams.prototype, "ondemandId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=poster_id" }),
        __metadata("design:type", Number)
    ], EditVodPosterPathParams.prototype, "posterId", void 0);
    return EditVodPosterPathParams;
}(SpeakeasyBase));
export { EditVodPosterPathParams };
var EditVodPosterRequestBody = /** @class */ (function (_super) {
    __extends(EditVodPosterRequestBody, _super);
    function EditVodPosterRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=active" }),
        __metadata("design:type", Boolean)
    ], EditVodPosterRequestBody.prototype, "active", void 0);
    return EditVodPosterRequestBody;
}(SpeakeasyBase));
export { EditVodPosterRequestBody };
var EditVodPosterSecurity = /** @class */ (function (_super) {
    __extends(EditVodPosterSecurity, _super);
    function EditVodPosterSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], EditVodPosterSecurity.prototype, "oauth2", void 0);
    return EditVodPosterSecurity;
}(SpeakeasyBase));
export { EditVodPosterSecurity };
var EditVodPosterRequest = /** @class */ (function (_super) {
    __extends(EditVodPosterRequest, _super);
    function EditVodPosterRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", EditVodPosterPathParams)
    ], EditVodPosterRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/vnd.vimeo.picture+json" }),
        __metadata("design:type", EditVodPosterRequestBody)
    ], EditVodPosterRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", EditVodPosterSecurity)
    ], EditVodPosterRequest.prototype, "security", void 0);
    return EditVodPosterRequest;
}(SpeakeasyBase));
export { EditVodPosterRequest };
var EditVodPosterResponse = /** @class */ (function (_super) {
    __extends(EditVodPosterResponse, _super);
    function EditVodPosterResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], EditVodPosterResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], EditVodPosterResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.Picture)
    ], EditVodPosterResponse.prototype, "picture", void 0);
    return EditVodPosterResponse;
}(SpeakeasyBase));
export { EditVodPosterResponse };
