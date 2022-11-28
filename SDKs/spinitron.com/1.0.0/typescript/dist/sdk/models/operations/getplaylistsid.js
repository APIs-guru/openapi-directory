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
var GetPlaylistsIdPathParams = /** @class */ (function (_super) {
    __extends(GetPlaylistsIdPathParams, _super);
    function GetPlaylistsIdPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" }),
        __metadata("design:type", Number)
    ], GetPlaylistsIdPathParams.prototype, "id", void 0);
    return GetPlaylistsIdPathParams;
}(SpeakeasyBase));
export { GetPlaylistsIdPathParams };
var GetPlaylistsIdQueryParams = /** @class */ (function (_super) {
    __extends(GetPlaylistsIdQueryParams, _super);
    function GetPlaylistsIdQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=expand" }),
        __metadata("design:type", Array)
    ], GetPlaylistsIdQueryParams.prototype, "expand", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", Array)
    ], GetPlaylistsIdQueryParams.prototype, "fields", void 0);
    return GetPlaylistsIdQueryParams;
}(SpeakeasyBase));
export { GetPlaylistsIdQueryParams };
var GetPlaylistsIdRequest = /** @class */ (function (_super) {
    __extends(GetPlaylistsIdRequest, _super);
    function GetPlaylistsIdRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetPlaylistsIdPathParams)
    ], GetPlaylistsIdRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetPlaylistsIdQueryParams)
    ], GetPlaylistsIdRequest.prototype, "queryParams", void 0);
    return GetPlaylistsIdRequest;
}(SpeakeasyBase));
export { GetPlaylistsIdRequest };
var GetPlaylistsIdResponse = /** @class */ (function (_super) {
    __extends(GetPlaylistsIdResponse, _super);
    function GetPlaylistsIdResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Uint8Array)
    ], GetPlaylistsIdResponse.prototype, "body", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GetPlaylistsIdResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.Error)
    ], GetPlaylistsIdResponse.prototype, "error", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.Playlist)
    ], GetPlaylistsIdResponse.prototype, "playlist", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GetPlaylistsIdResponse.prototype, "statusCode", void 0);
    return GetPlaylistsIdResponse;
}(SpeakeasyBase));
export { GetPlaylistsIdResponse };
