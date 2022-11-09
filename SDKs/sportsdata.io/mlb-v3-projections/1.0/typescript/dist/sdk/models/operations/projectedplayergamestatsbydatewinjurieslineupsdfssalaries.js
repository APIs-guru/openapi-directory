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
export var ProjectedPlayerGameStatsByDateWInjuriesLineupsDfsSalariesFormatEnum;
(function (ProjectedPlayerGameStatsByDateWInjuriesLineupsDfsSalariesFormatEnum) {
    ProjectedPlayerGameStatsByDateWInjuriesLineupsDfsSalariesFormatEnum["Xml"] = "XML";
    ProjectedPlayerGameStatsByDateWInjuriesLineupsDfsSalariesFormatEnum["Json"] = "JSON";
})(ProjectedPlayerGameStatsByDateWInjuriesLineupsDfsSalariesFormatEnum || (ProjectedPlayerGameStatsByDateWInjuriesLineupsDfsSalariesFormatEnum = {}));
var ProjectedPlayerGameStatsByDateWInjuriesLineupsDfsSalariesPathParams = /** @class */ (function (_super) {
    __extends(ProjectedPlayerGameStatsByDateWInjuriesLineupsDfsSalariesPathParams, _super);
    function ProjectedPlayerGameStatsByDateWInjuriesLineupsDfsSalariesPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=date" }),
        __metadata("design:type", String)
    ], ProjectedPlayerGameStatsByDateWInjuriesLineupsDfsSalariesPathParams.prototype, "date", void 0);
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=format" }),
        __metadata("design:type", String)
    ], ProjectedPlayerGameStatsByDateWInjuriesLineupsDfsSalariesPathParams.prototype, "format", void 0);
    return ProjectedPlayerGameStatsByDateWInjuriesLineupsDfsSalariesPathParams;
}(SpeakeasyBase));
export { ProjectedPlayerGameStatsByDateWInjuriesLineupsDfsSalariesPathParams };
var ProjectedPlayerGameStatsByDateWInjuriesLineupsDfsSalariesRequest = /** @class */ (function (_super) {
    __extends(ProjectedPlayerGameStatsByDateWInjuriesLineupsDfsSalariesRequest, _super);
    function ProjectedPlayerGameStatsByDateWInjuriesLineupsDfsSalariesRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", ProjectedPlayerGameStatsByDateWInjuriesLineupsDfsSalariesPathParams)
    ], ProjectedPlayerGameStatsByDateWInjuriesLineupsDfsSalariesRequest.prototype, "pathParams", void 0);
    return ProjectedPlayerGameStatsByDateWInjuriesLineupsDfsSalariesRequest;
}(SpeakeasyBase));
export { ProjectedPlayerGameStatsByDateWInjuriesLineupsDfsSalariesRequest };
var ProjectedPlayerGameStatsByDateWInjuriesLineupsDfsSalariesResponse = /** @class */ (function (_super) {
    __extends(ProjectedPlayerGameStatsByDateWInjuriesLineupsDfsSalariesResponse, _super);
    function ProjectedPlayerGameStatsByDateWInjuriesLineupsDfsSalariesResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], ProjectedPlayerGameStatsByDateWInjuriesLineupsDfsSalariesResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Array)
    ], ProjectedPlayerGameStatsByDateWInjuriesLineupsDfsSalariesResponse.prototype, "playerGameProjections", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], ProjectedPlayerGameStatsByDateWInjuriesLineupsDfsSalariesResponse.prototype, "statusCode", void 0);
    return ProjectedPlayerGameStatsByDateWInjuriesLineupsDfsSalariesResponse;
}(SpeakeasyBase));
export { ProjectedPlayerGameStatsByDateWInjuriesLineupsDfsSalariesResponse };
