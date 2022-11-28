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
var GetEmbedPresetVideosAlt1PathParams = /** @class */ (function (_super) {
    __extends(GetEmbedPresetVideosAlt1PathParams, _super);
    function GetEmbedPresetVideosAlt1PathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=preset_id" }),
        __metadata("design:type", Number)
    ], GetEmbedPresetVideosAlt1PathParams.prototype, "presetId", void 0);
    return GetEmbedPresetVideosAlt1PathParams;
}(SpeakeasyBase));
export { GetEmbedPresetVideosAlt1PathParams };
var GetEmbedPresetVideosAlt1QueryParams = /** @class */ (function (_super) {
    __extends(GetEmbedPresetVideosAlt1QueryParams, _super);
    function GetEmbedPresetVideosAlt1QueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=page" }),
        __metadata("design:type", Number)
    ], GetEmbedPresetVideosAlt1QueryParams.prototype, "page", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=per_page" }),
        __metadata("design:type", Number)
    ], GetEmbedPresetVideosAlt1QueryParams.prototype, "perPage", void 0);
    return GetEmbedPresetVideosAlt1QueryParams;
}(SpeakeasyBase));
export { GetEmbedPresetVideosAlt1QueryParams };
var GetEmbedPresetVideosAlt1Request = /** @class */ (function (_super) {
    __extends(GetEmbedPresetVideosAlt1Request, _super);
    function GetEmbedPresetVideosAlt1Request() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetEmbedPresetVideosAlt1PathParams)
    ], GetEmbedPresetVideosAlt1Request.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetEmbedPresetVideosAlt1QueryParams)
    ], GetEmbedPresetVideosAlt1Request.prototype, "queryParams", void 0);
    return GetEmbedPresetVideosAlt1Request;
}(SpeakeasyBase));
export { GetEmbedPresetVideosAlt1Request };
var GetEmbedPresetVideosAlt1Response = /** @class */ (function (_super) {
    __extends(GetEmbedPresetVideosAlt1Response, _super);
    function GetEmbedPresetVideosAlt1Response() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GetEmbedPresetVideosAlt1Response.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GetEmbedPresetVideosAlt1Response.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata({ elemType: shared.Video }),
        __metadata("design:type", Array)
    ], GetEmbedPresetVideosAlt1Response.prototype, "videos", void 0);
    return GetEmbedPresetVideosAlt1Response;
}(SpeakeasyBase));
export { GetEmbedPresetVideosAlt1Response };
