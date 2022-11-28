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
var SongApiGetRelatedPathParams = /** @class */ (function (_super) {
    __extends(SongApiGetRelatedPathParams, _super);
    function SongApiGetRelatedPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" }),
        __metadata("design:type", Number)
    ], SongApiGetRelatedPathParams.prototype, "id", void 0);
    return SongApiGetRelatedPathParams;
}(SpeakeasyBase));
export { SongApiGetRelatedPathParams };
export var SongApiGetRelatedFieldsEnum;
(function (SongApiGetRelatedFieldsEnum) {
    SongApiGetRelatedFieldsEnum["None"] = "None";
    SongApiGetRelatedFieldsEnum["AdditionalNames"] = "AdditionalNames";
    SongApiGetRelatedFieldsEnum["Albums"] = "Albums";
    SongApiGetRelatedFieldsEnum["Artists"] = "Artists";
    SongApiGetRelatedFieldsEnum["Lyrics"] = "Lyrics";
    SongApiGetRelatedFieldsEnum["MainPicture"] = "MainPicture";
    SongApiGetRelatedFieldsEnum["Names"] = "Names";
    SongApiGetRelatedFieldsEnum["PVs"] = "PVs";
    SongApiGetRelatedFieldsEnum["ReleaseEvent"] = "ReleaseEvent";
    SongApiGetRelatedFieldsEnum["Tags"] = "Tags";
    SongApiGetRelatedFieldsEnum["ThumbUrl"] = "ThumbUrl";
    SongApiGetRelatedFieldsEnum["WebLinks"] = "WebLinks";
})(SongApiGetRelatedFieldsEnum || (SongApiGetRelatedFieldsEnum = {}));
export var SongApiGetRelatedLangEnum;
(function (SongApiGetRelatedLangEnum) {
    SongApiGetRelatedLangEnum["Default"] = "Default";
    SongApiGetRelatedLangEnum["Japanese"] = "Japanese";
    SongApiGetRelatedLangEnum["Romaji"] = "Romaji";
    SongApiGetRelatedLangEnum["English"] = "English";
})(SongApiGetRelatedLangEnum || (SongApiGetRelatedLangEnum = {}));
var SongApiGetRelatedQueryParams = /** @class */ (function (_super) {
    __extends(SongApiGetRelatedQueryParams, _super);
    function SongApiGetRelatedQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], SongApiGetRelatedQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=lang" }),
        __metadata("design:type", String)
    ], SongApiGetRelatedQueryParams.prototype, "lang", void 0);
    return SongApiGetRelatedQueryParams;
}(SpeakeasyBase));
export { SongApiGetRelatedQueryParams };
var SongApiGetRelatedRequest = /** @class */ (function (_super) {
    __extends(SongApiGetRelatedRequest, _super);
    function SongApiGetRelatedRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", SongApiGetRelatedPathParams)
    ], SongApiGetRelatedRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", SongApiGetRelatedQueryParams)
    ], SongApiGetRelatedRequest.prototype, "queryParams", void 0);
    return SongApiGetRelatedRequest;
}(SpeakeasyBase));
export { SongApiGetRelatedRequest };
var SongApiGetRelatedResponse = /** @class */ (function (_super) {
    __extends(SongApiGetRelatedResponse, _super);
    function SongApiGetRelatedResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Uint8Array)
    ], SongApiGetRelatedResponse.prototype, "body", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], SongApiGetRelatedResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.RelatedSongsContract)
    ], SongApiGetRelatedResponse.prototype, "relatedSongsContract", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], SongApiGetRelatedResponse.prototype, "statusCode", void 0);
    return SongApiGetRelatedResponse;
}(SpeakeasyBase));
export { SongApiGetRelatedResponse };
