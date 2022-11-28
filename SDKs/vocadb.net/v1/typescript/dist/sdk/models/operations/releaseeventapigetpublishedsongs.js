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
var ReleaseEventApiGetPublishedSongsPathParams = /** @class */ (function (_super) {
    __extends(ReleaseEventApiGetPublishedSongsPathParams, _super);
    function ReleaseEventApiGetPublishedSongsPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=eventId" }),
        __metadata("design:type", Number)
    ], ReleaseEventApiGetPublishedSongsPathParams.prototype, "eventId", void 0);
    return ReleaseEventApiGetPublishedSongsPathParams;
}(SpeakeasyBase));
export { ReleaseEventApiGetPublishedSongsPathParams };
export var ReleaseEventApiGetPublishedSongsFieldsEnum;
(function (ReleaseEventApiGetPublishedSongsFieldsEnum) {
    ReleaseEventApiGetPublishedSongsFieldsEnum["None"] = "None";
    ReleaseEventApiGetPublishedSongsFieldsEnum["AdditionalNames"] = "AdditionalNames";
    ReleaseEventApiGetPublishedSongsFieldsEnum["Albums"] = "Albums";
    ReleaseEventApiGetPublishedSongsFieldsEnum["Artists"] = "Artists";
    ReleaseEventApiGetPublishedSongsFieldsEnum["Lyrics"] = "Lyrics";
    ReleaseEventApiGetPublishedSongsFieldsEnum["MainPicture"] = "MainPicture";
    ReleaseEventApiGetPublishedSongsFieldsEnum["Names"] = "Names";
    ReleaseEventApiGetPublishedSongsFieldsEnum["PVs"] = "PVs";
    ReleaseEventApiGetPublishedSongsFieldsEnum["ReleaseEvent"] = "ReleaseEvent";
    ReleaseEventApiGetPublishedSongsFieldsEnum["Tags"] = "Tags";
    ReleaseEventApiGetPublishedSongsFieldsEnum["ThumbUrl"] = "ThumbUrl";
    ReleaseEventApiGetPublishedSongsFieldsEnum["WebLinks"] = "WebLinks";
})(ReleaseEventApiGetPublishedSongsFieldsEnum || (ReleaseEventApiGetPublishedSongsFieldsEnum = {}));
export var ReleaseEventApiGetPublishedSongsLangEnum;
(function (ReleaseEventApiGetPublishedSongsLangEnum) {
    ReleaseEventApiGetPublishedSongsLangEnum["Default"] = "Default";
    ReleaseEventApiGetPublishedSongsLangEnum["Japanese"] = "Japanese";
    ReleaseEventApiGetPublishedSongsLangEnum["Romaji"] = "Romaji";
    ReleaseEventApiGetPublishedSongsLangEnum["English"] = "English";
})(ReleaseEventApiGetPublishedSongsLangEnum || (ReleaseEventApiGetPublishedSongsLangEnum = {}));
var ReleaseEventApiGetPublishedSongsQueryParams = /** @class */ (function (_super) {
    __extends(ReleaseEventApiGetPublishedSongsQueryParams, _super);
    function ReleaseEventApiGetPublishedSongsQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], ReleaseEventApiGetPublishedSongsQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=lang" }),
        __metadata("design:type", String)
    ], ReleaseEventApiGetPublishedSongsQueryParams.prototype, "lang", void 0);
    return ReleaseEventApiGetPublishedSongsQueryParams;
}(SpeakeasyBase));
export { ReleaseEventApiGetPublishedSongsQueryParams };
var ReleaseEventApiGetPublishedSongsRequest = /** @class */ (function (_super) {
    __extends(ReleaseEventApiGetPublishedSongsRequest, _super);
    function ReleaseEventApiGetPublishedSongsRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ReleaseEventApiGetPublishedSongsPathParams)
    ], ReleaseEventApiGetPublishedSongsRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ReleaseEventApiGetPublishedSongsQueryParams)
    ], ReleaseEventApiGetPublishedSongsRequest.prototype, "queryParams", void 0);
    return ReleaseEventApiGetPublishedSongsRequest;
}(SpeakeasyBase));
export { ReleaseEventApiGetPublishedSongsRequest };
var ReleaseEventApiGetPublishedSongsResponse = /** @class */ (function (_super) {
    __extends(ReleaseEventApiGetPublishedSongsResponse, _super);
    function ReleaseEventApiGetPublishedSongsResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Uint8Array)
    ], ReleaseEventApiGetPublishedSongsResponse.prototype, "body", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], ReleaseEventApiGetPublishedSongsResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata({ elemType: shared.SongForApiContract }),
        __metadata("design:type", Array)
    ], ReleaseEventApiGetPublishedSongsResponse.prototype, "songForApiContracts", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], ReleaseEventApiGetPublishedSongsResponse.prototype, "statusCode", void 0);
    return ReleaseEventApiGetPublishedSongsResponse;
}(SpeakeasyBase));
export { ReleaseEventApiGetPublishedSongsResponse };
