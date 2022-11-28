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
export var SongApiGetNamesNameMatchModeEnum;
(function (SongApiGetNamesNameMatchModeEnum) {
    SongApiGetNamesNameMatchModeEnum["Auto"] = "Auto";
    SongApiGetNamesNameMatchModeEnum["Partial"] = "Partial";
    SongApiGetNamesNameMatchModeEnum["StartsWith"] = "StartsWith";
    SongApiGetNamesNameMatchModeEnum["Exact"] = "Exact";
    SongApiGetNamesNameMatchModeEnum["Words"] = "Words";
})(SongApiGetNamesNameMatchModeEnum || (SongApiGetNamesNameMatchModeEnum = {}));
var SongApiGetNamesQueryParams = /** @class */ (function (_super) {
    __extends(SongApiGetNamesQueryParams, _super);
    function SongApiGetNamesQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=maxResults" }),
        __metadata("design:type", Number)
    ], SongApiGetNamesQueryParams.prototype, "maxResults", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=nameMatchMode" }),
        __metadata("design:type", String)
    ], SongApiGetNamesQueryParams.prototype, "nameMatchMode", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=query" }),
        __metadata("design:type", String)
    ], SongApiGetNamesQueryParams.prototype, "query", void 0);
    return SongApiGetNamesQueryParams;
}(SpeakeasyBase));
export { SongApiGetNamesQueryParams };
var SongApiGetNamesRequest = /** @class */ (function (_super) {
    __extends(SongApiGetNamesRequest, _super);
    function SongApiGetNamesRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", SongApiGetNamesQueryParams)
    ], SongApiGetNamesRequest.prototype, "queryParams", void 0);
    return SongApiGetNamesRequest;
}(SpeakeasyBase));
export { SongApiGetNamesRequest };
var SongApiGetNamesResponse = /** @class */ (function (_super) {
    __extends(SongApiGetNamesResponse, _super);
    function SongApiGetNamesResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Uint8Array)
    ], SongApiGetNamesResponse.prototype, "body", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], SongApiGetNamesResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Array)
    ], SongApiGetNamesResponse.prototype, "songApiGetNames200ApplicationJsonStrings", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Array)
    ], SongApiGetNamesResponse.prototype, "songApiGetNames200ApplicationJsonpStrings", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Array)
    ], SongApiGetNamesResponse.prototype, "songApiGetNames200TextJsonStrings", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], SongApiGetNamesResponse.prototype, "statusCode", void 0);
    return SongApiGetNamesResponse;
}(SpeakeasyBase));
export { SongApiGetNamesResponse };
