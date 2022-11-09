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
import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
export var ProjectedPlayerGameStatsByPlayerWInjuriesLineupsDfsSalariesFormatEnum;
(function (ProjectedPlayerGameStatsByPlayerWInjuriesLineupsDfsSalariesFormatEnum) {
    ProjectedPlayerGameStatsByPlayerWInjuriesLineupsDfsSalariesFormatEnum["Xml"] = "XML";
    ProjectedPlayerGameStatsByPlayerWInjuriesLineupsDfsSalariesFormatEnum["Json"] = "JSON";
})(ProjectedPlayerGameStatsByPlayerWInjuriesLineupsDfsSalariesFormatEnum || (ProjectedPlayerGameStatsByPlayerWInjuriesLineupsDfsSalariesFormatEnum = {}));
var ProjectedPlayerGameStatsByPlayerWInjuriesLineupsDfsSalariesPathParams = /** @class */ (function (_super) {
    __extends(ProjectedPlayerGameStatsByPlayerWInjuriesLineupsDfsSalariesPathParams, _super);
    function ProjectedPlayerGameStatsByPlayerWInjuriesLineupsDfsSalariesPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=date" }),
        __metadata("design:type", String)
    ], ProjectedPlayerGameStatsByPlayerWInjuriesLineupsDfsSalariesPathParams.prototype, "date", void 0);
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=format" }),
        __metadata("design:type", String)
    ], ProjectedPlayerGameStatsByPlayerWInjuriesLineupsDfsSalariesPathParams.prototype, "format", void 0);
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=playerid" }),
        __metadata("design:type", String)
    ], ProjectedPlayerGameStatsByPlayerWInjuriesLineupsDfsSalariesPathParams.prototype, "playerid", void 0);
    return ProjectedPlayerGameStatsByPlayerWInjuriesLineupsDfsSalariesPathParams;
}(SpeakeasyBase));
export { ProjectedPlayerGameStatsByPlayerWInjuriesLineupsDfsSalariesPathParams };
var ProjectedPlayerGameStatsByPlayerWInjuriesLineupsDfsSalariesRequest = /** @class */ (function (_super) {
    __extends(ProjectedPlayerGameStatsByPlayerWInjuriesLineupsDfsSalariesRequest, _super);
    function ProjectedPlayerGameStatsByPlayerWInjuriesLineupsDfsSalariesRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", ProjectedPlayerGameStatsByPlayerWInjuriesLineupsDfsSalariesPathParams)
    ], ProjectedPlayerGameStatsByPlayerWInjuriesLineupsDfsSalariesRequest.prototype, "pathParams", void 0);
    return ProjectedPlayerGameStatsByPlayerWInjuriesLineupsDfsSalariesRequest;
}(SpeakeasyBase));
export { ProjectedPlayerGameStatsByPlayerWInjuriesLineupsDfsSalariesRequest };
var ProjectedPlayerGameStatsByPlayerWInjuriesLineupsDfsSalariesResponse = /** @class */ (function (_super) {
    __extends(ProjectedPlayerGameStatsByPlayerWInjuriesLineupsDfsSalariesResponse, _super);
    function ProjectedPlayerGameStatsByPlayerWInjuriesLineupsDfsSalariesResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], ProjectedPlayerGameStatsByPlayerWInjuriesLineupsDfsSalariesResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Array)
    ], ProjectedPlayerGameStatsByPlayerWInjuriesLineupsDfsSalariesResponse.prototype, "playerGameProjections", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], ProjectedPlayerGameStatsByPlayerWInjuriesLineupsDfsSalariesResponse.prototype, "statusCode", void 0);
    return ProjectedPlayerGameStatsByPlayerWInjuriesLineupsDfsSalariesResponse;
}(SpeakeasyBase));
export { ProjectedPlayerGameStatsByPlayerWInjuriesLineupsDfsSalariesResponse };
