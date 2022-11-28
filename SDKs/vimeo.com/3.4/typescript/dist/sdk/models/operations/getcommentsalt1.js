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
var GetCommentsAlt1PathParams = /** @class */ (function (_super) {
    __extends(GetCommentsAlt1PathParams, _super);
    function GetCommentsAlt1PathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=channel_id" }),
        __metadata("design:type", Number)
    ], GetCommentsAlt1PathParams.prototype, "channelId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=video_id" }),
        __metadata("design:type", Number)
    ], GetCommentsAlt1PathParams.prototype, "videoId", void 0);
    return GetCommentsAlt1PathParams;
}(SpeakeasyBase));
export { GetCommentsAlt1PathParams };
export var GetCommentsAlt1DirectionEnum;
(function (GetCommentsAlt1DirectionEnum) {
    GetCommentsAlt1DirectionEnum["Asc"] = "asc";
    GetCommentsAlt1DirectionEnum["Desc"] = "desc";
})(GetCommentsAlt1DirectionEnum || (GetCommentsAlt1DirectionEnum = {}));
var GetCommentsAlt1QueryParams = /** @class */ (function (_super) {
    __extends(GetCommentsAlt1QueryParams, _super);
    function GetCommentsAlt1QueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=direction" }),
        __metadata("design:type", String)
    ], GetCommentsAlt1QueryParams.prototype, "direction", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=page" }),
        __metadata("design:type", Number)
    ], GetCommentsAlt1QueryParams.prototype, "page", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=per_page" }),
        __metadata("design:type", Number)
    ], GetCommentsAlt1QueryParams.prototype, "perPage", void 0);
    return GetCommentsAlt1QueryParams;
}(SpeakeasyBase));
export { GetCommentsAlt1QueryParams };
var GetCommentsAlt1Request = /** @class */ (function (_super) {
    __extends(GetCommentsAlt1Request, _super);
    function GetCommentsAlt1Request() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetCommentsAlt1PathParams)
    ], GetCommentsAlt1Request.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetCommentsAlt1QueryParams)
    ], GetCommentsAlt1Request.prototype, "queryParams", void 0);
    return GetCommentsAlt1Request;
}(SpeakeasyBase));
export { GetCommentsAlt1Request };
var GetCommentsAlt1Response = /** @class */ (function (_super) {
    __extends(GetCommentsAlt1Response, _super);
    function GetCommentsAlt1Response() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GetCommentsAlt1Response.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GetCommentsAlt1Response.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata({ elemType: shared.Comment }),
        __metadata("design:type", Array)
    ], GetCommentsAlt1Response.prototype, "comments", void 0);
    return GetCommentsAlt1Response;
}(SpeakeasyBase));
export { GetCommentsAlt1Response };
