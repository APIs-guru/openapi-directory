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
var SongApiGetRatingsPathParams = /** @class */ (function (_super) {
    __extends(SongApiGetRatingsPathParams, _super);
    function SongApiGetRatingsPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" }),
        __metadata("design:type", Number)
    ], SongApiGetRatingsPathParams.prototype, "id", void 0);
    return SongApiGetRatingsPathParams;
}(SpeakeasyBase));
export { SongApiGetRatingsPathParams };
export var SongApiGetRatingsLangEnum;
(function (SongApiGetRatingsLangEnum) {
    SongApiGetRatingsLangEnum["Default"] = "Default";
    SongApiGetRatingsLangEnum["Japanese"] = "Japanese";
    SongApiGetRatingsLangEnum["Romaji"] = "Romaji";
    SongApiGetRatingsLangEnum["English"] = "English";
})(SongApiGetRatingsLangEnum || (SongApiGetRatingsLangEnum = {}));
export var SongApiGetRatingsUserFieldsEnum;
(function (SongApiGetRatingsUserFieldsEnum) {
    SongApiGetRatingsUserFieldsEnum["None"] = "None";
    SongApiGetRatingsUserFieldsEnum["KnownLanguages"] = "KnownLanguages";
    SongApiGetRatingsUserFieldsEnum["MainPicture"] = "MainPicture";
    SongApiGetRatingsUserFieldsEnum["OldUsernames"] = "OldUsernames";
})(SongApiGetRatingsUserFieldsEnum || (SongApiGetRatingsUserFieldsEnum = {}));
var SongApiGetRatingsQueryParams = /** @class */ (function (_super) {
    __extends(SongApiGetRatingsQueryParams, _super);
    function SongApiGetRatingsQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=lang" }),
        __metadata("design:type", String)
    ], SongApiGetRatingsQueryParams.prototype, "lang", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=userFields" }),
        __metadata("design:type", String)
    ], SongApiGetRatingsQueryParams.prototype, "userFields", void 0);
    return SongApiGetRatingsQueryParams;
}(SpeakeasyBase));
export { SongApiGetRatingsQueryParams };
var SongApiGetRatingsRequest = /** @class */ (function (_super) {
    __extends(SongApiGetRatingsRequest, _super);
    function SongApiGetRatingsRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", SongApiGetRatingsPathParams)
    ], SongApiGetRatingsRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", SongApiGetRatingsQueryParams)
    ], SongApiGetRatingsRequest.prototype, "queryParams", void 0);
    return SongApiGetRatingsRequest;
}(SpeakeasyBase));
export { SongApiGetRatingsRequest };
var SongApiGetRatingsResponse = /** @class */ (function (_super) {
    __extends(SongApiGetRatingsResponse, _super);
    function SongApiGetRatingsResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Uint8Array)
    ], SongApiGetRatingsResponse.prototype, "body", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], SongApiGetRatingsResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata({ elemType: shared.RatedSongForUserForApiContract }),
        __metadata("design:type", Array)
    ], SongApiGetRatingsResponse.prototype, "ratedSongForUserForApiContracts", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], SongApiGetRatingsResponse.prototype, "statusCode", void 0);
    return SongApiGetRatingsResponse;
}(SpeakeasyBase));
export { SongApiGetRatingsResponse };
