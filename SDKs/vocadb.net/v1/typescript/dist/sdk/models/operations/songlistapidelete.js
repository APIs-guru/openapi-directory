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
var SongListApiDeletePathParams = /** @class */ (function (_super) {
    __extends(SongListApiDeletePathParams, _super);
    function SongListApiDeletePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" }),
        __metadata("design:type", Number)
    ], SongListApiDeletePathParams.prototype, "id", void 0);
    return SongListApiDeletePathParams;
}(SpeakeasyBase));
export { SongListApiDeletePathParams };
var SongListApiDeleteQueryParams = /** @class */ (function (_super) {
    __extends(SongListApiDeleteQueryParams, _super);
    function SongListApiDeleteQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=hardDelete" }),
        __metadata("design:type", Boolean)
    ], SongListApiDeleteQueryParams.prototype, "hardDelete", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=notes" }),
        __metadata("design:type", String)
    ], SongListApiDeleteQueryParams.prototype, "notes", void 0);
    return SongListApiDeleteQueryParams;
}(SpeakeasyBase));
export { SongListApiDeleteQueryParams };
var SongListApiDeleteRequest = /** @class */ (function (_super) {
    __extends(SongListApiDeleteRequest, _super);
    function SongListApiDeleteRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", SongListApiDeletePathParams)
    ], SongListApiDeleteRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", SongListApiDeleteQueryParams)
    ], SongListApiDeleteRequest.prototype, "queryParams", void 0);
    return SongListApiDeleteRequest;
}(SpeakeasyBase));
export { SongListApiDeleteRequest };
var SongListApiDeleteResponse = /** @class */ (function (_super) {
    __extends(SongListApiDeleteResponse, _super);
    function SongListApiDeleteResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], SongListApiDeleteResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], SongListApiDeleteResponse.prototype, "statusCode", void 0);
    return SongListApiDeleteResponse;
}(SpeakeasyBase));
export { SongListApiDeleteResponse };
