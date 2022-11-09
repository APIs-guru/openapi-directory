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
export var PlayByPlaySimulationFormatEnum;
(function (PlayByPlaySimulationFormatEnum) {
    PlayByPlaySimulationFormatEnum["Xml"] = "XML";
    PlayByPlaySimulationFormatEnum["Json"] = "JSON";
})(PlayByPlaySimulationFormatEnum || (PlayByPlaySimulationFormatEnum = {}));
var PlayByPlaySimulationPathParams = /** @class */ (function (_super) {
    __extends(PlayByPlaySimulationPathParams, _super);
    function PlayByPlaySimulationPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=format" }),
        __metadata("design:type", String)
    ], PlayByPlaySimulationPathParams.prototype, "format", void 0);
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=numberofplays" }),
        __metadata("design:type", String)
    ], PlayByPlaySimulationPathParams.prototype, "numberofplays", void 0);
    return PlayByPlaySimulationPathParams;
}(SpeakeasyBase));
export { PlayByPlaySimulationPathParams };
var PlayByPlaySimulationRequest = /** @class */ (function (_super) {
    __extends(PlayByPlaySimulationRequest, _super);
    function PlayByPlaySimulationRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", PlayByPlaySimulationPathParams)
    ], PlayByPlaySimulationRequest.prototype, "pathParams", void 0);
    return PlayByPlaySimulationRequest;
}(SpeakeasyBase));
export { PlayByPlaySimulationRequest };
var PlayByPlaySimulationResponse = /** @class */ (function (_super) {
    __extends(PlayByPlaySimulationResponse, _super);
    function PlayByPlaySimulationResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], PlayByPlaySimulationResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Array)
    ], PlayByPlaySimulationResponse.prototype, "playByPlays", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], PlayByPlaySimulationResponse.prototype, "statusCode", void 0);
    return PlayByPlaySimulationResponse;
}(SpeakeasyBase));
export { PlayByPlaySimulationResponse };
