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
var GetProjectVideosAlt1PathParams = /** @class */ (function (_super) {
    __extends(GetProjectVideosAlt1PathParams, _super);
    function GetProjectVideosAlt1PathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=project_id" }),
        __metadata("design:type", Number)
    ], GetProjectVideosAlt1PathParams.prototype, "projectId", void 0);
    return GetProjectVideosAlt1PathParams;
}(SpeakeasyBase));
export { GetProjectVideosAlt1PathParams };
export var GetProjectVideosAlt1DirectionEnum;
(function (GetProjectVideosAlt1DirectionEnum) {
    GetProjectVideosAlt1DirectionEnum["Asc"] = "asc";
    GetProjectVideosAlt1DirectionEnum["Desc"] = "desc";
})(GetProjectVideosAlt1DirectionEnum || (GetProjectVideosAlt1DirectionEnum = {}));
export var GetProjectVideosAlt1SortEnum;
(function (GetProjectVideosAlt1SortEnum) {
    GetProjectVideosAlt1SortEnum["Alphabetical"] = "alphabetical";
    GetProjectVideosAlt1SortEnum["Date"] = "date";
    GetProjectVideosAlt1SortEnum["Default"] = "default";
    GetProjectVideosAlt1SortEnum["Duration"] = "duration";
    GetProjectVideosAlt1SortEnum["LastUserActionEventDate"] = "last_user_action_event_date";
})(GetProjectVideosAlt1SortEnum || (GetProjectVideosAlt1SortEnum = {}));
var GetProjectVideosAlt1QueryParams = /** @class */ (function (_super) {
    __extends(GetProjectVideosAlt1QueryParams, _super);
    function GetProjectVideosAlt1QueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=direction" }),
        __metadata("design:type", String)
    ], GetProjectVideosAlt1QueryParams.prototype, "direction", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=page" }),
        __metadata("design:type", Number)
    ], GetProjectVideosAlt1QueryParams.prototype, "page", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=per_page" }),
        __metadata("design:type", Number)
    ], GetProjectVideosAlt1QueryParams.prototype, "perPage", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=sort" }),
        __metadata("design:type", String)
    ], GetProjectVideosAlt1QueryParams.prototype, "sort", void 0);
    return GetProjectVideosAlt1QueryParams;
}(SpeakeasyBase));
export { GetProjectVideosAlt1QueryParams };
var GetProjectVideosAlt1Security = /** @class */ (function (_super) {
    __extends(GetProjectVideosAlt1Security, _super);
    function GetProjectVideosAlt1Security() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], GetProjectVideosAlt1Security.prototype, "oauth2", void 0);
    return GetProjectVideosAlt1Security;
}(SpeakeasyBase));
export { GetProjectVideosAlt1Security };
var GetProjectVideosAlt1Request = /** @class */ (function (_super) {
    __extends(GetProjectVideosAlt1Request, _super);
    function GetProjectVideosAlt1Request() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetProjectVideosAlt1PathParams)
    ], GetProjectVideosAlt1Request.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetProjectVideosAlt1QueryParams)
    ], GetProjectVideosAlt1Request.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetProjectVideosAlt1Security)
    ], GetProjectVideosAlt1Request.prototype, "security", void 0);
    return GetProjectVideosAlt1Request;
}(SpeakeasyBase));
export { GetProjectVideosAlt1Request };
var GetProjectVideosAlt1Response = /** @class */ (function (_super) {
    __extends(GetProjectVideosAlt1Response, _super);
    function GetProjectVideosAlt1Response() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GetProjectVideosAlt1Response.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GetProjectVideosAlt1Response.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.Error)
    ], GetProjectVideosAlt1Response.prototype, "error", void 0);
    __decorate([
        SpeakeasyMetadata({ elemType: shared.Video }),
        __metadata("design:type", Array)
    ], GetProjectVideosAlt1Response.prototype, "videos", void 0);
    return GetProjectVideosAlt1Response;
}(SpeakeasyBase));
export { GetProjectVideosAlt1Response };
