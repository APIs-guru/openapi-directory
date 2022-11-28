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
var SongApiGetByIdPathParams = /** @class */ (function (_super) {
    __extends(SongApiGetByIdPathParams, _super);
    function SongApiGetByIdPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" }),
        __metadata("design:type", Number)
    ], SongApiGetByIdPathParams.prototype, "id", void 0);
    return SongApiGetByIdPathParams;
}(SpeakeasyBase));
export { SongApiGetByIdPathParams };
export var SongApiGetByIdFieldsEnum;
(function (SongApiGetByIdFieldsEnum) {
    SongApiGetByIdFieldsEnum["None"] = "None";
    SongApiGetByIdFieldsEnum["AdditionalNames"] = "AdditionalNames";
    SongApiGetByIdFieldsEnum["Albums"] = "Albums";
    SongApiGetByIdFieldsEnum["Artists"] = "Artists";
    SongApiGetByIdFieldsEnum["Lyrics"] = "Lyrics";
    SongApiGetByIdFieldsEnum["MainPicture"] = "MainPicture";
    SongApiGetByIdFieldsEnum["Names"] = "Names";
    SongApiGetByIdFieldsEnum["PVs"] = "PVs";
    SongApiGetByIdFieldsEnum["ReleaseEvent"] = "ReleaseEvent";
    SongApiGetByIdFieldsEnum["Tags"] = "Tags";
    SongApiGetByIdFieldsEnum["ThumbUrl"] = "ThumbUrl";
    SongApiGetByIdFieldsEnum["WebLinks"] = "WebLinks";
})(SongApiGetByIdFieldsEnum || (SongApiGetByIdFieldsEnum = {}));
export var SongApiGetByIdLangEnum;
(function (SongApiGetByIdLangEnum) {
    SongApiGetByIdLangEnum["Default"] = "Default";
    SongApiGetByIdLangEnum["Japanese"] = "Japanese";
    SongApiGetByIdLangEnum["Romaji"] = "Romaji";
    SongApiGetByIdLangEnum["English"] = "English";
})(SongApiGetByIdLangEnum || (SongApiGetByIdLangEnum = {}));
var SongApiGetByIdQueryParams = /** @class */ (function (_super) {
    __extends(SongApiGetByIdQueryParams, _super);
    function SongApiGetByIdQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], SongApiGetByIdQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=lang" }),
        __metadata("design:type", String)
    ], SongApiGetByIdQueryParams.prototype, "lang", void 0);
    return SongApiGetByIdQueryParams;
}(SpeakeasyBase));
export { SongApiGetByIdQueryParams };
var SongApiGetByIdRequest = /** @class */ (function (_super) {
    __extends(SongApiGetByIdRequest, _super);
    function SongApiGetByIdRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", SongApiGetByIdPathParams)
    ], SongApiGetByIdRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", SongApiGetByIdQueryParams)
    ], SongApiGetByIdRequest.prototype, "queryParams", void 0);
    return SongApiGetByIdRequest;
}(SpeakeasyBase));
export { SongApiGetByIdRequest };
var SongApiGetByIdResponse = /** @class */ (function (_super) {
    __extends(SongApiGetByIdResponse, _super);
    function SongApiGetByIdResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Uint8Array)
    ], SongApiGetByIdResponse.prototype, "body", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], SongApiGetByIdResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.SongForApiContract)
    ], SongApiGetByIdResponse.prototype, "songForApiContract", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], SongApiGetByIdResponse.prototype, "statusCode", void 0);
    return SongApiGetByIdResponse;
}(SpeakeasyBase));
export { SongApiGetByIdResponse };
