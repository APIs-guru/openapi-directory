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
var SongApiGetDerivedPathParams = /** @class */ (function (_super) {
    __extends(SongApiGetDerivedPathParams, _super);
    function SongApiGetDerivedPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" }),
        __metadata("design:type", Number)
    ], SongApiGetDerivedPathParams.prototype, "id", void 0);
    return SongApiGetDerivedPathParams;
}(SpeakeasyBase));
export { SongApiGetDerivedPathParams };
export var SongApiGetDerivedFieldsEnum;
(function (SongApiGetDerivedFieldsEnum) {
    SongApiGetDerivedFieldsEnum["None"] = "None";
    SongApiGetDerivedFieldsEnum["AdditionalNames"] = "AdditionalNames";
    SongApiGetDerivedFieldsEnum["Albums"] = "Albums";
    SongApiGetDerivedFieldsEnum["Artists"] = "Artists";
    SongApiGetDerivedFieldsEnum["Lyrics"] = "Lyrics";
    SongApiGetDerivedFieldsEnum["MainPicture"] = "MainPicture";
    SongApiGetDerivedFieldsEnum["Names"] = "Names";
    SongApiGetDerivedFieldsEnum["PVs"] = "PVs";
    SongApiGetDerivedFieldsEnum["ReleaseEvent"] = "ReleaseEvent";
    SongApiGetDerivedFieldsEnum["Tags"] = "Tags";
    SongApiGetDerivedFieldsEnum["ThumbUrl"] = "ThumbUrl";
    SongApiGetDerivedFieldsEnum["WebLinks"] = "WebLinks";
})(SongApiGetDerivedFieldsEnum || (SongApiGetDerivedFieldsEnum = {}));
export var SongApiGetDerivedLangEnum;
(function (SongApiGetDerivedLangEnum) {
    SongApiGetDerivedLangEnum["Default"] = "Default";
    SongApiGetDerivedLangEnum["Japanese"] = "Japanese";
    SongApiGetDerivedLangEnum["Romaji"] = "Romaji";
    SongApiGetDerivedLangEnum["English"] = "English";
})(SongApiGetDerivedLangEnum || (SongApiGetDerivedLangEnum = {}));
var SongApiGetDerivedQueryParams = /** @class */ (function (_super) {
    __extends(SongApiGetDerivedQueryParams, _super);
    function SongApiGetDerivedQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], SongApiGetDerivedQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=lang" }),
        __metadata("design:type", String)
    ], SongApiGetDerivedQueryParams.prototype, "lang", void 0);
    return SongApiGetDerivedQueryParams;
}(SpeakeasyBase));
export { SongApiGetDerivedQueryParams };
var SongApiGetDerivedRequest = /** @class */ (function (_super) {
    __extends(SongApiGetDerivedRequest, _super);
    function SongApiGetDerivedRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", SongApiGetDerivedPathParams)
    ], SongApiGetDerivedRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", SongApiGetDerivedQueryParams)
    ], SongApiGetDerivedRequest.prototype, "queryParams", void 0);
    return SongApiGetDerivedRequest;
}(SpeakeasyBase));
export { SongApiGetDerivedRequest };
var SongApiGetDerivedResponse = /** @class */ (function (_super) {
    __extends(SongApiGetDerivedResponse, _super);
    function SongApiGetDerivedResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Uint8Array)
    ], SongApiGetDerivedResponse.prototype, "body", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], SongApiGetDerivedResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata({ elemType: shared.SongForApiContract }),
        __metadata("design:type", Array)
    ], SongApiGetDerivedResponse.prototype, "songForApiContracts", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], SongApiGetDerivedResponse.prototype, "statusCode", void 0);
    return SongApiGetDerivedResponse;
}(SpeakeasyBase));
export { SongApiGetDerivedResponse };
