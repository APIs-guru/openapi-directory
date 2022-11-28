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
export var SeasonTeamsFormatEnum;
(function (SeasonTeamsFormatEnum) {
    SeasonTeamsFormatEnum["Xml"] = "xml";
    SeasonTeamsFormatEnum["Json"] = "json";
})(SeasonTeamsFormatEnum || (SeasonTeamsFormatEnum = {}));
var SeasonTeamsPathParams = /** @class */ (function (_super) {
    __extends(SeasonTeamsPathParams, _super);
    function SeasonTeamsPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=format" }),
        __metadata("design:type", String)
    ], SeasonTeamsPathParams.prototype, "format", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=seasonid" }),
        __metadata("design:type", String)
    ], SeasonTeamsPathParams.prototype, "seasonid", void 0);
    return SeasonTeamsPathParams;
}(SpeakeasyBase));
export { SeasonTeamsPathParams };
var SeasonTeamsRequest = /** @class */ (function (_super) {
    __extends(SeasonTeamsRequest, _super);
    function SeasonTeamsRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", SeasonTeamsPathParams)
    ], SeasonTeamsRequest.prototype, "pathParams", void 0);
    return SeasonTeamsRequest;
}(SpeakeasyBase));
export { SeasonTeamsRequest };
var SeasonTeamsResponse = /** @class */ (function (_super) {
    __extends(SeasonTeamsResponse, _super);
    function SeasonTeamsResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], SeasonTeamsResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Array)
    ], SeasonTeamsResponse.prototype, "seasonTeams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], SeasonTeamsResponse.prototype, "statusCode", void 0);
    return SeasonTeamsResponse;
}(SpeakeasyBase));
export { SeasonTeamsResponse };
