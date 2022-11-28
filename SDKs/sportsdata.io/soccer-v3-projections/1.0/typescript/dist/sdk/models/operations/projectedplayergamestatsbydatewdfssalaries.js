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
export var ProjectedPlayerGameStatsByDateWDfsSalariesFormatEnum;
(function (ProjectedPlayerGameStatsByDateWDfsSalariesFormatEnum) {
    ProjectedPlayerGameStatsByDateWDfsSalariesFormatEnum["Xml"] = "xml";
    ProjectedPlayerGameStatsByDateWDfsSalariesFormatEnum["Json"] = "json";
})(ProjectedPlayerGameStatsByDateWDfsSalariesFormatEnum || (ProjectedPlayerGameStatsByDateWDfsSalariesFormatEnum = {}));
var ProjectedPlayerGameStatsByDateWDfsSalariesPathParams = /** @class */ (function (_super) {
    __extends(ProjectedPlayerGameStatsByDateWDfsSalariesPathParams, _super);
    function ProjectedPlayerGameStatsByDateWDfsSalariesPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=date" }),
        __metadata("design:type", String)
    ], ProjectedPlayerGameStatsByDateWDfsSalariesPathParams.prototype, "date", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=format" }),
        __metadata("design:type", String)
    ], ProjectedPlayerGameStatsByDateWDfsSalariesPathParams.prototype, "format", void 0);
    return ProjectedPlayerGameStatsByDateWDfsSalariesPathParams;
}(SpeakeasyBase));
export { ProjectedPlayerGameStatsByDateWDfsSalariesPathParams };
var ProjectedPlayerGameStatsByDateWDfsSalariesRequest = /** @class */ (function (_super) {
    __extends(ProjectedPlayerGameStatsByDateWDfsSalariesRequest, _super);
    function ProjectedPlayerGameStatsByDateWDfsSalariesRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ProjectedPlayerGameStatsByDateWDfsSalariesPathParams)
    ], ProjectedPlayerGameStatsByDateWDfsSalariesRequest.prototype, "pathParams", void 0);
    return ProjectedPlayerGameStatsByDateWDfsSalariesRequest;
}(SpeakeasyBase));
export { ProjectedPlayerGameStatsByDateWDfsSalariesRequest };
var ProjectedPlayerGameStatsByDateWDfsSalariesResponse = /** @class */ (function (_super) {
    __extends(ProjectedPlayerGameStatsByDateWDfsSalariesResponse, _super);
    function ProjectedPlayerGameStatsByDateWDfsSalariesResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], ProjectedPlayerGameStatsByDateWDfsSalariesResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Array)
    ], ProjectedPlayerGameStatsByDateWDfsSalariesResponse.prototype, "playerGameProjections", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], ProjectedPlayerGameStatsByDateWDfsSalariesResponse.prototype, "statusCode", void 0);
    return ProjectedPlayerGameStatsByDateWDfsSalariesResponse;
}(SpeakeasyBase));
export { ProjectedPlayerGameStatsByDateWDfsSalariesResponse };
