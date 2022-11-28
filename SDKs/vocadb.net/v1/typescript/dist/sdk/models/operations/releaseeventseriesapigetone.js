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
var ReleaseEventSeriesApiGetOnePathParams = /** @class */ (function (_super) {
    __extends(ReleaseEventSeriesApiGetOnePathParams, _super);
    function ReleaseEventSeriesApiGetOnePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" }),
        __metadata("design:type", Number)
    ], ReleaseEventSeriesApiGetOnePathParams.prototype, "id", void 0);
    return ReleaseEventSeriesApiGetOnePathParams;
}(SpeakeasyBase));
export { ReleaseEventSeriesApiGetOnePathParams };
export var ReleaseEventSeriesApiGetOneFieldsEnum;
(function (ReleaseEventSeriesApiGetOneFieldsEnum) {
    ReleaseEventSeriesApiGetOneFieldsEnum["None"] = "None";
    ReleaseEventSeriesApiGetOneFieldsEnum["AdditionalNames"] = "AdditionalNames";
    ReleaseEventSeriesApiGetOneFieldsEnum["Description"] = "Description";
    ReleaseEventSeriesApiGetOneFieldsEnum["Events"] = "Events";
    ReleaseEventSeriesApiGetOneFieldsEnum["MainPicture"] = "MainPicture";
    ReleaseEventSeriesApiGetOneFieldsEnum["Names"] = "Names";
    ReleaseEventSeriesApiGetOneFieldsEnum["WebLinks"] = "WebLinks";
})(ReleaseEventSeriesApiGetOneFieldsEnum || (ReleaseEventSeriesApiGetOneFieldsEnum = {}));
export var ReleaseEventSeriesApiGetOneLangEnum;
(function (ReleaseEventSeriesApiGetOneLangEnum) {
    ReleaseEventSeriesApiGetOneLangEnum["Default"] = "Default";
    ReleaseEventSeriesApiGetOneLangEnum["Japanese"] = "Japanese";
    ReleaseEventSeriesApiGetOneLangEnum["Romaji"] = "Romaji";
    ReleaseEventSeriesApiGetOneLangEnum["English"] = "English";
})(ReleaseEventSeriesApiGetOneLangEnum || (ReleaseEventSeriesApiGetOneLangEnum = {}));
var ReleaseEventSeriesApiGetOneQueryParams = /** @class */ (function (_super) {
    __extends(ReleaseEventSeriesApiGetOneQueryParams, _super);
    function ReleaseEventSeriesApiGetOneQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], ReleaseEventSeriesApiGetOneQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=lang" }),
        __metadata("design:type", String)
    ], ReleaseEventSeriesApiGetOneQueryParams.prototype, "lang", void 0);
    return ReleaseEventSeriesApiGetOneQueryParams;
}(SpeakeasyBase));
export { ReleaseEventSeriesApiGetOneQueryParams };
var ReleaseEventSeriesApiGetOneRequest = /** @class */ (function (_super) {
    __extends(ReleaseEventSeriesApiGetOneRequest, _super);
    function ReleaseEventSeriesApiGetOneRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ReleaseEventSeriesApiGetOnePathParams)
    ], ReleaseEventSeriesApiGetOneRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ReleaseEventSeriesApiGetOneQueryParams)
    ], ReleaseEventSeriesApiGetOneRequest.prototype, "queryParams", void 0);
    return ReleaseEventSeriesApiGetOneRequest;
}(SpeakeasyBase));
export { ReleaseEventSeriesApiGetOneRequest };
var ReleaseEventSeriesApiGetOneResponse = /** @class */ (function (_super) {
    __extends(ReleaseEventSeriesApiGetOneResponse, _super);
    function ReleaseEventSeriesApiGetOneResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Uint8Array)
    ], ReleaseEventSeriesApiGetOneResponse.prototype, "body", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], ReleaseEventSeriesApiGetOneResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.ReleaseEventSeriesForApiContract)
    ], ReleaseEventSeriesApiGetOneResponse.prototype, "releaseEventSeriesForApiContract", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], ReleaseEventSeriesApiGetOneResponse.prototype, "statusCode", void 0);
    return ReleaseEventSeriesApiGetOneResponse;
}(SpeakeasyBase));
export { ReleaseEventSeriesApiGetOneResponse };
