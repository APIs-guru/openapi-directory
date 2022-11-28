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
export var ProjectedPlayerSeasonStatsByTeamFormatEnum;
(function (ProjectedPlayerSeasonStatsByTeamFormatEnum) {
    ProjectedPlayerSeasonStatsByTeamFormatEnum["Xml"] = "XML";
    ProjectedPlayerSeasonStatsByTeamFormatEnum["Json"] = "JSON";
})(ProjectedPlayerSeasonStatsByTeamFormatEnum || (ProjectedPlayerSeasonStatsByTeamFormatEnum = {}));
var ProjectedPlayerSeasonStatsByTeamPathParams = /** @class */ (function (_super) {
    __extends(ProjectedPlayerSeasonStatsByTeamPathParams, _super);
    function ProjectedPlayerSeasonStatsByTeamPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=format" }),
        __metadata("design:type", String)
    ], ProjectedPlayerSeasonStatsByTeamPathParams.prototype, "format", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=season" }),
        __metadata("design:type", String)
    ], ProjectedPlayerSeasonStatsByTeamPathParams.prototype, "season", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=team" }),
        __metadata("design:type", String)
    ], ProjectedPlayerSeasonStatsByTeamPathParams.prototype, "team", void 0);
    return ProjectedPlayerSeasonStatsByTeamPathParams;
}(SpeakeasyBase));
export { ProjectedPlayerSeasonStatsByTeamPathParams };
var ProjectedPlayerSeasonStatsByTeamRequest = /** @class */ (function (_super) {
    __extends(ProjectedPlayerSeasonStatsByTeamRequest, _super);
    function ProjectedPlayerSeasonStatsByTeamRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ProjectedPlayerSeasonStatsByTeamPathParams)
    ], ProjectedPlayerSeasonStatsByTeamRequest.prototype, "pathParams", void 0);
    return ProjectedPlayerSeasonStatsByTeamRequest;
}(SpeakeasyBase));
export { ProjectedPlayerSeasonStatsByTeamRequest };
var ProjectedPlayerSeasonStatsByTeamResponse = /** @class */ (function (_super) {
    __extends(ProjectedPlayerSeasonStatsByTeamResponse, _super);
    function ProjectedPlayerSeasonStatsByTeamResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], ProjectedPlayerSeasonStatsByTeamResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Array)
    ], ProjectedPlayerSeasonStatsByTeamResponse.prototype, "playerSeasonProjections", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], ProjectedPlayerSeasonStatsByTeamResponse.prototype, "statusCode", void 0);
    return ProjectedPlayerSeasonStatsByTeamResponse;
}(SpeakeasyBase));
export { ProjectedPlayerSeasonStatsByTeamResponse };
