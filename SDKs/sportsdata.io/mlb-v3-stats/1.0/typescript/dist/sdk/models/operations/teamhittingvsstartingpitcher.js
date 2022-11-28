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
export var TeamHittingVsStartingPitcherFormatEnum;
(function (TeamHittingVsStartingPitcherFormatEnum) {
    TeamHittingVsStartingPitcherFormatEnum["Xml"] = "XML";
    TeamHittingVsStartingPitcherFormatEnum["Json"] = "JSON";
})(TeamHittingVsStartingPitcherFormatEnum || (TeamHittingVsStartingPitcherFormatEnum = {}));
var TeamHittingVsStartingPitcherPathParams = /** @class */ (function (_super) {
    __extends(TeamHittingVsStartingPitcherPathParams, _super);
    function TeamHittingVsStartingPitcherPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=format" }),
        __metadata("design:type", String)
    ], TeamHittingVsStartingPitcherPathParams.prototype, "format", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=gameid" }),
        __metadata("design:type", String)
    ], TeamHittingVsStartingPitcherPathParams.prototype, "gameid", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=team" }),
        __metadata("design:type", String)
    ], TeamHittingVsStartingPitcherPathParams.prototype, "team", void 0);
    return TeamHittingVsStartingPitcherPathParams;
}(SpeakeasyBase));
export { TeamHittingVsStartingPitcherPathParams };
var TeamHittingVsStartingPitcherRequest = /** @class */ (function (_super) {
    __extends(TeamHittingVsStartingPitcherRequest, _super);
    function TeamHittingVsStartingPitcherRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", TeamHittingVsStartingPitcherPathParams)
    ], TeamHittingVsStartingPitcherRequest.prototype, "pathParams", void 0);
    return TeamHittingVsStartingPitcherRequest;
}(SpeakeasyBase));
export { TeamHittingVsStartingPitcherRequest };
var TeamHittingVsStartingPitcherResponse = /** @class */ (function (_super) {
    __extends(TeamHittingVsStartingPitcherResponse, _super);
    function TeamHittingVsStartingPitcherResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], TeamHittingVsStartingPitcherResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Array)
    ], TeamHittingVsStartingPitcherResponse.prototype, "playerSeasons", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], TeamHittingVsStartingPitcherResponse.prototype, "statusCode", void 0);
    return TeamHittingVsStartingPitcherResponse;
}(SpeakeasyBase));
export { TeamHittingVsStartingPitcherResponse };
