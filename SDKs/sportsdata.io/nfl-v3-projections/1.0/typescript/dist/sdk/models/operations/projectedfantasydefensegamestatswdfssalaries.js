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
export var ProjectedFantasyDefenseGameStatsWDfsSalariesFormatEnum;
(function (ProjectedFantasyDefenseGameStatsWDfsSalariesFormatEnum) {
    ProjectedFantasyDefenseGameStatsWDfsSalariesFormatEnum["Xml"] = "XML";
    ProjectedFantasyDefenseGameStatsWDfsSalariesFormatEnum["Json"] = "JSON";
})(ProjectedFantasyDefenseGameStatsWDfsSalariesFormatEnum || (ProjectedFantasyDefenseGameStatsWDfsSalariesFormatEnum = {}));
var ProjectedFantasyDefenseGameStatsWDfsSalariesPathParams = /** @class */ (function (_super) {
    __extends(ProjectedFantasyDefenseGameStatsWDfsSalariesPathParams, _super);
    function ProjectedFantasyDefenseGameStatsWDfsSalariesPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=format" }),
        __metadata("design:type", String)
    ], ProjectedFantasyDefenseGameStatsWDfsSalariesPathParams.prototype, "format", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=season" }),
        __metadata("design:type", String)
    ], ProjectedFantasyDefenseGameStatsWDfsSalariesPathParams.prototype, "season", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=week" }),
        __metadata("design:type", String)
    ], ProjectedFantasyDefenseGameStatsWDfsSalariesPathParams.prototype, "week", void 0);
    return ProjectedFantasyDefenseGameStatsWDfsSalariesPathParams;
}(SpeakeasyBase));
export { ProjectedFantasyDefenseGameStatsWDfsSalariesPathParams };
var ProjectedFantasyDefenseGameStatsWDfsSalariesRequest = /** @class */ (function (_super) {
    __extends(ProjectedFantasyDefenseGameStatsWDfsSalariesRequest, _super);
    function ProjectedFantasyDefenseGameStatsWDfsSalariesRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ProjectedFantasyDefenseGameStatsWDfsSalariesPathParams)
    ], ProjectedFantasyDefenseGameStatsWDfsSalariesRequest.prototype, "pathParams", void 0);
    return ProjectedFantasyDefenseGameStatsWDfsSalariesRequest;
}(SpeakeasyBase));
export { ProjectedFantasyDefenseGameStatsWDfsSalariesRequest };
var ProjectedFantasyDefenseGameStatsWDfsSalariesResponse = /** @class */ (function (_super) {
    __extends(ProjectedFantasyDefenseGameStatsWDfsSalariesResponse, _super);
    function ProjectedFantasyDefenseGameStatsWDfsSalariesResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], ProjectedFantasyDefenseGameStatsWDfsSalariesResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Array)
    ], ProjectedFantasyDefenseGameStatsWDfsSalariesResponse.prototype, "fantasyDefenseGameProjections", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], ProjectedFantasyDefenseGameStatsWDfsSalariesResponse.prototype, "statusCode", void 0);
    return ProjectedFantasyDefenseGameStatsWDfsSalariesResponse;
}(SpeakeasyBase));
export { ProjectedFantasyDefenseGameStatsWDfsSalariesResponse };
