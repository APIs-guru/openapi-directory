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
export var ScoresByWeekSimulationFormatEnum;
(function (ScoresByWeekSimulationFormatEnum) {
    ScoresByWeekSimulationFormatEnum["Xml"] = "XML";
    ScoresByWeekSimulationFormatEnum["Json"] = "JSON";
})(ScoresByWeekSimulationFormatEnum || (ScoresByWeekSimulationFormatEnum = {}));
var ScoresByWeekSimulationPathParams = /** @class */ (function (_super) {
    __extends(ScoresByWeekSimulationPathParams, _super);
    function ScoresByWeekSimulationPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=format" }),
        __metadata("design:type", String)
    ], ScoresByWeekSimulationPathParams.prototype, "format", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=numberofplays" }),
        __metadata("design:type", String)
    ], ScoresByWeekSimulationPathParams.prototype, "numberofplays", void 0);
    return ScoresByWeekSimulationPathParams;
}(SpeakeasyBase));
export { ScoresByWeekSimulationPathParams };
var ScoresByWeekSimulationRequest = /** @class */ (function (_super) {
    __extends(ScoresByWeekSimulationRequest, _super);
    function ScoresByWeekSimulationRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ScoresByWeekSimulationPathParams)
    ], ScoresByWeekSimulationRequest.prototype, "pathParams", void 0);
    return ScoresByWeekSimulationRequest;
}(SpeakeasyBase));
export { ScoresByWeekSimulationRequest };
var ScoresByWeekSimulationResponse = /** @class */ (function (_super) {
    __extends(ScoresByWeekSimulationResponse, _super);
    function ScoresByWeekSimulationResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], ScoresByWeekSimulationResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Array)
    ], ScoresByWeekSimulationResponse.prototype, "scores", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], ScoresByWeekSimulationResponse.prototype, "statusCode", void 0);
    return ScoresByWeekSimulationResponse;
}(SpeakeasyBase));
export { ScoresByWeekSimulationResponse };
