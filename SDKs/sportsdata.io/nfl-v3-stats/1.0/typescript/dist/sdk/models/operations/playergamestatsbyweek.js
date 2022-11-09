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
export var PlayerGameStatsByWeekFormatEnum;
(function (PlayerGameStatsByWeekFormatEnum) {
    PlayerGameStatsByWeekFormatEnum["Xml"] = "XML";
    PlayerGameStatsByWeekFormatEnum["Json"] = "JSON";
})(PlayerGameStatsByWeekFormatEnum || (PlayerGameStatsByWeekFormatEnum = {}));
var PlayerGameStatsByWeekPathParams = /** @class */ (function (_super) {
    __extends(PlayerGameStatsByWeekPathParams, _super);
    function PlayerGameStatsByWeekPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=format" }),
        __metadata("design:type", String)
    ], PlayerGameStatsByWeekPathParams.prototype, "format", void 0);
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=season" }),
        __metadata("design:type", String)
    ], PlayerGameStatsByWeekPathParams.prototype, "season", void 0);
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=week" }),
        __metadata("design:type", String)
    ], PlayerGameStatsByWeekPathParams.prototype, "week", void 0);
    return PlayerGameStatsByWeekPathParams;
}(SpeakeasyBase));
export { PlayerGameStatsByWeekPathParams };
var PlayerGameStatsByWeekRequest = /** @class */ (function (_super) {
    __extends(PlayerGameStatsByWeekRequest, _super);
    function PlayerGameStatsByWeekRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", PlayerGameStatsByWeekPathParams)
    ], PlayerGameStatsByWeekRequest.prototype, "pathParams", void 0);
    return PlayerGameStatsByWeekRequest;
}(SpeakeasyBase));
export { PlayerGameStatsByWeekRequest };
var PlayerGameStatsByWeekResponse = /** @class */ (function (_super) {
    __extends(PlayerGameStatsByWeekResponse, _super);
    function PlayerGameStatsByWeekResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], PlayerGameStatsByWeekResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Array)
    ], PlayerGameStatsByWeekResponse.prototype, "playerGames", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], PlayerGameStatsByWeekResponse.prototype, "statusCode", void 0);
    return PlayerGameStatsByWeekResponse;
}(SpeakeasyBase));
export { PlayerGameStatsByWeekResponse };
