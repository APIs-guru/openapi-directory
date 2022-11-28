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
var ReleaseEventApiGetOnePathParams = /** @class */ (function (_super) {
    __extends(ReleaseEventApiGetOnePathParams, _super);
    function ReleaseEventApiGetOnePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" }),
        __metadata("design:type", Number)
    ], ReleaseEventApiGetOnePathParams.prototype, "id", void 0);
    return ReleaseEventApiGetOnePathParams;
}(SpeakeasyBase));
export { ReleaseEventApiGetOnePathParams };
export var ReleaseEventApiGetOneFieldsEnum;
(function (ReleaseEventApiGetOneFieldsEnum) {
    ReleaseEventApiGetOneFieldsEnum["None"] = "None";
    ReleaseEventApiGetOneFieldsEnum["AdditionalNames"] = "AdditionalNames";
    ReleaseEventApiGetOneFieldsEnum["Artists"] = "Artists";
    ReleaseEventApiGetOneFieldsEnum["Description"] = "Description";
    ReleaseEventApiGetOneFieldsEnum["MainPicture"] = "MainPicture";
    ReleaseEventApiGetOneFieldsEnum["Names"] = "Names";
    ReleaseEventApiGetOneFieldsEnum["Series"] = "Series";
    ReleaseEventApiGetOneFieldsEnum["SongList"] = "SongList";
    ReleaseEventApiGetOneFieldsEnum["Tags"] = "Tags";
    ReleaseEventApiGetOneFieldsEnum["Venue"] = "Venue";
    ReleaseEventApiGetOneFieldsEnum["WebLinks"] = "WebLinks";
})(ReleaseEventApiGetOneFieldsEnum || (ReleaseEventApiGetOneFieldsEnum = {}));
export var ReleaseEventApiGetOneLangEnum;
(function (ReleaseEventApiGetOneLangEnum) {
    ReleaseEventApiGetOneLangEnum["Default"] = "Default";
    ReleaseEventApiGetOneLangEnum["Japanese"] = "Japanese";
    ReleaseEventApiGetOneLangEnum["Romaji"] = "Romaji";
    ReleaseEventApiGetOneLangEnum["English"] = "English";
})(ReleaseEventApiGetOneLangEnum || (ReleaseEventApiGetOneLangEnum = {}));
var ReleaseEventApiGetOneQueryParams = /** @class */ (function (_super) {
    __extends(ReleaseEventApiGetOneQueryParams, _super);
    function ReleaseEventApiGetOneQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], ReleaseEventApiGetOneQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=lang" }),
        __metadata("design:type", String)
    ], ReleaseEventApiGetOneQueryParams.prototype, "lang", void 0);
    return ReleaseEventApiGetOneQueryParams;
}(SpeakeasyBase));
export { ReleaseEventApiGetOneQueryParams };
var ReleaseEventApiGetOneRequest = /** @class */ (function (_super) {
    __extends(ReleaseEventApiGetOneRequest, _super);
    function ReleaseEventApiGetOneRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ReleaseEventApiGetOnePathParams)
    ], ReleaseEventApiGetOneRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ReleaseEventApiGetOneQueryParams)
    ], ReleaseEventApiGetOneRequest.prototype, "queryParams", void 0);
    return ReleaseEventApiGetOneRequest;
}(SpeakeasyBase));
export { ReleaseEventApiGetOneRequest };
var ReleaseEventApiGetOneResponse = /** @class */ (function (_super) {
    __extends(ReleaseEventApiGetOneResponse, _super);
    function ReleaseEventApiGetOneResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Uint8Array)
    ], ReleaseEventApiGetOneResponse.prototype, "body", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], ReleaseEventApiGetOneResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.ReleaseEventForApiContract)
    ], ReleaseEventApiGetOneResponse.prototype, "releaseEventForApiContract", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], ReleaseEventApiGetOneResponse.prototype, "statusCode", void 0);
    return ReleaseEventApiGetOneResponse;
}(SpeakeasyBase));
export { ReleaseEventApiGetOneResponse };
