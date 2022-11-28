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
export var ProjectedPlayerSeasonStatsByPlayerFormatEnum;
(function (ProjectedPlayerSeasonStatsByPlayerFormatEnum) {
    ProjectedPlayerSeasonStatsByPlayerFormatEnum["Xml"] = "XML";
    ProjectedPlayerSeasonStatsByPlayerFormatEnum["Json"] = "JSON";
})(ProjectedPlayerSeasonStatsByPlayerFormatEnum || (ProjectedPlayerSeasonStatsByPlayerFormatEnum = {}));
var ProjectedPlayerSeasonStatsByPlayerPathParams = /** @class */ (function (_super) {
    __extends(ProjectedPlayerSeasonStatsByPlayerPathParams, _super);
    function ProjectedPlayerSeasonStatsByPlayerPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=format" }),
        __metadata("design:type", String)
    ], ProjectedPlayerSeasonStatsByPlayerPathParams.prototype, "format", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=playerid" }),
        __metadata("design:type", String)
    ], ProjectedPlayerSeasonStatsByPlayerPathParams.prototype, "playerid", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=season" }),
        __metadata("design:type", String)
    ], ProjectedPlayerSeasonStatsByPlayerPathParams.prototype, "season", void 0);
    return ProjectedPlayerSeasonStatsByPlayerPathParams;
}(SpeakeasyBase));
export { ProjectedPlayerSeasonStatsByPlayerPathParams };
var ProjectedPlayerSeasonStatsByPlayerRequest = /** @class */ (function (_super) {
    __extends(ProjectedPlayerSeasonStatsByPlayerRequest, _super);
    function ProjectedPlayerSeasonStatsByPlayerRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ProjectedPlayerSeasonStatsByPlayerPathParams)
    ], ProjectedPlayerSeasonStatsByPlayerRequest.prototype, "pathParams", void 0);
    return ProjectedPlayerSeasonStatsByPlayerRequest;
}(SpeakeasyBase));
export { ProjectedPlayerSeasonStatsByPlayerRequest };
var ProjectedPlayerSeasonStatsByPlayerResponse = /** @class */ (function (_super) {
    __extends(ProjectedPlayerSeasonStatsByPlayerResponse, _super);
    function ProjectedPlayerSeasonStatsByPlayerResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], ProjectedPlayerSeasonStatsByPlayerResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], ProjectedPlayerSeasonStatsByPlayerResponse.prototype, "playerSeasonProjection", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], ProjectedPlayerSeasonStatsByPlayerResponse.prototype, "statusCode", void 0);
    return ProjectedPlayerSeasonStatsByPlayerResponse;
}(SpeakeasyBase));
export { ProjectedPlayerSeasonStatsByPlayerResponse };
